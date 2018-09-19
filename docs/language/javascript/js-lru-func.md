# js实现的LRU缓存function

Python有这样一个叫做[lru_cache](https://docs.python.org/3/library/functools.html?highlight=lru#functools.lru_cache)的装饰器，缓存函数的返回值，极大的提高了递归和其它编程的效率

在做js函数式编程的时候，发现缺少这么一个模块，所以手写了一个

## 实现

先看看实现

```javascript
'use strict'
// lru缓存模块
const LRU = require('lru')

const lru_func = (f, maxCache = 10) => {
  f.cache = f.cache || new LRU(maxCache)
  return function(...args) {
    const key = JSON.stringify(args);
    var result = f.cache.get(key) || f.apply(undefined, args);
    f.cache.set(key, result);
    return result;
  }
}

module.exports = lru_func;
```

由于某一些特性当前v8引擎还不支持，所以用到了babel进行编译

## 逻辑

很简单的逻辑，将原函数代理一遍，调用的时候根据参数返回缓存值，或者调用原函数进行缓存

## Usage

```javascript
'use strict'

const lru_it = require('lru-func');
const arr_len = 30,
    call_num = 0,
    fibo_arr = [];

const fibo = lru_it((length) => {
  call_num += 1;
  return length <= 2 ? 1 : fibo(length - 1) + fibo(length - 2)
});

for (let i = 1; i <= arr_len; i++) fibo_arr.push(fibo(i));

console.log(`with lru cache\nfibo(1:${arr_len})=${[fibo_arr]}\ninvoke fibo function ${call_num} times\n`)
```

result

```
with lru cache
fibo(1:30)=1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,[......省略]
invoke fibo function 30 times
```

作为对比
```
without lru cache
fibo(1:30)=1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,[......省略]
invoke fibo function 4356586 times
```

如果你对为什么不使用缓存会调用400w次感到疑惑，不妨深入研究一下，甚至可以整理出一个通项

## 其他

代码托管在[这里](https://git.suntao.science/suntao/lru-func)

npm网页在[这里](https://www.npmjs.com/package/lru-func)
