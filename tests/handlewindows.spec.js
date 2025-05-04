const {test, expect} = require("@playwright/test")

test("Working with multiple tabs", async ({browser}) =>{

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage] = await Promise.all([

        context.waitForEvent("page"),

        page.locator("(//*[name()='svg'][@id='Layer_1'])[3]").click()
    ])

    /*await newPage.locator("#email").focus()

    await newPage.keyboard.press("Control+A")

    await newPage.keyboard.press("Backspace")

    await newPage.keyboard.type("rezadodangeh3030@gmail.com")

    await newPage.locator("#pass").type("Yellow123!")

    await newPage.locator("#loginbutton").click()
    */
    await newPage.waitForTimeout(3000)

    await newPage.close()
    
    await page.locator("#email1").fill("admin@email.com")

    await page.waitForTimeout(3000)
})