---
_title: lodash 源码阅读-isPrototype
description: lodash
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: false
---

# lodash 源码阅读-isPrototype

```js
/** Used for built-in method references. */
const objectProto = Object.prototype

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  const Ctor = value && value.constructor
  const proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto

  return value === proto
}

export default isPrototype
```

```js
function Person() {}
Person.prototype.name = 'Mike';
Person.prototype.age = '24';
Person.prototype.sayName = function() {
  console.log(this.name);
};
const person1 = new Person();

const objectProto = Object.prototype;

function isPrototype(value) {
  const Ctor = value && value.constructor; // 获取 value 的构造函数
  console.log(Ctor);
  const proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto; // Ctor.prototype -- value 的构造函数的原型对象
  console.log(proto);
  return value === proto; // value 等于 value 的原型对象 或 对象的原型对象，即 value 是原型对象
}
console.log(isPrototype(person1)); // false
// ƒ Person() {}
// {name: "Mike", age: "24", sayName: ƒ, constructor: ƒ}
console.log(isPrototype(person1.__proto__)); // true
// ƒ Person() {}
// {name: "Mike", age: "24", sayName: ƒ, constructor: ƒ}
```

说明： ```person1.__proto__.constructor``` 指向 person1 的构造函数，person1 的构造函数的 prototype 指向 Prototype, ```person1.__proto__``` 也指向 Prototype，所以 ```person1.__proto__ === person1.__proto__.constructor.prototype```