---
_title: lodash 源码阅读-getSymbols
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-getSymbols

```js
/** Built-in value references. */
// 返回一个布尔值，表示属性是否可枚举
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable

/* Built-in method references for those with the same name as other `lodash` methods. */
// 返回给定对象自身所有 Symbol 属性的数组
const nativeGetSymbols = Object.getOwnPropertySymbols

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
function getSymbols (object) {
  if (object == null) {
    return []
  }
  object = Object(object)
  return nativeGetSymbols(object).filter((symbol) => propertyIsEnumerable.call(object, symbol))
}

export default getSymbols
```

Object.getOwnPropertySymbols 会返回对象自身所有（不含继承） Symbol 属性（不管可不可以枚举）的数组。

```js
const o = {
  [Symbol('a')]: 'a',
};
const o2 = Object.create(o, {
  [Symbol('c')]: {
    value: 'c',
  },
});
o2[Symbol('b')] = 'b';
const getOwnPropertySymbols = Object.getOwnPropertySymbols;
const result = getOwnPropertySymbols(o2);
console.log(result); // [Symbol(c), Symbol(b)]
```