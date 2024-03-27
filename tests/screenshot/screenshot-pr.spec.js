const {test, expect}=require("@playwright/test")

test("Screenshot", async ({page})=>{

    await page.goto("https://www.techtorialacademy.com/home"); 

    await page.screenshot({path: 'techtorial.png'});

    const logo=page.locator("#el_1593094758324_16"); 

    await logo.screenshot({path: 'logo.png'});

    expect(await page.screenshot({path:"techtorialac.png"})).toMatchSnapshot("techtorialac.png") ;

    expect(await logo.screenshot({path: "newlogo.png"})).toMatchSnapshot("newlogo.png");

})