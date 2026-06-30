const { By, Key } = require('selenium-webdriver');

async function menu(param) {
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@data-hotkey='h']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//a[text()='${param}'])`)).click()

}

async function headerMenu(param1, param2) {
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//span[text()='${param1}']`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//div/a[text()='${param2}']`)).click()
    await driver.sleep(1000)
}

async function clickButtonNew() {
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[normalize-space(text())='New']")).click()
    await driver.sleep(1000)
}

async function fieldInputTimeOffTypesNameAndAlloReq(name, allocationReq) {
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//input[@id='name_0']")).sendKeys(name) // input name
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//label[@class='form-check-label o_form_label' and normalize-space(text())='${allocationReq}']`)).click() // check allocation request
}

async function fieldInputTimeOffEmployee() {
    await driver.sleep(2000)
    await driver.findElement(By.xpath("//input[@id='request_date_from_2']").click())
    // await driver.sleep(1000)
    // await driver.findElement(By.xpath("//button[@title='Select month']")).click() // input from date
    // await driver.sleep(1000)
    // await driver.findElement(By.xpath(`//button[span[contains(text(),'${fromMonth}')]]`)).click()
    // await driver.sleep(1000)
}

async function fieldInputDateManagementAllocation(fromMonth, fromDate, toMonth, toDate) {
    await driver.findElement(By.xpath("//button[@title='Select month']")).click() // input from date
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//button[span[contains(text(),'${fromMonth}')]]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//button[span[normalize-space(text())='${fromDate}']])[1]`)).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath("//input[@class='o_input cursor-pointer' and @data-field='date_to']")).click() // input to date
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@title='Select month']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//button[span[contains(text(),'${toMonth}')]]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//button[span[normalize-space(text())='${toDate}']])[1]`)).click()
}

async function fieldInputDatePublicHolidays(fromMonth, fromDate, toMonth, toDate) {
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//input[@class='o_input cursor-pointer' and @data-field='date_from']")).click() // input from date
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@title='Select month']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//button[span[contains(text(),'${fromMonth}')]]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//button[span[normalize-space(text())='${fromDate}']])[1]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[span[contains(text(),'Apply')]]")).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath("//input[@class='o_input cursor-pointer' and @data-field='date_to']")).click() // input to date
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@title='Select month']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//button[span[contains(text(),'${toMonth}')]]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//button[span[normalize-space(text())='${toDate}']])[1]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[span[contains(text(),'Apply')]]")).click()
    await driver.sleep(1000)
}

async function fieldInputDateMandatoryDays(fromMonth, fromDate, toMonth, toDate) {
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//input[@class='o_input cursor-pointer' and @data-field='start_date']")).click() // input from date
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@title='Select month']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//button[span[contains(text(),'${fromMonth}')]]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//button[span[normalize-space(text())='${fromDate}']])[1]`)).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath("//input[@class='o_input cursor-pointer' and @data-field='end_date']")).click() // input to date
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@title='Select month']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//button[span[contains(text(),'${toMonth}')]]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//button[span[normalize-space(text())='${toDate}']])[1]`)).click()
    await driver.sleep(1000)
}

async function fieldInputDateCollectiveHollidays(fromMonth, fromDate) {
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//input[@class='o_input cursor-pointer' and @data-field='schedule_date']")).click() // input from date
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[@title='Select month']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`//button[span[contains(text(),'${fromMonth}')]]`)).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath(`(//button[span[normalize-space(text())='${fromDate}']])[1]`)).click()
    await driver.sleep(1000)
}

async function inputFieldProduct(xpath, value) {
    const element = await driver.findElement(By.xpath(xpath));
    await element.click();
    await driver.sleep(300);
    await element.sendKeys(value, Key.ENTER);
    await driver.sleep(500);
}

module.exports = {
    menu: menu,
    headerMenu: headerMenu,
    clickButtonNew: clickButtonNew,
    fieldInputTimeOffTypesNameAndAlloReq: fieldInputTimeOffTypesNameAndAlloReq,
    fieldInputDatePublicHolidays: fieldInputDatePublicHolidays,
    fieldInputDateMandatoryDays: fieldInputDateMandatoryDays,
    fieldInputDateCollectiveHollidays: fieldInputDateCollectiveHollidays,
    fieldInputDateManagementAllocation: fieldInputDateManagementAllocation,
    fieldInputTimeOffEmployee: fieldInputTimeOffEmployee,
    inputFieldProduct: inputFieldProduct
}