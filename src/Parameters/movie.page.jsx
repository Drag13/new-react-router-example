import { useParams } from "react-router-dom";

export const Movie = () => {
  const { movieId } = useParams();
  return (
    <>
      <h1>Movie page</h1>
      <p>Movie Id: {movieId}</p>
    </>
  );
};
