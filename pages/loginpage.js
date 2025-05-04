const {expect} = require("@playwright/test")

class LoginPage {

    constructor(page)
    {
        this.page=page
        this.username="#email1"
        this.password="#password1"
        this.loginbutton="//button[text()='Sign in']"
        this.signintext = "//h2[text()='Sign In']"

    }

    async loginToApplication(user, pass) {

        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginbutton)
    }

    async verifySignOut(){
        await expect(this.page.locator(this.signintext)).toBeVisible()
    }
}

module.exports=LoginPage;