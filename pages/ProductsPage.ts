import { Page, Locator } from '@playwright/test';

export class ProductsPage {

    page: Page;

    productsTitle: Locator;
    cartButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productsTitle = page.locator('.title');
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async addProductToCart(productName: string) {

        const product = this.page
            .locator('.inventory_item')
            .filter({ hasText: productName });

        const addToCartButton = product.getByRole('button', {
            name: 'Add to cart'
        });

        await addToCartButton.click();
    }

    async removeProductFromCart(productName: string) {

        const product = this.page
            .locator('.inventory_item')
            .filter({ hasText: productName });

        const removeButton = product.getByRole('button', {
            name: 'Remove'
        });

        await removeButton.click();
    }

    async openCart() {

        await this.cartButton.click();
    }
}