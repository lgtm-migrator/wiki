# 增强Windows的终端(cmd)

cmd命令行通常不是那么好用，没有自动补全，也不能使用Ctrl + W回退单词 (可以使用Alt + backspace实现)

为了更方便的在windwos下开发，选择一个更好的terminal增强工具必不可少

## List

### [Cygwin](https://www.cygwin.com/)

Cygwin是许多自由软件的集合，最初由Cygnus Solutions开发，用于各种版本的Microsoft Windows上，运行类UNIX系统。Cygwin的主要目的是通过重新编译，将POSIX系统（例如Linux、BSD，以及其他Unix系统）上的软件移植到Windows上。Cygwin移植工作在Windows NT上比较好，在Windows 95和Windows 98上，相对差劲一些。目前Cygwin由Red Hat等负责维护。

功能是最强大的，但是安装起来比较不咋，第一次用可能会很迷惑。

如果只是需要一个自动补全的bash，可以使用git自带的git bash，实际也是cygwin

![](https://res.cloudinary.com/digf90pwi/image/upload/v1495519614/Cygwin_X11_rootless_WinXP_mhpadm.png)

### [cmder](http://cmder.net/)

很漂亮的一个替代品，支持一个实例多个tab，但是启动太慢了

![](https://res.cloudinary.com/digf90pwi/image/upload/v1495519836/main_bkwrcb.jpg)

### [clink](https://mridgers.github.io/clink/)

基于现有的cmd增强，实现了补全和bash常用的快捷键，但是ssh连接remote会有一些异常问题，但是大多数时候工作正常。

![](https://res.cloudinary.com/digf90pwi/image/upload/v1495519908/clink_areirq.png)

### [Hyper](https://hyper.is/)

使用JS编写的terminal，对于我来说很难用，但是外观很好看

![](https://res.cloudinary.com/digf90pwi/video/upload/v1495944961/hyperapp_drlltm.gif)

## 推荐？

我平时使用git bash和clink比较多，git bash最大的问题就在于启动很麻烦，clink在功能和速度之间做了权衡，体验比较好。