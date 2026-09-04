import { test } from '@playwright/test';
import users from '../Test-data/test-data/users.json';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';


test('User should be able to purchase a product', async ({ page }) => {

    // Create Page Objects

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);


    // Open website

    await page.goto('https://www.saucedemo.com/');


    // Login

   await loginPage.login(
    users.validUser.username,
    users.validUser.password
);

    // Add product to cart

  await productsPage.addProductToCart(users.products.backpack)
    // Open cart

    await productsPage.openCart();


    // Verify product is in cart

 await cartPage.verifyProductIsVisible(users.products.backpack);

    // Go to checkout

    await cartPage.clickCheckout();


    // Enter checkout information

   await checkoutPage.fillCheckoutDetails(
    users.checkoutUser.firstName,
    users.checkoutUser.lastName,
    users.checkoutUser.postalCode
);


    // Continue to overview

    await checkoutPage.clickContinue();


    // Complete order

    await checkoutOverviewPage.clickFinish();


    // Verify order completion

    await checkoutOverviewPage.verifyOrderCompleted();
});