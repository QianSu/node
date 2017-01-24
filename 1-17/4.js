// 动 不断的切换显示的图形（字符画）;
//擦出重绘
//每个成员就是帧
var frames=[];

frames[frames.length]=`
╬刻╬╬骨╬╬╬━━╬╬一╬╬笑╬╬

`;
frames[frames.length]=`
╬╬╬╬╬╬╬┇ 累 ┇╬╬╬╬╬╬╬
`;
frames[frames.length]=`
╬╬╬╬╬╬╬┇ 了 ┇╬╬╬╬╬╬╬

`;
frames[frames.length]=`
╬铭╬╬心╬╬╬━━╬╬而╬╬过╬╬

`;

var fps=5;
var x=0;
var render=()=>{
    //将当前控制台清空
    var height=process.stdout.getWindowSize()[1];
    // for(var i=0;i<height;i++){

    //         process.stdout.write('.\n');


    // }
     process.stdout.write('\033[2J');
    process.stdout.write('\033[0f'); 




    

    //输出新的内容
    if(x===frames.length){
        x=0;

    }
    process.stdout.write(frames[x++]);

   
};

setInterval(render,1000/fps);