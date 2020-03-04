---
title: 如何提高国内访问Github的速度
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 为什么github下载速度这么慢？
github的cdn被墙屏蔽了

## 如何提高github的下载速度？
手动把cdn和ip地址绑定。

### 第一步：获取github的global.ssl.fastly地址
访问：[http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo](http://github.global.ssl.fastly.net.ipaddress.com/#ipinfo)
获取cdn和ip域名：
![无法显示](http://p1.pstatp.com/large/pgc-image/04bff14df4a24b27a3c560790365fa23)

得到：199.232.69.194 http://github.global.ssl.fastly.net

### 第二步：获取github.com地址
访问：https://github.com.ipaddress.com/#ipinfo
获取cdn和ip：
![无法显示图片](http://p1.pstatp.com/large/pgc-image/a746a0ec88294a668cd6446437021310)

得到：192.30.253.113 http://github.com

### 第三步：修改host文件
windows系统：

1、修改C:\Windows\System32\drivers\etc\hosts文件的权限，指定可写入：

右击->hosts->属性->安全->编辑->点击Users->在Users的权限“写入”后面打勾。如下：
![无法显示](http://p3.pstatp.com/large/pgc-image/67de012d4d5d45b4bc52873c0f3199f8)

然后点击确定。

2、右击->hosts->打开方式->选定记事本（或者你喜欢的编辑器）->在末尾处添加以下内容：
```
199.232.5.194 http://github.global.ssl.fastly.net

140.82.113.4 https://github.com
```