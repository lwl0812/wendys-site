---
_title: lodash 源码阅读-getSymbolsIn
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-getSymbolsIn

```js
import getSymbols from './getSymbols.js'

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
function getSymbolsIn (object) {
  const result = []
  while (object) {
    result.push(...getSymbols(object))
    object = Object.getPrototypeOf(Object(object))
  }
  return result
}

export default getSymbolsIn
```

getOwnPropertySymbols 和 getSymbolsIn 区别

```js
const o = {
  [Symbol('a')]: 'a',
};

const sd = Symbol('d');

Object.defineProperty(o, sd, {
  value: 'd',
});

console.log(o); // {Symbol(a): "a", Symbol(d): "d"} 其中 Symbol(d) 不可枚举

const o2 = Object.create(o, {
  [Symbol('b')]: {
    value: 'b',
    enumerable: true,
    configurable: true,
    writable: true,
  },
  [Symbol('c')]: {
    value: 'c',
  },
  age: {
    value: 18,
  },
  name: {
    value: 'o2',
    enumerable: true,
    configurable: true,
    writable: true,
  },
});

// 返回自身的所有(枚举和不可枚举，不含继承的) symbol
const getOwnPropertySymbols = Object.getOwnPropertySymbols;

// 返回自身的可枚举的 symbol
function getSymbols(obj) {
  const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
  return getOwnPropertySymbols(obj).filter(symbol => propertyIsEnumerable.call(obj, symbol));
}
// 返回自身和继承的可枚举 symbol
function getSymbolsIn(obj) {
  const result = [];
  while (obj) {
    result.push(...getSymbols(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return result;
}

console.log(getSymbolsIn(o2)); // [Symbol(b), Symbol(a)]

console.log(getOwnPropertySymbols(o2)); // [Symbol(b), Symbol(c)]
```