import {test, expect} from '@playwright/test';

test('CSS locators demo', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');

    const searchInput = page.locator('input#small-searchterms'); //css with id locator
    await expect(searchInput).toBeVisible();
    await searchInput.fill('laptop');
    await searchInput.press('Enter');


})