import React, { useLayoutEffect, useRef } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Image,
  useColorMode,
  List,
} from "@chakra-ui/core";
import {
  StyledHeader,
  HeaderLogo,
  Tabs,
  MenuNav,
  Underline,
} from "./Header.styles";

import { NavLink } from "react-router-dom";
// const MenuItem = ({ children, url, value }) => (
//   <MenuNav style={{ color: url === value ? "blue" : "black" }} to={url}>
//     {children}
//   </MenuNav>
// );

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const [sizeToMove, setSizeToMove] = React.useState(0);
  const [tabActive, setTabActive] = React.useState(0);
  const underline = useRef();
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
      path: `${currPath}/converter`,
      ref: React.createRef(),
    },
  ];

  const handleSetTabActive = (index) => {
    setTabActive(index);
    if (index === 0) {
      setSizeToMove(0);
    } else {
      setSizeToMove(tabsRoutes[tabActive].ref.current.offsetWidth + "px");
    }
  };
  useLayoutEffect(() => {
    underline.current.style.width =
      tabsRoutes[tabActive].ref.current.offsetWidth + "px";
  }, [tabActive, tabsRoutes]);

  return (
    <StyledHeader
      {...props}
      pl={["1rem", "1rem", "6rem", "8rem"]}
      pr={["1rem", "1rem", "6rem", "8rem"]}
    >
      <HeaderLogo>
        <Image
          alt="logo"
          src={colorMode === "dark" ? "assets/LogoDark.svg" : "assets/Logo.svg"}
        />
      </HeaderLogo>
      <Tabs
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        isInline
      >
        <Flex align="center" height="100%" position="relative">
          <Underline ref={underline} left={sizeToMove} />
          {tabsRoutes.map((elem, index) => {
            return (
              <MenuNav
                as={NavLink}
                to={elem.path}
                key={elem.index}
                ref={elem.ref}
                onClick={() => handleSetTabActive(index)}
                active={elem.index === tabActive}
              >
                {elem.label}
              </MenuNav>
            );
          })}
        </Flex>
      </Tabs>

      <Box mt={{ base: 4, md: 0 }}>
        <Button onClick={toggleColorMode} bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
    </StyledHeader>
  );
};

export default Header;
