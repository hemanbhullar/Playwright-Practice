import {test, expect, Locator} from '@playwright/test';

test("Xpath demo in locator", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // start-with() method

    const buildingProducts:Locator = page.locator("//h2/a[starts-with(@href,'/build')]") // return multiple elements

    const count = await buildingProducts.count();

    console.log("Total building products: " + count);
    
    expect(count).toBeGreaterThan(0);

    // text()

    const reglink = page.locator("//a[text()='Register']");
    expect(await reglink.isVisible()).toBeTruthy();


})