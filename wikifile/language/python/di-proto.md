# 依赖注入原型

DI依赖注入是IoC控制反转的一种实现(另外一种是依赖查找)。

控制反转的思想不再赘述，以下是一个python实现的DI原型，实现了函数参数的注入

## Code

```python
# -*- coding: utf-8 -*-
# 这是一个依赖注入的原型
import inspect,datetime

# 上下文
context = {}

# 注入
def inject(func):
    def wrapper(*args, **kwargs):
        # 获取函数的参数名
        argsName=inspect.getargspec(func).args
        # 根据参数名，从context获取实例
        args=map(lambda name,value: context[name] if value is None else value,argsName,func.__defaults__)
        # 获取返回值
        result = func(*args, **kwargs)
        return result
    return wrapper

# 注册对象到上下文容器
def register(name,value):
    context[name]=value

@inject
def welcome(username=None,date=None):
    print ("hello %s,time is %s"%(username,date))

# 注册对象到容器
register('date', datetime.datetime.today())
register('username','suntao')

welcome()
```

output

```bash
hello suntao,time is 2016-09-29 23:02:00.928413
```


## IDEA

思路非常清晰明确简单

通过python的装饰器模拟动态代理

通过字典实现简单的上下文

通过inspect模块获取函数的参数名，再从context中获取实例，最后调用原函数

## More

如果想使注入透明，可以对容器进行改造，使之在构造没有的对象的时候，也使用注入即可，这样的话，只用获取一次代理就行了


## 其他

简化的DI原型，所以非必要的部分都省去，如果读者有兴趣，可以考虑装饰类对象，实现更加完整的DI

如果看不明白code(with comments)，可以自行学习相关模块，也是一种提升

python27和python34(35)都可以跑，用到的模块都是核心模块

源码托管在[这里](https://git.suntao.science/suntao/some-code-snippet/src/e98acdac3fb0fa6e5433c412abc520938574f17b/python/DI.py)，可以参阅
