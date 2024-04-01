const {Given, When, Then}=require("@cucumber/cucumber");
const {chromium, expect} = require("@playwright/test"); 
const load=require("lodash")
let requestBody, browserContext, page, response; 

         Given('the user provide {string} and {string}',async function (baseUrl, endpoint) {
            browserContext= await chromium.launch(); 
            page=await browserContext.newPage(); 
            this.baseUrl=baseUrl; 
            this.endpoint=endpoint; 
         });
       
         When('the user set the data {string}', function (nameOfDataJson) {
            requestBody=require("/Users/davidturan/Desktop/PlayWrightTechtorial/tests/api_testing/data/"+nameOfDataJson); 

         });
       
       
         Then('the user send {string} Request', async function (methodName) {
           
            switch(methodName){
                case "POST": 
                response=await page.request.post(`${this.baseUrl}${this.endpoint}`, 
                {data:requestBody})
            }
         });
       
       
         Then('the user verify status code {int}', async function (expectedStatusCode) {
            
            await expect(response.status()).toBe(expectedStatusCode); 

         });
       
       
         Then('the user {string} is {string}', async function (jsonPath, expectedValue) {

            let responseBody=await response.json();
            const actualValue=load.get(responseBody,jsonPath); 
            await expect(actualValue).toBe(expectedValue);
           
         });
       