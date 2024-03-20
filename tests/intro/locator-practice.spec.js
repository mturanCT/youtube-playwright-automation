const {test,expect}=require("@playwright/test"); 


test("Locator Practice", async ({page}) => {

    await page.goto("https://formy-project.herokuapp.com/form");

    await page.locator("//input[@id='first-name']").fill("David"); 
    //id=#first-name //class=.class-name
    
    await page.locator("#last-name").fill("Trn"); 

    await page.locator("#radio-button-3").check(); 

    await page.locator("#checkbox-1").click(); 

    await page.locator("#checkbox-1").uncheck(); 

    await page.locator("//a[.='Submit']").click();
    
    // let actual=await page.locator("//div/div").textContent(); //getText

    // console.log(actual);

    //await page.waitForURL("https://formy-project.herokuapp.com/thanks"); 
    //await page.waitForTimeout(1000); 

    await expect(page.locator("//div[@class='alert alert-success']")).toHaveText("The form was successfully submitted!"); 
    await expect(page).toHaveURL("https://formy-project.herokuapp.com/thanks")
    await expect(page).toHaveTitle("Formy"); 
    //await page.pause(); 

})