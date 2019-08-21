(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{305:function(t,n,e){"use strict";e.r(n);var s=e(6),a=Object(s.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("参考："),e("a",{attrs:{href:"https://serverfault.com/questions/214242/can-i-hide-all-server-os-info/279389#279389",target:"_blank",rel:"noopener noreferrer"}},[t._v("修改nginx的Server名称,修改两个文件:ngx_http_header_filter_module.c和nginx.h"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"nginx安装步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx安装步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx安装步骤")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ mkdir /var/lib/nginx\n$ cd /home\n$ sudo mkdir nginx-modules\n$ cd nginx-modules\n$ wget https://github.com/openresty/headers-more-nginx-module/archive/v0.33.tar.gz \n$ tar xvf v0.33.tar.gz headers-more-nginx-module-0.33\n\n$ wget http://zlib.net/zlib-1.2.11.tar.gz\n$ tar xvf zlib-1.2.11.tar.gz\n$ apt install git\n$ git clone https://github.com/eustas/ngx_brotli\n$ cd ngx_brotli && git submodule update --init\n\n$ wget https://ftp.pcre.org/pub/pcre/pcre-8.43.tar.gz\n$ tar xvf pcre-8.43.tar.gz\n\n$ wget https://www.openssl.org/source/openssl-1.1.1c.tar.gz\n$ tar xvf openssl-1.1.1c.tar.gz\n$ sudo apt install build-essential -y\n--- 以下配置可参考： [Compile from source](https://github.com/jukbot/setup-nginx-webserver/blob/master/README.md)\n$ ./configure --prefix=/usr/local/nginx \\\n            --sbin-path=/usr/sbin/nginx \\\n            --modules-path=/usr/lib/nginx/modules \\\n            --conf-path=/etc/nginx/nginx.conf \\\n            --error-log-path=/var/log/nginx/error.log \\\n            --http-log-path=/var/log/nginx/access.log \\\n            --pid-path=/run/nginx.pid \\\n            --lock-path=/var/lock/nginx.lock \\\n            --user=www-data \\\n            --group=www-data \\\n            --http-client-body-temp-path=/var/lib/nginx/body \\\n            --http-fastcgi-temp-path=/var/lib/nginx/fastcgi \\\n            --http-proxy-temp-path=/var/lib/nginx/proxy \\\n            --http-scgi-temp-path=/var/lib/nginx/scgi \\\n            --http-uwsgi-temp-path=/var/lib/nginx/uwsgi \\\n            --with-openssl=../nginx-modules/openssl-1.1.1c \\\n            --with-openssl-opt=enable-ec_nistp_64_gcc_128 \\\n            --with-openssl-opt=no-nextprotoneg \\\n            --with-openssl-opt=no-weak-ssl-ciphers \\\n            --with-openssl-opt=no-ssl3 \\\n            --with-pcre=../nginx-modules/pcre-8.43 \\\n            --with-pcre-jit \\\n            --with-zlib=../nginx-modules/zlib-1.2.11 \\\n            --with-compat \\\n            --with-file-aio \\\n            --with-threads \\\n            --with-http_addition_module \\\n            --with-http_auth_request_module \\\n            --with-http_dav_module \\\n            --with-http_flv_module \\\n            --with-http_mp4_module \\\n            --with-http_gunzip_module \\\n            --with-http_gzip_static_module \\\n            --with-http_random_index_module \\\n            --with-http_realip_module \\\n            --with-http_slice_module \\\n            --with-http_ssl_module \\\n            --with-http_sub_module \\\n            --with-http_stub_status_module \\\n            --with-http_v2_module \\\n            --with-http_secure_link_module \\\n            --with-mail \\\n            --with-mail_ssl_module \\\n            --with-stream \\\n            --with-stream_realip_module \\\n            --with-stream_ssl_module \\\n            --with-stream_ssl_preread_module \\\n            --with-debug \\\n            --with-cc-opt='-g -O2 -fPIE -fstack-protector-strong -Wformat -Werror=format-security -Wdate-time -D_FORTIFY_SOURCE=2' \\\n            --with-ld-opt='-Wl,-Bsymbolic-functions -fPIE -pie -Wl,-z,relro -Wl,-z,now' \\\n            --add-module=../nginx-modules/ngx_brotli\n\n$ make   #这个操作需要花费十分钟左右 \n$ sudo make install \n$ useradd -d /etc/nginx/ -s /sbin/nologin nginx\n")])])]),e("h2",{attrs:{id:"安装nginx-service服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx-service服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装nginx.service服务")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nDescription"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("A high performance web server and a reverse proxy server\nDocumentation"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("man:nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nAfter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("forking\nPIDFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/run/nginx.pid\nExecStartPre"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/sbin/nginx -t -q -g "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'daemon on; master_process on;'")]),t._v("\nExecStart"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/sbin/nginx -g "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'daemon on; master_process on;'")]),t._v("\nExecReload"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/sbin/nginx -g "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'daemon on; master_process on;'")]),t._v(" -s reload\nExecStop"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-/sbin/start-stop-daemon --quiet --stop --retry QUIT/5 --pidfile /run/nginx.pid\nTimeoutStopSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("5\nKillMode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mixed\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nWantedBy"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n\n")])])]),e("blockquote",[e("p",[t._v("nginx.service: Failed to read PID from file /run/nginx.pid: Invalid argument")])]),t._v(" "),e("p",[t._v("That warning with the nginx.pid file is a know bug (at least for Ubutnu if not for other distros as well). More details here: https://bugs.launchpad.net/ubuntu/+source/nginx/+bug/1581864")]),t._v(" "),e("p",[t._v("Workaround (on a ssh console, as root, use the commands bellow):")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/systemd/system/nginx.service.d\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[Service]\\nExecStartPost=/bin/sleep 0.1\\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /etc/systemd/system/nginx.service.d/override.conf\nsystemctl daemon-reload\nsystemctl restart nginx \n\n")])])]),e("h1",{attrs:{id:"nginx配置助手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置助手","aria-hidden":"true"}},[t._v("#")]),t._v(" nginx配置助手")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("-- 参考地址"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("安装certbot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://certbot.eff.org/lets-encrypt/debianstretch-nginx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" certbot python-certbot-nginx\n\n")])])]),e("h3",{attrs:{id:"参考配置文件：-nginxconfig助手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考配置文件：-nginxconfig助手","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考配置文件： "),e("a",{attrs:{href:"https://nginxconfig.io/?0.domain=pingbook.top&0.path=%2Fwww&0.document_root=%2Fcrawler%2Fflask-crawler&0.redirect=false&0.https=false&0.php=false&0.proxy&0.proxy_path=%2Fcrawler&0.proxy_pass=http:%2F%2F127.0.0.1:9000%2Fapi&0.fallback_html&0.access_log_domain&0.error_log_domain&directory_letsencrypt=%2Fwww%2F_letsencrypt%2F&log_not_found&client_max_body_size=32",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginxconfig助手"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code")])]),e("p",[t._v("注意: 在"),e("code",[t._v("Symlink vhost")]),t._v(" 中不要勾选enable。")]),t._v(" "),e("h1",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("h2",{attrs:{id:"ngx-brotli-vs-gzip压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ngx-brotli-vs-gzip压缩","aria-hidden":"true"}},[t._v("#")]),t._v(" ngx_brotli vs gzip压缩")]),t._v(" "),e("p",[t._v("推荐ngx_brotli,压缩更强")])])},[],!1,null,null,null);n.default=a.exports}}]);