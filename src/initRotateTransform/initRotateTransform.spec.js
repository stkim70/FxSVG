import { expect } from "chai";
import {
  makeRandomInt,
  makeRandomNumber,
  makeRandomTransformString,
} from "../../test/utils/index.js";
import { $$el } from "../el/el.index.js";
import { $$getBaseTransformList } from "../getBaseTransformList/getBaseTransformList.index.js";
import { $$isRotateSVGTransform } from "../isRotateSVGTransform/isRotateSVGTransform.index.js";
import { $$isTranslateSVGTransform } from "../isTranslateSVGTransform/isTranslateSVGTransform.index.js";
import { $$initRotateTransform } from "./initRotateTransform.index.js";

describe(`$$initRotateTransform`, function () {
  let $el;

  beforeEach(function () {
    const transform_list = [...Array(50)]
      .map(makeRandomTransformString)
      .map((t) => (Math.round(Math.random()) ? t : null))
      .filter((t) => t !== null);
    const transform_str = transform_list.length ? transform_list.join(" ") : "";
    $el = $$el()(`
      <rect
        x="${makeRandomNumber()}"
        y="${makeRandomNumber()}"
        width="${Math.abs(makeRandomNumber())}"
        height="${Math.abs(makeRandomNumber())}"
        ${transform_str ? `transform="${transform_str}"` : ""}
      >
      </rect> 
    `);
  });

  it(`The length of the element's SVGTransformList will be increased by 3.`, function () {
    const { numberOfItems: before_n } = $$getBaseTransformList($el);

    $$initRotateTransform()($el, {
      angle: makeRandomNumber(),
      cx: makeRandomNumber(),
      cy: makeRandomNumber(),
    });

    const { numberOfItems: after_n } = $$getBaseTransformList($el);
    expect(after_n).to.equal(before_n + 3);
  });

  it(`The first SVGTransform will be a translate SVGTransform with cx, cy.`, function () {
    const cx = makeRandomInt();
    const cy = makeRandomInt();

    $$initRotateTransform()($el, { angle: makeRandomNumber(), cx, cy });

    const t = $$getBaseTransformList($el).getItem(0);
    expect($$isTranslateSVGTransform(t)).to.be.true;
    expect(t.matrix.e).to.equal(cx);
    expect(t.matrix.f).to.equal(cy);
  });

  it(`The second SVGTransform will be a rotate SVGTransform with angle, cx = 0, cy = 0.`, function () {
    const angle = makeRandomInt();

    $$initRotateTransform()($el, {
      angle,
      cx: makeRandomNumber(),
      cy: makeRandomNumber(),
    });

    const t = $$getBaseTransformList($el).getItem(1);
    expect($$isRotateSVGTransform(t)).to.be.true;
    expect(t.angle).to.equal(angle);
    expect(t.matrix.e).to.equal(0);
    expect(t.matrix.f).to.equal(0);
  });

  it(`The third SVGTransform will be a translate SVGTransform with -cx, -cy.`, function () {
    const cx = makeRandomInt();
    const cy = makeRandomInt();

    $$initRotateTransform()($el, { angle: makeRandomNumber(), cx, cy });

    const t = $$getBaseTransformList($el).getItem(2);
    expect($$isTranslateSVGTransform(t)).to.be.true;
    expect(t.matrix.e).to.equal(-cx);
    expect(t.matrix.f).to.equal(-cy);
  });

  it(`The function do nothing on other SVGTransforms of the element.`, function () {
    const before_ts = [...$$getBaseTransformList($el)];

    $$initRotateTransform()($el, {
      angle: makeRandomNumber(),
      cx: makeRandomNumber(),
      cy: makeRandomNumber(),
    });

    const after_ts = [...$$getBaseTransformList($el)].slice(3);
    expect(after_ts.length).to.equal(before_ts.length);
    for (let i = 0; i < after_ts.length; i++) {
      const before_t = before_ts[i];
      const after_t = after_ts[i];
      expect(after_t).to.deep.equal(before_t);
    }
  });
});