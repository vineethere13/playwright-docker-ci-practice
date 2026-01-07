const { test, expect } = require('@playwright/test');

test('SMP Login',async ({page}) => {
  
  /*
    // Launch Chrome browser in headed mode
  const browser = await chromium.launch({
    headless: false, // headed mode
    channel: 'chrome',
  });
  const context = await browser.newContext();
  const page = await context.newPage();*/

  // Go to the login page
  await page.goto('http://192.168.37.128/esm/esm/index.html#/');

  // Wait for username and password fields to be visible
  await page.waitForSelector('input#Username');
  await page.waitForSelector('input#Password');

  // Fill in credentials
  await page.fill('input#Username', 'supuser');
  await page.fill('input#Password', 'pwd');

  // Click the Sign In button
  await page.click('button:has-text("Sign In")');

  // You might want to wait for navigation or a successful login indication
 // await page.waitForURL('**/HomeScreen');
 await expect(page).toHaveTitle('Scale Management Platform');
  // or, for a specific element after login:
  // await page.waitForSelector('selector-for-after-login');

  // Close browser after some time or validation
  // await browser.close();

  await page.pause();
});
