const {expect}=require("@playwright/test"); 

class DragAndDrop{

constructor(page){
    this.page=page; 
    // every page locators related to the drag page goes to here. 
     this.blueBox=page.locator(".test1");
     this.draggable=page.locator("#draggable"); 
}

async navigateToTelerik(){
    await this.page.goto("https://demos.telerik.com/kendo-ui/dragdrop/area"); 
}
async dragToBlueBox(){

    await expect(this.blueBox).toHaveText("Drag the small circle here ..."); 
    await this.draggable.dragTo(this.blueBox); 

    await expect(this.blueBox).toHaveText("You did great!"); 
    const bColor=await this.blueBox.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
     })
     await expect(bColor).toEqual("rgb(63, 81, 181)")
}

}

module.exports=DragAndDrop; 