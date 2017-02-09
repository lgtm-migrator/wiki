# TortoiseGit 的安装与Clone(版本库)

TortoiseGit和TortoiseSVN差不多，都是版本控制的GUI接口

## 安装

1. TortoiseGit只是图形接口，所以首先需要安装Git
    在[Git官网](https://www.git-scm.com/download/)下载，然后一直下一步就行
2. 在[TortoiseGit官网](https://tortoisegit.org/download/)下载64位的TortoiseGit，安装即可

现在右键鼠标将会出现tortoisegit的选项

## Clone

类似于SVN的Checkout，从远程仓库拉取一个仓库

只用执行一次

## Commit And Push

对于Git来说，Commit和Push是两个操作

Commit是将改动提交到**本地仓库**

Push是将本地仓库推送到**远程仓库**

TortoiseGit在Commit的时候，直接提供Commit && Push

**必须填写message(提交注释)，声明你做了什么，Commit & Push按钮才会被激活**

## Pull/Sync

从远程仓库拉取改动，可以理解为SVN的Update

## 其他

更多Git相关，欢迎参看[廖雪峰的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000),他写的很好