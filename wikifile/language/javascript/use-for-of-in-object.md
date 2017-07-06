# 在对象中使用for of

Note: For of 循环主要使用在实现了迭代器的对象上, 比如array和string

## 在Map中使用for of

实现了Iterator接口即可使用for of循环

```javascript
(function test() {
  var m = (new Map()).set("a", 1).set("b", 2)
  for (var [idx, value] of m) {
    console.log(`idx: ${idx}, value: ${value}`)
  }
})()

// idx: a, value: 1
// idx: b, value: 2
```

## 在Object中使用for of

转化为Map使用

```javascript
(function test() {
  var m = new Map(Object.entries({ a: 1, b: 2 }))
  for (var [idx, value] of m) {
    console.log(`idx: ${idx}, value: ${value}`)
  }
})()

// idx: a, value: 1
// idx: b, value: 2
```