const {test, expect}=require("@playwright/test");

// Page Fixtures : they are predefined variables, which we can use in our framework. 
test("My First Playwright automation", async function({page}){

    await page.goto("https://www.google.com/"); 

    let title=await page.title(); 
    console.log(title);

    await expect(page).toHaveTitle("Google"); 

} )


test("Browser Context Test", async ({browser}) => {

    let context= await browser.newContext(); // openning new incognito window.

    let page1= await context.newPage();
    await page1.goto("https://www.google.com/"); 

    let page2= await context.newPage();
    await page2.goto("https://www.google.com/maps");  

    let title=await page1.title(); 
    console.log(title);

    await expect(page1).toHaveTitle("Google"); 

} )
