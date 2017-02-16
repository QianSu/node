//主要用于post请求。
const express=require('express');
const bodyParser=require('body-parser');

var server=express();
server.listen(8081);

server.use(bodyParser.urlencoded({
  extended: false,                 //扩展模式
  limit:    2*1024*1024           //限制-2M,默认100k
}));

server.use('/', function (req, res){
  console.log(req.body); //POST
});
