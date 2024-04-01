const {test,expect}=require("@playwright/test");


test("mouse actions", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/context_menu");
    
    // click method will click left by default. 
    await page.locator("#hot-spot").click({button:"right"}); 

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html"); 

    await page.locator("//button").dblclick();

    await page.goto("https://the-internet.herokuapp.com/hovers");

    let images=await page.locator("//div[@id='content']//img"); 
    // there are 3 matching elements. 
    // all() -array images[1] , or images.at(1)
    // without all methods --> images.nth(1); 
    await images.nth(1).hover(); 

    await expect(page.getByText("name: user2")).toHaveText("name: user2"); 

    await page.pause()
})