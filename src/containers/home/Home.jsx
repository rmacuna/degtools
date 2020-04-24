import React from "react";
import Header from "../../components/layout/header/Header";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Shader from "../shader/Shader";
import Conversor from "../conversor/Conversor";
import TypeScale from "../typescale/TypeScale";

const Home = (props) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Header currPath={path} />
      <Switch>
        <Route exact path={`${url}`} component={Shader} />
        <Route path={`${url}/fontscale`} component={TypeScale} />
        <Route path={`${url}/conversor`} component={Conversor} />
      </Switch>
    </>
  );
};

export default Home;
