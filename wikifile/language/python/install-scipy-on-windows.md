# 在windows下手动安装Scipy

Note: 在windows下安装Scipy通常不是一件非常容易的事情, 因为配置相应的编译器和环境都是非常麻烦的事情, 所以在网上有一些预编译的包, 可以解决Windows下, Scipy安装困难的事情

## Download

先去往[http://www.lfd.uci.edu/~gohlke/pythonlibs/](http://www.lfd.uci.edu/~gohlke/pythonlibs/)找到自己需要的包, 例如[Numpy](http://www.lfd.uci.edu/~gohlke/pythonlibs/#numpy)和[Scipy](http://www.lfd.uci.edu/~gohlke/pythonlibs/#scipy)

以Python3.6为例, 下载

* *numpy‑1.13.0+mkl‑cp36‑cp36m‑win_amd64.whl*
* *scipy‑0.19.0‑cp36‑cp36m‑win_amd64.whl*
* *matplotlib‑2.0.2‑cp36‑cp36m‑win_amd64.whl*

三个包

Note: 这些包下载都比较慢, 需要一些耐心

## Install

进入下载路径, 依次安装下载的文件

```cmd
pip install numpy-1.13.0+mkl-cp36-cp36m-win_amd64.whl
pip install scipy-0.19.0-cp36-cp36m-win_amd64.whl
pip install matplotlib-2.0.2-cp36-cp36m-win_amd64.whl
```

## Test

测试一下是否安装成功了

```python
import numpy, scipy, matplotlib
```

如果没有Error的话, 就是安装成功了