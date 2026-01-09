const { test, expect } = require('@playwright/test');

test('@ci @smoke CI smoke: Playwright site loads', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
