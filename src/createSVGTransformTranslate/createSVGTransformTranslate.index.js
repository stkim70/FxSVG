import { $$createSVGTransform } from "../createSVGTransform/createSVGTransform.index.js";
import { $$getSVG } from "../getSetSVG/getSetSVG.index.js";

export const $$createSVGTransformTranslate = ($svg = $$getSVG()) => ({
  tx = 0,
  ty = 0,
} = {}) => {
  const transform = $$createSVGTransform($svg);
  transform.setTranslate(tx, ty);
  return transform;
};