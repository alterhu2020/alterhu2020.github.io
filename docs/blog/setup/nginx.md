---
title: Nginx Linux安装及其环境配置
---

参考：[修改nginx的Server名称,修改两个文件:ngx_http_header_filter_module.c和nginx.h](https://serverfault.com/questions/214242/can-i-hide-all-server-os-info/279389#279389)

## Nginx安装步骤

```
$ mkdir /var/lib/nginx
$ cd /home
$ sudo mkdir nginx-modules
$ cd nginx-modules
$ wget https://github.com/openresty/headers-more-nginx-module/archive/v0.33.tar.gz 
$ tar xvf v0.33.tar.gz headers-more-nginx-module-0.33

$ wget http://zlib.net/zlib-1.2.11.tar.gz
$ tar xvf zlib-1.2.11.tar.gz
$ apt install git
$ git clone https://github.com/eustas/ngx_brotli
$ cd ngx_brotli && git submodule update --init

$ wget https://ftp.pcre.org/pub/pcre/pcre-8.43.tar.gz
$ tar xvf pcre-8.43.tar.gz

$ wget https://www.openssl.org/source/openssl-1.1.1c.tar.gz
$ tar xvf openssl-1.1.1c.tar.gz
$ sudo apt install build-essential -y
--- 以下配置可参考： [Compile from source](https://github.com/jukbot/setup-nginx-webserver/blob/master/README.md)
$ ./configure --prefix=/usr/local/nginx \
            --sbin-path=/usr/sbin/nginx \
            --modules-path=/usr/lib/nginx/modules \
            --conf-path=/etc/nginx/nginx.conf \
            --error-log-path=/var/log/nginx/error.log \
            --http-log-path=/var/log/nginx/access.log \
            --pid-path=/run/nginx.pid \
            --lock-path=/var/lock/nginx.lock \
            --user=www-data \
            --group=www-data \
            --http-client-body-temp-path=/var/lib/nginx/body \
            --http-fastcgi-temp-path=/var/lib/nginx/fastcgi \
            --http-proxy-temp-path=/var/lib/nginx/proxy \
            --http-scgi-temp-path=/var/lib/nginx/scgi \
            --http-uwsgi-temp-path=/var/lib/nginx/uwsgi \
            --with-openssl=../nginx-modules/openssl-1.1.1c \
            --with-openssl-opt=enable-ec_nistp_64_gcc_128 \
            --with-openssl-opt=no-nextprotoneg \
            --with-openssl-opt=no-weak-ssl-ciphers \
            --with-openssl-opt=no-ssl3 \
            --with-pcre=../nginx-modules/pcre-8.43 \
            --with-pcre-jit \
            --with-zlib=../nginx-modules/zlib-1.2.11 \
            --with-compat \
            --with-file-aio \
            --with-threads \
            --with-http_addition_module \
            --with-http_auth_request_module \
            --with-http_dav_module \
            --with-http_flv_module \
            --with-http_mp4_module \
            --with-http_gunzip_module \
            --with-http_gzip_static_module \
            --with-http_random_index_module \
            --with-http_realip_module \
            --with-http_slice_module \
            --with-http_ssl_module \
            --with-http_sub_module \
            --with-http_stub_status_module \
            --with-http_v2_module \
            --with-http_secure_link_module \
            --with-mail \
            --with-mail_ssl_module \
            --with-stream \
            --with-stream_realip_module \
            --with-stream_ssl_module \
            --with-stream_ssl_preread_module \
            --with-debug \
            --with-cc-opt='-g -O2 -fPIE -fstack-protector-strong -Wformat -Werror=format-security -Wdate-time -D_FORTIFY_SOURCE=2' \
            --with-ld-opt='-Wl,-Bsymbolic-functions -fPIE -pie -Wl,-z,relro -Wl,-z,now' \
            --add-module=../nginx-modules/ngx_brotli

$ make   #这个操作需要花费十分钟左右 
$ sudo make install 
$ useradd -d /etc/nginx/ -s /sbin/nologin nginx
```

## 安装nginx.service服务

```shell

[Unit]
Description=A high performance web server and a reverse proxy server
Documentation=man:nginx(8)
After=network.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t -q -g 'daemon on; master_process on;'
ExecStart=/usr/sbin/nginx -g 'daemon on; master_process on;'
ExecReload=/usr/sbin/nginx -g 'daemon on; master_process on;' -s reload
ExecStop=-/sbin/start-stop-daemon --quiet --stop --retry QUIT/5 --pidfile /run/nginx.pid
TimeoutStopSec=5
KillMode=mixed

[Install]
WantedBy=multi-user.target

```
> nginx.service: Failed to read PID from file /run/nginx.pid: Invalid argument

That warning with the nginx.pid file is a know bug (at least for Ubutnu if not for other distros as well). More details here: https://bugs.launchpad.net/ubuntu/+source/nginx/+bug/1581864

Workaround (on a ssh console, as root, use the commands bellow):
```shell
mkdir /etc/systemd/system/nginx.service.d
printf "[Service]\nExecStartPost=/bin/sleep 0.1\n" > /etc/systemd/system/nginx.service.d/override.conf
systemctl daemon-reload
systemctl restart nginx 

```

# nginx配置助手

```shell
-- 参考地址[安装certbot](https://certbot.eff.org/lets-encrypt/debianstretch-nginx)
$ sudo apt-get install certbot python-certbot-nginx

```

### 参考配置文件： [nginxconfig助手](https://nginxconfig.io/?0.domain=pingbook.top&0.path=%2Fwww&0.document_root=%2Fcrawler%2Fflask-crawler&0.redirect=false&0.https=false&0.php=false&0.proxy&0.proxy_path=%2Fcrawler&0.proxy_pass=http:%2F%2F127.0.0.1:9000%2Fapi&0.fallback_html&0.access_log_domain&0.error_log_domain&directory_letsencrypt=%2Fwww%2F_letsencrypt%2F&log_not_found&client_max_body_size=32)
```
```
注意: 在`Symlink vhost` 中不要勾选enable。

# 其他

## ngx_brotli vs gzip压缩

推荐ngx_brotli,压缩更强