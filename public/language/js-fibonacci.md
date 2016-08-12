# 使用js实现的fibonacci数列

## Code

```javascript
> var fibonacci = x => x> 2 ? (t=fibonacci(x-1)) &&  t.concat(t[t.length-1]+t[t.length-2]) :[1,1]
> fibonacci(15)
[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]
```

## 思想

周知，fibonacci数列是一个著名的数列，即A<sub>1</sub>=A<sub>2</sub>=1, A<sub>n</sub>=A<sub>(n-1)</sub>+A<sub>n-2</sub>(n>2)

以上函数即是定义的标准实现。
如果x<=2即返回[1,1]数组
如果x>2即递归获取x-1的fibonacci数列，直到获取[1,1]后返回

有一点问题就是输入值小于2的时候，没有什么提示

## 其它

抽空又写了一个三角数列

```javascript
> var trian_num = n => n > 1 ? (t = trian_num(n - 1)) && t.concat(t[t.length - 1] + n) : [1]
> trian_num(11)
[ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66 ]
```