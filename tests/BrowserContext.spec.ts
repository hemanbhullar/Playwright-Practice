import {test, expect, chromium} from '@playwright/test';

test('Browser context test', async ({}) => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    // const context2 = await browser.newContext();
    // const page = await context.newPage();
    // await page.goto('https://learnwithdivyansha.com/cart.html');
    
    // const page2 = await context2.newPage();

    // await page2.goto('https://learnwithdivyansha.com/demo.html');

    const ParentTab = await context.newPage();
    await ParentTab.goto('https://learnwithdivyansha.com/landing.html');
    const [childTab] = await Promise.all([context.waitForEvent('page'), ParentTab.locator('//div[@class="cart"]').click()]);


    const pages = context.pages();
    console.log('Total Pages:', pages.length); // Should log 2

    console.log("Parent title:", await ParentTab.title());
    console.log("Child title:", await childTab.title());

}) 