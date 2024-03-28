const {test, expect}=require("@playwright/test")
const DragAndDrop=require("./drag-page")

test.describe.configure({mode:"serial"})

test("Drag & Drop Practice", async ({page})=>{

    await page.goto("https://demos.telerik.com/kendo-ui/dragdrop/area");
    const blueBox=page.locator(".test1"); // target element
    await expect(blueBox).toHaveText("Drag the small circle here ...")
    await page.locator("#draggable").dragTo(blueBox); 
    await expect(blueBox).toHaveText("You did great!")
    const bColor=await blueBox.evaluate((el) => {
       return window.getComputedStyle(el).getPropertyValue('background-color');
    })
    expect(bColor).toEqual("rgb(63, 81, 181)")
    await page.waitForTimeout(5000); 

})

test("Drag & Drop Practice With Page Object", async ({page})=>{

    const dragPage=new DragAndDrop(page); 
    await dragPage.navigateToTelerik(); 
    await dragPage.dragToBlueBox();
    await page.waitForTimeout(2000); 
    
})