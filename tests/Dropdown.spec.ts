import {test, expect} from '@playwright/test';

test("Dropdown actions", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/demo.html");
    // await page.locator("//select[@id='courseDropdown']").selectOption("Playwright");
    // await page.locator("//select[@id='courseDropdown']").selectOption({index: 1});
    await page.locator("//select[@id='courseDropdown']").selectOption({label: "Selenium"});
});
