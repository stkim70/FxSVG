# \$\$createSVGRect

- [source](./createSVGRect.index.js)
- [test](./createSVGRect.spec.js)

`SVGRect` 객체를 생성합니다.
주어진 `x`, `y`, `width`, `height` 값을 설정합니다.
주어지지 않은 값은 `0` 으로 설정합니다.

입력한 `x`, `y`, `width`, `height` 값과 실제 적용된 값은 정확도 차이가 발생할 수 있습니다.

```javascript
console.log($$createSVGRect()());
// SVGRect {x: 0, y: 0, width: 0, height: 0}
```

```javascript
console.log($$createSVGRect({ x: 10 })());
// SVGRect {x: 10, y: 0, width: 0, height: 0}
```

```javascript
console.log($$createSVGRect({ width: 100 })());
// SVGRect {x: 0, y: 0, width: 100, height: 0}
```

```javascript
console.log($$createSVGRect({ x: 10, y: 10, width: 100, height: 100 })());
// SVGRect {x: 10, y: 10, width: 100, height: 100}
```

```javascript
const $svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
console.log($$createSVGRect({ x: 20, y: 20, width: 200, height: 200 })($svg));
// SVGRect {x: 20, y: 20, width: 200, height: 200}
```
