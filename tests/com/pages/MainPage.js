const { expect } = require("@playwright/test")

class MainPage {

    constructor(page) {
        this.page = page;
        // locators
        this.header = page.locator('#root');
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async sauceLogin(username, password) {
        await expect(this.header).toContainText('Swag Labs');
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

        await expect(this.page).toHaveTitle("Swag Labs");
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");

    }
}
module.exports = MainPage;

