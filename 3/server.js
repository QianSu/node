const http=require('http');

var server=http.createServer((req,res)=>{
    var GET={};
    // /aa?user=dasd&password=dasd
if(req.url.indexOf('?')!==-1){

       var url=req.url.split('?')[0];
    
    var detial=req.url.split('?')[1];
    var array=detial.split('&');

    for(var i=0;i<array.length;i++){
      var array1= array[i].split('=');
      GET[array1[0]]= array1[1];//这个语法很叼啊
    
    }
       
        res.end();
}else{
 var url=req.url;
}
  console.log(url, GET);
})

server.listen('8080');