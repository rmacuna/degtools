import React, { useState, useEffect } from "react";
import { getColor, generateShadesMonochrome } from "../../services/shader";
import { Input, Flex, Stack, Text, Heading } from "@chakra-ui/core";
import { DEFAULT_COLOR_SHADE } from "../../utils/constants";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Colorbox from "./colorbox/Colorbox";
import Colorpick from "./colorpick/Colorpick";
import { Col, Row } from "react-flexbox-grid";
import ContrastCheck from "../contrast-check/ContrastCheck";
import ColorShadesViewer from "./color-shades-viewer/ColorShadesViewer";

const Shader = (props) => {
  const [color, setColor] = useState(DEFAULT_COLOR_SHADE);
  const [inputColor, setInputColor] = useState(DEFAULT_COLOR_SHADE);
  const [shades, setColorShades] = useState([]);
  const { path, url } = useRouteMatch();

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

  const subRoutes = [
    {
      path: path,
      label: "Color shades",
      ref: React.createRef(),
      index: 0,
    },
    {
      path: path,
      label: "Contrast Checker",
      ref: React.createRef(),
      index: 1,
    },
  ];

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
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Stack spacing={0} mb={5}>
            <Text fontWeight={600} fontSize={25} color="brand.500">
              Built your
            </Text>
            <Heading fontWeight={600} fontSize={48}>
              Color Shades
            </Heading>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <Stack isInline spacing={4}>
            <Colorbox bg={color} />
            <Input
              value={inputColor}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Stack>
        </Col>
      </Row>

      {/* Here is where tab component should be. */}
      <Switch>
        <Route exact path={`${url}`} component={ColorShadesViewer} />
        <Route path={`${url}/colorShadesViewer`} component={ContrastCheck} />
      </Switch>
    </Flex>
  );
};

export default Shader;
