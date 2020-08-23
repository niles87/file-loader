import gql from "graphql-tag";

export const QUERY_SELF = gql`
    self {
        _id
        username
        email
        imageList
        images {
            title
            path
        }
    }
`;
