---
_title: lodash 源码阅读-baseAssignValue
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-baseAssignValue

```js
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    })
  } else {
    object[key] = value
  }
}

export default baseAssignValue
```

```js
function baseAssignValue(object, key, value) {
  if (key === '__proto__') {
    console.log(key);
    Object.defineProperty(object, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    object[key] = value;
  }
}

const o = {
  [Symbol('a')]: 'a'
};

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

Object.defineProperty(o2, '__proto__', {
  enumerable: true,
  value: o2.__proto__,
});
console.log(o2);

const object = {};

for (let key in o2) {
  console.log(key, o2[key]);
  baseAssignValue(object, key, o2[key]);
}

console.log(object); // {name: "o2", __proto__: {…}}
console.log(object.__proto__); // {Symbol(a): "a"}
```