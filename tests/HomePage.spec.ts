import {test, expect} from "@playwright/test";

test("Go to Home page and verify the text", async({page}) => {
    await page.goto("https://youtube.com/");
    await expect(page.locator('body')).toContainText("Try searching to get started");
})

test("verify some text on the home page", async({page}) => {
    await page.goto("https://youtube.com/");
    await expect(page.getByText("Start watching videos to help us build a feed of videos you'll love.")).toBeVisible();
    await page.goto("https://the-internet.herokuapp.com/hovers");
    await expect(page.getByAltText("Fork me on GitHub")).toBeVisible();
})

test("verify add element button using role locator", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.getByRole("button", {name: "Add Element Heman testing"})).toBeVisible();
    await page.getByRole("button", {name: "Add Element"}).click();
})

test("verify heading using css locator", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await expect(page.locator("h1.heading")).toBeVisible();
})

test("verify locator test case with relative xpath by attribute locator", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/demo.html");
    await expect(page.locator("//p[@class='subtitle']")).toContainText("A demo website for Selenium");
})

test("Verify locator test case with relative xpath by text locator", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/demo.html");
    await expect(page.locator("//h1[text()='Automation Practice Hub']")).toBeVisible();
});

test("Verify locator test case with relative xpath by contains attribute locator", async({page}) => {
    await page.goto("https://learnwithdivyansha.com/demo.html");
    await expect(page.locator("//button[contains(@onclick,'loginUser')]")).toBeVisible();
});