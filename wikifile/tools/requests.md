# Python2.7 requests使用教程

Requests: HTTP for Humans
确实比官方的urllib/urllib2方便多了
**注意python版本为2.7**

## 安装requests

安装requests和demjson，一个用于http，一个用于转换json

```bash
pip install requests
pip install demjson
```

## 编写脚本

新建一个sample.py文件
打开编辑

```python
# -*- coding:utf-8 -*-
import demjson
import requests
#如果出现中文字符串的话，在字符串前面加上u表明unicode编码，否则demjson处理会出错
data = {
    "value1": u"周黎明",
    "value2": 31
}
# get method
res1 = requests.get("http://localhost:3000/auser")
print res1.content

# post method
# transfer a form 
# value1 = "周黎明" and value2 = 31
res2 = requests.post("http://localhost:3000/auser", data)
print res2.content

# post with jsondata=......
# transfer a form 
# jsondata = JSON.toJSONString(data)
res3 = requests.post("http://localhost:3000/needjson",{'jsondata': demjson.encode(data)})
print res3.content
```

## 执行

```bash
python sample.py
```

## 其他

**demjson不是必须的**
**更多教程请查看[官方文档](http://www.python-requests.org/en/master/)**