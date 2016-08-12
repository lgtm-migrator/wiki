
## 准备工作

需要安装requests和pyquery

```bash
sudo pip install requests pyquery
```

## 导入所需要的包


```python
import requests
from pprint import pprint as pr
from pyquery import PyQuery as pq
```

## 登录数据


```python
username = "" # 这里填入用户名和密码
password = ""
```

## 创建一个session

一个session可以自动持有cookie状态


```python
session = requests.session()
# 最后发现信息门户没有做反爬虫
# session.headers.update({"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36","Referer":"http://idas.uestc.edu.cn/authserver/login?service=http%3A%2F%2Fportal.uestc.edu.cn%2F","Origin":"idas.uestc.edu.cn"})
# session.headers.update({"Content-Type":"application/x-www-form-urlencoded"})
# session.headers.update({"Accept-Language":"zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4"})
# session.headers.update({"Accept-Encoding":"gzip, deflate","DNT":1})
# session.headers.update({"Hots":"idas.uestc.edu.cn"})
# session.headers.update({"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"})
# session.headers.update({"Cache-Control":"max-age=0"})
```


```python
# 主要是先获取一下Cookie
r = session.get("http://idas.uestc.edu.cn/authserver/login?service=http%3A%2F%2Fportal.uestc.edu.cn%2F")
```

## 通过PyQuery获取表单数据

有两个字段 lt,execution 需要从网页中获取

PyQuery允许使用JQuery选择器获取数据，而选择器可以通过浏览器的开发人员工具轻易获得


```python
d = pq(r.text);
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


```python
r = session.post("http://idas.uestc.edu.cn/authserver/login?service=http://portal.uestc.edu.cn/index.portal",data=data)
```

## 校验登录结果


```python
pr(session.cookies.get_dict())
```

    {'CASTGC': 'TGT-760597-4Nzt2VckndWuu95jo36sGzdgrJaGsUdCmrkqXyKL7Oafjw2cbi1469692933750-atK3-cas',
     'JSESSIONID': '00001cK6Y7jw_-BKbQurTgafkNz:19sdu3far',
     'JSESSIONID_ids1': '0001R0uDUX4St3bctO6tzQxJ7Ly:CJEN9N8GG',
     'MOD_AUTH_CAS': 'MOD_AUTH_ST-2238615-dtZU2RVaCfimEHKedCN61469692933851-H1xa-cas',
     'iPlanetDirectoryPro': 'AQIC5wM2LY4SfcxjkJB4CLIYsgVtSJqVPPQKUCGv1v5CvGo%3D%40AAJTSQACMDE%3D%23',
     'route': 'a1450b02a3bfbf6f5e1b74667a4bce88'}



```python
r = session.get("http://eams.uestc.edu.cn/eams/teach/grade/course/person!historyCourseGrade.action?projectType=MAJOR");
```

## 解析成绩数据


```python
table = []
d = pq(r.text)
```


```python
h = d(".gridtable:last thead tr th")
c = d(".gridtable:last tbody tr")

for tr in c:
    line = {}
    for td,i in zip(tr.getchildren(),h):
        line[i.text]=td.text.strip()
    table.append(line)
```

## 显示数据


```python
for line in table:
    print "%s \t%.10s" % (line[u"课程名称"],line[u"最终"])
```

    高级英语读写 	74
    综合应用设计 I 	90
    信息工程导论 	87
    数据结构与算法 	81
    嵌入式系统导论 	83
    计算机组成原理与结构 	63
    大学体育II 	81
    信息检索与利用 	83
    英国文学与文化 	66
    应用数学基础 	86
    MATLAB使用详解 	90
    大学体育I 	71
    软件工程基础 	78
    概率论与数理统计 	60
    政治经济学原理与实践 	45
    哲学通论 	78
    C语言程序设计 	93
    线性代数与空间解析几何I 	78
    数据库原理及应用 	85
    大型机操作系统 	80
    新生教育 	89
    学术英语读写 	83
    计算机网络基础 	75
    美术鉴赏 	91
    军事训练 	80
    微积分I 	73
    微积分II 	68
    网球D 	85
    操作系统基础 	76
    形势与政策 	87
    中国近现代史纲要 	88
    空天信息技术概论 	90
    通用英语 	72
    军事理论 	88
    思想道德修养与法律基础 	85
    数字逻辑设计 	76
    UNIX操作系统基础 	89
    面向对象程序设计(java) 	95
    大学物理Ⅰ 	60
    综合C 	68
    COBOL程序设计 	81
    IT工程师职业基础 	77



```python

```
