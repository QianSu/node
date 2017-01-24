//自己定义一个require函数

function $require(id){
    //1.先找到文件，如果文件不存在 cannot found...
    //2.读取文件内容 内容是js代码
    const  fs=require('fs');
    const path=require('path');
    //需加载的js文件路径（完整路径）；
    const filename=path.join(__dirname,id);
    const dirname=path.dirname(filename)
    //const filename=__dirname+id;
    //fs.readFile(id,'utf8',..)异步的，不适用
    let code=fs.readdirSync(filename,'utf8');
    //3.执行代码,所要执行的代码
    //定义一个数据容器，用容器去装模块导出的成员
    let module={id:filename,exports:{}};
    let exports=mudule.exports;
    code =`(function($require,module,exports,__dirname,__filename){
            $(code)

    })($require,module,exports.dirname,filename)`;
   //eval(code);
    //4.返回值
    return module.exports;
}
var  m4=$require('./9.js');
