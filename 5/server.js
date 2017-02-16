const fs=require('fs');
const http=require('http');
const urlLib=require('url');
const querystring=require('querystring');
const path=require('path');

var user={};
 //{"blue": "123456", "zhangsan": "123456", "lisi": "321321"}
   //{"act": "login", "username": "blue", "passworld": "321321"}
var server=http.createServer((req,res)=>{
     var str='';
    req.on('data',(data)=>{
        str+=data;
      
    });
    req.on('end',()=>{
         var json=urlLib.parse(req.url,true);
        const url=json.pathname;
         var GET=json.query;
      
        var POST=querystring.parse(str);

        //区分接口
        if(url=='/user'){
            //注册
            switch(GET.act){
                case 'reg':
                if(user[GET.username]){
                   res.write('{"ok": false, "msg": "此用户已存在"}');
                }else{
                    user[GET.username]=GET.password;
                     res.write('{"ok": true, "msg": "注册成功"}');
                }

                break;
                case 'login':
                if(user[GET.username]==null){
                      res.write('{"ok": false, "msg": "此用户不存在"}');
                }else if(user[GET.username]!=user.password){
                         res.write('{"ok": false, "msg": "密码错误"}');
                }else{
                     res.write('{"ok": true, "msg": "登陆成功"}');
                }
                break;
                default:
                  res.write('{"ok": false, "msg": "逗我玩呢"}');
            }
            var str2=JSON.stringify(user);
            fs.writeFile('./www/1.txt',str2);
            console.log(user);
            res.end();

        }else{
            fs.readFile(path.join('./www',url),(error,data)=>{
                if(error){
                    res.write(url);
                }else{
                    res.write(data); 
                }
            res.end();
            })
        }


    })


});

server.listen('8080');
