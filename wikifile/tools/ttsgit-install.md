# TortoiseGit 的安装与Clone(版本库)

TortoiseGit和TortoiseSVN差不多，都是版本控制的GUI接口

## 安装

1. TortoiseGit只是图形接口，所以首先需要安装Git
    在[Git官网](https://www.git-scm.com/download/)下载，然后一直下一步就行
1. 在[TortoiseGit官网](https://tortoisegit.org/download/),下载64位的TortoiseGit，安装即可
1. 根据情况，你还可以选择一个语言包下载
1. 推荐使用openssh客户端, 而不是putty的ssh客户端, 这样的话在命令行中的git也可以正常访问公私钥

现在，在windows folder中右键鼠标，将会出现tortoise git的选项

## Clone

类似于SVN的Checkout，从远程仓库拉取一个仓库

只用执行一次

## Commit And Push

对于Git来说，Commit和Push是两个操作，请务必区分清楚

* Commit是将**本地工作区**改动提交到**本地仓库**

* Push是将**本地仓库**推送到**远程仓库**

TortoiseGit在Commit的时候，直接提供Commit && Push操作

* **必须填写message(提交注释)，声明你做了什么，Commit & Push按钮才会被激活**


## Pull

从远程仓库拉取改动，并合并到当前分支，==fetch&&merge，可以理解为SVN的Update

当远程仓库和本地仓库发生冲突时，需要解决冲突

## 其他

更多Git相关，欢迎参看[廖雪峰的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000),他写的很好