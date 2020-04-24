import React from "react";
import light from "./theme/light";
import dark from "./theme/dark";
import { Global } from "@emotion/core";
import { ThemeProvider, useColorMode, CSSReset } from "@chakra-ui/core";
import globalStyles from "./index.styles";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/home/Home";

function App() {
  const { colorMode } = useColorMode();
  return (
    <ThemeProvider theme={colorMode === "dark" ? dark : light}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Switch>
        <Route path="/app" component={Home} />
        <Redirect from="/" to="/app" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
