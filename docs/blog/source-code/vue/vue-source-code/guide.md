---
_title: Vue 源码揭秘笔记
description: Vue
sidebar: auto
displayAllHeaders: true
tag: JavaScript,源码阅读
public: true
---

# Vue 源码揭秘笔记

## 1. 准备

### 源码构建

rollup

构建执行的脚本：

```
scripts/build.js
```

拿到构建的配置:

```
scripts/config.js // 包含不同版本的配置
```

### Vue 入口

![image.png](https://s2.ax1x.com/2019/08/18/mQZ4Z8.png)

Vue 是一个类，在原型上挂载了很多方法。

通过 InitGlobalAPI 初始化全局方法。

## 2. 数据驱动

### new Vue 的时候做了什么

```js
function Vue(options) {
    // ...
    this._init(options); // <-- 执行了 _init 函数
}
initMixin(Vue); // ./init.js 中定义了 initMixin，执行这一步时，定义了_init 函数
```

```js
// ./init.js
function initMixin(Vue) {
    Vue.prototype._init = function() {
        const vm = this;
        // ...
        // 在 mounted 时，是怎么拿到定义的 data 数据的
        initState(vm); // <-- 执行了 initState 方法
    }
}
```

```js
// ./state.js
function initState(vm) {
    // ...
    const opts = vm.$options
    if (otps.data) {
        initData(vm); // 在初始化 state 时，会初始化 data
    }
}

function initData(vm) {
    let data = vm.$options.data;
    // 获取定义的 data，可能是 {}，也可能是 function
    data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
    // ...
    // 下面是与定义的 props, methods比较， 校验是否有同名的属性
    // ...
}
```

### Vue 实例挂载的实现

mount

```js
import Vue from './runtime/index';
// ./platforms/web/entry-runtime-with-compiler.js
const mount = Vue.prototype.$mount;
// 重新定义这个方法，因为runtime版本是没有这个方法的，runtime-with-compiler 才有
Vue.prototype.$mount = function() {
    
}
```

```js
// ./runtime/index.js
// public mount method 定义了公共的 $mount 方法
Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined
  return mountComponent(this, el, hydrating)
}
```