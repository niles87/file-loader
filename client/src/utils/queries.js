import gql from "graphql-tag";

export const QUERY_SELF = gql`
  {
    user {
      _id
      username
      email
      imageList
      images {
        title
        path
      }
    }
  }
`;
