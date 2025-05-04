const {test , expect} = require("@playwright/test")

test("Keyboard events in playwright" , async({page}) =>{

        await page.goto("https://www.google.com/")

        await page.locator("textarea[name='q']").focus()

        await page.keyboard.type("Reza Dodangeh!")

        await page.keyboard.press("ArrowLeft")

        await page.keyboard.down("Shift")

        for (let i=0;i<8;i++) {

            await page.keyboard.press("ArrowLeft")
        }

        await page.keyboard.up("Shift")

        await page.keyboard.press("Backspace")

        //await page.keyboard.press("Enter")

        await page.waitForTimeout(4000)

        /*await page.locator("textarea[name='q']").type("Reza Dodangeh")

        //await page.keyboard.press("Enter")

        await page.keyboard.press("Control+A")

        await page.keyboard.press("Control+c")

        await page.keyboard.press("Backspace")

        await page.keyboard.press("Control+v")

        await page.waitForTimeout(4000) */

})