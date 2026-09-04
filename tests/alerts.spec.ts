import { test, expect } from '@playwright/test';

/*test('Handle JavaScript Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.waitForTimeout(1000); // Wait for 1 second to ensure the page is fully loaded

    page.on('dialog', async dialog => {
        console.log('Dialog message:', dialog.message());

        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

});

test.only('Handle Confirm Dialog', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.waitForTimeout(3000); // Wait for 1 second to ensure the page is fully loaded

    page.on('dialog', async dialog => {

        console.log('Dialog type:', dialog.type());
        console.log('Dialog message:', dialog.message());

        await page.waitForTimeout(3000)

        await dialog.dismiss();
    });

    await page.waitForTimeout(3000) // Wait for 1 second to ensure the page is fully loaded

    await page.getByRole('button', {
        name: 'Click for JS Confirm'
    }).click();

    await expect(page.locator('#result'))
        .toHaveText('You clicked: Cancel');
});*/

test('Handle Prompt Dialog', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     await page.waitForTimeout(3000)
    page.on('dialog', async dialog => {

        console.log('Dialog type:', dialog.type());
        console.log('Dialog message:', dialog.message());
        await page.waitForTimeout(3000)
        await dialog.accept('Aravind');
    });
    await page.waitForTimeout(3000)
    await page.getByRole('button', {
        name: 'Click for JS Prompt'
    }).click();
    await page.waitForTimeout(3000)
    await expect(page.locator('#result'))
        .toHaveText('You entered: Aravind');
});