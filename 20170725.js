/** 
 * node.js path 模块提供了一些用于处理文件路径的小工具
*/
var path=require('path');
console.log(path.basename('D:\\hometest\\20170725.js'));
console.log(path.dirname('D:\\hometest\\20170725.js'));
console.log(__dirname);

var dir=path.join(__dirname,'','keji.png');
console.log('dir',dir)