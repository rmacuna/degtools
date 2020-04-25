import tiny from "tinycolor2";

/**
 *  Takes a color in whatever format and return an object with specs
 * @param {*} string Color
 */
export const getColor = (color) => {
  const objectColor = tiny(color);
  return objectColor;
};
