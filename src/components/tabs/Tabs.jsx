import React from "react";
import { StyledTab, Underline, MenuNav } from "./Tabs.styles";
import { Flex, Text } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const { routes, show } = props;
  const [tabActive, setTabActive] = React.useState(0);
  const underline = React.useRef();

  React.useLayoutEffect(() => {
    underline.current.style.width =
      routes[tabActive].ref.current.clientWidth + "px";
    let toMove = 0;
    for (let index = 0; index < tabActive; index++) {
      toMove += routes[index].ref.current.clientWidth;
    }
    underline.current.style.left = toMove + "px";
  }, [routes, tabActive]);

  return (
    <StyledTab width={{ sm: "full", md: "auto" }} isInline {...props}>
      <Flex align="center" height="100%" position="relative">
        <Underline ref={underline} />
        {routes.map((elem, index) => {
          return (
            <MenuNav
              as={NavLink}
              to={elem.path}
              key={elem.index}
              ref={elem.ref}
              onClick={() => setTabActive(index)}
              active={elem.index === tabActive}
            >
              {elem.label}
            </MenuNav>
          );
        })}
      </Flex>
    </StyledTab>
  );
};

Tabs.propTypes = {
  routes: PropTypes.array.isRequired,
  show: PropTypes.bool,
};

export default Tabs;
