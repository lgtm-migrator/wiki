# 利用NodeJS和MDWiki快速搭建一个Wiki站点

很多时候我们不需要强大的Web服务器和Wiki，只是需要一个简单的站点，来存放我们的文档和教程
以下给出一个方案，通过NodeJS和MDWiki实现简易的Wiki站点搭建
教程使用Win7系统

## 搭建NodeJS环境

* 进入[NodeJS官网](https://nodejs.org/en/)下载二进制包安装
  如果是Linux发行版可以使用apt/yum等包管理器安装，在某些发行版中npm，和node是分开的，需要注意
  安装完成之后请在shell/cmd中通过 node -v 确认nodejs的版本在4.2.0 - 6.2.2 之间
* 使用npm 安装express-generator

```bash
(Linux需要sudo)
npm install express-generator -g
```
* 使用express生成器搭建一个项目

```bash
express wiki
```
系统会显示

```bash
   create : wiki
   create : wiki/package.json
   create : wiki/app.js
   create : wiki/public
   create : wiki/public/javascripts
   create : wiki/public/images
   create : wiki/public/stylesheets
   create : wiki/public/stylesheets/style.css
   create : wiki/routes
   create : wiki/routes/index.js
   create : wiki/routes/users.js
   create : wiki/views
   create : wiki/views/index.jade
   create : wiki/views/layout.jade
   create : wiki/views/error.jade
   create : wiki/bin
   create : wiki/bin/www

   install dependencies:
     > cd wiki && npm install

   run the app:
     > SET DEBUG=wiki:* & npm start
```

* 初始化项目

```
cd wiki && npm install
```

## 将mdwiki导入项目中

* 进入MDWiki的[官方GitHub](https://github.com/Dynalon/mdwiki/releases)下载最新的发行版，教程所使用的是0.6.2版本
* 提取zip中的mdwiki.html到wiki/public目录下(并改名为index.html)

## 开始编写你的Wiki
（在wiki/public目录下）

* 创建一个index.md文件，在新建的index.md中编写我们的首页

```markdown
# 你好MDWiki

## 基于NodeJS和Expess4

* 使用最新的技术

## 使用MarkDown编写文档

* 轻松愉快
```
* 保存的时候请注意保存为UTF-8编码，否则会出现乱码


## 启动

* cd .. 回到上一级目录，也就是wiki目录下，启动项目

```bash
npm start
```
* 使用浏览器打开http://localhost:3000

## 完善你的首页

* 添加导航栏
  在public目录下创建一个navigation.md

```markdown
# Wiki的标题

[首页](index.md)

[菜单1]()

  * # 子菜单1
  * [项目1](md文件名.md)
  - - - -
  * # 子菜单2
  * [项目2](md文件名2.md)

[菜单2](md文件名3.md)
- - - -
[菜单3](md文件名4.md)
```

刷新一下页面
你就可以看到页面上部的导航栏了
更多的文档请参看官方网站

## 其他

* 项目的默认端口为3000
* 你可以用Nginx或者Apache反向代理NodeJS项目
* 你可以通过修改wiki/bin/www文件，来改变项目的默认端口号
* 也可以通过set PORT=80 && npm start命令来启动项目，指定端口号