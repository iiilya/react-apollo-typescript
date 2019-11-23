import gql from "graphql-tag";

export default gql`
  query GetMovie {
    allCinemaDetails(before: "2017-10-04", after: "2010-01-01") {
      edges {
        node {
          slug
          hallName
        }
      }
    }
  }
`;
