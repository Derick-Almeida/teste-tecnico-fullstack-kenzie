import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

export const Routes = () => {
  const [autehenticated, setAutehenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@agenda:token") as string);

    if (token) {
      setAutehenticated(true);
    }
  }, [autehenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home autehenticated={autehenticated} setAutehenticated={setAutehenticated} />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard autehenticated={autehenticated} />
      </Route>
      <Route path="*">
        <p>Not found</p>
      </Route>
    </Switch>
  );
};
