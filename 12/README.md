# jade

1. 每一行'|'表示原样输出。
2. 加‘.’表示，此标签内的内容原样输出，不会转义。
3. ‘include’ 引入js.
4. #{表达式}
5. jade.renderFile(string,{pretty:ture,json:{},arr:[]})
6. '-'表示代码，不输出。但是有作用。
7. span #{a} == span=a 这两种方式是等价的。
8. 
```
    -for(var i=0;i<arr.length;i++)
      div=arr[i]
```
9. !=代表转义确认