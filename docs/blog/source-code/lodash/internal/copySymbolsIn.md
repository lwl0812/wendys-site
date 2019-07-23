---
_title: lodash 源码阅读-copySymbolsIn
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-copySymbolsIn

```js
import copyObject from './copyObject.js'
import getSymbolsIn from './getSymbolsIn.js'

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object)
}

export default copySymbolsIn
```