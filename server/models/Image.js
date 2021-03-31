const { Schema } = require('mongoose');

const ImageSchema = new Schema({
  title: {
    type: String,
  },
  path: {
    type: String,
  },
  imgId: {
    type: String,
  },
});

module.exports = ImageSchema;
