require('chromedriver');
var webdriver=require('selenium-webdriver');
var By=webdriver.By;
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.baidu.com/');
driver.manage().window().maximize();
driver.takeScreenshot().then(function(img){
     require('fs').writeFileSync('./keji.png',img,'base64')
    
})