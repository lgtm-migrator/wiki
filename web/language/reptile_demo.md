# 信息门户认证

很多朋友想要爬取一下学校的信息门户，这里分享一下我之前做的爬取成绩的程序。

爬取成绩只是次要，关键是如何让信息门户认证。

因为信息门户包含很多子系统，只要认证成功，例如饭卡，课表，选课等等子系统，都可以操作了。

除此之外，大家也可以在本文中看到模拟认证的思想。

## 准备工作

python是必要的，还需要安装requests和pyquery

```bash
sudo pip install requests pyquery
```

下面就开始脚本的编写

## 导入所需要的包


```python
# requests 用于请求
# pyquery 用于解析网页
import requests
from pprint import pprint as pr
from pyquery import PyQuery as pq
```

## 登录数据


```python
# 这里填入用户名和密码
username = ""
password = ""
```

## 创建一个session

一个session可以自动持有cookie状态


```python
session = requests.session()
```


```python
# 主要是先获取一下Cookie
r = session.get("http://idas.uestc.edu.cn/authserver/login?service=http%3A%2F%2Fportal.uestc.edu.cn%2F")
```

## 通过PyQuery获取表单数据

lt，execution这两个字段，需要从网页中获取

PyQuery允许使用JQuery选择器获取数据，而选择器可以通过浏览器的开发人员工具轻易获得


```python
d = pq(r.text)
# 从网页中获取动态生成的字段
lt = d('#casLoginForm > input[type="hidden"]:nth-child(5)').attr.value
execution = d('#casLoginForm > input[type="hidden"]:nth-child(7)').attr.value
data = {
    "username":username,
    "password":password,
    "lt":lt,
    "execution":execution,
    "rmShown":1,
    "dllt":"userNamePasswordLogin",
    "_eventId":"submit" 
}
```

## 发起登录请求

这个请求发出去之后，如果用户名密码正确，就认证成功了(但是用户名密码不正确，也不会有403，只是会跳转到另一个页面)

```python
r = session.post("http://idas.uestc.edu.cn/authserver/login?service=http://portal.uestc.edu.cn/index.portal",data=data)
```

## 获取含有所有成绩数据的页面

这个页面可以通过开发人员工具找到

```python
r = session.get("http://eams.uestc.edu.cn/eams/teach/grade/course/person!historyCourseGrade.action?projectType=MAJOR");
```

## 解析成绩数据

使用pyquery解析html文档

```python
table = []
d = pq(r.text)
```

通过开发人员工具，复制相应的css选择器

```python
h = d(".gridtable:last thead tr th")
c = d(".gridtable:last tbody tr")

for tr in c:
    line = {}
    for td,i in zip(tr.getchildren(),h):
        if td.text is not None :
            line[i.text]=td.text.strip()
    table.append(line)
```

## 显示数据


```python
for line in table:
    print "%s \t%.10s" % (line[u"课程名称"],line[u"最终"])
```

```
    高级英语读写 	74
    .....
```

## 结语

完成了整个认证流程之后，你或许会觉得很简单，实质上其中包含了很多知识，包括http，html，css，python等等知识

最重要的是通过开发人员工具(或者抓包工具)，查看整个流程的报文，然后通过python模拟整个流程。

如果你能理解到这样一个思想，那么无论是怎样的系统，你都可以模拟登录了。