# \$\$initTranslateTransform

- [source](./initTranslateTransform.index.js)
- [test](./initTranslateTransform.spec.js)

svg 엘리먼트에 `SVGTransform.SVG_TRANSFORM_TRANSLATE` 타입의 `SVGTransform` 을 추가합니다.
`SVGTransform` 은 항상 `transform.baseVal` 에 해당하는 `SVGTransformList` 의 전달한 `index` 에 추가됩니다.
`SVGTransformList` 는 역순으로 적용됩니다.

초기 `tx`, `ty` 값을 설정할 수 있으며 설정하지 않는 경우 모두 `0` 으로 초기화됩니다.
`SVGTrnsform`을 삽입할 `index`를 설정할 수 있으며 설정하지 않는 경우 `0` 으로 초기화됩니다.

```javascript
const str = `
<rect
  x="10"
  y="20"
  width="100"
  height="200"
>
</rect>
`;
const $el = $$el(str)();

console.log($$getBaseTransformList($el));
// SVGTransformList {length: 0, numberOfItems: 0}

$$initTranslateTransform({ tx: 10, ty: 20 })($el);

console.log($$getBaseTransformList($el));
// SVGTransformList {0: SVGTransform, length: 1, numberOfItems: 1}
// 0: SVGTransform {type: 2, matrix: SVGMatrix, angle: 0}
//   matrix: SVGMatrix {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```

```javascript
const str = `
<rect
  x="10"
  y="20"
  width="100"
  height="200"
  transform="scale(2, 4)"
>
</rect>
`;
const $el = $$el(str)();

console.log($$getBaseTransformList($el));
// SVGTransformList {0: SVGTransform, length: 1, numberOfItems: 1}
// 0: SVGTransform {type: 3, matrix: SVGMatrix, angle: 0}
//   matrix: SVGMatrix {a: 2, b: 0, c: 0, d: 4, e: 0, f: 0}

$$initTranslateTransform({ tx: 10, ty: 20, index: 1 })($el);
// index 를 1 로 설정했기 때문에
// SVGTransformList 의 1 인덱스 위치에 SVGTransform 삽입

console.log($$getBaseTransformList($el));
// SVGTransformList {0: SVGTransform, 1: SVGTransform, length: 2, numberOfItems: 2}
// 0: SVGTransform {type: 3, matrix: SVGMatrix, angle: 0}
//   matrix: SVGMatrix {a: 2, b: 0, c: 0, d: 4, e: 0, f: 0}
// 1: SVGTransform {type: 2, matrix: SVGMatrix, angle: 0}
//   matrix: SVGMatrix {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```
