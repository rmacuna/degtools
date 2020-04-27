import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/core";
import Colorpick from "../colorpick/Colorpick";

const ColorShadesViewer = () => {
  const [shades, setColorShades] = useState([]);
  return (
    <Stack isInline spacing={6}>
      {shades.map((color, index) => {
        return <Colorpick key={index} bg={color} />;
      })}
    </Stack>
  );
};

export default ColorShadesViewer;
