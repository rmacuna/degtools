import styled from "@emotion/styled";
import { Flex, Stack, Box, Text } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled(Flex)`
  justify-content: "space-around";
  flex-wrap: wrap;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.appbar};
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.colors.secondary};
`;

export const MenuNav = styled(Text)`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes["sm"]};
  font-weight: 500;
  margin-right: 0.953rem;
  color: ${(props) =>
    props.active ? props.theme.colors.brand[500] : props.theme.colors.baseText};
`;

export const Underline = styled(Box)`
  position: absolute;
  height: 3px;
  bottom: 0;
  z-index: 3;
  display: block;
  background: ${(props) => props.theme.colors.brand[500]};
  transition: 0.3s ease-in-out;
`;

export const Tabs = styled(Stack)`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const HeaderLogo = styled(Flex)`
  align-items: center;
  margin-right: 0.625rem;
`;
