import tinycolor from "tinycolor2";

/**
 *  Takes a color in whatever format and return an object with specs
 * @param {*} string Color
 */
export const getColor = (color) => {
  const objectColor = tinycolor(color);
  return objectColor;
};

export const generateShadesMonochrome = (color) => {
  const shades = [];
  let hsl = tinycolor(color).toHsl();
  for (var i = 9.5; i >= 0.5; i -= 1) {
    hsl.l = 0.1 * i;
    shades.push(tinycolor(hsl).toRgbString());
  }
  return shades;
};
