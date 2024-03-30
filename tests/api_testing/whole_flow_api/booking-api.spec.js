const {test, expect}=require("@playwright/test"); 
const bookingRequestBody=require("../data/bookingRequestBody.json"); 

// Scenario: 
test.describe("Booking All API REQUESTS", async ()=>{
        
        // steps
        test("Booking Api Post Request", async ({request})=>{

            const postResponse=await request.post("https://restful-booker.herokuapp.com/booking",
            {data:bookingRequestBody});

            await expect(postResponse.ok()).toBeTruthy(); 
            const postResponseBody=await postResponse.json(); 

            await expect(postResponseBody.booking.firstname).toBe("David"); 

        })

})