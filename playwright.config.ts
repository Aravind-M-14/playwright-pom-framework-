import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    // Folder where our test files are located
    testDir: './tests',

    // Run tests one after another
    fullyParallel: false,

    // Retry failed tests
    retries: 0,

    // Use one worker
    workers: 1,

    // Generate HTML report
    reporter: 'html',

    // Settings used by all tests
    use: {

        // Open our e-commerce website before tests
        baseURL: 'https://www.saucedemo.com',

        // Use Chrome
        ...devices['Desktop Chrome'],

        // Collect trace for every test
        trace: 'on',

        // Take screenshot after every test
        screenshot: 'on',

        // Record video for every test
        video: 'on',

        // Show browser actions in slow motion
        launchOptions: {
            slowMo: 1000
        }
    },

    // Run tests only in Chrome
    projects: [
        {
            name: 'chrome',

            use: {
                ...devices['Desktop Chrome'],

                // Use installed Google Chrome instead of Playwright Chromium
                channel: 'chrome'
            }
        }
    ]
});