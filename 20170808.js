/**
 * console.log()打印
 * 声明一个变量 var：var声明的变量在任何地方改变了，值也会随之改变
 * let：let声明的变量在代码域中声明的变量只有在代码域内有效，在域外什么的变量只在外面有效
 * const:const声明的变量是一个常量
 */

 var a='a';
 {
   var a='abc';
 }
 console.log(a);
 let b='b';
  {
   let  b='abc';
}
 console.log(b);
 const c='c';
 {
  const   c='abc';
  console.log(c);
 }
 console.log(c);
//  function getName(){
//      return 'jack';
//  }
// //    let person= getName();
// //    console.log(getName());
// function welcome(name){
//     console.log('welcome'+name);
// }
// welcome(' xiaohong');
// welcome(' Tom');