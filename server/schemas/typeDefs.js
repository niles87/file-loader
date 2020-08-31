const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
    imageList: Int
    images: [Image]
  }

  type Image {
    id: ID!
    title: String
    path: String
    imgId: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    self: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveImage(image: Upload): User
    removeImage(id: ID!, imgId: String): User
  }
`;

module.exports = typeDefs;
