---
title: nuxt生产环境安装及其配置
---


# 生产环境项目部署

- 下载node,并执行命令安装node配置PATH路径:
```$shell
$ wget https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz
$ tar xvf node-v10.16.3-linux-x64.tar.xz
$ mv node-v10.16.3-linux-x64 /opt/
$ sudo vi /etc/profile
增加对应的node的PATH路径,例如如下:
export path ="/opt/node-v10.16.3-linux-x64/bin:$PATH"

执行如下命令使上面的PATH配置生效
$ source /etc/profile 

执行如下命令确认node环境变量配置成功
$ node -v
$ npm -v 
```
- 安装`pm2`命令用于后台服务静默执行:
```$shell
$ npm i pm2 -g

配置pm2开机启动脚本
$ pm2 startup 
```
- 安装node的包管理器`yarn`(当然此处也可以不安装,直接使用node内置的`npm`来管理包):
```$shell
$ npm i yarn -g
```

- 复制当前所有包文件,解压,然后在当前文件夹下执行命令安装编译工程:
```$shell
$ yarn 
$ yarn build

编译程序, 然后配置pm2程序
$ pm2 start  ecosystem.config.js --watch
$ pm2 save
```

- 执行pm2命令确认程序启动是否没有问题:
```shell script
$ pm2 list
$ pm2 monit
$ pm2 logs
```

如果上述配置都没有问题,name应用程序会在`http://127.0.0.0:3000`启动应用程序,然后我们只需要在nginx配置
请求反转到改http实例即可,参考配置如下:

```editorconfig
 # proxy for  project
 location  / {
          alias   /www/the project folder/;
          proxy_pass http://127.0.0.1:3000/;
          
          proxy_http_version      1.1;
          proxy_cache_bypass      $http_upgrade;
          
          proxy_set_header Upgrade                        $http_upgrade;
          proxy_set_header Connection             "upgrade";
          proxy_set_header Host                           $host;
          proxy_set_header X-Real-IP                      $remote_addr;
          proxy_set_header X-Forwarded-For        $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto      $scheme;
          proxy_set_header X-Forwarded-Host       $host;
          proxy_set_header X-Forwarded-Port       $server_port;

 }
```


