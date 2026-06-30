const loginModule = require('../pages/login')
const { By, Key } = require('selenium-webdriver');
const helper = require('../pages/Helper')

describe('Settings', function () {
    describe('Users & Companies', function () {
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
        it('Create Users', async function () {
            await helper.menu('Settings')
            await helper.headerMenu('Users & Companies', 'Users')
            await driver.sleep(1000)

            for (let i = 0; i <= 5; i++) {
                const userName = `Automation User ${i}`;
                const userEmail = `automation${i}@mail.com`;
                await helper.clickButtonNew()
                await driver.findElement(By.xpath("//input[@id='name_0']")).sendKeys(userName);
                await driver.findElement(By.xpath("//input[@id='login_0']")).sendKeys(userEmail);
                await driver.findElement(By.xpath("//button[@class='o_form_button_save btn btn-light px-1 py-0 lh-sm']")).click() // klik button save
                await driver.sleep(3000);
            }

        })
    })
})