//链式操作
const express=require('express');


var server=express();
server.listen(8081);



server.use('/', function (req, res,next){
  console.log('a'); 
  next();
});
server.use('/', function (req, res){
  console.log('b'); 

  
});