import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { fetchMovie } from "./fetch-movie";
import { Layout } from "./layout";
import { Movie } from "./movie.request.page";
import { Movies } from "./movies";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "/movie/:movieId",
        element: <Movie />,
        loader: fetchMovie,
      },
    ],
  },
]);
