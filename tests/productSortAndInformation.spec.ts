import {test, expect, Locator} from '@playwright/test';

test("Product sort and information", async({page}) => {
    await page.goto("https://www.bstackdemo.com/")

    const sortbyDropdown:Locator = page.locator('select>option');
    const priceElements:Locator = page.locator('div.shelf-item__price>div.val>b');
    const productsName:Locator = page.locator('p.shelf-item__title');

    await expect(sortbyDropdown).toHaveCount(3);

    await page.locator('select').selectOption({value: "lowestprice"})

    await expect(priceElements.first()).toBeVisible();

    const priceTexts:string[] = (await priceElements.allTextContents());
    const productNameList: string[] = (await productsName.allTextContents()).map(text => text.trim());

    console.log("Price Texts: ", priceTexts);

    expect(productNameList.length).toBe(priceTexts.length);

    for(let i = 0; i<productNameList.length; i++){
        console.log(productNameList[i]+" "+priceTexts[i]);
    }

    expect(priceTexts[0]).toBe("399");
    expect(priceTexts[priceTexts.length-1]).toBe("1399");

    

    await page.waitForTimeout(5000);
})