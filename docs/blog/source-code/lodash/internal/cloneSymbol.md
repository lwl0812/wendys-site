---
_title: lodash 源码阅读-cloneSymbol
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-cloneSymbol

```js
/** Used to convert symbols to primitives and strings. */
const symbolValueOf = Symbol.prototype.valueOf

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return Object(symbolValueOf.call(symbol))
}

export default cloneSymbol
```