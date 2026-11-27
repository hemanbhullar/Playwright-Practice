import {test, expect, Locator} from '@playwright/test';

test("Verify dropdown options contains duplicates", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // const dropdownOptions:Locator = page.locator('#animals>option'); // not having duplicates
    const dropdownOptions:Locator = page.locator('#colors>option'); // having duplicates
    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());

    const mySet = new Set<string>();
    const duplicates: string[] = [];
    
    for( const option of optionsText) {
        if(mySet.has(option)){
            duplicates.push(option);
        }
        else{
            mySet.add(option);
        }
    }

    console.log("Options in the dropdown: ", optionsText);
    console.log("Duplicate options in the dropdown: ", duplicates);

    expect(duplicates.length).toBeGreaterThan(0);
    
})