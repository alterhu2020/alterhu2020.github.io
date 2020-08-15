---
title: youtube-dl视频下载神器
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 介绍

youtube-dl 是一个命令行工具，对我所知的大部分视频网站有不错的支持，你可以选择下载视频，或是将视频流直接导出到自己想使用的播放器中，也可以以JSON的形式获取可下载资源的URL。

使用方便、足够简洁，这是我在这里推荐的理由。

youtube-dl 的 GitHub 页面：https://github.com/rg3/youtube-dl（喜欢的话给作者star哦~）

## 安装

- window用户：

1. 下载文件[youtube-dl.exe](https://yt-dl.org/latest/youtube-dl.exe)。
2. 下载对应的ffmpeg.exe将youtube-dl.exe放到ffmpeg的bin目录下面，ffmpeg官网：http://ffmpeg.org/
3. 配置环境变量切换到ffmpeg的bin目录

- Linux用户：

1. 因为是python开发的所以直接安装对应的python包： `sudo -H pip install --upgrade youtube-dl`
2. 下载对应的ffmpeg包,访问官网: http://ffmpeg.org/,下载对应的debian的deb包：`https://tracker.debian.org/pkg/ffmpeg`，命令行：

```shell
$ sudo apt install ffmpeg
$ ffmpeg -version
$ sudo -H pip install --upgrade youtube-dl

```

## 命令参考

参数： `--ffmpeg-location `可以用来设置ffmpeg的路径，可以是可执行文件路径或者对应的执行文件路径的文件夹

### 普通下载

通过 Youtube-dl 下载视频十分简洁，例如你需要下载哔哩哔哩视频：`http://www.bilibili.com/video/av11728123/` 你可以这样：

```sh
youtube-dl 'http://www.bilibili.com/video/av11728123/'

```

### 下载最好的音视频格式

```shell
#会显示不同的格式和质量的视频,然后执行下方命令下载你需要的质量视频
> youtube-dl -F https://www.youtube.com/watch?v=zbGZufWXJDA
> youtube-dl -f 22 https://www.youtube.com/watch?v=zbGZufWXJDA

# 如下命令会下载质量最好的视频和音频并保存为mp4文件
youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/bestvideo+bestaudio' --merge-output-format mp4  https://www.youtube.com/watch?v=zbGZufWXJDA
```

### 输出文件的名字

如果你想指定下载输出文件的名字（有时对批量下载的人来说十分重要），你可以使用`-o`：

```shell
# 下载至文件：你要的名字 (无后缀)
youtube-dl 'http://www.bilibili.com/video/av11728123/' -o '你要的名字'
```

当然，请注意你选择的名字的拓展名，youtube-dl 并不会自动修改你所指定的后缀名。youtube-dl 同时也支持 OUTPUT TEMPLATE，你可以利用 `%(title)s`等参数（参考 Python 的字符串形式）将文件命名，例如：

```shell
# 下载至文件：【全明星freestyle】音浪.mp4
youtube-dl 'http://www.bilibili.com/video/av11728123/' -o '%(title)s.%(ext)s'
```

### 使用代理下载

有时候不能下载youtube视频，你可以尝试使用你的代理进行通信。youtube-dl 提供了使用代理的参数，你可以简单地将自己代理的地址填入：

```shell
# 成功通过ss在国内下载某不存在网站的视频
youtube-dl --proxy 127.0.0.1:1087 'https://www.youtube.com/watch\?v\=_fc_TLg3eQ4'
```

### 其他下载选项

youtube-dl 还提供很多其他的下载选项，如挑选合适的分辨率，下载一个播放列表等，你可以研究并自定义如何下载一个文件。

## 国内版的youtube-dl：You-Get

2020/08/15更新: 作者又开始重新更新维护这个工具了，大家可以放心使用了！

You-Get的GitHub地址：<https://github.com/soimort/you-get>

事实上而言，我发现You-Get对国内视频音乐网站的支持更加全面。但是如果你遇到无法使用`youtube-dl`下载的视频页面，不妨试试这个同类小工具。支持的国内国外音视频网站如下：

## Supported Sites

| Site | URL | Videos? | Images? | Audios? |
| :--: | :-- | :-----: | :-----: | :-----: |
| **YouTube** | <https://www.youtube.com/>    |✓| | |
| **Twitter** | <https://twitter.com/>        |✓|✓| |
| VK          | <http://vk.com/>              |✓|✓| |
| Vine        | <https://vine.co/>            |✓| | |
| Vimeo       | <https://vimeo.com/>          |✓| | |
| Veoh        | <http://www.veoh.com/>        |✓| | |
| **Tumblr**  | <https://www.tumblr.com/>     |✓|✓|✓|
| TED         | <http://www.ted.com/>         |✓| | |
| SoundCloud  | <https://soundcloud.com/>     | | |✓|
| SHOWROOM    | <https://www.showroom-live.com/> |✓| | |
| Pinterest   | <https://www.pinterest.com/>  | |✓| |
| MTV81       | <http://www.mtv81.com/>       |✓| | |
| Mixcloud    | <https://www.mixcloud.com/>   | | |✓|
| Metacafe    | <http://www.metacafe.com/>    |✓| | |
| Magisto     | <http://www.magisto.com/>     |✓| | |
| Khan Academy | <https://www.khanacademy.org/> |✓| | |
| Internet Archive | <https://archive.org/>   |✓| | |
| **Instagram** | <https://instagram.com/>    |✓|✓| |
| InfoQ       | <http://www.infoq.com/presentations/> |✓| | |
| Imgur       | <http://imgur.com/>           | |✓| |
| Heavy Music Archive | <http://www.heavy-music.ru/> | | |✓|
| Freesound   | <http://www.freesound.org/>   | | |✓|
| Flickr      | <https://www.flickr.com/>     |✓|✓| |
| FC2 Video   | <http://video.fc2.com/>       |✓| | |
| Facebook    | <https://www.facebook.com/>   |✓| | |
| eHow        | <http://www.ehow.com/>        |✓| | |
| Dailymotion | <http://www.dailymotion.com/> |✓| | |
| Coub        | <http://coub.com/>            |✓| | |
| CBS         | <http://www.cbs.com/>         |✓| | |
| Bandcamp    | <http://bandcamp.com/>        | | |✓|
| AliveThai   | <http://alive.in.th/>         |✓| | |
| interest.me | <http://ch.interest.me/tvn>   |✓| | |
| **755<br/>ナナゴーゴー** | <http://7gogo.jp/> |✓|✓| |
| **niconico<br/>ニコニコ動画** | <http://www.nicovideo.jp/> |✓| | |
| **163<br/>网易视频<br/>网易云音乐** | <http://v.163.com/><br/><http://music.163.com/> |✓| |✓|
| 56网     | <http://www.56.com/>           |✓| | |
| **AcFun** | <http://www.acfun.cn/>        |✓| | |
| **Baidu<br/>百度贴吧** | <http://tieba.baidu.com/> |✓|✓| |
| 爆米花网 | <http://www.baomihua.com/>     |✓| | |
| **bilibili<br/>哔哩哔哩** | <http://www.bilibili.com/> |✓|✓|✓|
| 豆瓣     | <http://www.douban.com/>       |✓| |✓|
| 斗鱼     | <http://www.douyutv.com/>      |✓| | |
| 凤凰视频 | <http://v.ifeng.com/>          |✓| | |
| 风行网   | <http://www.fun.tv/>           |✓| | |
| iQIYI<br/>爱奇艺 | <http://www.iqiyi.com/> |✓| | |
| 激动网   | <http://www.joy.cn/>           |✓| | |
| 酷6网    | <http://www.ku6.com/>          |✓| | |
| 酷狗音乐 | <http://www.kugou.com/>        | | |✓|
| 酷我音乐 | <http://www.kuwo.cn/>          | | |✓|
| 乐视网   | <http://www.le.com/>           |✓| | |
| 荔枝FM   | <http://www.lizhi.fm/>         | | |✓|
| 秒拍     | <http://www.miaopai.com/>      |✓| | |
| MioMio弹幕网 | <http://www.miomio.tv/>    |✓| | |
| MissEvan<br/>猫耳FM | <http://www.missevan.com/> | | |✓|
| 痞客邦   | <https://www.pixnet.net/>      |✓| | |
| PPTV聚力 | <http://www.pptv.com/>         |✓| | |
| 齐鲁网   | <http://v.iqilu.com/>          |✓| | |
| QQ<br/>腾讯视频 | <http://v.qq.com/>      |✓| | |
| 企鹅直播 | <http://live.qq.com/>          |✓| | |
| Sina<br/>新浪视频<br/>微博秒拍视频 | <http://video.sina.com.cn/><br/><http://video.weibo.com/> |✓| | |
| Sohu<br/>搜狐视频 | <http://tv.sohu.com/> |✓| | |
| **Tudou<br/>土豆** | <http://www.tudou.com/> |✓| | |
| 虾米     | <http://www.xiami.com/>        |✓| |✓|
| 阳光卫视 | <http://www.isuntv.com/>       |✓| | |
| **音悦Tai** | <http://www.yinyuetai.com/> |✓| | |
| **Youku<br/>优酷** | <http://www.youku.com/> |✓| | |
| 战旗TV   | <http://www.zhanqi.tv/lives>   |✓| | |
| 央视网   | <http://www.cntv.cn/>          |✓| | |
| Naver<br/>네이버 | <http://tvcast.naver.com/>     |✓| | |
| 芒果TV   | <http://www.mgtv.com/>         |✓| | |
| 火猫TV   | <http://www.huomao.com/>       |✓| | |
| 阳光宽频网 | <http://www.365yg.com/>      |✓| | |
| 西瓜视频 | <https://www.ixigua.com/>      |✓| | |
| 新片场 | <https://www.xinpianchang.com//>      |✓| | |
| 快手 | <https://www.kuaishou.com/>      |✓|✓| |
| 抖音 | <https://www.douyin.com/>      |✓| | |
| TikTok | <https://www.tiktok.com/>      |✓| | |
| 中国体育(TV) | <http://v.zhibo.tv/> </br><http://video.zhibo.tv/>    |✓| | |
| 知乎 | <https://www.zhihu.com/>      |✓| | |

还有一些其他的国外网站没有列出来，如果需要支持更多的国外网站，可以配合使用`youtube-dl`工具一起使用。