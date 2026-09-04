import { Page, Locator } from '@playwright/test'

export class LoginPage {

    page: Page

    usernameInput: Locator
    passwordInput: Locator
    loginButton: Locator
    errorMessage: Locator

    constructor(page: Page) {

        this.page = page

        this.usernameInput = page.getByPlaceholder('Username')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async enterUsername(username: string) {

        await this.usernameInput.fill(username)
    }

    async enterPassword(password: string) {

        await this.passwordInput.fill(password)
    }

    async clickLogin() {

        await this.loginButton.click()
    }

    async login(username: string, password: string) {

        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLogin()
    }
    async clearLoginFields() {
    await this.usernameInput.fill('Developer A');
    await this.passwordInput.fill('');
}
}