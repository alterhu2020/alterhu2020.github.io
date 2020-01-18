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