const {test, expect}=require("@playwright/test"); 

test("JSONPlaceholder DELETE Request", async ({request})=>{

    const response=await request.delete("/posts/1"); 

    await expect(response.ok()).toBeTruthy();

})