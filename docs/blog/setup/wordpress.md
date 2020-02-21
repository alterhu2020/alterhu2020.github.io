---
title: Wordpress Linux命令其环境配置
---

**更新日期： 2020/02/21**

## Install wordpress
```
$ cd /www/pingbook
$ wget https://wordpress.org/latest.tar.gz
$ tar xpf latest.tar.gz
$ cp -r wordpress ../
```

## Install php


~~$ cd /opt~~   
~~$ wget https://www.php.net/distributions/php-7.3.10.tar.gz~~
~~$ tar zxvf php-7.3.10.tar.gz~~

如下为最新安装方法：
```
----------上面采用的php源码安装可以使用下面的几个命令替代-----------------------------
$ sudo apt update
$ sudo apt-get install php-fpm php-mysql 

上面的命令会安装: php-common php7.3-cli php7.3-common php7.3-fpm php7.3-json php7.3-mysql php7.3-opcache php7.3-readline
可以看到对应的路径为: /run/php/php7.3-fpm.sock,另外安装了服务： sudo systemctl status php7.3-fpm

$ sudo apt install php-curl php-gd php-intl php-mbstring php-soap php-xml php-xmlrpc php-zip
$ sudo nano /etc/php/7.3/fpm/php.ini

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
define( 'DB_USER', 'syscorer' );

/** MySQL database password */
define( 'DB_PASSWORD', 's6s@#@!L0ngh' );

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