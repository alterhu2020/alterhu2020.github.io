---
title: 语法参考手册
---

 > 因为所有的写作的支持来源于`markdown`的强力驱动，所以有必要这里专门写下一些重要的`markdown`的语法，以便需要的时候参考。

阅读导航目录
<TOC/>

## 生成文档目录

```
[[toc]]
// or
<TOC/>
```
## 注释

- vuepress注释
```
<!-- 这是注释-->
```

- 单行注释

```
// 单行注释
var str: String
```
- 多行注释

```
/*
  多行注释的内容
*/
```
## 静态图片的引用
 
 - 官方的vuepress提供的静态文件可以放在public文件夹下面，这里的图片是直接复制到生成目录下面的，可以这样使用。例如有一个图片文件路径类似 ./vuepress/public/img/test.png,那么可以这样使用： 
 ``` markdown   

  ![图片描述](/img/test.png)

 ```
- 如果觉得操作麻烦，可以将对应的图片放在你的`md`文件目录下面，例如：
```
|-- video
    |-- black-hawk-down.md
    |-- game-of-the-thrones.md
    |-- index.md
    |-- img
        |-- gameofthrones.png


```
那么在markdown文件`game-of-the-thrones.md`中的静态图片可以这样使用： 
```
  ![图片描述](./img/test.png)

```
## 文件目录树生成

> 【参考】(https://blog.csdn.net/luyu13141314/article/details/83149198)(https://blog.csdn.net/luyu13141314/article/details/83149198)

```
1.安装: npm install mddir -g

2.当前目录产生目录树: mddir

3.绝对路径文件目录树: mddir /absolute/path

4.相对路径文件目录树: mddir ~/Documents/whatever.

The md file gets generated in your working directory.

Currently ignores node_modules, and .git folders.
```

## 警告注意语法

::: warning 这是警告标题
这是警告的内容部分
:::

## `Emoji`语法

直接复制 [参考] [emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet) 中的对应表情，或者也可以采用markdown语法来写表情，例如开心 :happy:

## 主题配置

- [参考][官方默认主题配置](https://v1.vuepress.vuejs.org/zh/theme/)
- [参考] [openhab doc主题](https://github.com/openhab/openhab-docs)