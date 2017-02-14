# get的请求方式
- 模块运用
  + http模块请求数据。
  + queryString模块对字符串的处理。
  + url模块对地址的处理。

> 很叼的一个json与数组的转换方法

```javascript
var GET={};
var array=['user=dasd','password=dasd'];
for(var i=0;i<array.length;i++){
      var array1= array[i].split('=');
      GET[array1[0]]= array1[1];//这个语法很叼啊
    
    }
```