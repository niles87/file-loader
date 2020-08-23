const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.MY_SECRET;
const experation = "2h";

module.exports = {
  authMiddleWare: function ({ req }) {
    let token = req.body.token || req.params.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = split(" ").pop().trim();
    }
    if (!token) return req;

    try {
      const { data } = jwt.verify(token, secret, { maxAge: experation });
      req.user = data;
    } catch (error) {
      console.log(error);
    }
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    jwt.sign({ data: payload }, secret, { expiresIn: experation });
  },
};
