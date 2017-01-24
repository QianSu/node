'user strict'

var args=process.argv.slice(2);
//['node 执行的所在路径','当前脚本所在的路径',...]

//2.参数分析
let paramerter1=args[0];
let operator=args[1];
let paramerter2=args[2];

let result;
switch(operator){
    case`+`:
    result=parseFloat(paramerter1)+parseFloat(paramerter2);
    break;
      case`-`:
    result=parseFloat(paramerter1)+parseFloat(paramerter2);
    break;
      case`*`:
    result=parseFloat(paramerter1)+parseFloat(paramerter2);
    break;
      case`/`:
    result=parseFloat(paramerter1)+parseFloat(paramerter2);
    break;
    default:
    throw new Error('不被支持的操作符' + operator);
}
console.log(result);