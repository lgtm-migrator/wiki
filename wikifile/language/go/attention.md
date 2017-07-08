# Golang的一些注意事项

Note: Golang的一些注意事项

## GOPATH

为了省事, 最好使用默认的GOPATH

GOPATH = %USERPROFILE%/go

## Error

一定要捕捉error, 否则根本不知道哪里出错了

## 依赖

使用gopm管理, 会从七牛云缓存中下载依赖

运行一下命令安装到**GOPATH**而不是**.verdor**中

```bash
gopm get -g [package_name]
```

## 包

一个路径一个包, 不同名的包考虑放在子目录或者其它地方

## 可见性

方法和struct type中的属性, 只有首字母大写才可以被外包访问

特别是在JSON序列化得时候会发现什么都没有, 多半是首字母小写了