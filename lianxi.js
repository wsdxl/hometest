require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
var chai = require('chai');
var assert = chai.assert;
// driver.get('https://autowebtest.github.io/add-remove');
// driver.manage().window().maximize();
// let data = ['a', 'b', 'c', 'd'];
// for (var info of data) {
//     driver.findElement({ id: 'text' }).sendKeys(info);
//     driver.findElement({ id: 'text' }).submit();
//     driver.findElements({ css: '.new-item' }).then((real) => {
//         assert.equal(real.length,4)
//     })
// }
// driver.get('http://news.baidu.com/');
// driver.manage().window().maximize();
// driver.sleep(3000);
// driver.executeScript('document.getElementById("footerwrapper").scrollIntoView()');
// driver.takeScreenshot().then((img)=>{
//     require('fs').writeFileSync('04.png',img,'base64');
// })
// driver.getPageSource().then((a)=>{
//     require('fs').writeFileSync('page.txt',a)
// })
// driver.findElement({ xpath: '//*[@id="pane-news"]/div/ul/li[1]/strong/a' }).click();
// driver.getCurrentUrl().then((url)=>{
//     console.log('url',url)
// })
// driver.getAllWindowHandles().then((c) => {
//     // console.log(c.length);
//     driver.switchTo().window(c[1]).then(() => {
//         driver.findElement({ css: 'body > div.wrapper > div.col_w660 > div.cnt_bd > h1' }).getText().then((text) => {
//             console.log(text)
//         })
//     })
// })

// driver.get('https://www.baidu.com/');
// driver.manage().window().maximize();
// driver.findElement({id:'kw'}).sendKeys('hello');
// driver.findElement({id:'kw'}).submit();
// driver.sleep(3000);
// driver.navigate().back(); //返回上一页
// driver.sleep(3000);
// driver.navigate().forward();//跳转下一页
// driver.sleep(3000);
// driver.navigate().refresh();// 页面刷新

// driver.get('https://www.baidu.com/');
// driver.manage().window().maximize();
// var until=webdriver.until;
// driver.wait(until.elementsLocated({id:'kw'}),3000);
// // driver.sleep(3000);
// driver.findElement({id:'kw'}).sendKeys('hello');
// driver.get('https://login.anjuke.com/login/form');
// driver.manage().window().maximize();
// driver.switchTo().frame('iframeLoginIfm').then(()=>{
//     driver.findElement({name:'phone'}).sendKeys('13641878150');
//     driver.findElement({id:'smsIpt'}).sendKeys('1234');
// })

driver.get('D:/hometest/index.html');
driver.switchTo().alert().then((al)=>{  //获取到按钮
    driver.sleep(5000);
    return al.accept();  
})