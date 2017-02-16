# 自定义模块


> 关键词的应用
 - requrie 请求：引入模块的
 - module 批量输出
 - exports 输出 (单个输出,对外输出东西，必加);

```
例如:
    exports.xxx=???;
    exports.xxx=???;
    exports.xxx=???;
    exports.xxx=???;
其实可以写成:
    module.exports={xxx:???,xxx:???,xxx:???};
```
 

## node-modules-放模块
- ./ 引入自己的模块,加'./'。
-  不加./时，必须放在node_modules;
- 模块化没有全局变量。

## require
1. 如果有"./"从当前目录找。
2. 如果没有"./",先从系统模块,再从node_modules找。

> npm init 初始化package.json的信息。

## npm发布
- npm init
- npm publish
- npm --force unpublish