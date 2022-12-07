import { useLoaderData, useParams, useNavigation } from "react-router-dom";

export const Movie = () => {
  const { movieId } = useParams();
  const { name, duration, id: mid } = useLoaderData();
  const { state } = useNavigation();

  return (
    <>
      {state === "loading" ? "I AM LOADING, PLEASE PATIENCE" : null}

      <h1>Movie page</h1>
      <p>Movie Id: {movieId}</p>
      <p>
        {mid}:{name}:{duration}
      </p>
    </>
  );
};
