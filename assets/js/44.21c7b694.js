(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{303:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安装步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装步骤")]),t._v(" "),s("h2",{attrs:{id:"安装php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装php","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装Php")]),t._v(" "),s("p",[t._v("参考安装方法:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("~$ wget https://www.php.net/distributions/php-7.3.9.tar.gz~\n~$ tar zxvf php-7.3.9.tar.gz~\n~$ sudo apt-get install libxml2-dev~\n~$ ./configure --enable-fpm --with-mysql~\n~$ make ~\n~$ sudo make install~\n\n直接执行如下命令安装:\n\n")])])]),s("p",[t._v("$ sudo apt install php-fpm php-mysql\n$ php -v\n$ sudo nano /www/public/info.php")]),t._v("\n<?PHP\nphpinfo();\n?>\n"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n---- 错误问题\n\n - error: libxml2 not found.  Please check your libxml2 installation.\n> 解决方法: apt-get install libxml2-dev\n\n")])])]),s("ol",[s("li",[t._v("下载对应的安装包,网站: https://wordpress.org/download, 最新的版本下载地址是: https://wordpress.org/latest.zip:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget http://wordpress.org/latest.tar.gz\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("解压缩安装包到指定目录:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo mv latest.tar.gz /www/public\n$ tar -xzvf latest.tar.gz /www/public\n$ sudo chown -R www-data:www-data /www/public\n$ sudo chmod -R 755 /www/public\n$ sudo mv /www/public/wp-config-sample.php /www/public/wp-config.php\n$ sudo nano /www/public/wp-config.php\n\n")])])]),s("blockquote",[s("p",[t._v("wordpress Error establishing a database connection")])]),t._v(" "),s("p",[t._v("wordpress不支持mysql8的密码保存方式")]),t._v(" "),s("blockquote",[s("p",[t._v("default-src 'self' http: https: data: blob: 'unsafe-inline'\"")])]),t._v(" "),s("p",[t._v("修改在nginx中的security header为如下:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("add_header Content-Security-Policy \"default-src 'self' http: https: data: blob: 'unsafe-inline' 'unsafe-eval'\" always;\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);