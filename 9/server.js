const express=require('express');

var server=express();
server.listen(8081);
 console.log(express);
//GET、POST
//---------------------------
server.use('/', function (req, res){
  res.send(req.query); //GET
});
