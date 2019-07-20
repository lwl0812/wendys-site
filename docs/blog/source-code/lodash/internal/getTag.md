---
_title: lodash 源码阅读-getTag
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-getTag

## 源码

```js
const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)  
}

export default getTag
```

返回 toString 之后的值。

```js
null == undefined; // true
```

```js
const { toString } = Object.prototype;
const number = Number(1);
const o = {};
toString.call(number); // "[object Number]"
toString.call(o); // "[object Object]"
```