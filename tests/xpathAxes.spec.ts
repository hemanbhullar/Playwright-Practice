import {test, expect} from "@playwright/test";

test("Xpath axes demo", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // 1. self axis - Select <td> element that contains "Germany"
    const germanyCell = page.locator("//td[text()='Germany']/self::td");
    await expect(germanyCell).toBeVisible();
    await expect(germanyCell).toHaveText("Germany");

})