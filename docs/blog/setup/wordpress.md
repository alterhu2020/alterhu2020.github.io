---
title: Wordpress Linux命令其环境配置
---

## Install wordpress
```
$ cd /www/pingbook
$ wget https://wordpress.org/latest.tar.gz
$ tar xpf latest.tar.gz
$ cp -r wordpress ../
```

## Install php

```
$ cd /opt   
~$ wget https://www.php.net/distributions/php-7.3.10.tar.gz~
~$ tar zxvf php-7.3.10.tar.gz~

----------上面采用的php源码安装可以使用下面的几个命令替代-----------------------------
$ sudo apt-get install php-fpm php-mysql 
   上面的命令会安装: php-common php7.3-cli php7.3-common php7.3-fpm php7.3-json php7.3-mysql php7.3-opcache php7.3-readline
   可以看到对应的路径为: /run/php/php7.3-fpm.sock
$ sudo apt update
$ sudo apt install php-curl php-gd php-intl php-mbstring php-soap php-xml php-xmlrpc php-zip
$ sudo nano /etc/php/7.3/fpm/php.ini

cgi.fix_pathinfo =0

$ sudo systemctl restart php7.3-fpm.service
```

## 配置nginx

```
location / {
    try_files $uri $uri/ /index.php?$args;
}
location ~ \.php$ {
    try_files $uri =404;
    fastcgi_pass unix:/run/php/php7.3-fpm.sock;
    fastcgi_index   index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
}

```

## 配置启动安装wordpress

访问页面: https://xxx/install.php