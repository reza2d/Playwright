const {test , expect} = require("@playwright/test")

test("Select values from drop down" , async function ({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Goa"})

    await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({value:"Karnataka"})

    await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({index:2})

    await page.waitForTimeout(3000)

    /* const value = await page.locator("#state").textContent()

    console.log("All dropdown values " + value)

    await expect(value.includes("Haryana")).toBeTruthy() */

    let state = await page.$("#state")

    let allElements = await state.$$("option")

    let ddStatus = false


    for(let i=0;i<allElements.length;i++){

        let element = allElements[i]

        let value = await element.textContent()

        console.log("Value from drop down using for loop " + value)

        if(value.includes("Chandigarh")) {

            ddStatus = true
            break
        }

        

    }

        await expect(ddStatus).toBeTruthy

        await page.locator("#hobbies").selectOption(["Playing", "Swimming"])

        await page.waitForTimeout(3000)

}
)