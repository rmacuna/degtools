import React, { useState, useEffect } from "react";
import { getColor, generateShadesMonochrome } from "../../services/shader";
import { Input, Flex, Stack } from "@chakra-ui/core";
import { DEFAULT_COLOR_SHADE } from "../../utils/constants";
import Colorbox from "./colorbox/Colorbox";
import Colorpick from "./colorpick/Colorpick";

const Shader = (props) => {
  const [color, setColor] = useState(DEFAULT_COLOR_SHADE);
  const [inputColor, setInputColor] = useState(DEFAULT_COLOR_SHADE);
  const [shades, setColorShades] = useState([]);

  const handleChange = (event) => {
    setInputColor(event.target.value);
    const colorObject = getColor(event.target.value);
    if (colorObject.isValid()) {
      setColor(colorObject.toHexString());
      setColorShades(generateShadesMonochrome(inputColor));
    } else {
      setColor(DEFAULT_COLOR_SHADE);
      setColorShades(generateShadesMonochrome(DEFAULT_COLOR_SHADE));
    }
  };

  const handleBlur = () => {
    if (inputColor.trim().length === 0) {
      setInputColor(DEFAULT_COLOR_SHADE);
    }
  };

  useEffect(() => {
    setColorShades(generateShadesMonochrome(inputColor));
  }, [color, inputColor]);

  return (
    <Flex pl="8rem" pr="8rem" pt={4} flexDirection="column">
      <Stack isInline spacing={4}>
        <Colorbox bg={color} />
        <Input value={inputColor} onChange={handleChange} onBlur={handleBlur} />
      </Stack>

      <Stack isInline spacing={6}>
        {shades.map((color, index) => {
          return <Colorpick key={index} bg={color} />;
        })}
      </Stack>
    </Flex>
  );
};

export default Shader;
