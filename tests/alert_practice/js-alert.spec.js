const {test, expect}=require('@playwright/test')


test("JS Alert-1",async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts'); 

    page.on('dialog', dialog => console.log(dialog.message()))

    page.on('dialog', dialog => dialog.accept("techtorial"))

    //page.on('dialog', dialog => dialog.dismiss())

    await page.getByText('Click for JS Prompt').click(); // by default alert is dismissed. 

    await expect(page.locator('#result')).toHaveText("You entered: techtorial")

    //await page.pause(); 

})






