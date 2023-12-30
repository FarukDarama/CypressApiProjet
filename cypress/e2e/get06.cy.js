/*
Given
        https://restful-booker.herokuapp.com/booking/4
    When
        User sends GET Request to the Url
    Then
         HTTP Status Code should be 200
    And
        Status text is OK
    And 
        Response time is less than 300 ms
    And
        Response format should be "application/json"
    And
        Firstname is Susan
    And
        Lastname is Brown
    And
        Total price is 678
    And
        Depost paid is false
    And
        Checkin date is "2020-07-26"
    And
        Checkout date is "2020-08-12" 
    And
        Additional needs Breakfast

*/
describe("GET Request Method Testing",()=>{

    it("Using multiple path params",()=>{
         // Set the url
         const pathParam1="/booking";
         const pathParam2="/4";
         //Set the payload
         //Send the request
        request({
            method:"GET",
            url:`${pathParam1}${pathParam2}`
        }).then((response)=>{
            //Do assertion
        expect(response.status).to.eq(200);
        expect(response.statusText).to.eq("OK");
        expect(response.duration).to.be.lessThan(700);
        expect(response.headers["content-type"]).to.include("application/json");
        //Firstname is Susan
        expect(response.body.firstname).to.eq("Mark");
        expect(response.body.lastname).to.eq("Jones");
        expect(response.body.totalprice).to.eq(608);
        expect(response.body.depositpaid).to.eq(true);
        expect(response.body.bookingdates.checkin).to.eq("2015-06-06");
        expect(response.body.bookingdates.checkin).to.eq("2018-09-06");
        })

    })
})