---
_title: lodash 源码阅读-clone
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-clone

## 源码

```js
import baseClone from './.internal/baseClone.js'

/** Used to compose bitmasks for cloning. */
const CLONE_SYMBOLS_FLAG = 4

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. Object inheritance is preserved. An empty object is
 * returned for uncloneable values such as error objects, functions, DOM nodes,
 * and WeakMaps.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see cloneDeep
 * @example
 *
 * const objects = [{ 'a': 1 }, { 'b': 2 }]
 *
 * const shallow = clone(objects)
 * console.log(shallow[0] === objects[0])
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG)
}

export default clone
```

补充知识：

## The structured clone algorithm

结构化克隆算法

结构化克隆算法是由 HTML5 规范规定的用于拷贝复杂 JavaScript 对象的一种算法。

在通过 postmessage() 在 Workers 之间传送数据时或者在 indexDB 存储对象时，内部调用。

它通过递归输入对象创建克隆，同时保留一份之前访问过的引用的 map 映射，避免无限遍历循环。

### 不适用结构化克隆算法的

- Error 和 Function 对象不能通过结构化克隆算法复制。否则会抛出 ```DATA_CLONE_ERR``` 的错误。
- 克隆 DOM 节点也会抛出类似 ```DATA_CLONE_ERR``` 这样的错误。
- 对象的某些参数不会被保留：
  - 正则 RegExp 的 lastIndex 字段不会被保留
  - 属性描述器(property descriptors)、setters、getters（以及类元数据特征）不会被复制。比如一个对象通过属性描述器标记为 只读（read-only），复制后会变成可读可写（read-write），因为这是默认设置。
  - 原型链不会被复制

### 支持的类型

对象类型                | 备注
----------------       | --------
所有的原始类型           | 不包含 symbols
布尔对象(Boolean)       | 
String 对象             |
Date                   |
RegExp                 | lastIndex 字段不会保留
Blob                   |
File                   |
FileList               |
ArrayBuffer            |
ArrayBufferView        |
ImageBitmap            |
ImageData              |
Array                  |
Object                 | 仅包括纯对象(使用 {} 或 new Object 创建的对象)
Map                    |
Set                    |

## baseClone

[baseClone](./internal/baseClone.md)
