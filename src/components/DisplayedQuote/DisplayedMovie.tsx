import React from "react";
import useQueryGetMovies from "./use-query-get-movies";

export interface Movie {
  node: {
    slug: string;
    hallName: string;
  };
}

export const DisplayedMovie: React.FC = (): React.ReactElement => {
  const [data, error, isLoading] = useQueryGetMovies();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>Could not load your feed. Try again</div>;
  }

  return (
    <div>
      <div>Movies</div>
      <ul>
        {data.allCinemaDetails.edges.map(movie => (
          <li key={movie.node.slug}>{movie.node.hallName}</li>
        ))}
      </ul>
    </div>
  );
};
