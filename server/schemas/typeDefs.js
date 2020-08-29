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
  }

  type Auth {
    token: ID
    user: User
  }

  # input imageInput {
  #  title: String
  #  path: String
  # }

  type Query {
    self: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveImage(image: Upload): User
    removeImage(id: ID!): User
  }
`;

module.exports = typeDefs;
