/*
  Given
        https://restful-booker.herokuapp.com/booking/2
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that firstname is Mark
    And
        Assert that lastname is Ericsson
    And 
        Assert that total price is 217
    And
        Assert that deposit paid is true
    And 
        Assert that checkin date is "2023-06-28"
    And
        Assert that checkin date is "2023-07-28"
*/
describe('GET request Method', () => {
    it('',  function () {
        //Set the URL
        const pathParam1= '/booking';
        const pathParam2= '/2';

        // set the expected data
        cy.fixture("bookingUniqueTestData").as('expectedData');

        //send the Get  request method
        cy.request({
            method: 'GET',
            url: `${pathParam1}${pathParam2}`,
        }).then((response)=> {
            const actualData = response.body;

            //Do assertions
            //Assert that Status code is 200
            expect(response.status).to.eq(this.expectedData.statusCode);
            // Assert that firstname is Mark
            expect(actualData.firstname).to.eq(this.expectedData.firstname);
            //Assert that lastname is Ericsson
            expect(actualData.lastname).to.eq(this.expectedData.lastname);
            //Assert that total price is 469
            expect(actualData).to.include({
                totalprice:this.expectedData.totalprice,
                depositpaid:this.expectedData.depositpaid,

            })
            expect(actualData.bookingdates.checkin).to.eq(this.expectedData.bookingdates.checkin);
            expect(actualData.bookingdates.checkout).to.eq(this.expectedData.bookingdates.checkout);

           } )


    });
});