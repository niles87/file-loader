const { Schema } = require("mongoose");

const ImageSchema = new Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
});

module.exports = ImageSchema;
