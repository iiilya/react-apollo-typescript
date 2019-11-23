import gql from "graphql-tag";

export default gql`
    fragment MovieProperties on Movie {
        slug
        hallName
    }
`;
