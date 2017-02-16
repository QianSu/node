# express
- http-无状态的

- cookie:在浏览器保存一些数据，每次请求都会带过来。
（不安全、有限（4K））
- session：保存数据，保存在服务端。
- session：基于cookie实现的。
  * cookie中会有一个session的ID，服务器利用sessionid找到session文件、读取、写入。隐患：session劫持

## 例子
> cookie
1. 读取――cookie-parser 
2. 发送――session cookie-session
3. 安装必须的模块 
   - express express-static cookie-parser cookie-session
4. cookie空间非常小――省着用
5. 安全性非常差
```
1.精打细算
2.校验cookie是否被篡改过

a.发送cookie
res.secret='字符串';//密钥字符码，下面设置signed: true，可生效。
res.cookie(名字, 值, {path: '/', maxAge: 毫秒, signed: true});

b.读取cookie
cookie-parser//**可以访问子目录下的cookie.**

server.use(cookieParser('签名字符串'));

server.use(function (){
	req.cookies		未签名版
	req.signedCookies	签名版
});

c.删除cookie
res.clearCookie(名字);
```
## cookie-session
```
server.use(cookieParser());
server.use(cookieSession({
	keys: [.., .., .., ..]
}));

server.use('/', function (){
	req.session
});

delete req.session
```
1. cookie-存在浏览器，4K，不安全
  签名、加密

2. session-存在服务器
  不能独立存在，基于cookie
  ---
  ```
  server.use(cookieParser('签名字符串'));
server.use(cookieSession({

}));

server.use(function (req, res){
	res.cookie(名字, 值, {signed: true});

	res.cookies['user']
	res.clearCookie('名字');

	res.session['xxx']
	delete res.session['xxx'];
});
```