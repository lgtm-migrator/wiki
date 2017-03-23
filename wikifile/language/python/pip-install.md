# 正确安装pip

Note: 在使用debian系的apt工具安装python-pip的时候，经常出现问题，特别是python版本比较老的时候，这里记录一个不会出问题的方法

## 曾经的方法

```bash
sudo apt-get install python-pip
```

偶尔会出现ssl问题

## 新的方法

```bash
curl https://bootstrap.pypa.io/get-pip.py | sudo python
```

完了，如果以后还有其它方法，以后再补吧