const express=require('express');
const bodyParser=require('body-parser');

//
var server=express();
server.use(bodyParser.urlencoded({extended: false}));
server.use('/',(req,res)=>{
    console.log(req.body);
    res.send('ok');

})
server.listen(8081);