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
    link: String
  }

  type Auth {
    id: ID!
    user: User
  }

  input imageInput {
    title: String
    link: String
  }

  type Query {
    self: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveImage(imageData: imageInput): User
    removeImage(id: ID!): User
  }
`;

module.exports = typeDefs;
