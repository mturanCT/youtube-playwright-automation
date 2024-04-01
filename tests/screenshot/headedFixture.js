const { test } = require('@playwright/test');

const test = baseTest.extend({
  page: async ({ page }, use) => {
    // Close the default page and launch a new browser instance in headed mode
    await page.context().browser().close();
    const browser = await baseTest.playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const newPage = await context.newPage();
    await use(newPage);
    // Cleanup: close the browser instance after the test is done
    await browser.close();
  },
});

module.exports = test;
