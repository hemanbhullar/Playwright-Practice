import {test, expect, Locator} from '@playwright/test';

test("Dropdown actions", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/demo.html");
    // await page.locator("//select[@id='courseDropdown']").selectOption("Playwright");
    // await page.locator("//select[@id='courseDropdown']").selectOption({index: 1});
    await page.locator("//select[@id='courseDropdown']").selectOption({label: "Selenium"});
});


test.only("Dropdown actions selectOption", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const country = page.locator("#country");
    const countryByLabel = page.getByLabel("Country", {exact: true});
    const colours = page.locator("#colors");

    // const values = await country.selectOption('India'); //visible text
    // expect(values[0]).toBe("india");

    // await country.selectOption({value: "uk"}); //by using value attribute

// await country.selectOption({label: "India"}) //by using label attribute

// await country.selectOption({index: 3}); //by using index attribute
    // await expect(country).toHaveValue("uk"); 
    // await expect(country.locator("option:checked")).toHaveText("Germany");

    //2.) check the number of options in the dropdown
    const dropdownOptions:Locator = page.locator("#country>option");
    await expect(dropdownOptions).toHaveCount(10);


    //3.) check whether the option is present in the dropdown. 
    const optionTexts:string[] = (await dropdownOptions.allTextContents()).map(text => text.trim());

    console.log(optionTexts);

    expect(optionTexts).toContain("Japan");

    //4.) printing options from the dropdown
    for (const options of optionTexts) {
        console.log(options);
    }

    await page.waitForTimeout(5000);

})
