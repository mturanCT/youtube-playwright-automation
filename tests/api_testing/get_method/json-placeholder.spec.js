const {test, expect, request}=require("@playwright/test"); 

test("JSONPlaceholder Get Request", async ({request})=>{

    const response=await request.get("https://jsonplaceholder.typicode.com/users/2");

    await expect(response.ok()).toBeTruthy(); 
    await expect(response.headers()["content-type"]).toBe("application/json; charset=utf-8"); 
    
    console.log(await response.text());

    const requestBody=await response.json();

    await expect(requestBody.name).toBe("Ervin Howell"); 

    await expect(requestBody.address.geo.lat).toBe("-43.9509");

})