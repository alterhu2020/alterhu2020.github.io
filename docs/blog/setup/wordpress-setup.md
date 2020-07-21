---
title: Wordpress Linux命令其环境配置
---

**更新日期： 2020/02/21**
<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## Install wordpress
```
$ cd /www/web/blog.pingbook.top
$ wget https://wordpress.org/latest.tar.gz
$ tar xpf latest.tar.gz
$ cp -r wordpress ../
```

## Install php

以下方法不再推荐使用， 2020-07-20
~~$ cd /opt~~   
~~$ wget https://www.php.net/distributions/php-7.3.10.tar.gz~~
~~$ tar zxvf php-7.3.10.tar.gz~~

如下为最新安装方法：
```
----------上面采用的php源码安装可以使用下面的几个命令替代-----------------------------
$ sudo apt update
$ sudo apt-get install php-fpm php-mysql -y

上面的命令会安装: php-common php7.3-cli php7.3-common php7.3-fpm php7.3-json php7.3-mysql php7.3-opcache php7.3-readline
可以看到对应的路径为: /run/php/php7.3-fpm.sock,另外安装了服务： sudo systemctl status php7.3-fpm

$ sudo apt install php-curl php-gd php-intl php-mbstring php-soap php-xml php-xmlrpc php-zip
$ sudo nano /etc/php/7.3/fpm/php.ini

;  Paths and Directories

cgi.fix_pathinfo = 0

$ sudo systemctl restart php7.3-fpm.service
```

## 配置nginx

```
root /www/web/www.pingbook.top;
index index.html index.htm index.php;

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
有时候我们可以看到另外的一种配置，也是可行的，不过有点麻烦，如下代码:

```
server {
        listen        80;
        server_name  localhost;
        root   "D:/WWW";
        location / {
            index index.php index.html;
            error_page 400 /error/400.html;
            error_page 403 /error/403.html;
            error_page 404 /error/404.html;
            error_page 500 /error/500.html;
            error_page 501 /error/501.html;
            error_page 502 /error/502.html;
            error_page 503 /error/503.html;
            error_page 504 /error/504.html;
            error_page 505 /error/505.html;
            error_page 506 /error/506.html;
            error_page 507 /error/507.html;
            error_page 509 /error/509.html;
            error_page 510 /error/510.html;
            autoindex  off;
           # 修复phpstudy链接修改为固定链接后文章详情页面报404错误
           if (-f $request_filename/index.html){
               rewrite (.*) $1/index.html break;
           }
           if (-f $request_filename/index.php){
               rewrite (.*) $1/index.php;
           }
           if (!-f $request_filename){
               rewrite (.*) /index.php;
           }
        }
        # 上面配置后后台不能访问了，仔细观察发现后台所有地址都缺少wp-admin目录
        rewrite /wp-admin$ $scheme://$host$uri/ permanent;
        location ~ \.php(.*)$ {
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }
}
```
<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>


## 配置启动安装wordpress

完成上面的配置后，需要再修改`wp-config.php`文件配置数据库信息，如下为全部配置信息:
```
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jvfast' );

/** MySQL database username */
define( 'DB_USER', 'test' );

/** MySQL database password */
define( 'DB_PASSWORD', 'ssd3434gf5d0ngh' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

```

否则会覆盖已经导入的mysql数据库数据,然后访问页面: http://xxx. 会自动加载配置文件信息跳转到首页。

## 请求style.css和app.js出现 `block:mixed-content`错误

原因是全站采用了https后引用的相关css和js文件由于采用的是frp导致对应的协议是http的要求，此处可以修改git主题下面的`functions.php`中的`GIT_URL`参数为如下：
```
define('GIT_URL', 'https://pingbook.top/wp-content/themes/git');

```