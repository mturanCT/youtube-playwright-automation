const {test, expect}=require("@playwright/test"); 
const jsonRequestBody=require("../data/jsonRequestBody.json"); 

test("JSONPlaceholder POST Request", async ({request})=>{

    // const jsonRequestBody={
    //     "userId": 1000,
    //     "id": 55,
    //     "title": "Post created by Nikola",
    //     "body": "This is first post request on fake api server jsonplaceholder"
    // };

    const response=await request.post("/posts", {
        data:jsonRequestBody
    });

    await expect(response.status()).toBe(201);

    const responseBody=await response.json(); 
    await expect(responseBody.id).toBe(101); 
    await expect(responseBody.title).toContain("Nikola");

})
