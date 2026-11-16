import {test, expect} from "@playwright/test";

test("Xpath axes demo", async ({page}) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    // 1. self axis - Select <td> element that contains "Germany"
    const germanyCell = page.locator("//td[text()='Germany']/self::td");
    await expect(germanyCell).toBeVisible();
    await expect(germanyCell).toHaveText("Germany");

    // 2. parent axis - Select the parent <tr> element of the <td> that contains "Germany"
    const germanyRow = page.locator("//td[text()='Germany']/parent::tr");
    await expect(germanyRow).toBeVisible();
    await expect(germanyRow).toContainText("Maria Anders");

    console.log("Germany row text: " + await germanyRow.textContent());

    // 3. child axis - Select all <td> children of the <tr> that contains "Austria"
    const austriaChildren = page.locator("//table[@id='customers']//tr[5]/child::td");
    const childCount = await austriaChildren.count();
    console.log("Number of children in 5th row: " + childCount);
    expect(childCount).toBeGreaterThan(0);

    // 4. ancestor axis - Get ancestor <table> of the "Germany" cell
    const germanyTable = page.locator("//td[text()='Germany']/ancestor::table");
    await expect(germanyTable).toBeVisible();
    await expect(germanyTable).toHaveAttribute("id", "customers");

    // 5. descendant axis - Get all <td> descendants of the table with id 'customers'
    const tableDescendants = page.locator("//table[@id='customers']/descendant::td");
    const descendantCount = await tableDescendants.count();
    console.log("Number of <td> descendants in the table: " + descendantCount);
    expect(descendantCount).toBeGreaterThan(0);

    // 6. following axis - Get the <td> that gets after the "Germany"
    const followingCells = page.locator("//td[text()='Maria Anders']/following::td");
    const followingCount = await followingCells.count();
    console.log("Number of following <td> after 'Maria Anders': " + followingCount);
    expect(followingCount).toBeGreaterThan(0);

    //7. following-sibling axis - Get the <td> that is the next sibling of "Maria Anders"
    const followingSiblingCells = page.locator("//td[text()='Maria Anders']/following-sibling::td");
    const followingSiblingCount = await followingSiblingCells.count();
    console.log("Number of following-sibling <td> after 'Maria Anders': " + followingSiblingCount);
    expect(followingSiblingCount).toBeGreaterThan(0);

    // 8. preceding axis - Get all <td> that comes before "Germany"
    const precedingCells = page.locator("//td[text()='Maria Anders']/preceding::td");
    const precedingCount = await precedingCells.count();
    console.log("Number of preceding <td> before 'Maria Anders': " + precedingCount);
    expect(precedingCount).toBeGreaterThan(0);

    // 9. preceding-sibling axis - Get the <td> that is the previous sibling of "Maria Anders"
    const precedingSiblingCells = page.locator("//td[text()='Maria Anders']/preceding-sibling::td");
    const precedingSiblingCount = await precedingSiblingCells.count();
    console.log("Number of preceding-sibling <td> before 'Maria Anders': " + precedingSiblingCount);
    expect(precedingSiblingCount).toBeGreaterThan(0);

})