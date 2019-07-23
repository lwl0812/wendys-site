---
_title: lodash 源码阅读-copySymbols
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-copySymbols

```js
import copyObject from './copyObject.js'
import getSymbols from './getSymbols.js'

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  // getSymbols 筛选出可枚举的 symbol 属性，返回一个数组
  // 将 存在于 source 中的 getSymbols(source) symbol 属性拷贝到 object 上
  return copyObject(source, getSymbols(source), object)
}

export default copySymbols
```