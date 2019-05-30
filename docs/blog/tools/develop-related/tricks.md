---
_title: 小技巧&疑难杂症汇总
description: 小技巧汇总...
sidebar: auto
displayAllHeaders: true
tag: 工具
public: true
---

# 小技巧&疑难杂症汇总

## Mac 终端命令行用 Vscode 打开文件夹。

```bash
vim ~/.bash_profile
export PATH=/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin:$PATH
#保存退出
source ~/.bash_profile
code . #当前目录就被打开了。
```

## VSCODE source control provider not registered

安装了 SVG Viewer 的插件！！！！把这个插件 disabled 掉就好。