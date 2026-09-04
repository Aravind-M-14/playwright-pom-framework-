import { test, expect } from '@playwright/test';

test('Handle iframe', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/iframe');

    // Locate the iframe
    const frame = page.frameLocator('#mce_0_ifr');

    // Click inside the editor
    await frame.locator('html').click();

    // Select existing content and replace it
    await frame.locator('body').press('Control+A');
    await frame.locator('body').fill('Hello Aravind');

    // Verify
    await expect(frame.locator('body'))
        .toContainText('Hello Aravind');

});