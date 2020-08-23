const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { resolvers, typeDefs } = require("./schemas");
const authMiddleWare = require("./config/auth");
const db = require("./config/connection");

const app = express();
const PORT = 3001;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: authMiddleWare,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once("open", () => {
  console.log("connected to database");
  app.listen(PORT, () => {
    console.log(`api running on http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}${server.graphqlPath}`);
  });
});
