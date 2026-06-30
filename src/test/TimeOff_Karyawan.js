const loginModule = require('../pages/login')
const logout = require('../pages/Logout')
const helper = require('../pages/Helper')

describe('Time Off', function () {
    describe('My Time', function () {
        describe('Dashboard', async function () {
            before(async function () {
                let email = process.env.EMAIL_EMPLOYEE1
                let pass = process.env.PASS_TESTING
                await loginModule.Login(email, pass)
            })
            after(async function () {
                setTimeout(async function () {
                    await driver.quit()
                }, 3000)
            })
            it('Employee mengajukan time off', async function () {
                await helper.menu('Time Off')
                await helper.headerMenu('My Time', 'Dashboard')
                await helper.clickButtonNew()
                await helper.fieldInputTimeOffEmployee('Jan') // input from date
            })
        })
    })
})