Feature: Booking All API REQUESTS

   Scenario: POST Request
   Given the user provide "https://restful-booker.herokuapp.com" and "/booking"
   When the user set the data "bookingRequestBody.json"
   Then the user send "POST" Request
   And the user verify status code 200
   And the user "booking.firstname" is "Mark"

 Scenario: POST Request negative
   Given the user provide "https://restful-booker.herokuapp.com" and "/bookingg"
   When the user set the data "bookingRequestBody.json"
   Then the user send "POST" Request
   And the user verify status code 404

   Scenario: JasonPlaceholder POST Request
   Given the user provide "https://jsonplaceholder.typicode.com" and "/posts"
   When the user set the data "jsonRequestBody.json"
   Then the user send "POST" Request
   And the user verify status code 201
   And the user "title" is "Post created by Nikola"