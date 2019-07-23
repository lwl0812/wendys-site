---
_title: lodash 源码阅读-initCloneObject
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-initCloneObject

[isPrototype](isPrototype.md)

```js
import isPrototype from './isPrototype.js'

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? Object.create(Object.getPrototypeOf(object))
    : {}
}

export default initCloneObject
```

如果 object 的构造器是一个函数，且它不是原型对象，那么以 object的原型 为原型创建一个对象，否则返回 {}