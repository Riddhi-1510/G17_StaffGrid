// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Employee Login', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Employee Login', async function() {
    // Test name: Employee Login
    // Step # | name | target | value
    // 1 | open | /api/login | 
    await driver.get("https://staff-grid.vercel.app/api/login")
    // 2 | setWindowSize | 1552x832 | 
    await driver.manage().window().setRect(1552, 832)
    // 3 | click | id=id | 
    await driver.findElement(By.id("id")).click()
    // 4 | click | id=id | 
    await driver.findElement(By.id("id")).click()
    // 5 | click | id=id | 
    await driver.findElement(By.id("id")).click()
    // 6 | type | id=id | 2024030001
    await driver.findElement(By.id("id")).sendKeys("2024030001")
    // 7 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 8 | type | id=password | R123456
    await driver.findElement(By.id("password")).sendKeys("R123456")
    // 9 | click | css=.login-btn | 
    await driver.findElement(By.css(".login-btn")).click()
    // 10 | click | css=.hamburger | 
    await driver.findElement(By.css(".hamburger")).click()
    // 11 | click | linkText=Attendance | 
    await driver.findElement(By.linkText("Attendance")).click()
    // 12 | click | css=.close | 
    await driver.findElement(By.css(".close")).click()
    // 13 | click | css=.dashboard-container | 
    await driver.findElement(By.css(".dashboard-container")).click()
    // 14 | click | css=.react-datepicker__navigation-icon--previous | 
    await driver.findElement(By.css(".react-datepicker__navigation-icon--previous")).click()
    // 15 | click | css=.react-datepicker__navigation--previous | 
    await driver.findElement(By.css(".react-datepicker__navigation--previous")).click()
    // 16 | click | css=.react-datepicker__navigation-icon--previous | 
    await driver.findElement(By.css(".react-datepicker__navigation-icon--previous")).click()
    // 17 | click | css=.react-datepicker__navigation--next | 
    await driver.findElement(By.css(".react-datepicker__navigation--next")).click()
    // 18 | click | css=.react-datepicker__navigation--next | 
    await driver.findElement(By.css(".react-datepicker__navigation--next")).click()
  })
})