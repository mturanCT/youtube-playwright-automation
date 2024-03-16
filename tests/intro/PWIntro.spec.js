const {test, expect}=require("@playwright/test");

// Page Fixtures : they are predefined variables, which we can use in our framework. 
test.only("My First Playwright automation", async function({page}){

    await page.goto("https://www.google.com/"); 

    let title=await page.title(); 
    console.log(title);

    await expect(page).toHaveTitle("Google"); 

} )
