---
_title: 开发工具类汇总
description: 日常工具类使用汇总，nrm、nginx、git...
sidebar: auto
displayAllHeaders: true
tag: 工具
public: true
---

# 开发工具类汇总

-----

## nvm

### [安装](https://github.com/nvm-sh/nvm)

```bash
# 终端执行下面命令
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

```bash
# 进入根目录
cd ~
# 打开 .bash_profile。 如果没有这个文件，可通过 touch .bash_profile 新建一个
open .bash_profile
```

复制下面代码，粘贴到 .bash_profile 中。

```bash
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

保存。

```bash
# 终端执行下面命令
command -v nvm
```

如果输出 nvm 信息，说明安装成功。

如果没输出，复制下面代码，粘贴到 .bash_profile 文件到最下面。

```bash
source ~/.bashrc
```

再次执行 command -v nvm 命令。

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

## FileZilla

管理服务器上文件