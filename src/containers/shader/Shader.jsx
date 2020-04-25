import React, { useState, useEffect } from "react";
import { getColor } from "../../services/shader";
import { Input, Flex, Stack, Box } from "@chakra-ui/core";
import { DEFAULT_COLOR_SHADE } from "../../utils/constants";
import Colorbox from "./colorbox/Colorbox";

const Shader = (props) => {
  const [color, setColor] = useState(DEFAULT_COLOR_SHADE);
  const [inputColor, setInputColor] = useState(DEFAULT_COLOR_SHADE);
  const [colorObject, setColorObject] = useState({});

  const handleChange = (event) => {
    setInputColor(event.target.value);
    const colorObject = getColor(event.target.value);
    setColorObject(colorObject);

    if (colorObject.isValid()) {
      setColor(colorObject.toHexString());
    } else {
      setColor(DEFAULT_COLOR_SHADE);
    }
  };

  const handleBlur = () => {
    if (inputColor.trim().length === 0) {
      setInputColor(DEFAULT_COLOR_SHADE);
    }
  };

  useEffect(() => {
    setColorObject(getColor(DEFAULT_COLOR_SHADE));
  }, []);

  return (
    <Flex pl="8rem" pr="8rem" pt={4}>
      <Stack isInline spacing={4}>
        <Colorbox bg={color} />
        <Input value={inputColor} onChange={handleChange} onBlur={handleBlur} />
      </Stack>
    </Flex>
  );
};

export default Shader;
