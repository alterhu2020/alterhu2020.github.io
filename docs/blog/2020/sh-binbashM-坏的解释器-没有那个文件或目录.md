---
title: /bin/bash^M: 坏的解释器: 没有那个文件或目录
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 问题

执行shell脚本是报错：/bin/bash^M: 坏的解释器: 没有那个文件或目录

是因为该文件在windows系统上打开过，关闭后其中的空格符号和Linux的不同，导致这个报错，我们可以通过sed命令与正则的配合将文件中的空格符号替换成linux的空格：

## 解决方案

执行如下命令即可:
```shell
sed -i 's/\r$//' bootstrap.sh
```