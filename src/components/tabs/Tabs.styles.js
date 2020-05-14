import styled from "@emotion/styled";
import { Box, Stack } from "@chakra-ui/core";

export const Underline = styled(Box)`
  position: absolute;
  height: 3px;
  bottom: 0;
  z-index: 3;
  display: block;
  background: ${(props) => props.theme.colors.brand[500]};
  transition: 0.3s ease-in-out;
`;

export const StyledTab = styled(Stack)`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const MenuNav = styled(Text)`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes["sm"]};
  font-weight: 500;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${(props) =>
    props.active ? props.theme.colors.brand[500] : props.theme.colors.baseText};
`;
