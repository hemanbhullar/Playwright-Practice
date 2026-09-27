import {test, expect} from '@playwright/test';

test("locator test1", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/demo.html");

    await page.getByLabel(" Female").check({force: true});

    await expect(page.locator("input[@name='gender'][1]")).not.toBeChecked();

    
})