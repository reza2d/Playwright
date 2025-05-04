const {test , expect} = require("@playwright/test")

test("File Upload" , async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("./tests/Uploads/asian-man-business-man-portrait.jpg")

    await page.locator("#file-submit").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")

})