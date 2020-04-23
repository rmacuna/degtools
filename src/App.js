import React from "react";
import light from './theme/light'
import dark from './theme/dark'
import {Global} from '@emotion/core'
import { ThemeProvider, useColorMode, CSSReset } from "@chakra-ui/core";
import globalStyles from "./index.styles";

function App() {
  const {colorMode} = useColorMode()
  return (
    <ThemeProvider theme={colorMode === 'dark' ? dark : light}>
      <CSSReset/> 
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
}

export default App;
