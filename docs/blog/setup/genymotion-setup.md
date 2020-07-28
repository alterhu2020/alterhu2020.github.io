---
title: 最新genymotion3资源下载及其配置
---
<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## genymotion介绍

genymotion破解版是一款为用户提供最稳定Android虚拟环境的手机模拟器，我们不仅可以通过Genymotion模拟器在电脑上操作安卓系统进行使用。同时还可以安装各种手机APP和手机游戏进行体验，这样你就可以通过电脑来玩各种手游，非常方便。

注意: **目前只有genymotion2.12.0的可以破解，其他的3.0版本的截至到目前2020年7月25日还是没有公开看到破解版的。就不要谷歌搜索相关的破解文件了。**https://www.ghpym.com/genymotion.html

下载附件中的压缩文件，先点击： genymotion-2.12.0.exe进行安装genymotion这个版本的是没有安装virtualbox的，你需要再单独安装virtualbox.安装完成后不要立即打开genymation. 然后复制文件genymotion2.x-patch.exe到genymotion的安装目录，双击该破解文件进行破解。

**该破解版可以安装android8.0，这个相对于国内哪些安卓模拟器还是5.0算是很了不起了。而且他启动更快，性能更好。**

## 安装虚拟设备很难下载

Genymotion ova下载的url地址为：http://dl.genymotion.com/dists/xxx/ova/xxxxxx,可复制下载地址到迅雷中下载，速度会快很多,其中xxx为虚拟设备对应的Android系统版本号,如4.2.2,7.0.0(4.3则xxx为4.3,5.0则xxx为5.0.0,8.0则xxx为8.0)，xxxxxx为ova的文件名，如:

（F:\genymotion）

http://dl.genymotion.com/dists/4.2.2/ova/genymotion_vbox86p_4.2_180130_203606.ova

http://dl.genymotion.com/dists/4.3/ova/genymotion_vbox86p_4.3_180130_212946.ova

http://dl.genymotion.com/dists/7.0.0/ova/genymotion_vbox86p_7.0_180216_000000.ova

此处提供一个github的资源目录对应的各个ova文件，找到合适的直接下载即可： <https://gist.github.com/runo280/e4be3e04c24b463b55ddf012c5cfbdc4>

然后将下载的ova文件复制到下方对应的各个系统的目录。 例如我的目录是: [C:\Users\Administrator\AppData\Local\Genymobile\Genymotion\ova](C:\Users\Administrator\AppData\Local\Genymobile\Genymotion\ova)

1. Windows系统复制这些ova到`C:\Users\xxx\AppData\Local\Genymobile\Genymotion\ova`
2. Mac OS对应的目录为`/User/xxx/.Genymobile/Genymotion/ova`
3. Ubuntu对应的目录为`/home/xxx/.Genymobile/Genymotion/ova`

其中xxx为本地计算机的用户名，如果出现联机下载的情况，可能是Genymotion后台对应的ova文件名称改变了，下载的文件名可在[C:\Users\xxx\AppData\Local\Genymobile\Genymotion\ova](C:\Users\Administrator\AppData\Local\Genymobile\Genymotion\ova)目录下查看

启动Genymotion,选择Add,在Select a new virtual device界面上选择模拟器名称，如：Samsung Galaxy S6 - 5.1.0 - API 22 - 1440x2560

或者打开对应的virtualbox，直接选择“新建”-》“引入虚拟机”，选择刚才下载的ova虚拟机文件导入即可。

##  虚拟设备无法上网

解决办法:打开VirtualBox,进行如下设置：

网卡1设置为: 仅主机(Host-Only)网络,网卡2设置为:网络地址转换(NAT),网卡3设置为: 仅主机(Host-Only)网络,网卡4设置为: 仅主机(Host-Only)网络,大部分情况下不需要对网卡3和网卡4做设置，使用默认设置即可，如不能上网，再尝试设置网卡3和网卡4。

## 不支持x86体系apk

需要下载安装文件： [ Genymotion-ARM-Translation-Tool](https://github.com/m9rco/Genymotion_ARM_Translation/tree/master/package),目前各个版本的android对应不同的安装包。所有的安装包如下：
<https://github.com/m9rco/Genymotion_ARM_Translation/tree/master/package>
