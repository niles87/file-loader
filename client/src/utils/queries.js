import gql from 'graphql-tag';

export const QUERY_SELF = gql`
  {
    self {
      id
      username
      email
      imageList
      images {
        id
        title
        path
        imgId
      }
    }
  }
`;
