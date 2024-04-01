const {test, expect}=require("@playwright/test"); 
const jsonRequestBody=require("../data/jsonRequestBody.json"); 

test("JSONPlaceholder PUT Request", async ({request})=>{

    const response=await request.put("/posts/1", {data: jsonRequestBody}); 

    await expect(response.ok()).toBeTruthy(); 

    const responseBody=await response.json(); 

    await expect(responseBody.title).toBe("Post created by Techtorial");

    await expect(responseBody.body).toContain("fake api");

    await expect(responseBody).toMatchObject(jsonRequestBody); 

})


