const http=require('http');
const urlModel = require('url');
var server=http.createServer((req,res)=>{
  
    // /aa?user=dasd&password=dasd
if(req.url.indexOf('?')!==-1){
 var detail= urlModel.parse(req.url,true);
   
        res.write('厉害了我的哥');
       console.log(detail.query)
        res.end();
}else{
 var url=req.url;
}
 
})

server.listen('8080');