---
title: Windows Terminal 安装与配置指南
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

最新更新： 推荐直接使用 [PowerShell 7 ](https://github.com/PowerShell/PowerShell/releases)

## 下载安装


1. 官方提示需要先安装： [Desktop Bridge VC++ v14 Redistributable Package](https://www.microsoft.com/en-us/download/details.aspx?id=53175)
2. 在[microsoft/terminal](https://github.com/microsoft/terminal)仓库下载对应的terminal文件，打开`powershell`命令行执行命令如下安装:

```
> Add-AppxPackage .\Microsoft.WindowsTerminalPreview_1.3.2382.0_8wekyb3d8bbwe.msixbundle
```

## 配置使用

WT 好处都有啥？
根据官方介绍，Windows Terminal 是一个**面向命令行用户的全新、现代化、功能丰富的高性能终端应用程序**。它在实现了社区用户热切期望的许多功能的同时（包括多标签页、富文本、全球化、可配置性、对主题与样式的支持等），依然保持快速与高效，不会消耗大量的内存或电量。

安装完成后可以直接在开始菜单中找到，“Window Terminal Preview”. 

1. 添加右键菜单


2020年0915日最新更新： 参考此脚本： https://github.com/lextm/windowsterminal-shell

不过我还是比较习惯传统的右键菜单「在这里打开终端」的方式。WT 目前还没有内置这一功能，想要手动添加也比较麻烦（下文参考了这个 [issue ](https://github.com/microsoft/terminal/issues/1060)中的方法）。

以管理员权限打开 PowerShell，运行以下命令：

```
$basePath = "Registry::HKEY_CLASSES_ROOT\Directory\Background\shell"
New-Item -Path "$basePath\wt" -Force -Value "Windows Terminal here"
New-ItemProperty -Path "$basePath\wt" -Force -Name "Icon" -PropertyType ExpandString -Value "%LOCALAPPDATA%\Microsoft\WindowsApps\terminal.ico"
New-Item -Path "$basePath\wt\command" -Force -Type ExpandString -Value '"%LOCALAPPDATA%\Microsoft\WindowsApps\wt.exe" -p Ubuntu -d "%V"'

```
如果你足够熟练，也可以自行通过其他方式修改注册表，反正就那么些字段，路径正确就行了。Windows Terminal 的图标可以在 [这里](https://raw.githubusercontent.com/microsoft/terminal/master/res/terminal.ico) 获取 。

> 2020/03/14 更新：Windows Terminal 0.9 版本之后添加了 wt.exe 的命令行参数，可以直接指定启动目录，不需要再修改 profiles.json 中的 `startingDirectory` 字段了。

另外 wt.exe 支持通过` -p `参数指定要打开的 Profile，所以除了 WSL，我还添加了一个在当前目录下打开 PowerShell 的菜单项（注册表中添加一个 Extended 项可以让该右键菜单项仅在按住 Shift 右键时才显示）。你甚至可以通过二级菜单的方式实现更多功能，具体可以参考上面给出的 issue 中的讨论。