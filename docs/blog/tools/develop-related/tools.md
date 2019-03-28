---
_title: 工具类汇总
description: 日常工具类使用汇总，nrm、nginx、git...
sidebar: auto
displayAllHeaders: true
tag: 工具
---

# 工具类汇总

-----

## nrm

### 安装

```bash
npm -g install nrm
```

```bash
nrm ls // 列出所有的源
```

默认列出所有的源:

```bash
npm ---- https://registry.npmjs.org/
cnpm --- http://r.cnpmjs.org/
taobao - https://registry.npm.taobao.org/
nj ----- https://registry.nodejitsu.com/
rednpm - http://registry.mirror.cqupt.edu.cn/
npmMirror  https://skimdb.npmjs.com/registry/
edunpm - http://registry.enpmjs.org/
```

#### 使用

```bash
nrm use taobao
```

#### 添加

```bash
nrm add qihoo http://registry.npm.360.org
```

## nginx

(mac 上安装、配置、启动)

### 安装

```bash
sudo brew install nginx
// 或 
// brew install nginx
```

### 启动

```bash
sudo brew services start nginx
// 或
// brew services start nginx
```

### 重启

```bash
sudo brew services restart nginx
// 或
// brew services restart nginx
```

### 停止

```bash
sudo brew services stop nginx
// 或
// brew services stop nginx
```

### 查看

```bash
cat usr/local/etc/nginx/nginx.conf
```

### 编辑

```bash
vi usr/local/etc/nginx/nginx.conf
```