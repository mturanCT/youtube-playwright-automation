const {test, expect}=require('@playwright/test'); 


test("Page methods practice", async ({page}) => {

    await page.goto("https://www.google.com/");

    await page.goto("https://www.techtorialacademy.com/"); 
 
    await page.goBack({timeout:4000, waitUntil:"networkidle"}); 

    // await page.close(); 

    // console.log("RESULT: "+ page.isClosed());

   // await page.goForward();
   let currentUrl=page.url(); 
   console.log(currentUrl);

   await page.waitForURL("https://www.google.com/"); 

    await page.reload(); // refresh the page

    await expect(page).toHaveTitle("Google"); 
}
)