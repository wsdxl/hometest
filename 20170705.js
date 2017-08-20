require('chromedriver')
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
// driver.get('https://autowebtest.github.io/add-remove/index.html');
// driver.manage().window().maximize();
// var data=require('./data.json');
// var a=data.info
// for(var cal of a){
//     driver.findElement({id:'text'}).sendKeys(cal);
//     driver.findElement({id:'text'}).submit();
// }
// driver.findElements({css:'.new-item'}).then((text)=>{
//     console.log(text.length)
// })
// driver.findElement({css:'.count'}).getLocation().then((a)=>{
//     console.log(a)
// })
// driver.findElement({css:'.count'}).getTagName().then((tag)=>{
//     console.log(tag)
// })
// driver.get('https://autowebtest.github.io/dashboard/user.html')
// driver.findElement({id:'female'}).isSelected().then((bool)=>{
//     console.log('bool:',bool)
// })

driver.get('https://www.taobao.com/')
// driver.findElement(By.css('body > div.cup.J_Cup > div.top.J_Top > div > div.tbh-logo.J_Module.tb-pass > div')).getCssValue('height').then(function (value) {
//     console.log('value:', value)
// })
driver.findElement(By.css('body > div.cup.J_Cup > div.top.J_Top > div > div.tbh-logo.J_Module.tb-pass > div')).getAttribute('class').then(function (att) {
    console.log('att:', att)
})
