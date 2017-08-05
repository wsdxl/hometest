/**
 * 手机模拟器
 */
require('chromedriver');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
const key = webdriver.key;
var until = webdriver.until;

var chrome = require('selenium-webdriver/chrome');
let option = new chrome.Options().setMobileEmulation(
    { deviceName: 'iPhone 6' });
var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(option).build();

driver.get('http://192.168.75.130:3000/');
driver.sleep(20000);