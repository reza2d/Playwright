const {test , expect} = require("@playwright/test")

test("Mouse hover" , async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").type("admin@email.com")

    await page.getByPlaceholder("Enter Password").type("admin@123")

    await page.getByRole('button', {name: "Sign in"}).click()

    await page.locator("//span[text()='Manage']").hover({force})

    await page.locator("//a[normalize-space()='Manage Courses']").click()

})