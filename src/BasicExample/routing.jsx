import { createBrowserRouter } from "react-router-dom";
import { Index } from "./index.page";
import { Movies } from "./user.page";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
]);
