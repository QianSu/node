#用户注册登陆

> 接口
- /user?act=reg&user=aaa&pass=123456
	{"ok": false, "msg": "原因"}

- /user?act=login&user=aaa&pass=123456
	{"ok": true, "msg": "原因"}

----------------------------------------------------------------------

### 对文件访问：
- http://localhost:8080/1.html
- http://localhost:8080/ajax.js
- http://localhost:8080/1.jpg

### 对接口访问：
- http://localhost:8080/user?act=xx...
- http://localhost:8080/news?act=xxx...

### eval()方法的用处。
```
var code1='"a" + 2'; //表达式 
varcode2='{a:2}'; //语句 
alert(eval(code1)); //->'a2' 
alert(eval(code2)); //->undefined 
alert(eval('(' + code2 + ')')); //->[object Object] 
```