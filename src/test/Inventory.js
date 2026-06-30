const loginModule = require('../pages/login')
const logout = require('../pages/Logout')
const helper = require('../pages/Helper')
const { Builder, By, Key, until } = require("selenium-webdriver");


describe('Inventory', function () {
    describe('Dashboard', async function () {
        before(async function () {
            let email = process.env.EMAIL_PURCHASE
            let pass = process.env.PASS_TESTING
            await loginModule.Login(email, pass)
        })
        after(async function () {
            setTimeout(async function () {
                await driver.quit()
            }, 3000)
        })
        it('TC_GR_001', async function () {
            await helper.menu('Inventory')
            await helper.headerMenu('Operations', 'Receipts')
            await helper.clickButtonNew()
            await driver.findElemnt(By.xpath("//button[@name='action_select_purchase_order']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//tr[1]/td/div/button/span")).click() //select first PO item in the list
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            await driver.sleep(1000)
        })
    })
})