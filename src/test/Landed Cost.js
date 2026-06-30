const loginModule = require('../pages/login')
const logout = require('../pages/Logout')
const helper = require('../pages/Helper')
const { Builder, By, Key, until } = require("selenium-webdriver");

describe('Landed Cost', function () {
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
        it('TC_LC_001', async function () {
            await helper.menu('Purchase')
            await helper.menu('Landed Costs')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("International", Key.ENTER)
            await driver.sleep(500)
            await driver.findElement(By.xpath("//input[@id='purchase_ids_1']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//ul/li/a[@id='purchase_ids_1_0_0']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//a[text()='Add a line']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//div[@name='product_id']//input")).sendKeys('Freight', Key.ENTER)
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//td[@name='price_unit']")).click()
            await driver.findElement(By.xpath("//td[@name='price_unit']//input")).sendKeys('2000000', Key.ENTER)
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='compute_landed_cost']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            await driver.sleep(1000)
        })
        it('TC_LC_003', async function () {
            await helper.menu('Purchase')
            await helper.menu('Landed Costs')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("International", Key.ENTER)
            await driver.sleep(500)
            await driver.findElement(By.xpath("//input[@id='purchase_ids_1']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//ul/li/a[@id='purchase_ids_1_0_1']")).click()
            await driver.sleep(1000)
            const product = [
                { name: 'Freight', price: '5000000' },
                { name: 'Others Landed Cost', price: '2000000' }
            ]
            for (let i = 0; i < product.length; i++) {
                await driver.findElement(By.xpath("//a[text()='Add a line']")).click()
                await driver.sleep(1000)
                await driver.findElement(By.xpath("//div[@name='product_id']//input")).sendKeys(product[i].name, Key.ENTER)
                await driver.sleep(1000)
                const priceCell = await driver.findElement(By.xpath(`(//td[@name='price_unit'])[${i + 1}]`));
                await priceCell.click();
                await driver.sleep(1000)
                await priceCell.findElement(By.xpath(".//input")).sendKeys(product[i].price, Key.ENTER)
            }
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='compute_landed_cost']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            await driver.sleep(1000)
        })
        it('TC_LC_015', async function () {
            await helper.menu('Purchase')
            await helper.menu('Landed Costs')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("International", Key.ENTER)
            await driver.sleep(500)
            await driver.findElement(By.xpath("//input[@id='purchase_ids_1']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//ul/li/a[@id='purchase_ids_1_0_2']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//a[text()='Add a line']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//div[@name='product_id']//input")).sendKeys('Freight', Key.ENTER)
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//td[@name='price_unit']")).click()
            await driver.findElement(By.xpath("//td[@name='price_unit']//input")).sendKeys('2000000', Key.ENTER)
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='compute_landed_cost']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='action_generate_actual_landed_cost']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='action_create_invoice']")).click()
            await driver.sleep(1000)
        })
    })
})
