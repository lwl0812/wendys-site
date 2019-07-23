---
_title: lodash 源码阅读-cloneRegExp
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-cloneRegExp

```js
/** Used to match `RegExp` flags from their coerced string values. */
const reFlags = /\w*$/

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  // new RegExp(pattern[, flags]), flags 参数是一个 string，所以会存在隐式转换
  // reFlags.exec(regexp) 获取 regexp 的 flag
  // 比如 const exp = /a/gi;
  // console.log(reFlags.exec(exp)); // ["gi", index: 3, input: "/a/gi", groups: undefined]
  // 数组转为字符串会调用数组的 toString()，将每个元素转为字符串，用,连接
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp))
  result.lastIndex = regexp.lastIndex
  return result
}

export default cloneRegExp
```