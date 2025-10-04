import { test, expect } from '@playwright/test'; 


test.describe("Keyboard Action Tests", () => {

test("Keyboard Action Tests", async ({page})=>{

    await page.goto('https://www.google.com/',{waitUntil:'domcontentloaded'}); 

    await page.locator("//textarea[@name='q']").fill("Techtoriall")

    await page.locator("//textarea[@name='q']").press("Backspace");

    await page.locator("//textarea[@name='q']").press("Enter");

    await expect(page).toHaveTitle('Techtorial - Google Search'); 

    //await page.pause();

})


test.only("Keyboard Action Tests - Only This Test", async ({ page }) => {
    

  await page.goto('https://www.cnbc.com/');
  await page.locator('[data-test="GlobalNavigation"]').getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: ' Search' }).click();
  await page.getByRole('searchbox', { name: 'Search quotes, news, & video' }).click();
  await page.getByRole('searchbox', { name: 'Search quotes, news, & video' }).fill('nvda');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator('[data-test="QuoteStrip"]').getByText('NVIDIA Corp').click();
});
    //await page.pause();


})