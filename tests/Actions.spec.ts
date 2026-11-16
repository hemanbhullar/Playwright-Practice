import {test, expect, Locator} from '@playwright/test';

test("Text actions", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/demo.html");
    await expect(page.locator("input#username")).toBeEnabled();
    await expect(page.locator("input#username")).toBeVisible();
    await expect(page.locator("input#username")).toHaveAttribute("placeholder", "Enter Username");
    await page.locator("input#username").fill("testuser");
    await page.locator("input#username").clear();
    await page.locator("input#username").fill("heman testing");
    await page.locator("input#password").fill("password");
    await page.locator("button[onClick='loginUser()']").click();

    await page.locator("//button[@onclick='showAlert()']").click();
    await page.locator("//button[@onclick='loginUser()']").click();

    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    
    await page.locator("//button[@onclick='showConfirm()']").click();
    
});

test("iframe actions", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/cart.html");
    // const frame1 = page.frame("cartCountFrame");
    const frame1 = page.frameLocator("#cartCountFrame");
    if(frame1){
        await expect(frame1.locator("//h2[contains(text(),'Total Items')]")).toHaveText("Total Items");
    }
    else{
        console.log("Frame not found");
    }
})


test('Text Input Actions', async ({ page} ) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const textBox: Locator = page.locator('#name');

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxLength: String | null = await textBox.getAttribute("maxlength");

    expect(maxLength).toBe("15");

    await textBox.fill("Test User");

    console.log("Text entered in the text box: " + await textBox.inputValue());


});


test('Radio Button Actions', async ({ page} ) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const maleRadioButton: Locator = page.locator("#male");

    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();
    expect(await maleRadioButton.isChecked()).toBe(false);

    await maleRadioButton.check();
    expect(await maleRadioButton.isChecked()).toBe(true);
    await expect(maleRadioButton).toBeChecked();

});

test.only('CheckBox Button Actions', async ({ page} ) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const sundayCheckbox:Locator = page.getByLabel("Sunday");
    sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();

    const days:string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const checkboxes:Locator[] = await Promise.all(days.map(day => page.getByLabel(day)));

    expect(checkboxes.length).toBe(6);

    for(const checkbox of checkboxes){
        checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    for(const checkbox of checkboxes.slice(-3)){
        checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }

    // Toggle checkboxes
    for(const checkbox of checkboxes) {
        if(await checkbox.isChecked()) {
            checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else{
            checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    await page.waitForTimeout(3000);
});