import {test, expect, Locator} from '@playwright/test';

test("This is bootstrap hidden dropdown", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const username = page.getByRole('textbox', { name: /Username/i });

    const password = page.locator('input[name="password"]');

    const loginButton = page.getByRole('button', { name: /Login/i });

    await username.fill("Admin");

    await password.fill("admin123");

    loginButton.click();

    await page.getByText('PIM').click();

    //Clicked on job title dropdown
    await page.locator('form i').nth(2).click();
    await page.waitForTimeout(3000);

    //capture all the options from dropdown
    const options:Locator = page.locator("div[role='listbox'] span");

    const number = await options.count();

    console.log("number of options in a dropdown", number);

    await page.waitForTimeout(5000);





})