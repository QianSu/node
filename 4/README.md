# post方式的请求


## POST数据接收：POST数据比GET大得多.

* POST很大——分段
* data	一段数据
* end	全部到达


> req.url	=>	'/aaa?a=12&b=5'
```
obj={
	pathname: '/aaa'
	query: {a: 12, b: 5}
}
```

