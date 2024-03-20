const {test,expect} = require('@playwright/test'); 


test("List Of elements", async ({page}) =>{

    await page.goto("https://formy-project.herokuapp.com/form"); 

    let elements=await page.locator("//label");

    console.log(await elements.first().textContent());
    console.log(await elements.last().textContent());
    
    let count=await elements.count(); 
    // count(): it returns count of matching elements from the locator
    
    for(let i=0;i<count ;i++){
        // nth(): it will return the element which is matching with index number. 
        console.log(await elements.nth(i).textContent());

    }

    // all(): all method comes from the locator and it return the array of matching elements. 
    let boxs=await page.locator("//input[@type='checkbox']").all(); 

    console.log(boxs.length);

    for(let box of boxs){
        
        await box.click();
        
    }

    await page.pause(); 
})