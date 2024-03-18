const {test}=require("@playwright/test"); 


test("Locator Practice", async ({page}) => {

    await page.goto("https://formy-project.herokuapp.com/form");

    await page.locator("//input[@id='first-name']").fill("David"); 
    //id=#first-name //class=.class-name
    
    await page.locator("#last-name").fill("Trn"); 

    await page.locator("#radio-button-3").check(); 

    await page.locator("//a[.='Submit']").click(); 

    //await page.pause(); 

})