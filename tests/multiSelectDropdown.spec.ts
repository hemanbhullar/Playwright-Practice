import {test, expect, Locator} from '@playwright/test';

test("Multi Select Dropdown actions", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1. Select multiple options from the dropdown( 4 ways)
    // await page.locator('#colors').selectOption(['red', 'blue', 'green']); // using value attributes
    // await page.locator('#colors').selectOption(['Red', 'Blue', 'Green']); // using visible text
    // await page.locator('#colors').selectOption([{label: 'Red'}, {label: 'Green'}, {label: 'Yellow'}]); //using label
    // await page.locator('#colors').selectOption([{index: 0}, {index: 2}, {index: 4}]); //using index

    // 2. check the number of options in the dropdown
    const dropdownOptions:Locator = page.locator('#colors>option');
    await expect(dropdownOptions).toHaveCount(7);

    //3. Check options in the dropdown
    const optionTexts:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());

    console.log(optionTexts);

    expect(optionTexts).toContain("Green");

    //4th Print options from the dropdown
    for (const options of optionTexts) {
        console.log(options);
    }

    

    await page.waitForTimeout(5000);


})