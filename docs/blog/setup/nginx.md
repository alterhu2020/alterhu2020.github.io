---
title: Nginx Linux安装及其环境配置
---

参考：[修改nginx的Server名称,修改两个文件:ngx_http_header_filter_module.c和nginx.h](https://serverfault.com/questions/214242/can-i-hide-all-server-os-info/279389#279389)

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## Nginx安装步骤

```
$ cd /opt
$ sudo mkdir nginx-modules
$ cd nginx-modules

// zlib安装
$ wget http://zlib.net/zlib-1.2.11.tar.gz
$ tar xvf zlib-1.2.11.tar.gz

// ngx-brotli安装
$ apt install git
$ git clone https://github.com/google/ngx_brotli
$ cd ngx_brotli && git submodule update --init --recursive --progress

// pcre安装
$ cd ..
$ wget https://ftp.pcre.org/pub/pcre/pcre-8.43.tar.gz
$ tar xvf pcre-8.43.tar.gz

// OpenSSL安装
$ wget https://www.openssl.org/source/openssl-1.1.1c.tar.gz
$ tar xvf openssl-1.1.1c.tar.gz
$ sudo apt install build-essential -y

// nginx安装
配置可参考： [Compile from source](https://github.com/jukbot/setup-nginx-webserver/blob/master/README.md)
$ wget http://nginx.org/download/nginx-1.17.7.tar.gz
$ tar zxvf nginx-1.17.7.tar.gz
$ cd nginx-1.17.7
$ sudo nano src/http/ngx_http_header_filter_module.c
$ sudo nano src/core/nginx.h
$ sudo nano src/http/ngx_http_special_response.c
$ sudo mkdir /var/lib/nginx

// 运行安装
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

$ sudo make   #这个操作需要花费十分钟左右 
$ sudo make install 
```

## 安装nginx.service服务

```shell
$ sudo  nano /lib/systemd/system/nginx.service 
[Unit]
Description=A high performance web server and a reverse proxy server
Documentation=man:nginx(8)
After=network.target

[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t -q -g 'daemon on; master_process on;'
ExecStartPost=/bin/sleep 0.1
ExecStart=/usr/sbin/nginx -g 'daemon on; master_process on;'
ExecReload=/usr/sbin/nginx -g 'daemon on; master_process on;' -s reload
ExecStop=-/sbin/start-stop-daemon --quiet --stop --retry QUIT/5 --pidfile /run/nginx.pid
TimeoutStopSec=5
KillMode=mixed

[Install]
WantedBy=multi-user.target

$ sudo systemctl enable nginx
```

遇到异常的报错信息:

> nginx.service: Failed to read PID from file `/run/nginx.pid`: Invalid argument

That warning with the nginx.pid file is a know bug (at least for Ubutnu if not for other distros as well). More details here: https://bugs.launchpad.net/ubuntu/+source/nginx/+bug/1581864

Workaround (on a ssh console, as root, use the commands bellow):

```shell
mkdir /etc/systemd/system/nginx.service.d
printf "[Service]\nExecStartPost=/bin/sleep 0.1\n" > /etc/systemd/system/nginx.service.d/override.conf
systemctl daemon-reload
systemctl restart nginx 
```

# nginx配置助手

1. 安装cerbot配置SSL

```
$ sudo apt-get install certbot -y
```

2. 配置nginx和SSL

参考配置文件,每次只需要修改对应的域名(Domain)和目录(Path):
 [nginxconfig助手](https://www.digitalocean.com/community/tools/nginx#?0.domain=pingbook.top&0.path=%2Fwww%2Fpingbook%2Fweb%2Fwww.pingbook.top&0.document_root=&0.redirect=false&0.email=alterhu2020@gmail.com&0.php=false&0.proxy&0.index=index.html&0.fallback_html&0.access_log_domain&0.error_log_domain&directory_letsencrypt=%2Fwww%2F_letsencrypt%2F&brotli&log_not_found&client_max_body_size=160&symlink=false)

以后每次配置子域名，只需要配置好对应的conf文件然后执行如下命令:

```
$ certbot certonly --webroot -d spider.pingbook.top --email alterhu2020@gmail.com -w /www/_letsencrypt -n --agree-tos --force-renewal
```

::: warning Symlink vhost配置文件
注意: 在`Symlink vhost` 中不要勾选enable。
完成以上的配置后不行看任意修改文件
:::


## 配置501,404默认页面

修改文件: `/etc/nginx/nginx.conf`,参考链接: [One NGINX error page to rule them all](https://blog.adriaan.io/one-nginx-error-page-to-rule-them-all.html)

```

http {
     # error pages
	map $status $status_text {
		400 'Bad Request';
		401 'Unauthorized';
		402 'Payment Required';
		403 'Forbidden';
		404 'Not Found';
		405 'Method Not Allowed';
		406 'Not Acceptable';
		407 'Proxy Authentication Required';
		408 'Request Timeout';
		409 'Conflict';
		410 'Gone';
		411 'Length Required';
		412 'Precondition Failed';
		413 'Payload Too Large';
		414 'URI Too Long';
		415 'Unsupported Media Type';
		416 'Range Not Satisfiable';
		417 'Expectation Failed';
		418 'I\'m a teapot';
		421 'Misdirected Request';
		422 'Unprocessable Entity';
		423 'Locked';
		424 'Failed Dependency';
		426 'Upgrade Required';
		428 'Precondition Required';
		429 'Too Many Requests';
		431 'Request Header Fields Too Large';
		451 'Unavailable For Legal Reasons';
		500 'Internal Server Error';
		501 'Not Implemented';
		502 'Bad Gateway';
		503 'Service Unavailable';
		504 'Gateway Timeout';
		505 'HTTP Version Not Supported';
		506 'Variant Also Negotiates';
		507 'Insufficient Storage';
		508 'Loop Detected';
		510 'Not Extended';
		511 'Network Authentication Required';
		default 'Oppos, Something is wrong';
    }
}

```

in the `/etc/nginx/nginxconfig.io/general.conf` file, put code as following also create file: `error.html` in directory: `/www/_error`:

```
error_page 400 401 402 403 404 405 406 407 408 409 410 411 412 413 414 415 416 417 418 421 422 423 424 426 428 429 431 451 500 501 502 503 504 505 506 507 508 510 511 /error.html;

location = /error.html {
  ssi on;
  internal;
  root /www/_error;
}

```

## 配置内网映射

### frps 服务端配置脚本 `frps.ini`

```
[common]
bind_port = 7000

# 配置frps面板
dashboard_port = 7500
dashboard_user = alterhu2020
dashboard_pwd = guchan1026
 
```