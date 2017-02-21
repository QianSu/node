const express=require('express');

var server=express();
server.listen(8081);
//目录：/user/
var routerUser=express.Router();

routerUser.get('/1.html',(req,res)=>{
    res.send('11111');
});
routerUser.get('/2.html',(req,res)=>{
    res.send('2222');
});
var routerActicle=express.Router();
routerActicle.get('/1.html',(req,res)=>{
    res.send('文章');
});
server.use('/user',routerUser);
server.use('/acticle',routerActicle);

