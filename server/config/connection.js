const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
});

module.exports = mongoose.connection;
