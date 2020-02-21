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

## 切换python镜像源

a）Linux下，修改` ~/.pip/pip.conf`(没有就创建一个文件夹及文件。文件夹要加“.”，表示是隐藏文件夹)
内容如下：
```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host = https://pypi.tuna.tsinghua.edu.cn
```
(b) windows下，直接在user目录中创建一个pip目录，如：`C:\Users\xx\pip`，然后新建文件`pip.ini`，即 `%HOMEPATH%\pip\pip.ini`，在`pip.ini`文件中输入以下内容（以豆瓣镜像为例）：

```
[global]
index-url = http://pypi.douban.com/simple
[install]
trusted-host = pypi.douban.com
```
(c) 如果是使用的`pipenv`,则可以在脚本目录下面修改`Pipfile`,修改为对应的镜像地址。

常用镜像地址列表:
1. https://pypi.tuna.tsinghua.edu.cn/simple
2. http://pypi.douban.com/simple
3. 

##  `pipenv`安装及常用命令

```
$ pip install --user pipenv
$ python -m site --user-base
$ sudo nano ~/.profile
 export PATH="$HOME/.local/bin:$PATH"
$ sudo source ~/.profile
$ . /etc/profile
$ pipenv --version

常用pipenv命令
$ pipenv --update
$ export PIPENV_VENV_IN_PROJECT=1 (for linux) / SET PIPENV_VENV_IN_PROJECT=1(for windows)
$ pipenv shell
$ pipenv install / pipenv install -r requirements.txt
$ pipenv lock -r  (export to requirement.txt文件)
$ pipenv update
$ pipenv graph

```
  
## 安装配置问题

- zipimport.ZipImportError: can't decompress data; zlib not available 解决办法

参考解决方案[zipimport.ZipImportError: can't decompress data; zlib not available 解决办法](https://www.cnblogs.com/zhangym/p/6226435.html)


- Microsoft Visual C++ 14.0 is required

python3 是用 VC++ 14 编译的, python27 是 VC++ 9 编译的, 安装 python3 的包需要编译的也是要 VC++ 14 以上支持的.
Visual Studio 2013 ---> 12
Visual Studio 2015 ---> 14
Visual Studio 2017 ---> 15
