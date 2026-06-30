const loginModule = require('../pages/login')
const { By, Key } = require('selenium-webdriver');
const helper = require('../pages/Helper')

describe('Time Off', function () {
    describe('Configuration', function () {
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
        const setEmployee = 'Karyawan1';
        it('Configuration - Time Off Types: Create new Paid Time Off type', async function () {
            await helper.menu('Time Off')
            await helper.headerMenu('Configuration', 'Time Off Types')
            await helper.clickButtonNew()
            await helper.fieldInputTimeOffTypesNameAndAlloReq('Automation Testing Paid Time Off', 'No Limit')

            await driver.findElement(By.xpath("//input[@id='support_document_0']")).click() // check support document
            await driver.sleep(2000)
            await driver.findElement(By.xpath("//button[@class='o_form_button_save btn btn-light px-1 py-0 lh-sm']")).click() // klik button save
            await driver.sleep(2000)
        })
        it('Configuration - Public Holidays: Add new Public Holiday', async function () {
            await helper.headerMenu('Configuration', 'Public Holidays')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@class='o_input']")).sendKeys('Automation Testing Public Holiday')
            await helper.fieldInputDatePublicHolidays('Jan', '1', 'Jan', '1') // input date public holidays
            await driver.findElement(By.xpath("//button[@class='btn btn-primary o_list_button_save']")).click() // klik button save
            await driver.sleep(1000)
        })
        it('Configuration - Mandatory Days: Add new Mandatory Day', async function () {
            await helper.headerMenu('Configuration', 'Mandatory Days')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@class='o_input']")).sendKeys('Automation Testing Mandatoty Days')
            await helper.fieldInputDateMandatoryDays('Jan', '1', 'Jan', '1') // input date mandatory days
            await driver.findElement(By.xpath("//button[@class='btn btn-primary o_list_button_save']")).click() // klik button save
            await driver.sleep(1000)
        })
        it('Configuration - Collective Holidays: Add new Collective Holiday', async function () {
            await helper.headerMenu('Configuration', 'Collective Holidays')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@class='o_input']")).sendKeys('Automation Testing Collective Holiday')
            await helper.fieldInputDateCollectiveHollidays('Feb', '1') // input date collective hollidays
            await driver.findElement(By.xpath("//button[@class='btn btn-primary o_list_button_save']")).click() // klik button save
            await driver.sleep(1000)
        })
        it('Management - Allocation: Create new Allocation Data Paid Time Off', async function () {
            await helper.headerMenu('Management', 'Allocations')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='holiday_status_id_0']")).click() // click select time off type
            await driver.findElement(By.xpath("//li[@class='o-autocomplete--dropdown-item ui-menu-item d-block'][1]")).click() // select time off type
            const inputEmployee = await driver.findElement(By.xpath("//input[@id='employee_id_0']"));
            await inputEmployee.clear(); // clear input employee
            await inputEmployee.sendKeys(setEmployee, Key.ENTER); 
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//input[@id='date_from_0']")).click() // Click input date from
            await helper.fieldInputDateManagementAllocation('Jan', '1', 'Dec', '31') // input date from and to
            await driver.findElement(By.xpath("//input[@id='number_of_days_display_0']")).sendKeys(12) // input number of days
            await driver.findElement(By.xpath("//button[@name='action_approve']")).click() // click approve button
            await driver.sleep(1000)
        })

        it('Management - Allocation: Create new Allocation Data Cuti Gift', async function () {
            await helper.headerMenu('Management', 'Allocations')
            await helper.clickButtonNew()
            await driver.findElement(By.xpath("//input[@id='holiday_status_id_0']")).click() // click select time off type
            await driver.findElement(By.xpath("//li[@class='o-autocomplete--dropdown-item ui-menu-item d-block'][3]")).click() // select cuti gift type
            const inputEmployee = await driver.findElement(By.xpath("//input[@id='employee_id_0']"));
            await inputEmployee.clear(); // clear input employee
            await inputEmployee.sendKeys(setEmployee, Key.ENTER);
            await driver.sleep(1000)
            await driver.findElement(By.xpath("//input[@id='date_from_0']")).click() // Click input date from
            await helper.fieldInputDateManagementAllocation('Jan', '1', 'Dec', '31') // input date from and to
            await driver.findElement(By.xpath("//input[@id='number_of_days_display_0']")).sendKeys(3) // input number of days
            await driver.findElement(By.xpath("//button[@name='action_approve']")).click() // click approve button
            await driver.sleep(1000)
        })
    })
})