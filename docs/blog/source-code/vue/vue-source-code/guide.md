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
