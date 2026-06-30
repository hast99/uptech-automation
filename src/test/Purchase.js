const loginModule = require('../pages/login')
const logout = require('../pages/Logout')
const helper = require('../pages/Helper')
const { Builder, By, Key, until } = require("selenium-webdriver");

describe('Purchase', function () {
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

        it('TC_PO_001,TC_PO2_006', async function () {
            await helper.menu('Purchase')
            await helper.headerMenu('Orders', 'Requests for Quotation')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("Testing Vendor", Key.ENTER) // input vendor
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//input[@id='destination_address_id_0']")).sendKeys("Delivery Company", Key.ENTER) // input destination address
            const productNames = [
                "106-FWH-LP",
                "106-N-LP",
                "106-OG-LP",
                "106-ROS-LP"
            ];
            for (let i = 0; i < productNames.length; i++) {
                await driver.findElement(By.xpath("//td/a[contains(text(),'Add a product')]")).click();
                await driver.sleep(1000);
                const productInput = await driver.findElement(By.xpath("//input[@placeholder='Search a product']"));
                await productInput.sendKeys(productNames[i], Key.ENTER);
                await driver.sleep(1000);
            }
            for (let i = 0; i < productNames.length; i++) {
                // cari baris ke-i
                const row = await driver.findElement(By.xpath(`(//tr[contains(@class, 'o_data_row')])[${i + 1}]`));

                // klik kolom qty dalam baris tersebut
                const qtyCell = await row.findElement(By.xpath(".//td[@name='product_qty']"));
                await qtyCell.click();
                await driver.sleep(500);

                // tunggu input muncul dalam baris yang sama
                const qtyInput = await row.findElement(By.xpath(".//td[@name='product_qty']//input"));
                await driver.wait(until.elementIsVisible(qtyInput), 3000);

                // ubah nilai qty → 5
                await qtyInput.clear();
                await qtyInput.sendKeys("5", Key.ENTER);
                await driver.sleep(800);

            }
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//button[@name='button_confirm']")).click();
            await driver.sleep(1000);
        })
        it('TC_PO_006', async function () {
            await helper.menu('Inventory')
            await helper.headerMenu('Operations', 'Receipts')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//button[@name='action_select_purchase_order']")).click()
            await driver.sleep(2000)
            await driver.findElement(By.xpath("//tr[1]//button[@name='action_select_this_po']")).click() // ambil PO pertama
            await driver.sleep(2000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()

        })
        it('TC_PO_007,', async function () {
            await helper.menu('Inventory')
            await helper.headerMenu('Operations', 'Receipts')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//button[@name='action_select_purchase_order']")).click()
            await driver.sleep(2000)
            await driver.findElement(By.xpath("//tr[1]//button[@name='action_select_this_po']")).click() // ambil PO pertama
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.xpath("//td[@name='product_uom_qty']")), 3000);

            const rows = await driver.findElements(By.xpath("//tr[contains(@class,'o_data_row')]"));

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];

                // Klik kolom qty dalam baris saat ini
                const qtyCell = await row.findElement(By.xpath(".//td[@name='product_uom_qty']"));
                await qtyCell.click();
                await driver.sleep(500);

                // Cari input aktif (biasanya cuma 1 aktif di DOM)
                const qtyInput = await driver.findElement(By.xpath("//td[@name='product_uom_qty']//input"));
                await driver.wait(until.elementIsVisible(qtyInput), 2000);

                // Bersihkan dan isi dengan angka baru
                await qtyInput.clear();
                await qtyInput.sendKeys("2", Key.ENTER);
                await driver.sleep(500);
            }
            await driver.findElement(By.xpath("//li/a[@name='extra']")).click()
            await driver.findElement(By.xpath("//input[@id='vehicle_number_0']")).sendKeys("B 1234 CD", Key.ENTER);
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//button[@name='action_create_bill']")).click()
            await driver.sleep(2000)
        })
        it('TC_PO_008, TC_PO_010, TC_PO_011, TC_PO_012,TC_PO2_001,TC_PO2_005,TC_PO2_008, TC_PO2_022', async function () {
            await helper.menu('Purchase')
            for (let i = 0; i < 2; i++) {
                await helper.headerMenu('Orders', 'Requests for Quotation')
                await helper.clickButtonNew()
                await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("Testing Vendor", Key.ENTER) // input vendor
                await driver.sleep(1000);
                await driver.findElement(By.xpath("//input[@id='destination_address_id_0']")).sendKeys("Delivery Company", Key.ENTER) // input destination address
                await driver.sleep(500);
                await driver.findElement(By.xpath("//a[text()='Add a product']")).click()
                await driver.sleep(500);
                await driver.findElement(By.xpath("//input[@placeholder='Search a product']")).sendKeys("106-FWH-LP", Key.ENTER)
                await driver.sleep(1000);
                await driver.findElement(By.xpath("//button[@name='button_confirm']")).click();
                await driver.sleep(1000);
                await driver.findElement(By.xpath("//button[@name='action_create_receipt']")).click()
                await driver.sleep(1000);
                await driver.findElement(By.xpath("//button[@name='button_validate']")).click()
            }
        })
        it('TC_PO_013', async function () {
            await helper.menu('Purchase')
            await helper.headerMenu('Orders', 'Requests for Quotation')
            await helper.clickButtonNew()
            await helper.inputFieldProduct("//input[@id='partner_id_0']", "Testing Vendor");
            await driver.sleep(1000);
            await helper.inputFieldProduct("//input[@id='destination_address_id_0']", "Delivery Company");
            await driver.sleep(1000);
            await helper.inputFieldProduct("//input[@id='currency_id_0']", "USD");
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//a[text()='Add a product']")).click()
            await driver.sleep(1000);
            await helper.inputFieldProduct("//input[@placeholder='Search a product']", "106-FWH-LP");
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//button[@name='button_confirm']")).click();
            await driver.sleep(1000);
        })
        it('TC_PO2_007', async function () {
            await helper.menu('Purchase')
            await helper.headerMenu('Orders', 'Requests for Quotation')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("Testing Vendor", Key.ENTER) // input vendor
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//input[@id='destination_address_id_0']")).sendKeys("Delivery Company", Key.ENTER) // input destination address
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//a[text()='Add a product']")).click()
            await driver.sleep(2000);
            await driver.findElement(By.xpath("//input[@placeholder='Search a product']")).sendKeys("106-FWH-LP", Key.ENTER)
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//div/p[@placeholder='Define your terms and conditions ...']")).sendKeys("Automation Testing");
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//button[@name='button_confirm']")).click();
            await driver.sleep(1000);
        })
        it('TC_PO2_011', async function () {
            await helper.menu('Purchase')
            await helper.headerMenu('Orders', 'Requests for Quotation')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("Testing Vendor", Key.ENTER) // input vendor
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//input[@id='destination_address_id_0']")).sendKeys("Delivery Company", Key.ENTER) // input destination address
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//a[text()='Add a product']")).click()
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//input[@placeholder='Search a product']")).sendKeys("106-FWH-LP", Key.ENTER)
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//th[@class='o_list_controller o_list_actions_header w-print-0 p-print-0 position-sticky end-0']")).click()
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//span/div/input[@name='discount']")).click();
            // Klik di luar biar input tersimpan dan field menutup
            await driver.findElement(By.xpath("//body")).click();
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//td[@name='discount']")).click();
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//td[@name='discount']//input")).sendKeys("10", Key.ENTER);
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//button[@name='button_confirm']")).click();
            await driver.sleep(1000);
        })
        
        it('TC_PO2_012', async function () {
            await helper.menu('Purchase')
            await helper.headerMenu('Orders', 'Requests for Quotation')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='partner_id_0']")).sendKeys("Testing Vendor", Key.ENTER) // input vendor
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//input[@id='destination_address_id_0']")).sendKeys("Delivery Company", Key.ENTER) // input destination address
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//a[text()='Add a product']")).click()
            await driver.sleep(2000);
            await driver.findElement(By.xpath("//input[@placeholder='Search a product']")).sendKeys("106-FWH-LP", Key.ENTER)
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//div[@name='global_discount_rate']")).click();
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//div[@name='global_discount_rate']//input")).sendKeys("10", Key.ENTER);
            await driver.sleep(1000);
            await driver.findElement(By.xpath("//button[@name='button_confirm']")).click();
            await driver.sleep(1000);
        })
    })
})