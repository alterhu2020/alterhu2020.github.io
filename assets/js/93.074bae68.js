(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{349:function(t,e,a){"use strict";a.r(e);var s=a(9),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#pip-pipenv-installation"}},[t._v("pip, pipenv installation")])]),a("li",[a("a",{attrs:{href:"#切换python镜像源"}},[t._v("切换python镜像源")])]),a("li",[a("a",{attrs:{href:"#pip-install-upgrade升级安装包"}},[t._v("pip install --upgrade升级安装包")])]),a("li",[a("a",{attrs:{href:"#pipenv-安装及常用命令"}},[t._v("pipenv安装及常用命令")])]),a("li",[a("a",{attrs:{href:"#pipenv命令操作"}},[t._v("pipenv命令操作")])]),a("li",[a("a",{attrs:{href:"#安装配置问题"}},[t._v("安装配置问题")])]),a("li",[a("a",{attrs:{href:"#requests报错-requestsdependencywarning-urllib3-1-25-10-or-chardet-3-0-4-doesn-t-match-a-supported-version"}},[t._v("requests报错 RequestsDependencyWarning: urllib3 (1.25.10) or chardet (3.0.4) doesn't match a supported version")])]),a("li",[a("a",{attrs:{href:"#these-packages-do-not-match-the-hashes-from-the-requirements-file-if-you-have-updated-the-package-versions-please-update-the-hashes-otherwise-examine-the-package-contents-carefully-someone-may-have-tampered-with-them"}},[t._v("THESE PACKAGES DO NOT MATCH THE HASHES FROM THE REQUIREMENTS FILE. If you have updated the package versions, please update the hashes. Otherwise, examine the package contents carefully; someone may have tampered with them.")])]),a("li",[a("a",{attrs:{href:"#importerror-attempted-relative-import-with-no-known-parent-package"}},[t._v("ImportError: attempted relative import with no known parent package")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"python2-7-installaction-更新到2019年9月1日"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python2-7-installaction-更新到2019年9月1日"}},[t._v("#")]),t._v(" Python2.7 installaction [更新到2019年9月1日]")]),t._v(" "),a("p",[t._v("参考网站地址: "),a("a",{attrs:{href:"https://tecadmin.net/install-python-2-7-on-ubuntu-and-linuxmint/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装Python2.7"),a("OutboundLink")],1),t._v("\n命令如下:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo wget https://www.python.org/ftp/python/2.7.16/Python-2.7.16.tgz\n$ sudo tar xzf Python-2.7.16.tgz\n$ cd Python-2.7.16\n$ sudo ./configure --enable-optimizations\n$ sudo make altinstall \n")])])]),a("p",[a("code",[t._v("make altinstall")]),t._v(" is used to prevent replacing the default python binary file /usr/bin/python.")]),t._v(" "),a("h1",{attrs:{id:"python3-8-apt安装步骤【更新2020年02月22日】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python3-8-apt安装步骤【更新2020年02月22日】"}},[t._v("#")]),t._v(" Python3.8 apt安装步骤【更新2020年02月22日】")]),t._v(" "),a("ol",[a("li",[t._v("Run the following commands as root or user with sudo access to update the packages list and install the prerequisites:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt update\n$ sudo apt install software-properties-common\n$ sudo apt install dirmngr\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Add the deadsnakes PPA to your system’s sources list,参考仓库：https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo add-apt-repository ppa:deadsnakes/ppa\n$ sudo apt update\n")])])]),a("p",[t._v("When prompted press Enter to continue:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Press [ENTER] to continue or Ctrl-c to cancel adding it.\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Once the repository is enabled, install Python 3.8 with:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt install python3.8\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("Verify that the installation was successful by typing:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ python3.8 --version\n")])])]),a("h1",{attrs:{id:"python3-8-installation-更新到2019年8月10日"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python3-8-installation-更新到2019年8月10日"}},[t._v("#")]),t._v(" Python3.8 installation [更新到2019年8月10日]")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://linuxize.com/post/how-to-install-python-3-7-on-debian-9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Install Python 3.7 on Debian 9"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://jcutrer.com/linux/upgrade-python37-ubuntu1810",target:"_blank",rel:"noopener noreferrer"}},[t._v("Modify python command"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" purge  python3 -y\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" purge --auto-remove python3 -y\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereis")]),t._v(" python3 python3.5\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" build-essential libssl-dev zlib1g-dev "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" libbz2-dev liblzma-dev libreadline-dev libsqlite3-dev "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" llvm libncurses5-dev  libncursesw5-dev libc6-dev libgdbm-dev libnss3-dev libffi-dev xz-utils openssl "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tk-dev\n\n    以下的包bzip2 libbz2-dev解决问题: pip.exceptions.DistributionNotFound: No matching distribution found "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Twisted,主要是因为如果包是：tar.bz2则pip不能安装\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" libbz2-dev\n    lxml安装出错误:  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" sure the development packages of libxml2 and libxslt are installed \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libxml2-dev libxslt-dev\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.python.org/ftp/python/3.8.1/Python-3.8.1.tar.xz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xf Python-3.8.1.tar.xz\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Python-3.8.1\n$ ./configure --enable-optimizations --enable-ipv6 --enable-loadable-sqlite-extensions\n$ nproc\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("  / "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -j "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" altinstall\n$ python3.9 -V\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /usr/bin/python*\n$ update-alternatives --list python\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/python python /usr/bin/python2.7 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/python python /usr/local/bin/python3.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" update-alternatives --install /usr/bin/python3 python3 /usr/local/bin/python3.8 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n$ update-alternatives --list python\n$ update-alternatives --config python\n\n")])])]),a("h2",{attrs:{id:"pip-pipenv-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pip-pipenv-installation"}},[t._v("#")]),t._v(" "),a("code",[t._v("pip")]),t._v(", "),a("code",[t._v("pipenv")]),t._v(" installation")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://linuxize.com/post/how-to-install-pip-on-debian-9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to install Pip"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ostechnix.com/pipenv-officially-recommended-python-packaging-tool/",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to install pipenv"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[a("code",[t._v("pip")]),t._v(" 安装")])]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://bootstrap.pypa.io/get-pip.py\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" python3 get-pip.py\n")])])]),a("p",[t._v("如果出现错误： Command '('lsb_release', '-a')' returned non-zero\n参考 (https://stackoverflow.com/questions/44967202/pip-is-showing-error-lsb-release-a-returned-non-zero-exit-status-1)，\n使用命令： "),a("code",[t._v("sudo nano /usr/bin/lsb_release")]),t._v("\nedited the first line from #! /usr/bin/python3 to #! /usr/bin/python3.7")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("如果出错：Package 'python3-distutils' has no installation candidat\n\n执行如下命令确认pip对应的python版本是2.7还是3.8\n$ pip -V\n\n")])])]),a("p",[t._v("如果出现错误： ImportError: cannot import name 'main' from 'pip'，因为"),a("code",[t._v("pip")]),t._v("使用的是python2.7的命令，所以应该参考如下： https://stackoverflow.com/questions/44455001/how-to-change-pip3-command-to-be-pip/44455078")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ pip3 -V\n$ alias pip=pip3\n$ sudo update-alternatives --install /usr/bin/pip pip /usr/bin/pip3 1\n$ pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple\n\n")])])]),a("h2",{attrs:{id:"切换python镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换python镜像源"}},[t._v("#")]),t._v(" 切换python镜像源")]),t._v(" "),a("p",[t._v("a）Linux下，修改"),a("code",[t._v("~/.pip/pip.conf")]),t._v("(没有就创建一个文件夹及文件。文件夹要加“.”，表示是隐藏文件夹,root用户安装时目录为："),a("code",[t._v("/root/.config/pip/pip.conf")]),t._v(")\n内容如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[global]\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n[install]\ntrusted-host = https://pypi.tuna.tsinghua.edu.cn\n")])])]),a("p",[t._v("(b) windows下，直接在user目录中创建一个pip目录，如："),a("code",[t._v("C:\\Users\\xx\\pip")]),t._v("，然后新建文件"),a("code",[t._v("pip.ini")]),t._v("，即 "),a("code",[t._v("%HOMEPATH%\\pip\\pip.ini")]),t._v("，在"),a("code",[t._v("pip.ini")]),t._v("文件中输入以下内容（以豆瓣镜像为例）：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[global]\nindex-url = http://pypi.douban.com/simple\n[install]\ntrusted-host = pypi.douban.com\n")])])]),a("p",[t._v("(c) 如果是使用的"),a("code",[t._v("pipenv")]),t._v(",则可以在脚本目录下面修改"),a("code",[t._v("Pipfile")]),t._v(",修改为对应的镜像地址。")]),t._v(" "),a("p",[t._v("常用镜像地址列表:")]),t._v(" "),a("ol",[a("li",[t._v("https://pypi.tuna.tsinghua.edu.cn/simple")]),t._v(" "),a("li",[t._v("http://pypi.douban.com/simple")]),t._v(" "),a("li")]),t._v(" "),a("h2",{attrs:{id:"pip-install-upgrade升级安装包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pip-install-upgrade升级安装包"}},[t._v("#")]),t._v(" pip install --upgrade升级安装包")]),t._v(" "),a("p",[t._v("例如需要升级安装scrapy为2.0，如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$  pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade scrapy\n")])])]),a("p",[t._v("如果需要升级pip包，如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ python -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip\n")])])]),a("h2",{attrs:{id:"pipenv安装及常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipenv安装及常用命令"}},[t._v("#")]),t._v(" "),a("code",[t._v("pipenv")]),t._v("安装及常用命令")]),t._v(" "),a("ClientOnly",[a("in-article-adsense",{attrs:{"ins-style":"display:block; text-align:center;","data-ad-slot":"7727965566"}})],1),t._v(" "),a("h2",{attrs:{id:"pipenv命令操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipenv命令操作"}},[t._v("#")]),t._v(" pipenv命令操作")]),t._v(" "),a("p",[t._v("2020年0826永久更新改变默认的pipenv的路径：")]),t._v(" "),a("p",[t._v("在windows下使用pipenv shell时，虚拟环境文件夹会在C：\\Users\\Administrator.virtualenvs\\目录下默认创建，为了方便管理，将这个虚环境的文件的位置更改一下。")]),t._v(" "),a("p",[t._v("新建一个名为“ "),a("strong",[t._v("WORKON_HOME")]),t._v(" ”的环境变量（如果已存在就忽略此步骤），然后将环境变量的值设置为“ "),a("strong",[t._v(".virtualenvs")]),t._v(" ”")]),t._v(" "),a("p",[t._v("以后所有的虚拟环境都会在当前python项目下面创建一个.virtualenvs目录。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ pip install --user pipenv\n$ python -m site --user-base\n$ sudo nano ~/.profile\n export PATH="$HOME/.local/bin:$PATH"\n$ sudo source ~/.profile\n$ . /etc/profile\n$ pipenv --version\n\n常用pipenv命令\n$ pipenv --update\n$ export PIPENV_VENV_IN_PROJECT=1 (for linux) / SET PIPENV_VENV_IN_PROJECT=1(for windows)\n$ pipenv shell\n$ pipenv install / pipenv install -r requirements.txt\n$ pipenv lock -r  (export to requirement.txt文件)\n$ pipenv update\n$ pipenv graph\n\n')])])]),a("h2",{attrs:{id:"安装配置问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置问题"}},[t._v("#")]),t._v(" 安装配置问题")]),t._v(" "),a("ul",[a("li",[t._v("zipimport.ZipImportError: can't decompress data; zlib not available 解决办法")])]),t._v(" "),a("p",[t._v("参考解决方案"),a("a",{attrs:{href:"https://www.cnblogs.com/zhangym/p/6226435.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("zipimport.ZipImportError: can't decompress data; zlib not available 解决办法"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Microsoft Visual C++ 14.0 is required")])]),t._v(" "),a("p",[t._v("python3 是用 VC++ 14 编译的, python27 是 VC++ 9 编译的, 安装 python3 的包需要编译的也是要 VC++ 14 以上支持的.\nVisual Studio 2013 ---\x3e 12\nVisual Studio 2015 ---\x3e 14\nVisual Studio 2017 ---\x3e 15")]),t._v(" "),a("h2",{attrs:{id:"requests报错-requestsdependencywarning-urllib3-1-25-10-or-chardet-3-0-4-doesn-t-match-a-supported-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requests报错-requestsdependencywarning-urllib3-1-25-10-or-chardet-3-0-4-doesn-t-match-a-supported-version"}},[t._v("#")]),t._v(" requests报错 RequestsDependencyWarning: urllib3 (1.25.10) or chardet (3.0.4) doesn't match a supported version")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pip install --upgrade requests\n\n")])])]),a("h2",{attrs:{id:"these-packages-do-not-match-the-hashes-from-the-requirements-file-if-you-have-updated-the-package-versions-please-update-the-hashes-otherwise-examine-the-package-contents-carefully-someone-may-have-tampered-with-them"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#these-packages-do-not-match-the-hashes-from-the-requirements-file-if-you-have-updated-the-package-versions-please-update-the-hashes-otherwise-examine-the-package-contents-carefully-someone-may-have-tampered-with-them"}},[t._v("#")]),t._v(" THESE PACKAGES DO NOT MATCH THE HASHES FROM THE REQUIREMENTS FILE. If you have updated the package versions, please update the hashes. Otherwise, examine the package contents carefully; someone may have tampered with them.")]),t._v(" "),a("p",[t._v("这个问题主要是在使用pipenv命令进行安装twisted出现的:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('pipenv install "C:\\Users\\Administrator\\Downloads\\Twisted-20.3.0-cp38-cp38-win32.whl"\n')])])]),a("p",[t._v("解决方法是首先进入pipenv环境，然后替换使用pip命令进行更新操作：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('> pipenv shell\n> pip install --upgrade "C:\\Users\\Administrator\\Downloads\\Twisted-20.3.0-cp38-cp38-win32.whl"\n或者\n> pip install --no-cache-dir "C:\\Users\\Administrator\\Downloads\\Twisted-20.3.0-cp38-cp38-win32.whl"\n')])])]),a("h2",{attrs:{id:"importerror-attempted-relative-import-with-no-known-parent-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importerror-attempted-relative-import-with-no-known-parent-package"}},[t._v("#")]),t._v(" ImportError: attempted relative import with no known parent package")]),t._v(" "),a("p",[t._v("Pycharm或者编译器打开项目，过多一层或者过少一层打开目录都会导致导入错误，是因为编译器打开那个目录，就将python的工作目录设置那一层，只有正确的目录结构才能导入正确包。")]),t._v(" "),a("p",[t._v(". 和 ..导入 相对位置是执行文件的当前目录")]),t._v(" "),a("p",[t._v("因为python的相对导入需要用到父级包作为相对的参考位置\n而这个位置是通过__name__属性和__package__属性进行决定的，\n当 "),a("strong",[t._v("name")]),t._v(" 等于 __main__和 "),a("strong",[t._v("package")]),t._v(" = None的时候导致的问题没有父级包")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);