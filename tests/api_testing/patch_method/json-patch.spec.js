const {test, expect}=require("@playwright/test"); 
const jsonRequestPatchBody=require("../data/jsonRequestPatchBody.json"); 

test("JSONPlaceholder PATCH Request", async ({request})=>{

    const response=await request.patch("/posts/55", {data:jsonRequestPatchBody}); 

    await expect(response.status()).toBe(200); 

    const responseBody=await response.json(); 

    await expect(responseBody.title).toBe("Created by Techtorial");
})