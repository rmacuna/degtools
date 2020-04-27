import React, { useLayoutEffect, useRef, useEffect } from "react";
import { Box, Flex, Button, Image, useColorMode } from "@chakra-ui/core";
import {
  StyledHeader,
  HeaderLogo,
  Tabs,
  MenuNav,
  Underline,
} from "./Header.styles";

import { NavLink } from "react-router-dom";
import Logo from "../../../Logo.svg";
import LogoDark from "../../../LogoDark.svg";
// const MenuItem = ({ children, url, value }) => (
//   <MenuNav style={{ color: url === value ? "blue" : "black" }} to={url}>
//     {children}
//   </MenuNav>
// );

const Header = (props) => {
  const [show] = React.useState(false);
  const underline = useRef();
  const [tabActive, setTabActive] = React.useState(0);
  const { colorMode, toggleColorMode } = useColorMode();
  const { currPath } = props;

  const images = [
    {
      filename: "assets/Logo.svg",
    },
    {
      filename: "assets/LogoDark.svg",
    },
  ];
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
  const handleSetTabActive = (index) => {
    setTabActive(index);
  };

  useLayoutEffect(() => {
    underline.current.style.width =
      tabsRoutes[tabActive].ref.current.clientWidth + "px";
    let toMove = 0;
    for (let index = 0; index < tabActive; index++) {
      toMove += tabsRoutes[index].ref.current.clientWidth;
    }
    underline.current.style.left = toMove + "px";
  }, [tabsRoutes, tabActive]);

  // useEffect(() => {
  //   images.forEach((image) => {
  //     const img = new Image();
  //     img.src = image.filename;
  //   });
  // }, []);

  return (
    <StyledHeader
      {...props}
      pl={["1rem", "1rem", "6rem", "8rem"]}
      pr={["1rem", "1rem", "6rem", "8rem"]}
    >
      <HeaderLogo>
        <Image src={colorMode === "dark" ? LogoDark : Logo} />
      </HeaderLogo>
      <Tabs
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        isInline
      >
        {/* Make this a component to re-use it */}
        <Flex align="center" height="100%" position="relative">
          <Underline ref={underline} />
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
