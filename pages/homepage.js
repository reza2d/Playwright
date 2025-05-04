const {expect} = require("@playwright/test")

class HomePage{

    constructor(page){

        this.page = page
        this.manageoption = "/span[text()='Manage']"
        this.menu = "//img[@alt='menu']"
        this.logoutoption = "//button[text()='Sign Out']"
        
    }

    async CheckIfHomePageIsDisplayed() {

        await expect(this.page.locator(this.manageoption)).toBeVisible()
    }

    async signOutOfApplication(){

        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)
    }

    
}

module.exports= HomePage