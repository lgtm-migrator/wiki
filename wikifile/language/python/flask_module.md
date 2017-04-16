# 分割Flask应用的另一种方法

Note: Flask 是一个小而美的微服务框架，但是当我们需要用它构建大型项目的时候，往往要拆分成多个文件，用自带的蓝图当然可以，但是如果只是简单的拆分的话，可以用以下方法

## Route

我们先定义我们的路由

*route.py*

```python
from flask import *

def route(app):

  @app.route("/")
  def home():
    return "hello flask"

```

## Server

然后把路由挂载到flask app上即可

*server.py*

```python
import os
from flask import Flask
from routes import routes

app = Flask(__name__)
routes(app) # mount routes
port = os.getenv("PORT", 3001)

if __name__ == '__main__':
	# Run the app, listening on all IPs with our chosen port number
	app.run(host='0.0.0.0', port=port)

```

## 其它

这只是一种简易的替代方法，如果确实要构建大型应用的话，还是推荐使用blueprint

但是话又说回来了，Flask作为微服务框架，也不应该构建太大型的应用