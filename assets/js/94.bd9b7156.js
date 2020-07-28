(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{350:function(e,n,t){"use strict";t.r(n);var s=t(9),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("strong",[e._v("更新日期： 2020/02/21")]),e._v(" "),t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1)],1),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#install-wordpress"}},[e._v("Install wordpress")])]),t("li",[t("a",{attrs:{href:"#install-php"}},[e._v("Install php")])]),t("li",[t("a",{attrs:{href:"#配置nginx"}},[e._v("配置nginx")])]),t("li",[t("a",{attrs:{href:"#配置启动安装wordpress"}},[e._v("配置启动安装wordpress")])]),t("li",[t("a",{attrs:{href:"#请求style-css和app-js出现-block-mixed-content-错误"}},[e._v("请求style.css和app.js出现 block:mixed-content错误")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"install-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-wordpress"}},[e._v("#")]),e._v(" Install wordpress")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd /www/web/blog.pingbook.top\n$ wget https://wordpress.org/latest.tar.gz\n$ tar xpf latest.tar.gz\n$ cp -r wordpress ../\n")])])]),t("h2",{attrs:{id:"install-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-php"}},[e._v("#")]),e._v(" Install php")]),e._v(" "),t("p",[e._v("以下方法不再推荐使用， 2020-07-20\n"),t("s",[e._v("$ cd /opt")]),t("br"),e._v(" "),t("s",[e._v("$ wget https://www.php.net/distributions/php-7.3.10.tar.gz")]),e._v(" "),t("s",[e._v("$ tar zxvf php-7.3.10.tar.gz")])]),e._v(" "),t("p",[e._v("如下为最新安装方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("----------上面采用的php源码安装可以使用下面的几个命令替代-----------------------------\n$ sudo apt update\n$ sudo apt-get install php-fpm php-mysql -y\n\n上面的命令会安装: php-common php7.3-cli php7.3-common php7.3-fpm php7.3-json php7.3-mysql php7.3-opcache php7.3-readline\n可以看到对应的路径为: /run/php/php7.3-fpm.sock,另外安装了服务： sudo systemctl status php7.3-fpm\n\n$ sudo apt install php-curl php-gd php-intl php-mbstring php-soap php-xml php-xmlrpc php-zip\n$ sudo nano /etc/php/7.3/fpm/php.ini\n\n;  Paths and Directories\n\ncgi.fix_pathinfo = 0\n\n$ sudo systemctl restart php7.3-fpm.service\n")])])]),t("h2",{attrs:{id:"配置nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[e._v("#")]),e._v(" 配置nginx")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("root /www/web/www.pingbook.top;\nindex index.html index.htm index.php;\n\nlocation / {\n    try_files $uri $uri/ /index.php?$args;\n}\nlocation ~ \\.php$ {\n    try_files $uri =404;\n    fastcgi_pass unix:/run/php/php7.3-fpm.sock;\n    fastcgi_index   index.php;\n    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n    include fastcgi_params;\n}\n\n")])])]),t("p",[e._v("有时候我们可以看到另外的一种配置，也是可行的，不过有点麻烦，如下代码:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('server {\n        listen        80;\n        server_name  localhost;\n        root   "D:/WWW";\n        location / {\n            index index.php index.html;\n            error_page 400 /error/400.html;\n            error_page 403 /error/403.html;\n            error_page 404 /error/404.html;\n            error_page 500 /error/500.html;\n            error_page 501 /error/501.html;\n            error_page 502 /error/502.html;\n            error_page 503 /error/503.html;\n            error_page 504 /error/504.html;\n            error_page 505 /error/505.html;\n            error_page 506 /error/506.html;\n            error_page 507 /error/507.html;\n            error_page 509 /error/509.html;\n            error_page 510 /error/510.html;\n            autoindex  off;\n           # 修复phpstudy链接修改为固定链接后文章详情页面报404错误\n           if (-f $request_filename/index.html){\n               rewrite (.*) $1/index.html break;\n           }\n           if (-f $request_filename/index.php){\n               rewrite (.*) $1/index.php;\n           }\n           if (!-f $request_filename){\n               rewrite (.*) /index.php;\n           }\n        }\n        # 上面配置后后台不能访问了，仔细观察发现后台所有地址都缺少wp-admin目录\n        rewrite /wp-admin$ $scheme://$host$uri/ permanent;\n        location ~ \\.php(.*)$ {\n            fastcgi_pass   127.0.0.1:9000;\n            fastcgi_index  index.php;\n            fastcgi_split_path_info  ^((?U).+\\.php)(/?.+)$;\n            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;\n            fastcgi_param  PATH_INFO  $fastcgi_path_info;\n            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;\n            include        fastcgi_params;\n        }\n}\n')])])]),t("ClientOnly",[t("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),e._v(" "),t("h2",{attrs:{id:"配置启动安装wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置启动安装wordpress"}},[e._v("#")]),e._v(" 配置启动安装wordpress")]),e._v(" "),t("p",[e._v("完成上面的配置后，需要再修改"),t("code",[e._v("wp-config.php")]),e._v("文件配置数据库信息，如下为全部配置信息:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<?php\n/**\n * The base configuration for WordPress\n *\n * The wp-config.php creation script uses this file during the\n * installation. You don't have to use the web site, you can\n * copy this file to \"wp-config.php\" and fill in the values.\n *\n * This file contains the following configurations:\n *\n * * MySQL settings\n * * Secret keys\n * * Database table prefix\n * * ABSPATH\n *\n * @link https://codex.wordpress.org/Editing_wp-config.php\n *\n * @package WordPress\n */\n\n// ** MySQL settings - You can get this info from your web host ** //\n/** The name of the database for WordPress */\ndefine( 'DB_NAME', 'jvfast' );\n\n/** MySQL database username */\ndefine( 'DB_USER', 'test' );\n\n/** MySQL database password */\ndefine( 'DB_PASSWORD', 'ssd3434gf5d0ngh' );\n\n/** MySQL hostname */\ndefine( 'DB_HOST', 'localhost' );\n\n/** Database Charset to use in creating database tables. */\ndefine( 'DB_CHARSET', 'utf8' );\n\n/** The Database Collate type. Don't change this if in doubt. */\ndefine( 'DB_COLLATE', '' );\n\n/**#@+\n * Authentication Unique Keys and Salts.\n *\n * Change these to different unique phrases!\n * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}\n * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.\n *\n * @since 2.6.0\n */\ndefine( 'AUTH_KEY',         'put your unique phrase here' );\ndefine( 'SECURE_AUTH_KEY',  'put your unique phrase here' );\ndefine( 'LOGGED_IN_KEY',    'put your unique phrase here' );\ndefine( 'NONCE_KEY',        'put your unique phrase here' );\ndefine( 'AUTH_SALT',        'put your unique phrase here' );\ndefine( 'SECURE_AUTH_SALT', 'put your unique phrase here' );\ndefine( 'LOGGED_IN_SALT',   'put your unique phrase here' );\ndefine( 'NONCE_SALT',       'put your unique phrase here' );\n\n/**#@-*/\n\n/**\n * WordPress Database Table prefix.\n *\n * You can have multiple installations in one database if you give each\n * a unique prefix. Only numbers, letters, and underscores please!\n */\n$table_prefix = 'wp_';\n\n/**\n * For developers: WordPress debugging mode.\n *\n * Change this to true to enable the display of notices during development.\n * It is strongly recommended that plugin and theme developers use WP_DEBUG\n * in their development environments.\n *\n * For information on other constants that can be used for debugging,\n * visit the Codex.\n *\n * @link https://codex.wordpress.org/Debugging_in_WordPress\n */\ndefine( 'WP_DEBUG', false );\n\n/* That's all, stop editing! Happy publishing. */\n\n/** Absolute path to the WordPress directory. */\nif ( ! defined( 'ABSPATH' ) ) {\n\tdefine( 'ABSPATH', dirname( __FILE__ ) . '/' );\n}\n\n/** Sets up WordPress vars and included files. */\nrequire_once( ABSPATH . 'wp-settings.php' );\n\n")])])]),t("p",[e._v("否则会覆盖已经导入的mysql数据库数据,然后访问页面: http://xxx. 会自动加载配置文件信息跳转到首页。")]),e._v(" "),t("h2",{attrs:{id:"请求style-css和app-js出现-block-mixed-content错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求style-css和app-js出现-block-mixed-content错误"}},[e._v("#")]),e._v(" 请求style.css和app.js出现 "),t("code",[e._v("block:mixed-content")]),e._v("错误")]),e._v(" "),t("p",[e._v("原因是全站采用了https后引用的相关css和js文件由于采用的是frp导致对应的协议是http的要求，此处可以修改git主题下面的"),t("code",[e._v("functions.php")]),e._v("中的"),t("code",[e._v("GIT_URL")]),e._v("参数为如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("define('GIT_URL', 'https://pingbook.top/wp-content/themes/git');\n\n")])])])],1)}),[],!1,null,null,null);n.default=a.exports}}]);