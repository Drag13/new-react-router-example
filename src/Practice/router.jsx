import {
  createHashRouter,
  NavLink,
  Outlet,
  redirect,
  RouterProvider,
  useLoaderData,
  Navigate,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import { fetchAllFacts } from "./fetchAllFacts";
import "./facts.css";

const Layout = () => {
  const { state } = useNavigation();
  return (
    <main>
      <Outlet></Outlet>
      <footer>Test</footer>
    </main>
  );
};

const ROUTE_PATH = {
  list: () => "/",
  fact: (id) => (id ? `/fact/${id}` : "/fact/:id"),
};

const Facts = () => {
  // const facts = useLoaderData();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const order = searchParams.get("q") ?? "date";
  // const setOrdering = (e) => {
  //   const newOrdering = e.target.value;
  //   searchParams.set("q", newOrdering);
  //   setSearchParams(searchParams, { replace: false });
  // };

  const [searchParams, setSearchParams] = useSearchParams();
  const order = searchParams.get("q") ?? "date";
  const setOrdering = (e) => {
    const newOrdering = e.target.value;
    searchParams.set("q", newOrdering);
    setSearchParams(searchParams, { replace: false });
  };

  const search = () => {};

  return (
    <article>
      <input type="text" value={order} onChange={setOrdering} />
      <button onClick={search}>search</button>
    </article>
  );
};

const Guarded = ({ children }) => {
  const authorized = false;

  if (!authorized) {
    return <Navigate to={"/"}></Navigate>;
  }

  return children;
};

const router = createHashRouter([
  {
    path: ROUTE_PATH.list(),
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Facts />,
        loader: fetchAllFacts,
        shouldRevalidate: ({
          currentParams,
          currentUrl,
          nextParams,
          nextUrl,
        }) => {
          const isParamsSame = deepEquals(currentParams, nextParams);

          const isUrlSameExceptQuery =
            currentUrl.origin === nextUrl.origin &&
            console.log(isUrlSameExceptQuery);

          return !isParamsSame || !isUrlSameExceptQuery;
        },
      },
      {
        element: <Guarded>FACT</Guarded>,
        path: ROUTE_PATH.fact(),
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router}></RouterProvider>;
const deepEquals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
