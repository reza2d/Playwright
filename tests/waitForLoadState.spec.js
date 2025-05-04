const {test , expect} = require("@playwright/test")

test("Working With Load State" , async({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator('//a[text()="New user? Signup"]').click()

    await page.waitForLoadState("networkidle")

    const checkboxesCount = await page.locator('//input[@type="checkbox"]').count()

    expect(checkboxesCount).toBe(8)

})