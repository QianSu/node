# 模板引擎
- jade-破坏式、入侵式、强依赖。
- ejs-温和、非入侵式、弱依赖。

---

## jade

```javascript
html				<html></html>

html				<html>
	head				<head>
		style				<style></style>
					</head>
	body				<body>
		div				<div></div>
		div				<div></div>
					</body>
				</html>
```

1. 根据缩进，规定层级。
2. 属性放在（）里面。逗号分隔。
3. 内容空个格，直接往后堆。

> 属性
```
<script src="a.js"></script>
script(src="a.js")
```
* jade.render('字符串');
* jade.renderFile('模板文件名', 参数)