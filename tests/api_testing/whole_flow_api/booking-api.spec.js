const {test, expect}=require("@playwright/test"); 
const bookingRequestBody=require("../data/bookingRequestBody.json"); 
const bookingUpdateRequest=require("../data/bookingUpdateRequest.json"); 

// Feature:
test.describe("Booking All API REQUESTS", async ()=>{
        
        let tokenValue;
        // BeforeAll: it will run one time before all the tests
        // BeforeEach: it will run one time before each tests.  
        test.beforeEach("TOKEN GENERATOR", async ({request})=>{
            const tokenData={"username":"admin","password":"password123"}
            const tokenResponse=await request.post("https://restful-booker.herokuapp.com/auth", {data:tokenData})
            const tokenResponseBody=await tokenResponse.json(); 
            tokenValue=tokenResponseBody.token; 
            console.log("TOKEN VALUE: "+tokenValue);
            // ESLINT
        })

        // Scenario
        test("End to End Testing Booking Api Flow", async ({request})=>{
            let bookingId; 
            //Steps-1
            await test.step("POST", async ()=>{
                const postResponse=await request.post("https://restful-booker.herokuapp.com/booking",
                {data:bookingRequestBody});
    
                await expect(postResponse.ok()).toBeTruthy(); 
                const postResponseBody=await postResponse.json(); 
                bookingId=postResponseBody.bookingid; 
                await expect(postResponseBody.booking.firstname).toBe("Mark"); 
            })

            //Step-2
            await test.step("GET", async ()=>{
                console.log(bookingId);
                const getResponse=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`); 

                console.log(await getResponse.text());
                const getResponseBody=await getResponse.json(); 
                await expect(getResponseBody.totalprice).toEqual(1200); 
                await expect(getResponseBody.bookingdates.checkin).toBe("2024-04-01");
            })
            
            //Step-3
            await test.step("PUT", async ()=> {
               
                const putResponse=await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
                {data:bookingUpdateRequest, 
                 headers: {"Content-Type": "application/json", "Cookie":`token=${tokenValue}`}})
                
                 await expect(putResponse.ok()).toBeTruthy(); 
                 const putResponseBody=await putResponse.json(); 
                 await expect(putResponseBody.firstname).toBe("Playwright"); 
                 await expect(putResponseBody.additionalneeds).toBe("Microsoft Summit"); 
            })
            
        })

})