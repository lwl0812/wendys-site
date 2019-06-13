---
_title: 前端知识体系
description: 前端
sidebar: auto
displayAllHeaders: true
tag: 前端
public: true
---

# 前端知识体系

## 基础知识

- 算法
- 数据结构
- 面向对象思想
- 设计模式

## 非直接相关的基础

- 编码
- 编译原理
- 计算机组成
- 网络

## 标准

### - ECMA-262 标准

规定 JS、ES6 的基本词法、语法。枚举几个比较重要的：

  - 原型和原型链
  - 作用域和闭包
  - 异步
  - ES6 的新增语法（模块化、Class、Promise等）

### - W3C 标准
  - HTML
  - CSS
  - Javascript Web API（DOM 操作，BOM 操作，事件绑定，ajax等）
  - HTTP 协议
  - 存储
  - websocket
  - JSON、XML
  - 2D 3D

## 开发环境

- 代码版本管理工具-- git
- IDE -- vscode、vim
- 脚手架 -- vue-cli
- 构建工具 -- webpack
- 本地服务、mock
- debug -- chrome 开发者工具、抓包、代理
- 部署测试
- 单元测试

## 运行环境

### - 标准浏览器
  - 加载和渲染过程
  - 性能优化
  - 安全问题 -- XSS 和 CSRF
  - 浏览器兼容性
  - 响应式布局

### - 非标准浏览器

在特定 App 的 webview 中，如在微信页面或 hybrid 形式。

  - hybrid 如何发布和更新
  - js-bridge 的使用和原理

## 框架和库

### vue、react 

MVC（MVVM）是设计模式的一种组合形式，所以和设计相关。  
组件化和面向对象是同一思想，是面向对象在前端 view 层应用的体现。

所以这两种框架属于基础知识的一部分。

### jquery

最常用的是 dom 操作和 ajax，都是 JavaScript Web API 的内容。

### underscore、lodash

是基础函数库，只和最基础的语法相关，所以是 ECMA 标准的扩充。

