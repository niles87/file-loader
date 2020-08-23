import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_IMG = gql`
  mutation saveImage($image: Upload!) {
    saveImage(image: $image) {
      _id
      username
      email
      images {
        title
        path
      }
    }
  }
`;

export const REMOVE_IMG = gql`
  mutation removeImage($id: ID) {
    removeImage(id: $id) {
      _id
      username
      email
      images {
        title
        path
      }
    }
  }
`;
