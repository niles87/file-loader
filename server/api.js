const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { existsSync, mkdirSync } = require("fs");

const { resolvers, typeDefs } = require("./schemas");
const { authMiddleWare } = require("./config/auth");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

existsSync(path.join(__dirname, "../images")) ||
  mkdirSync(path.join(__dirname, "../images"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleWare,
});

server.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`api running on http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}${server.graphqlPath}`);
  });
});
