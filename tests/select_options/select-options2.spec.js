const {test}=require('@playwright/test')


test("Get Options", async({page})=>{

    await page.goto("https://formy-project.herokuapp.com/form")

    const select= page.locator("#select-menu"); 

    const options=await select.locator('option').all(); 

    for (const option of options){
        console.log(await option.textContent());
    }

})