import React from "react";
import { Box, Button, Image, useColorMode } from "@chakra-ui/core";
import { StyledHeader, HeaderLogo } from "./Header.styles";
import Tabs from "../../tabs/Tabs";
import Logo from "../../../Logo.svg";
import LogoDark from "../../../LogoDark.svg";

const Header = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { currPath } = props;
  const tabsRoutes = [
    {
      label: "Color Tools",
      index: 0,
      path: currPath,
      ref: React.createRef(),
    },
    {
      label: "Font Scale",
      index: 1,
      path: `${currPath}/fontscale`,
      ref: React.createRef(),
    },
    {
      label: "PX Converter",
      index: 2,
      path: `${currPath}/conversor`,
      ref: React.createRef(),
    },
  ];

  return (
    <StyledHeader
      {...props}
      pl={["1rem", "1rem", "6rem", "8rem"]}
      pr={["1rem", "1rem", "6rem", "8rem"]}
    >
      <HeaderLogo>
        <Image src={colorMode === "dark" ? LogoDark : Logo} />
      </HeaderLogo>
      <Tabs routes={tabsRoutes} />
      <Box mt={{ base: 4, md: 0 }}>
        <Button onClick={toggleColorMode} bg="transparent" border="1px">
          {colorMode === "dark" ? "Light" : "Dark"} mode
        </Button>
      </Box>
    </StyledHeader>
  );
};

export default Header;
