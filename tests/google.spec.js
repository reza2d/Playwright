const {test , expect} = require ('@playwright/test')

test("Verify Application Title", async function ({page}) {

    await page.goto("https://www.google.com/")

    const url = await page.url()

    console.log("The page url is: " + url)

    const title = await page.title()

    console.log("The page title is: " + title)

    await expect(page).toHaveTitle("Google")
})