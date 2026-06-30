const { By, Key } = require('selenium-webdriver');

async function Logout() {
    await driver.findElement(By.xpath("//button[@class='py-1 py-lg-0 o-dropdown dropdown-toggle dropdown']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//a[@class='o-dropdown-item dropdown-item o-navigable focus']")).click()
    await driver.sleep(2000)
}

module.exports = {
    Logout: Logout
}