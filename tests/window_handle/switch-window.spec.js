const {test, expect} = require("@playwright/test")
const Utils= require("../utils")


test("New Window", async ({page})=> {

    await page.goto("https://the-internet.herokuapp.com/windows"); 

    const newPagePromises= page.context().waitForEvent('page'); // pending --> fullfilled , pending --> rejected 
    // --> listens the new event. Until new page is opened this code will be in pending status. 
    // once new page is opened, waitForEvent('page') will return new page. 

    await page.getByText("Click Here").click(); // --> new page will be opened. 

    let newPage=await newPagePromises; 

    await newPage.waitForLoadState('domcontentloaded'); 

   let newWindowText= await newPage.getByText("New Window").textContent(); 

    console.log(newWindowText);

    let firstWindow= await page.getByText("New Window").textContent(); 

    console.log(firstWindow);

})


test("Multiple window", async ({page})=> {

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html"); 

    const [newPage]= await Promise.all([
        page.context().waitForEvent('page'),
        page.locator("#newWindowsBtn").click()
    ])
   
    let pages=await newPage.context().pages(); 
    // pages() method will return all the windows which is opened under the same context. 

    for(let page of pages){

        console.log(await page.title());
        console.log(await page.url());

    }
})


test.only("Switch Window With Method", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html"); 

    let newPage=await Utils.switchWindowByPageTitle(page,"#newWindowsBtn", "XPath Practice - H Y R Tutorials");
    
    await expect(newPage).toHaveTitle("XPath Practice - H Y R Tutorials"); 
    console.log(await newPage.title());
    console.log(await newPage.url());

})










