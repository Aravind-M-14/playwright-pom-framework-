import { Page, Locator, expect } from '@playwright/test';

export class CartPage {

    page: Page;

    cartTitle: Locator;
    checkoutButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.cartTitle = page.locator('.title');
        this.checkoutButton = page.locator('#checkout');
    }

    async verifyProductIsVisible(productName: string) {

        const product = this.page
            .locator('.cart_item')
            .filter({ hasText: productName });

        await expect(product).toBeVisible();
    }

    async removeProduct(productName: string) {

        const product = this.page
            .locator('.cart_item')
            .filter({ hasText: productName });

        const removeButton = product.getByRole('button', {
            name: 'Remove'
        });

        await removeButton.click();
    }

    async clickCheckout() {

        await this.checkoutButton.click();
    }
}