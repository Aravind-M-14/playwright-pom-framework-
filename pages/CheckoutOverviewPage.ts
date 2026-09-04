import { Page, Locator, expect } from '@playwright/test';

export class CheckoutOverviewPage {

    page: Page;

    finishButton: Locator;
    orderConfirmation: Locator;

    constructor(page: Page) {

        this.page = page;

        this.finishButton = page.locator('#finish');
        this.orderConfirmation = page.locator('.complete-header');
    }

    async clickFinish() {

        await this.finishButton.click();
    }

    async verifyOrderCompleted() {

        await expect(this.orderConfirmation).toBeVisible();
    }
}