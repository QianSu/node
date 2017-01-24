setInterval(function(){

    console.log(1);

},1000)

var exiting=false;

process.on('SIGINT',()=>{

    if(exiting){
        console.log('退出');
//终止当前进程
           process.exit(); 
           
    }else{
        //第一次按下
        exiting=true;
      
    }


  setTimeout(()=>{exiting=false;},1000)



})