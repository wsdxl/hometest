/**
 * 对象是什么
 * javascript对象是拥有属性和方法的数据
 */

// // //创建对象
// var bike = {
//     name: 'ofo',
//     color: 'yellow',
//     start: function (client) {
//        console.log(client+'扫描骑车');
//     }
// }
// //访问对象属性
// // console.log(bike.name,bike['color']);
// //访问对象方法
// // bike.start('zhifubao');
// //更改对象属性值
// bike.name='mobike';
// console.log(bike.name);

//构造器
function bike(name,color,price){
    this.name=name;
    this.color=color;
    this.price=price;
    this.changePrice=changePrice  
    function changePrice(RMB){
        this.price=RMB;
    }
}
var bk=new bike('ofo','yellow','1RMB/h');
console.log(bk.name,bk['price']);
console.log(bk.price);
bk.changePrice('free');
console.log(bk.price);