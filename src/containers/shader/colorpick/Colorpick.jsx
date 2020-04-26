import React from "react";
import { useColorMode } from "@chakra-ui/core";
import { ColorPickCard } from "./Colorpick.styles";
const Colorpick = (props) => {
  const { colorMode } = useColorMode();

  return (
    <ColorPickCard isDark={colorMode === "dark"} {...props}></ColorPickCard>
  );
};

export default Colorpick;
