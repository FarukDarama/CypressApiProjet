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
        First name is Susan
    And
        Last name is Brown
    And
        Total price is 678
    And
        Deposit paid is false
    And
        Check-in date is "2020-07-26"
    And
        Check-out date is "2020-08-12" 
    And
        Additional needs Breakfast
	  	
 */
        describe('GET request method Api testing', () => {
            it('Using  Multiple path params', () => {
                //Set the URL
                const pathParam1='/booking';
                const pathParam2='/4';
                
                //Set the Payload
                //Send the  GET request
                cy.request({
                    method: 'GET',
                    url: `${pathParam1}${pathParam2}`
                }).then((response) => {
                    //Do assertion
                // HTTP Status Code should be 200
                expect(response.status).to.eq(200);
                //Status text is OK
                expect(response.statusText).to.eq("OK");
                //Response time is less than 300 ms
                expect(response.duration).to.be.lessThan(300);
                //Response format should be “application/json”
                expect(response.headers["content-type"]).to.include("application/json");
                // First name is Susan
                expect(response.body.firstname).to.eq('Mark');
                //Last name is Brown
                expect(response.body.lastname).to.eq('Jones');
                //Total price is 678
                expect(response.body.totalprice).to.eq(608);
                 // Deposit paid is false
                 expect(response.body.depositpaid).to.eq(true);
                //Check-in date is "2015-06-06",
                expect(response.body.bookingdates.checkin).to.eq("2020-06-06" );
                // Check-out date is ""2018-09-06"
                expect(response.body.bookingdates.checkout).to.eq("2018-09-06");
            
        
        
                });
        
        
            });
        });
        