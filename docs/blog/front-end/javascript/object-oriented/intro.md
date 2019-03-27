---
_title: 面向对象
description: 面向对象、类、对象、继承、封装、多态...
sidebar: auto
tag: JavaScript
---

# 面向对象

## 类

```js
// 类（模板）
class Person {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}
```

## 对象

```js
// 对象（实例）
let p = new Person('lwl')
console.log(p.getName())
```

```js
// 代码演示
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  eat () {
    console.log(`${this.name} eats something.`)
  }
  speak () {
    console.log(`My name is ${this.name}, ${this.age} years old.`)
  }
}

let zhang = new Person('Zhang', 20)
zhang.eat()
zhang.speak()

let wang = new Person('Wang', 21)
wang.eat()
wang.speak()
```

## 继承

面向对象三要素：

- 继承（子类继承父类）
- 封装（数据的权限和保密）
- 多态（同一接口不同实现）

```js
// 父类
class People {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  eat () {
    console.log(`${this.name} eats something.`)
  }
  speak () {
    console.log(`My name is ${this.name}, ${this.age} years old.`)
  }
}

// 子类继承父类
class Student extends People {
  constructor (name, age, number) {
    super(name, age)
    this.number = number
  }
  study () {
    console.log(`${this.name} is studying`)
  }
}

let studentA = new Student('A', 21, 'num1')
studentA.eat()
studentA.study()
console.log(studentA.number)

let studentB = new Student('B', 21, 'num1')
studentB.speak()
studentB.study()
console.log(studentB.number)
```

## 封装

面向对象三要素：

- 继承（子类继承父类）
- 封装（数据的权限和保密）
- 多态（同一接口不同实现）

封装：(es6 还不支持，可通过ts演示)

 - public
 - protected
 - private

封装好处：

 - 减少耦合，不该外露的不外露
 - 利于数据、接口的权限管理
 - 私有属性，ES6暂不支持，一般认为_开头的是私有属性

```js
// 代码演示
class People {
  name // 不写默认为public
  age
  // protected weight
  constructor (name, age) {
    this.name = name
    this.age = age
    this.weight = 120
  }
  eat () {
    console.log(`${this.name} eats something.`)
  }
  speak () {
    console.log(`My name is ${this.name}, ${this.age} years old.`)
  }
} 

class Student extends People {
  name
  age
  number
  // private girlfriend
  constructor (name, age, number) {
    super(name, age)
    this.number = number
    this.girlfriend = 'Lucy'
  }
  getWeight () {
    return this.weight
  }
  study () {
    console.log(`${this.name} is studying`)
  }
}
```

## 多态

面向对象三要素：

- 继承（子类继承父类）
- 封装（数据的权限和保密）
- 多态（同一接口不同实现）

多态(可了解下java的基本语法)：同一接口，不同实现

多态好处：

- 可保证子类的开放性和灵活性
- 面向接口编程

```js
// 代码演示
class People {
  constructor(name) {
    this.name = name
  }
  saySomething() {
    console.log(`My name is ${this.name}.`)
  }
}

class A extends People {
  constructor(name) {
    super(name)
  }
  saySomething() {
    console.log('I am A')
  }
}

class B extends People {
  constructor(name) {
    super(name)
  }
  saySomething() {
    console.log('I am B')
  }
}

const a = new A('a')
a.saySomething()

const b = new B('b')
b.saySomething()
```