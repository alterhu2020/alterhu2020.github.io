---
title: Node Nuxt安装及其环境配置
---

## 环境配置

- 下载`node`,并执行命令安装node配置`PATH`路径:

```$shell
$ cat /proc/cpuinfo 
Processor       : ARMv7 Processor rev 10 (v7l)
ARMv7 (and below) is 32-bit. ARMv8 introduces the 64-bit instruction set.
If you want to see whether your system supports 64-bit binaries, check the kernel architecture:
$ uname -m
此处树莓派4是ARMv7架构

$ 树莓派: wget https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-armv7l.tar.xz
$ amd64: wget https://nodejs.org/dist/v12.14.1/node-v12.14.1-linux-x64.tar.xz
$ tar xvf node-v12.14.1-linux-armv7l.tar.xz
$ tar xvf node-v12.14.1-linux-x64.tar.xz
$ mv node-v12.14.1-linux-armv7l /opt/
$ sudo nano /etc/profile
增加对应的node的PATH路径,例如如下:
export path=/opt/node-v12.14.1-linux-armv7l/bin:$PATH
export path=/opt/node-v12.14.1-linux-x64/bin:$PATH
执行如下命令使上面的PATH配置生效
$ source /etc/profile 

执行如下命令确认node环境变量配置成功
$ node -v
$ npm -v 

设置npm和yarn的镜像为淘宝镜像
$ npm config set registry https://registry.npm.taobao.org
```

- 安装node的包管理器`yarn`(当然此处也可以不安装,直接使用node内置的`npm`来管理包):

```$shell
$ npm i yarn -g
$ yarn config set registry https://registry.npm.taobao.org
```

- 安装`pm2`命令用于后台服务静默执行:

```$shell
$ npm i pm2 -g

配置pm2开机启动脚本
$ pm2 startup 
```

## 1. 测试环境运行调试

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## 2. 生产环境项目部署

- 复制当前所有包文件,解压,然后在当前文件夹下执行命令安装编译工程:

```$shell
$ yarn 
$ yarn build

编译程序, 然后配置pm2程序
$ pm2 start  ecosystem.config.js --watch
$ pm2 save
```

## 3. 重新发布/新版发布

```$shell
# 首先复制源码目录文件到对应的服务器,然后直接如下命令:
$ yarn build
$ pm2 reload name| all
$ pm2 restart all
$ pm2 logs
$ pm2 delete all

```

- 执行pm2相关命令确认程序启动没有问题:

```shell script
$ pm2 list    # 查看所有的pm2程序
$ pm2 monit   # 查看pm2的所有程序的监控面板
$ pm2 reload
```

如果上述配置都没有问题,可以访问地址: `http://127.0.0.0:3000`查看启动程序,然后我们只需要在nginx配置
将所有请求反转到`nginx`,参考配置如下:

```
 # proxy for  project
 location  / {
          alias   /www/the project folder/;
          proxy_pass http://127.0.0.1:3000/;
          
          include nginxconfig.io/proxy.conf;
 }
```
-----------------------------------------------------
## 安装`node-sass` 报错

首先要知道的是，安装`node-sass`时在`node scripts/install`阶段会从 github.com 上下载一个.node文件，大部分安装不成功的原因都源自这里，因为 GitHub Releases 里的文件都托管在`s3.amazonaws.com`上面，而这个网址在国内总是_网络不稳定_，所以我们需要通过第三方服务器下载这个文件。（顺带一提，你可以看看[这个好玩的 commit](https://github.com/sass/node-sass/commit/b8050efbe0effb68b0617d28276c72eef1fb15ef)）

1. 方法一： 
 
 直接翻墙安装；

2. 方法二：

2.1 查看当前环境适用的binding.node

```
node -p "[process.platform, process.arch, process.versions.modules].join('-')"
```
2.2  到[这里](https://github.com/sass/node-sass/releases)下载对应版本的文件。链接地址: https://github.com/sass/node-sass/releases
2.3 将下载好的文件放入缓存目录中,查看缓存目录命令： 
```
> PS C:\Users\Administrator> npm config get cache
E:\nodejs\node_cache

```
2.3.1 通常yarn缓存目录：C:Users\你的用户名\AppData\Local\Yarn\Cache
2.3.2 通常npm缓存目录：C:Users\你的用户名\AppData\Roaming\npm-cache\node-sass
此处我的下载文件目录是：` "E:\nodejs\node_cache\node-sass\4.13.1\win32-x64-72_binding.node" `


到这里去根据版本号、系统环境，选择下载 .node 文件，然后安装时，指定变量 sass_binary_path，如：
https://github.com/sass/node-sass/releases/download/v4.13.0/win32-x64-72_binding.node

```
npm i node-sass --sass_binary_path=D:/win32-x64-72_binding.node
```
按上面这么做确实没错，而且也是必须，但是当你再次去创建ionic项目时还是会提示同样的错误(如果不报错说明你运气好，那下面就不用看了)，那么原因到底是为什么呢？那是因为你的确安装了sass而且也成功下载了相关文件了，只是你在执行时候可能是因为运气不好或者当前软件没设计好的原因没给你自动添加sass的环境变量，所以这是我们得自己手动添加一下系统的环境变量(怎么添加系统环境变量我这就不提了，因为我认为很多人应该都会的，这里我只提一下要加什么环境变量，大概路径)，例如我的环境变量如下：(这里提醒一下配置的路径最好是根据你的实际情况，因为每个人安装nodejs的方式都不一样)

解决方法设置环境变量：
1. 设置系统变量名称: `SASS_BINARY_PATH`
2. 系统变量值：`E:\nodejs\node_cache\node-sass\4.13.1\win32-x64-72_binding.node`

![图片](https://img-blog.csdn.net/20180106162556616?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZGY5ODEwMTE1MTI=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
