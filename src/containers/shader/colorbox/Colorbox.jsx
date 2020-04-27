import React from "react";
import { Box } from "@chakra-ui/core";

const Colorbox = (props) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      width={120}
      height={90}
      borderRadius={5}
      {...props}
    />
  );
};

export default Colorbox;
