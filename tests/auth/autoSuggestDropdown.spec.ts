import {test, expect, Locator} from '@playwright/test';

test("AutoSuggest Dropdown", async ({page}) => {
    await page.goto("https://www.flipkart.com/");

    await page.getByRole('button', {
        name: '✕',
        exact: true
    }).click();


    await page.locator('input[name="q"]:visible').fill("smart"); //search text

    // Get all the suggested options --> Ctrl + Shift + P on DOM --> emulate focused page

    const options:Locator = page.locator('ul>li');

    await page.waitForTimeout(5000);

    const optionCount = await options.count();

    console.log("Number of suggested options", optionCount);


    for(let i=0; i<optionCount; i++){
        console.log(`${i} option: `, await options.nth(i).innerText());
        let textname = options.nth(i).innerText();
        if(await textname==='smartphone under 15000'){
            await options.nth(i).click();
            break;
        }
    }


    await page.waitForTimeout(3000);

})