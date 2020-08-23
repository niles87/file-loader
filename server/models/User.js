const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const ImageSchema = require("./Image");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must be valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    images: [ImageSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const salt = 12;
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.virtual("imageList").get(function () {
  return this.images.length;
});

const User = model("User", UserSchema);

module.exports = User;
