const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    self: async (parent, args, context) => {
      if (context.user) {
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
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) throw new AuthenticationError("incorrect creds");

      const checkPass = await user.comparePassword(password);

      if (!checkPass) throw new AuthenticationError("incorrect creds");

      const token = signToken(user);

      return { token, user };
    },
    saveImage: async (parent, { imageData }, context) => {
      if (context.user) {
        const updated = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: { saveImage: imageData },
          },
          { new: true }
        );

        return updated;
      }
      throw new AuthenticationError("You need to be logged in for that.");
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
