import { test, expect } from '@playwright/test';

test('AssertionsTest',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoelement=await page.locator('.header-logo')

    await expect (logoelement).toBeVisible()

    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

})