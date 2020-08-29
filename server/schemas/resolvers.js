const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../config/auth");
const { createWriteStream } = require("fs");

const resolvers = {
  Query: {
    self: async (parent, args, context) => {
      if (context.user) {
        console.log(context.user);
        const userData = await User.findById({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      return new AuthenticationError("Need to be logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const { username, email, password } = args;
      console.log(username, email, password);
      const user = await User.create({ username, email, password });

      const token = await signToken({
        username: user.username,
        email: user.email,
        _id: user._id,
      });
      return { token, user };
      // return "hello";
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) throw new AuthenticationError("incorrect creds");

      const checkPass = await user.comparePassword(password);

      if (!checkPass) throw new AuthenticationError("incorrect creds");

      const token = signToken({
        username: user.username,
        email: user.email,
        _id: user._id,
      });

      return { token, user };
    },
    saveImage: async (parent, { image }, context) => {
      // if (context.user) {
      console.log(context);
      const { createReadStream, filename } = await image;

      await new Promise((res) => {
        createReadStream()
          .pipe(createWriteStream(path.join(__dirname, "../images", filename)))
          .on("close", res);
      });

      const updated = await User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $push: { images: filename },
        },
        { new: true }
      );

      return updated;
      // }
      // throw new AuthenticationError("You need to be logged in for that.");
    },
    removeImage: async (parent, { id }, context) => {
      if (context.user) {
        const updated = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $pull: { saveImage: id },
          },
          { new: true }
        );

        return updated;
      }
      throw new AuthenticationError("You need to be logged in for that.");
    },
  },
};

module.exports = resolvers;
