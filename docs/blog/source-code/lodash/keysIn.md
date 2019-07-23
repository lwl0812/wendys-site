---
_title: lodash 源码阅读-keysIn
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-keysIn

```js
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
// 创建一个数组，包含对象自身的以及继承的可枚举属性名
function keysIn(object) {
  const result = []
  for (const key in object) {
    result.push(key)
  }
  return result
}

export default keysIn
```