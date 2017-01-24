
var users={
    admin:'123',
    user1:'321',
    user2:'213'
};
//var userNameChang=true;
var inputUser='';
process.stdin.setEncoding('utf8');
process.stdout.write('请输入用户名'+'\n')
//被动触发
process.stdin.on('data', (input) => {
    //获取用户输出,且用户输入无状态
//   var chunk=process.stdin.read();
  //判断数据类型
 // console.log(Object.prototype.toString.call(Object.keys(input)) );
 //判断是否该值存在
  var username=input.toString().trim();
 if(!inputUser){
    
      if (Object.keys(users).indexOf(username)===-1) {
    process.stdout.write(`${username}该用户名不存在`+'\n');
    //userNameChang=true;
    inputUser='';
  }else{
     
      process.stdout.write('请出入密码'+'\n'); 
     // userNameChang=false;
        inputUser=username;
  }
 }else{
       // process.stdout.write(users.inputUser); 
       if(username===users[inputUser]){
            process.stdout.write('登陆成功'+'\n'); 
          

       }else{
            process.stdout.write('密码错误'+'\n'); 
           
     // userNameChang=false;
      
       }

 }
 
});

// process.stdin.on('end', () => {
//   process.stdout.write('end');
// });
