---
title: 翻墙工具环境配置
---

<ClientOnly>
  <in-article-adsense
    ins-style="display:block; text-align:center;"
    data-ad-slot="7727965566"
  />
</ClientOnly>

[[toc]]

## 操作步骤

### Windows

**注：** 你也可以使用 [IPsec/L2TP 模式](clients-zh.md) 连接，无需安装额外的软件。

1. 下载并安装免费的 <a href="https://www.shrew.net/download/vpn" target="_blank">Shrew Soft VPN 客户端</a>。   
   **注：** 该 VPN 客户端支持 Windows 2K/XP/Vista/7/8 系统。
1. 安装提示操作安装完成即可。   
1. 单击开始菜单 -> 所有程序 -> ShrewSoft VPN Client -> VPN Access Manager
1. 单击工具栏中的 **Add (+)** 按钮。
![20200309115224.png](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200309115224.png)
1. 在 **Host Name or IP Address** 字段中输入`你的 VPN 服务器 IP`： 34.69.204.193
![20200309115336.png](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200309115336.png)

1. 单击 **Authentication** 选项卡，从 **Authentication Method** 下拉菜单中选择 **Mutual PSK + XAuth**。

1. 在 **Local Identity** 子选项卡中，从 **Identification Type** 下拉菜单中选择 **IP Address**。
![20200309115935.png](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200309115935.png)
1. 单击 **Credentials** 子选项卡，并在 **Pre Shared Key** 字段中输入`你的 VPN IPsec PSK`： **55e76a3d2285ee1264998ue9597b6f383a978ed6b**
![20200309120528.png](https://raw.githubusercontent.com/alterhu2020/StorageHub/master/img/20200309120528.png)

1. 单击 **Phase 1** 选项卡，从 **Exchange Type** 下拉菜单中选择 **main**。
1. 单击 **Phase 2** 选项卡，从 **HMAC Algorithm** 下拉菜单中选择 **sha1**。
1. 单击 **Save** 保存 VPN 连接的详细信息。
1. 选择新添加的 VPN 连接。单击工具栏中的 **Connect** 按钮。
1. 在 **Username** 字段中输入`你的 VPN 用户名`: **alterhu2020**
1. 在 **Password** 字段中输入`你的 VPN 密码`: **1235674378778**
1. 单击 **Connect**