const {test, expect} = require("@playwright/test");
const exp = require("constants");

test("Iframe", async ({page})=> {

    await page.goto("https://skpatro.github.io/demo/iframes"); 

    let frameOne=await page.frameLocator("#Frame1"); 

    await expect(frameOne.locator("#frametext")).toHaveText("I am inside Frame");

    let frameTwo=await page.frameLocator("#Frame2"); 

    await expect(frameTwo.getByText("Category3")).toBeVisible(); 

})


test('test', async ({ page }) => {
  await page.goto('https://skpatro.github.io/demo/iframes/');
  const page1Promise = page.waitForEvent('popup');
  await page.frameLocator('iframe[name="Framename1"]').getByRole('link', { name: 'Category2' }).click();
  const page1 = await page1Promise;
  let text=await page1.getByRole('heading', { name: 'Nothing Found' }).textContent(); 

  console.log(text);
});