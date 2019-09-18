---
title: Python Linux安装及其环境配置
---


# Python2.7 installaction [更新到2019年9月1日]

参考网站地址: [安装Python2.7](https://tecadmin.net/install-python-2-7-on-ubuntu-and-linuxmint/)
命令如下:

```
$ sudo wget https://www.python.org/ftp/python/2.7.16/Python-2.7.16.tgz
$ sudo tar xzf Python-2.7.16.tgz
$ cd Python-2.7.16
$ sudo ./configure --enable-optimizations
$ sudo make altinstall 
```
`make altinstall` is used to prevent replacing the default python binary file /usr/bin/python.

# Python3.7 installation [更新到2019年8月10日]

[How to Install Python 3.7 on Debian 9](https://linuxize.com/post/how-to-install-python-3-7-on-debian-9/)
[Modify python command](https://jcutrer.com/linux/upgrade-python37-ubuntu1810)

```shell script
$ sudo apt-get remove python3
$ sudo apt-get purge python3
$ whereis python3 python3.5
$ sudo apt update
$ sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev wget
$ wget https://www.python.org/ftp/python/3.7.4/Python-3.7.4.tar.xz
$ tar -xf Python-3.7.4.tar.xz
$ cd Python-3.7.4
$ ./configure --enable-optimizations
$ nproc
$ make -j 8  / make -j 4
$ sudo make altinstall
$ python3.7 -V
$ ls /usr/bin/python*
$ update-alternatives --list python
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1
$ sudo update-alternatives --install /usr/bin/python python /usr/local/bin/python3.7 2
$ sudo update-alternatives --install /usr/bin/python3 python3 /usr/local/bin/python3.7 2
$ update-alternatives --list python
$ update-alternatives --config python

```
## `pip`, `pipenv` installation

[How to install Pip](https://linuxize.com/post/how-to-install-pip-on-debian-9/)

[How to install pipenv](https://www.ostechnix.com/pipenv-officially-recommended-python-packaging-tool/)

1. `pip` 安装

```shell script
$ wget https://bootstrap.pypa.io/get-pip.py
$ sudo python3 get-pip.py
```

如果出现错误： Command '('lsb_release', '-a')' returned non-zero
参考 (https://stackoverflow.com/questions/44967202/pip-is-showing-error-lsb-release-a-returned-non-zero-exit-status-1)，
使用命令： sudo nano  /usr/bin/lsb_release
edited the first line from #! /usr/bin/python3 to #! /usr/bin/python3.7

```
如果出错：Package 'python3-distutils' has no installation candidat


$ pip -V
```

如果出现错误： ImportError: cannot import name 'main' from 'pip'，因为`pip`使用的是python2.7的命令，所以应该参考如下： https://stackoverflow.com/questions/44455001/how-to-change-pip3-command-to-be-pip/44455078

```
$ pip3 -V
$ alias pip=pip3
$ sudo update-alternatives --install /usr/bin/pip pip /usr/bin/pip3 1
$  pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

```
切换源
```
#创建目录
mkdir -p ~/.pip
#修改配置文件
vim  ~/.pip/pip.conf
#写入以下内容并保存
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
```


2. `pipenv`安装

```shell script
$ pip install --user pipenv
$ python -m site --user-base
$ sudo nano ~/.profile
 export PATH="$HOME/.local/bin:$PATH"
$ sudo source ~/.profile
$ . /etc/profile
$ pipenv --version

$ pipenv --update
$ export PIPENV_VENV_IN_PROJECT=1 (for linux) , SET PIPENV_VENV_IN_PROJECT=1(for windows)
$ pipenv shell
$ pipenv install / pipenv install -r requirements.txt
$ pipenv update

```

3. `pipenv`在Idea中环境搭建

1. Start from IDEA to create a new project 
2. Select the **Project SDK** with **System Intepreter**, if not just create one.
3. Change pipenv source 
`go to %appdata%\pip\pip.ini` default index: https://pypi.org/simple
```ini
[global]
timeout = 6000
index-url = http://pypi.douban.com/simple/ 
[install]
use-mirrors = true
mirrors = http://pypi.douban.com/simple/ 
trusted-host = pypi.douban.com
```
4. create .venv directory
 `export PIPENV_VENV_IN_PROJECT=1` or `SET PIPENV_VENV_IN_PROJECT=1`
5. activate the pipenv
 `pipenv shell`
 
6. Change the pipenv url
 
 Change the `Pipfile` url to `https://pypi.tuna.tsinghua.edu.cn/simple`
 
7. install package
 `pipenv install` or `pipenv install -r requirements.txt` (如果安装使用了老格式的virtualEnv)
`pipenv install --verbose`
8. pip update
 `pipenv update`

9. graph show
 `pipenv graph`
10. export to requirement:
  `pipenv lock -r` or `pipenv lock -r --dev`
  

## 安装配置问题

- zipimport.ZipImportError: can't decompress data; zlib not available 解决办法

参考解决方案[zipimport.ZipImportError: can't decompress data; zlib not available 解决办法](https://www.cnblogs.com/zhangym/p/6226435.html)