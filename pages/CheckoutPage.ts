import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

    page: Page;

    firstNameInput: Locator;
    lastNameInput: Locator;
    postalCodeInput: Locator;
    continueButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
    }

    async enterFirstName(firstName: string) {

        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string) {

        await this.lastNameInput.fill(lastName);
    }

    async enterPostalCode(postalCode: string) {

        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinue() {

        await this.continueButton.click();
    }

    async fillCheckoutDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
    }
}