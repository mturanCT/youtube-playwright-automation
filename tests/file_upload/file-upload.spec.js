const {test, expect}=require("@playwright/test")

test("File Upload", async ({page})=>{

    await page.goto("https://demo.guru99.com/test/upload/"); 

    await page.locator("#uploadfile_0").setInputFiles("/Users/davidturan/Desktop/PlayWrightTechtorial/logo.png")
    // await page.locator("#uploadfile_0").setInputFiles(
    //     ["/Users/davidturan/Desktop/PlayWrightTechtorial/logo.png",
    //     "/Users/davidturan/Desktop/PlayWrightTechtorial/newlogo.png" 
    //     ])
    await page.locator("#submitbutton").click(); 

    await expect(page.locator("#res")).toHaveText("1 file has been successfully uploaded.")

    // await page.pause(); 

})