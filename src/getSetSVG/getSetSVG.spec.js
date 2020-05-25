import { expect } from "chai";
import { $$getSVG, $$setSVG } from "./getSetSVG.index.js";

describe(`$$setSVG + $$getSVG`, () => {
  it(`$$setSVG will change return value of $$getSVG`, () => {
    const $svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    $$setSVG($svg);

    expect($$getSVG()).to.equal($svg);
  });
});

describe(`$$setSVG`, () => {
  it(`return the 1st argument`, () => {
    const $svg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    expect($$setSVG($svg)).to.equal($svg);
  });
});

describe(`$$getSVG`, () => {
  beforeEach(() => {
    $$setSVG(undefined);
  });

  it(`will return SVGSVGElement`, () => {
    const $svg = $$getSVG();

    expect($svg.nodeName.toLowerCase()).to.equal("svg");
  });

  it(`will always return same value`, () => {
    const $svg1 = $$getSVG();
    const $svg2 = $$getSVG();

    expect($svg1).to.equal($svg2);
  });
});
