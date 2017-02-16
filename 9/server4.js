//中间件原理
const express=require('express');
const query=require('querystring');

var server=express();
server.listen(8081);


//主要用于解决post.
server.use((req,res,next)=>{
  var str='';
  req.on('data',(data)=>{
    str+=data;
  }) ;
  req.on('end',()=>{
    req.body=query.parse(str);
     next();
  })
 
});
server.use('/', function (req, res){
  console.log( req.body); 
});
