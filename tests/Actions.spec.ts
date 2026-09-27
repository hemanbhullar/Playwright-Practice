import {test, expect} from '@playwright/test';

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