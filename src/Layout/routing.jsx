import { createBrowserRouter } from "react-router-dom";
import { Index } from "./index.page";
import { Layout } from "./layout";
import { MoviesPage } from "./movies.page";
import { ErrorPage } from "./error.page";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

// children: [
//   { index: true, element: <Index /> },
//   {
//     path: "/movies",
//     element: <UserPage />,
//   },
// ],

// errorElement: <ErrorPage />,
