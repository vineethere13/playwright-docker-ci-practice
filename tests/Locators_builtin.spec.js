const {test, expect}=require('@playwright/test')

test('Built-inLocators',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const logo=await page.getByAltText('company-branding')
    await expect (logo).toBeVisible()

    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole('button',{type: 'submit'}).click()
/*
    const bytxt=await page.getByText('mmmm sss')

    await expect (bytxt).toBeVisible()
    */

    const txtloc=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()

    console.log ('text content is-',txtloc);

    await expect (await page.getByText(txtloc)).toBeVisible()

})