import { head } from "fxjs2";
import { $$els } from "../els/els.index.js";
import { $$getSVG } from "../getSetSVG/getSetSVG.index.js";

export const $$el = (svg) => ($svg = $$getSVG()) => head($$els(svg)($svg));
