# 面向切面编程

AOP，即面向切面编程，是一种编程范式，是通用过程(GP)以及面向对象编程(OOP)的补充和增强

通过AOP，可以避免混杂的代码，将通用的代码收束在一定的区间

以下实现一个简单的AOP原型

## 代理

proxy.py，这个模块主要用于实现(简单的)代理模式

```python
# -*- coding: utf-8 -*-
# proxy.py 用于动态代理
import inspect,datetime

# 默认处理
def defaultHandler(func,*args,**kwargs):
    print("function %s has been invoked "%func.__name__)
    result = func(*args,**kwargs)
    return result
# 获取代理
def getProxy(func,handler=defaultHandler):
    def proxy(*args, **kwargs):
        result = handler(func,*args,**kwargs)
        return result
    return proxy
```

## AOP核心

aop.py，原型的核心，这里是通过前缀名去查找相应的advice

```python
# -*- coding: utf-8 -*-
# aop.py aop的实际实现
import inspect,datetime,proxy

advices = {}
# AOP代理 查找advice 并执行
def aopHandler(func,*args,**kwargs):
    result=None
    for pattern in advices:
        if str.startswith(func.__name__,pattern):
    # 调用advice
    result = advices[pattern](func,*args,**kwargs)
    return result
# 获取AOP代理
def getProxy(func):
    return proxy.getProxy(func,aopHandler)
# 注册advice
def registeAdvice(pattern,advice):
    advices[pattern] = advice

```


## RUN

测试一下


```python
# -*- coding: utf-8 -*-
import aop,datetime

def printDate(time):
    print(time)

def add(num1,num2):
    return num1+num2

def log(func,*args,**kwargs):
    funcreturn = func(*args,**kwargs)
    print("func %s be invoke"%func.__name__)
    print("param is ",args)
    return funcreturn

# 注册log advice到所有方法
aop.registeAdvice('',log)
# 获取代理并调用printdate方法
aop.getProxy(printDate)(datetime.datetime.today())
# 获取代理并调用add方法
print (aop.getProxy(add)(1,3))
```

测试结果

```
> python aop-test.py                                                                    
2016-09-15 12:22:08.872135
func printDate be invoke
param is  (datetime.datetime(2016, 9, 15, 12, 22, 8, 872135),) 
func add be invoke
param is  (1, 3) 
4 
```


## 结语

在AOP中，反射和代理是十分重要的组成部分

对于Python来说，通过装饰器可以很简单的实现代理，读者不妨试一试