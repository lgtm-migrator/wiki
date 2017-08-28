# Golang的一些注意事项

Note: Golang的一些注意事项

## GOPATH

为了省事, 最好使用默认的GOPATH

GOPATH = %USERPROFILE%/go

**可以使用vendor或者其他路径为GOPATH**

## Error

可以考虑使用`panic`,`recover`实现try catch，否则总是根据多值返回判断，太不优雅了。

## 依赖

使用gopm管理, 会从七牛云缓存中下载依赖

运行一下命令安装到**GOPATH**而不是**.verdor**中

```bash
gopm get -g [package_name]
```

**使用govendor保存依赖的源文件，也可以加快构建的速度**

```bash
govendor init
govendor add +external
```

## 包

一个路径一个包, 不同名的包考虑放在子目录或者其它地方

## 可见性

方法和struct type中的属性, 只有首字母大写才可以被外包访问

特别是在JSON序列化得时，如果发现什么都没有, 多半是首字母小写了