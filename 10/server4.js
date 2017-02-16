const express=require('express');
const cookieParser=require('cookie-parser');

var server=express();



//cookie
server.use(cookieParser('dashdkj'));

server.use('/aaa', function (req, res){
    //注意带上path.
  res.clearCookie('user', { path: '/aaa' });

  res.send('aaaaa');
});

server.listen(8081);
