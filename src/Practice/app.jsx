import { useEffect, useState } from "react";
import { Facts } from "./facts";
import { Fact } from "./fact";
import { fetchAllFacts } from "./fetchAllFacts";
import { fetchFactById } from "./fetchFactById";

export const App = () => {
  const [route, setRoute] = useState({
    path: "/",
    data: null,
    status: "not-started",
    params: {},
  });

  const { status, path } = route;

  useEffect(() => {
    setRoute((r) => ({ ...r, status: "fetching" }));
    if (path === "/") {
      fetchAllFacts().then((response) => {
        setRoute({
          path: "/",
          data: response,
          status: "success",
          params: {},
        });
      });
    }

    if (path === "/fact") {
      fetchFactById(route.params.id).then((response) => {
        setRoute({
          path: "/fact",
          data: response,
          status: "success",
          params: { id: route.params.id },
        });
      });
    }
  }, [path]);

  const navigate = (id) => {
    setRoute({ data: null, path: "/fact", params: { id }, status: "fetching" });
  };

  if (status === "fetching" || status === "not-started") {
    return <>Please wait, I am still loading</>;
  }

  if (path === "/") {
    return <Facts facts={route.data} navigate={navigate} />;
  }

  if (path === "/fact") {
    return <Fact fact={route.data} />;
  }
};
