# 安装步骤

## 安装Php

参考安装方法:
```
~$ wget https://www.php.net/distributions/php-7.3.9.tar.gz~
~$ tar zxvf php-7.3.9.tar.gz~
~$ sudo apt-get install libxml2-dev~
~$ ./configure --enable-fpm --with-mysql~
~$ make ~
~$ sudo make install~

直接执行如下命令安装:

```
$ sudo apt install php-fpm php-mysql
$ php -v
$ sudo nano /www/public/info.php

<?PHP
phpinfo();
?>


```

---- 错误问题

 - error: libxml2 not found.  Please check your libxml2 installation.
> 解决方法: apt-get install libxml2-dev

```
1. 下载对应的安装包,网站: https://wordpress.org/download, 最新的版本下载地址是: https://wordpress.org/latest.zip:
```
wget http://wordpress.org/latest.tar.gz
```
2. 解压缩安装包到指定目录:
```
$ sudo mv latest.tar.gz /www/public
$ tar -xzvf latest.tar.gz /www/public
$ sudo chown -R www-data:www-data /www/public
$ sudo chmod -R 755 /www/public
$ sudo mv /www/public/wp-config-sample.php /www/public/wp-config.php
$ sudo nano /www/public/wp-config.php

```


> wordpress Error establishing a database connection

wordpress不支持mysql8的密码保存方式

> default-src 'self' http: https: data: blob: 'unsafe-inline'"

修改在nginx中的security header为如下:
```
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline' 'unsafe-eval'" always;
```