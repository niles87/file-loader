import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
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
        id
        username
      }
    }
  }
`;

export const SAVE_IMG = gql`
  mutation saveImage($image: Upload) {
    saveImage(image: $image) {
      id
      username
      email
      images {
        id
        title
        path
        imgId
      }
    }
  }
`;

export const REMOVE_IMG = gql`
  mutation removeImage($id: ID!, $imgId: String) {
    removeImage(id: $id, imgId: $imgId) {
      id
      username
      email
      images {
        id
        title
        path
        imgId
      }
    }
  }
`;
