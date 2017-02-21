# 模块整合应用
>安装 cnpm install express express-static body-parser cookie-parser cookie-session jade ejs

1. body-parser 解析post数据，但是不能解析上传的数据。
2. multer模块 用于处理post文件上传数据。例如，图片，文件。
    - 相关API,查看文档。
## body-parser	解析post数据
## multer		解析post文件

---
```
body-parser	解析post数据	application/x-www-form-urlencoded
server.use(bodyParse.urlencode());
	req.body

multer		解析post文件	multipart/form-data
var obj=multer({dest: 'upload/'});

server.use(obj.any());

server.use(function (req, res){
	req.files[0].originalname
	req.files[0].path
});

把扩展名加上
		//'upload/aadfaew324we34' + '.txt'
		//'upload/aadfaew324we34.txt'
var newName=file.path+pathLib.parse(file.originalname).ext;

fs.rename(老名, 新名, function (err){});
```
# 模板引擎：适配

1. consolidate

```
consolidate=require('consolidate');

server.set('view engine', 'html');
server.set('views', '模板文件目录');
server.engine('html', consolidate.ejs);

server.get('/', function (req, res){
	res.render('模板文件', 数据);
});
```
1. Router――迷你server
2. router.get();
3. router.post();
4. router.use();


## Router――子服务
```
var router1=express.Router();
server.use('/user', router1);

var r=express.Router();
router1.use('/user_mod', r);
router1.use('/user_reg', function (){});
http://www.xxxx.com/user/user_mod
http://www.xxxx.com/user/user_reg
http://www.xxxx.com/user/user_login

var router2=express.Router();
server.use('/news', router2);
http://www.xxxx.com/news/list
http://www.xxxx.com/news/post
http://www.xxxx.com/news/content

var router3=express.Router();
server.use('/item', router3);
http://www.xxxx.com/item/buy
http://www.xxxx.com/item/mod
http://www.xxxx.com/item/del
```