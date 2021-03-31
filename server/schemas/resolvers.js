const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../config/auth');
const { createWriteStream, unlink } = require('fs');
const path = require('path');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.config());

const resolvers = {
  Query: {
    self: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findById({ _id: context.user._id }).select(
          '-__v -password'
        );

        return userData;
      }

      return new AuthenticationError('Need to be logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const { username, email, password } = args;

      const user = await User.create({ username, email, password });

      const token = await signToken({
        username: user.username,
        email: user.email,
        _id: user._id,
      });
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) throw new AuthenticationError('incorrect creds');

      const checkPass = await user.comparePassword(password);

      if (!checkPass) throw new AuthenticationError('incorrect creds');

      const token = signToken({
        username: user.username,
        email: user.email,
        _id: user._id,
      });

      return { token, user };
    },
    saveImage: async (parent, { image }, context) => {
      if (context.user) {
        const { createReadStream, filename } = await image;

        await new Promise((res) => {
          createReadStream()
            .pipe(
              createWriteStream(path.join(__dirname, '../../images', filename))
            )
            .on('close', res);
        });

        const upload = await cloudinary.uploader.upload(
          `../images/${filename}`,
          (error, result) => {
            if (error) console.error(error);
            return result;
          }
        );

        const name = filename.slice(0, filename.indexOf('.'));

        const updated = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              images: {
                title: name,
                path: upload.url,
                imgId: upload.public_id,
              },
            },
          },
          { new: true }
        );

        const removeFile = await unlink(
          path.join(__dirname, '../../images', filename),
          (err) => {
            if (err) console.error(err);
            return;
          }
        );

        return updated;
      }
      throw new AuthenticationError('You need to be logged in for that.');
    },
    removeImage: async (parent, { id, imgId }, context) => {
      if (context.user) {
        const updated = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { images: { _id: id } },
          },
          { new: true }
        );

        const deleted = await cloudinary.uploader.destroy(
          imgId,
          (err, result) => {
            if (err) console.error(err);
            return result;
          }
        );

        return updated;
      }
      throw new AuthenticationError('You need to be logged in for that.');
    },
  },
};

module.exports = resolvers;
