---
title: Vultr客户端操作使用说明
---



<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 服务器地址更新

- ### 2020年4月18日

```
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIiIsDQogICJhZGQiOiAic3R1ZHkucGluZ2Jvb2sudG9wIiwNCiAgInBvcnQiOiAiNTY3ODkiLA0KICAiaWQiOiAiZGY1MDg2NzItN2ZkOS0xMWVhLThlOWMtNTYwMDAyYjAyMDU2IiwNCiAgImFpZCI6ICIxNiIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAic3R1ZHkucGluZ2Jvb2sudG9wIiwNCiAgInBhdGgiOiAiLzBwVUdZbnpoLyIsDQogICJ0bHMiOiAidGxzIg0KfQ==
```


## 注意事项

1. 请不要在外网发布任何违法不当言论，虽然我们自己搭建的服务器数据传输是加密的。但是现在有很多小粉红和五毛党混迹与各大国外社交媒体，他可以根据你的个人社交媒体相关信息来调查你的个人信息。进而可能会锁定你。

2. 因为强大的防火墙每天会巡视所有的网络信息，所以不可避免随时IP被封。如果遇到无法连接的问题，请告诉我来进行处理切换。

## 1. 下载客户端

以下的翻墙客户端是针对**Windows**操作系统的客户端（WindowXP,Windows 7,Windows 10)，如果需要其他平台的客户端，可以参考如下进行下载相关平台客户端,也可直接谷歌搜索"v2ray客户端"查看符合你要求的客户端。

- Mac苹果电脑客户端: [V2rayU](https://github.com/yanue/V2rayU)
- 安卓手机客户端: [V2rayNG](https://github.com/2dust/v2rayNG/releases)
- 苹果手机客户端: 目前苹果App Store管理太严，以前的基本不能使用已经下架。如果真的特别需要使用,请电脑端搜索苹果手机客户端。


### 1.1 百度网盘下载

点击此处下载客户端，[V2rayN客户端百度网盘下载，提取码: 9mop](https://pan.baidu.com/s/13K1OkNSba-27yxlRm75jiA)

### 1.2 GitHub下载

1. 访问V2rayN的地址： <https://github.com/2dust/v2rayN/releases>
2. 查看最新版本，当前显示的最新版本是: 3.14,然后点击"v2rayN-Core.zip"文件下载即可

## 2. 客户端配置

1. 将以上下载的zip压缩包文件解压到任意目录下面，例如 **D:\v2rayN-Core**
2. 进入目录： **D:\v2rayN-Core**,点击: **v2rayN.exe** 文件，如果没有看到V2rayN的界面，查看任务栏的隐藏图标，点击V2rayN打开软件界面；
图标类似于小飞机，如下：
![图标](https://s1.ax1x.com/2020/04/15/JCGQsO.png)

3. 点击图标打开软件界面，如下截图：
![主界面](https://s1.ax1x.com/2020/04/15/JCG7k9.png)

4. 复制如下服务器配置信息（Ctrl+C复制)：

```
vmess://eyJ2IjogIjIiLCAicHMiOiAiIiwgImFkZCI6ICI0NS43Ny41MS4yMjMiLCAicG9ydCI6IDQxMDA4LCAiYWlkIjogMTYsICJ0eXBlIjogImR0bHMiLCAibmV0IjogImtjcCIsICJwYXRoIjogIiIsICJob3N0IjogIiIsICJpZCI6ICJlZjAwZmFlYy03ZWUwLTExZWEtODY1Ny01NjAwMDJhZjY2NzMiLCAidGxzIjogIm5vbmUifQ==

```
5. 点击工具栏的“服务器”图标，选择“从剪切板导入批量URL”,如下截图：
![选择界面](https://s1.ax1x.com/2020/04/15/JCJlpq.png)

6.完成上面的操作后可以看到主界面的列表里面新增了该条服务器配置信息，分别点击工具栏中的“重启服务”，然后再点击“检查更新”，在下拉框中选择“PAC”,如下截图：
![选择PAC](https://s1.ax1x.com/2020/04/15/JCYaqS.png)
这个操作会从服务器拉去配置信息，根据你的浏览网页访问地址信息判断访问的是国内的防火墙的网站还是国外的网站，国外的网站将会直接走服务器访问，国内的不走服务器访问。

7. 如果上面的操作没有任何问题会在控制台看到信息“PAC更新成功”，如下截图：
![pac更新成功](https://s1.ax1x.com/2020/04/15/JCtPQP.png)

8. 以上的配置完成后基本可以上网，你还需要配置一下其他信息，右键刚才的小飞机图标会弹出V2rayN的功能列表.如下截图：
![小飞机功能](https://s1.ax1x.com/2020/04/15/JCthOf.png)

9. 点击上面的小飞机功能列表，点击“Http代理”,选择“开启PAC,并自动配置系统代理(PAC模式）”，如下截图：

![pac设置](https://s1.ax1x.com/2020/04/15/JCN8jP.png)

这里提下有关翻墙代理的几个概念：

1. 全局模式，表示当前的机器所有的联网都走服务器翻墙代理，不管是上网还是QQ,还是上国内的网站；
2. PAC模式，表示Proxy Auto Config,代理会自动智能根据当前的访问ip判断访问的是国内网站还是国外网站，国外的会走我们的服务器代理，国内的不会走代理翻墙。

一般情况下我们选择设置为 “PAC模式”即可。这样国内的网站访问不会走代理也不会耗流量；

10. 在上面的小飞机功能列表上点击“服务器”，确认选择的服务是“Vmess-45***223:41008”类似这样的服务器，我们的服务器IP是：45.77.51.223 ,如下截图：
![vmess配置](https://s1.ax1x.com/2020/04/15/JCaLpd.png)


## 3. 额外配置

1. 可以在“V2rayN"的主界面，点击工具栏的“参数设置”, 勾选“开启UDP”,"开启流量监测"，如下截图：
![简单配置](https://s1.ax1x.com/2020/04/15/JCwaq0.png)

2. 可以在“v2rayN"的主界面，设置开机自动启动“V2rayN"客户端，以后只需要开机，不需要任意设置，既可翻墙。如下截图：

![开机启动](https://s1.ax1x.com/2020/04/15/JC0VoT.png)


## 4. 其他问题

### 基础连接已经关闭: 发送时发生错误。

1. 因为core源在github上,所以更新是需要开启http代理，能够访问Github. 粘贴如下配置信息到Windows的`hosts`配置文件中(文件位于： "C:\Windows\System32\drivers\etc\hosts"),直接复制如下代码到文件末尾:

```
# github
140.82.112.3 github.com
199.232.69.194 github.global.ssl.fastly.net
140.82.114.10 codeload.github.com
```

2. 可能端口已经被拦截

需要更换服务器端的端口号，可能端口号已经被封。

