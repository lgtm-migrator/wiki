# 启用Chrome随机密码功能

Note: 在一些不支持OAuth和单点登录的网站，我们通常需要注册一些账号，当这些网站数据库被攻破之后，那么你的密码多半不保，所以我们有了密码管理软件，用来生成并记录我们的密码。Chrome已经占据了浏览器的半壁江山，它其实自带的密码生成功能，但是默认情况下并没有打开，所以有了这一篇教程

![](https://res.cloudinary.com/digf90pwi/image/upload/v1504341476/2017-09-02_16-37-22_qy0fh3.gif)

## Before

首先你得有一个Google账号，并且在Chrome中登录

这是非常重要的一点，如果不登录的话，密码就只是保存在本地，那么一旦计算机丢失或者重装，所有的密码都丢失了，会很麻烦

## 设置

OK，打开你的Chrome，然后在地址栏中输入```chrome://flags/```并回车，如图

<center>
<image src="https://res.cloudinary.com/digf90pwi/image/upload/v1495520715/chrome-flags_aqmobd.png"/>
</center>

然后分别设置如下选项

* 密码生成功能 - #enable-password-generation - 已启用
* 自动保存密码 - #enable-automatic-password-saving - 已启用
* 强制保存密码 - #enable-password-force-saving - 已启用
* 手动生成密码 - #enable-manual-password-generation - 已启用

Note: 你可以通过Ctrl+F搜索password，就可以找到这些选项了

<center>
<image src="https://res.cloudinary.com/digf90pwi/image/upload/v1495520715/chrome-password-flags_oxqcem.png"/>
</center>

## 尝试

接下来我们尝试注册一下[豆瓣网站](https://accounts.douban.com/register)

我们在密码的input里面右键，发现出现了生成密码选项

<center>
<image src="https://res.cloudinary.com/digf90pwi/image/upload/v1495520715/chrome-pass-gen-click_fwu60b.png"/>
</center>

点击生成密码之后，chrome出现如下提示，再点击一下即可

<center>
<image src="https://res.cloudinary.com/digf90pwi/image/upload/v1495520715/chrome-pass-gened_pxrnsl.png"/>
</center>

依次填完表单，然后密码就被保存到chrome中了，当需要登录的时候，自动就会填充进去

**一定要记得登陆google账号**，不然换一台电脑，密码就都丢了