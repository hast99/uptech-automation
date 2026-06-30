const loginModule = require('../pages/login')
const logout = require('../pages/Logout')
const helper = require('../pages/Helper')
const { By } = require('selenium-webdriver');

describe('Sales', function () {
    describe('Dashboard', async function () {
        before(async function () {
            let email = process.env.EMAIL_ADMIN
            let pass = process.env.PASS_ADMIN
            await loginModule.Login(email, pass)
        })
        after(async function () {
            setTimeout(async function () {
                await driver.quit()
            }, 3000)
        })
        it('Membuat Sales Quotations', async function () {
            await helper.menu('Sales')
            await helper.headerMenu('Orders', 'Quotations')
            await driver.sleep(5000)
            await driver.findElement(By.xpath(`//tr[2]/td[@name='name']`)).click(); // klik berdasarkan urutan ke-i
            await driver.sleep(5000)
            await driver.findElement(By.xpath("//button[@name='action_confirm']")).click()
            await driver.sleep(5000)
            await driver.findElement(By.xpath("//button[@name='action_create_delivery']")).click()
            await driver.sleep(5000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            await driver.sleep(5000)
            await driver.findElement(By.xpath("//a[text()='Quotations']")).click()
            await driver.sleep(5000)
        })
    })
})