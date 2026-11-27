import {test, expect, Locator} from '@playwright/test';

test("Verify sorted dropdown options", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdownOptions:Locator = page.locator('#animals>option');
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());

    console.log("Options in the dropdown: ", optionsText);

    const sortedOptionsText: string[] = [...optionsText].sort((a, b) => a.localeCompare(b));

    console.log("Sorted options: ", sortedOptionsText);

    expect(optionsText).toEqual(sortedOptionsText);
    
})