import { test, expect } from '@playwright/test';
const MainPage=require("../pages/MainPage"); 
// json >> json string-stringify() >> object- parse() 
const dataSet=JSON.parse(JSON.stringify(require("../data/loginData.json")))

for(let data of dataSet){
    test(`Login Test with Page ${data.username}`, async ({ page }) => {
        let mainPage=new MainPage(page);
    
        await page.goto('https://www.saucedemo.com/');
    
        await mainPage.sauceLogin(data.username,data.password);
    
    })
}

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('#root')).toContainText('Swag Labs');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  
  expect(page).toHaveTitle("Swag Labs"); 
});


