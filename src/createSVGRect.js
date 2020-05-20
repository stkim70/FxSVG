import { $$getSVG } from "./getSetSVG.js";

export const $$createSVGRect = ($svg = $$getSVG()) => ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
} = {}) => {
  const rect = $svg.createSVGRect();
  rect.x = x;
  rect.y = y;
  rect.width = width;
  rect.height = height;
  return rect;
};
