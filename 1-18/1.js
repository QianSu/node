//如何充分理解node利用单线程

const fs=require('fs');

//判断是否存在list文件

fs.stat('./list.md',(err,stats)=>{
    if (err){
        //创建
        console.log('文件不存在');
        fs.writeFile('./list.md',new Date(),(err)=>{
            if (err) console.error(err);
            console.log('文件创建成功');

        })
        return false;

    }
    //存在删除
    fs.unlink('./list.md',(err)=>{
        if(err)console.error(err);
        //创建
         fs.writeFile('./delete.md','我的天',(err)=>{
            if (err) console.error(err);
            console.log('文件删除创建成功');

        })

        


    })










})