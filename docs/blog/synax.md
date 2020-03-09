---
title: 语法参考手册
---

 > 因为所有的写作的支持来源于`markdown`的强力驱动，所以有必要这里专门写下一些重要的`markdown`的语法，以便需要的时候参考。

阅读导航目录
<!-- <TOC/> -->
[[toc]]

## vscode配置

### 1. vscode添加图床插件

该插件会自动将你需要的图片上传到SM.MS服务器，完全免费，无需任何配置，安装插件即可使用。我就用的这个默认服务器。

**粘贴图片**
PicGo支持两种方式在vscode上粘贴图片：

- ctrl+alt+u：上传剪贴板中的图片到服务器。
- ctrl+alt+e：打开文件浏览器选择图片上传。
因为我们知道，vscode是文本编辑器，如果你直接在vscode中使用ctrl+v粘贴图片，是无法粘贴成功的。正确的姿势是，我们使用截图工具，如微信的截图工具，截图成功后会保存在剪贴板中，这时按ctrl+alt+u就开始上传图片了。或者，按ctrl+alt+e，选择一张图片上传即可。

OK，强大的插件使得vscode支持上传图片，可以更加愉快的使用markdown写作了，一次写作，处处粘贴，舒爽。


## 加入不蒜子计量

参考文章：
https://www.cnblogs.com/daoyi/p/jing-tai-wang-zhan-shi-yong-bu-suan-zi-xian-shi-li.html

## 表格

如何生成一个markdown的表格

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


## 如何更改github仓库的语言属性

  当创建github项目的时候，github本身会根据提交文件的数量来自动推断工程的开发语言，有时这种推断结果会与实际情况不太相符。比如上传一个java的web工程，如果在工程里存在大量的html、javascript和css文件的话，该工程属性会被设置为javascript或html。

  我们需要在工程根目录下手动增加一个.gitattributes文件来修正工程的语言属性，内容如下：

``` sh
*.js linguist-language=Java
*.css linguist-language=Java
*.html linguist-language=Java

```



## 删除线

~~删除我吧~~

```
~~这是一段删除的文字~~
```
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