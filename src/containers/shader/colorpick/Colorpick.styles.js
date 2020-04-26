import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/core";

export const ColorPickCard = styled(Flex)`
  width: 4.75rem;
  height: 7.5rem;
  border-radius: 2.563rem;
  box-shadow: ${(props) =>
    props.isDark
      ? "0 3px 4px rgba(14,14,14,80%)"
      : "0 3px 4px rgba(0,0,0,15%)"};

  cursor: pointer;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.2);
  }
`;
