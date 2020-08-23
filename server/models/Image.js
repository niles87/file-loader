const { Schema } = require("mongoose");

const ImageSchema = new Schema({
  title: {
    type: String,
  },
  path: {
    type: String,
  },
});

module.exports = ImageSchema;
