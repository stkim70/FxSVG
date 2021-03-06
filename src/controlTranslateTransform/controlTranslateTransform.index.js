import { $$appendTranslateTransform } from "../appendTranslateTransform/appendTranslateTransform.index.js";
import { $$getSVG } from "../getSetSVG/getSetSVG.index.js";
import { $$initTranslateTransform } from "../initTranslateTransform/initTranslateTransform.index.js";
import { $$mergeTranslateTransform } from "../mergeTranslateTransform/mergeTranslateTransform.index.js";
import { $$updateTranslateTransform } from "../updateTranslateTransform/updateTranslateTransform.index.js";

export const $$controlTranslateTransform = ({
  index = 0,
  tx,
  ty,
  x_name,
  y_name,
} = {}) => ($el, $svg = $$getSVG()) => {
  const transform = $$initTranslateTransform({ tx, ty, index })($el, $svg);

  const controller = {};
  controller.update = ({ tx, ty } = {}) => {
    $$updateTranslateTransform({ tx, ty })(transform);
    return controller;
  };
  controller.append = ({ tx, ty } = {}) => {
    $$appendTranslateTransform({ tx, ty })(transform);
    return controller;
  };
  controller.end = () => {
    if (x_name && y_name) {
      $$mergeTranslateTransform({ index, x_name, y_name })($el, $svg);
    }
    return $el;
  };

  return controller;
};
