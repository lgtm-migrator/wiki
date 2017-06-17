# About

Note: 欢迎来到我的维基，这是一个基于[MDWiki](http://dynalon.github.io/mdwiki)项目的页面，感谢他们。
字体可能有点小，推荐缩放到125% - 140%
全站使用HTML5缓存，会在第一次访问加载所有文档，有时候你需要刷新以看见最新的文章

## Info

此网站存放着一些教程和文档

不仅仅是软件工程方面，还有一些大学课程的笔记

这些文档都是自己写，自己看，难免会有疏忽

如果针对内容，你发现了问题/想要提出建议，或者希望寻求一定的帮助，欢迎联系我

## Learning Log

**2017年6月17日**

忙于SAP的工作，其实还好，写了一个SAP UI5的项目生成器，然后对一个除水印的项目加上了简单的UI

准备写一个允许热更新的脚手架

在诺托璞的网站大规模使用OSS，第一次完整做了i18n，加入了邮件和其它功能

接触了CouchDB，在于API方面，确实是非常漂亮，但是CouchDB的性能没有我想象中那样好，或者说和MySQL比较起来优势不大，而索引文件又太大了。

---

**2017-4-6 11:01:07**

买了一个ipad mini2，也有可能是机子太老了，也有可能是ios本身的问题，动画完成之前不让操作确实很难受，不过用来看书看视频还不错

创建了一个全唐诗的API，放在[这里](https://github.com/Soontao/Tang-Poetry-Api)

尝试把Access和Sqlite迁移到Mysql，但是总会有各种各样的问题，主要在于编码问题

位于vultr的shadowsocks服务器出现了问题，疑似被黑，怀疑是docker或者daocloud的漏洞，reinstall以后关闭不相干的端口

---

**2017-3-19 20:31:50**

把wiki的gh-page分支移除

周末抽空玩儿了一个教<御剑情缘>的游戏，我想，正是因为付出了时间，所以一件事情才有意义

在网上看见一个关于唐诗的NLP项目[poetry_analyzer](https://github.com/MrQianJinSi/poetry_analyzer)，打算将其用现代Web页面展现

把Vue.JS的Guide走了一遍，在学了三遍之后，我想我大概明白了vue，笑

Harvard共享了一个[CBDB中國歷代人物傳記資料庫](http://cbdb.fas.harvard.edu/)数据库，我将其做成API，在这里[cbdb_api](https://github.com/Soontao/cbdb_api)

---

**2017-3-12 12:09:25**

在服务器部署了一个[Typecho博客](https://blog.fornever.org/)，很清新

尝试关闭服务器的80端口，看看是不是可以不用备案

深入研究了一下http over tls，至少目前https是可以放心的了

csymicrosoft彻底不可用了

试用了一下caddy提供的quic，建立连接确实很快，现阶段有两个问题，1.容易崩溃，2.传输静态文件会有问题

---

**2017-3-5 09:59:22**

购买了一个金山云，实在是太便宜了，4G+2Core每月只要99

用node写了一个简单的webhook服务器，用于持续部署

在牛客网上刷题，网络和算法比较薄弱，把一些编程题放在了snippets仓库里

为discoverer写了一个micro service sample

---

**2017-2-25 20:05:35**

将gogs server迁移到host1plus上面，后面不准备用阿里云了

继续在完善discoverer framework，在考虑是否集成SSDP协议

购买了fornever.org域名，和国外域名商对比之后，万网居然算是最实惠的

---

**2017-2-19 11:00:51**

这一个多月，在研究Spring Cloud，Cloud Foundry，微服务，CI

用Spring Cloud组织了一个简单的，含有生产者消费者服务发现的App，本地运行没有问题，但是在部署到CF上时，出现了一些问题，待以后解决

在CF上部署了Python，Node，Java，Static File和二进制文件

将travis-ci和cf集成，效果真的不错，比想象中灵活

在host1plus上部署了一个shadowsock server，延迟300ms左右，使用adblock语法去做user rules

## Contact

邮箱 <theo.sun@outlook.com>

手机 15680437825
