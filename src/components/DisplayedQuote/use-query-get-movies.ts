import { useQuery } from "@apollo/react-hooks";
import { ApolloError } from "apollo-client";
import { Movie } from "./DisplayedMovie";
import queries from "../../graphql/queries"

interface Data {
  allCinemaDetails: {
    edges: Movie[];
  };
}

export default (): [Data, ApolloError, boolean] => {
  const { data, error, loading: isLoading } = useQuery<Data>(queries.movies.getMovie);

  return [data, error, isLoading];
};
