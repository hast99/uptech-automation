const { Builder, By, until } = require("selenium-webdriver")

driver = new Builder().forBrowser('chrome').setChromeOptions().build()
async function login(email, pass) {
    let url = 'https://uptech-dev.keda-tech.com/odoo/'

    await driver.get(url)
    await driver.manage().window().maximize()
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[contains(text(),'uptech_1')]")).click();
    await driver.sleep(3000);
    await driver.findElement(By.id('login')).sendKeys(email);
    await driver.sleep(2000);
    await driver.findElement(By.name('password')).sendKeys(pass);
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
    await driver.sleep(2000);
}

module.exports = {
    Login: login
};