const http=require('http');

const querystring=require('querystring');

var server=http.createServer((req,res)=>{
    var str='';
    //post的数据一段一段的传输
        req.on('data',(data)=>{
            str+=data;

        });
        //end的一步到达。
         req.on('end',()=>{
             var POST=querystring.parse(str)
                console.log(POST);

        });


});

server.listen('8080');