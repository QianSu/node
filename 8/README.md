# [express](http://www.expressjs.com.cn/4x/api.html)框架
1. 安装
    npm install express
2. 配置
3. 接收请求
4. 响应

> 非侵入式
- req
```
原生：
res.write();
//write()里面只能是字符串或者buffer。而send()中
既可以是buff和字符串，还可以是json对象.
res.end();
```
- express(保留了原生的功能,添加了方法);
```
res.send();
res.write();
res.end();
```
##基础用法：
1. 创建服务
  + var server=express();

2. 监听
 + server.listen(8080);

3. 处理请求
+ server.use('地址', function (req, res){});

---------------------------------------------------------------------------------------------------------------------

> 3种方法：
```
.get('/', function (req, res){});
.post('/', function (req, res){});
.use('/', function (req, res){});
//use通吃get与post;
```

## 中间件
- express-static 
  + 专门用来处理静态文件的。
  + 安装 npm install express-static
```
var express = require('express');
var static  = require('express-static');
 
var app = express();
 
app.use(static(__dirname + '/public'));
 
var server = app.listen(3000, function(){
    console.log('server is running at %s', server.address().port);
});
```