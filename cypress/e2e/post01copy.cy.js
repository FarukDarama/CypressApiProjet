/*
    Given
        https://restful-booker.herokuapp.com/booking
    And
        {
        "firstname": "Selim",
        "lastname": "Ak",
        "totalprice": 11111,
        "depositpaid": true,
        "bookingdates": {
                "checkin": "2021-09-09",
                "checkout": "2021-09-21"
            }
        }
    When
        I send POST Request to the Url
    Then
        Status code is 200
        And response body should be like {
                                        "bookingid": 11,
                                        "booking": {
                                                    "firstname": "Selim",
                                                    "lastname": "Ak",
                                                    "totalprice": 11111,
                                                    "depositpaid": true,
                                                    "bookingdates": {
                                                                    "checkin": "2020-09-09",
                                                                    "checkout": "2020-09-21"
                                                                    }
                                                        }
                                        }
*/

        //payload 'a  request body de  denir, expected data  response  ile eş anlamlıdır
        // response body de gorulen actual  data da olur
        //Set the url
       
        //Set the payload
        
        //send the POST Request to the Url 
        
       describe("Post Request Method",()=>{
        it("should create new data",function(){
            //set the url
            const patParam="/booking";
            //set the payload
            cy.fixture("postBookingPayload").as("payload");
            //send the Post request
            cy.get("@payload").then((payload)=>{
                cy.request({
                    method:"POST",
                    url:`${patParam}`,
                    body:payload,
                    headers:{
                        "Conent-Type":"application/json"
                    }
                }).then((response)=>{
                    //Do assertions
                const actualData =response.body.booking;
                //1-Assert Status code is 200
                expect(response.status).to.eq(200);
                //2-Assert that  first name is Selim
                expect(actualData.firstname).to.eq(payload.firstname);
                //3-Assert that  last name is Ak
                expect(actualData.lastname).to.eq(payload.lastname);
                //4-Assert that "totalprice": 11111,
                expect(actualData.totalprice).to.eq(payload.totalprice);
                //5-Assert that "depositpaid": true,
                expect(actualData.depositpaid).to.eq(payload.depositpaid);  
                //6-Assert that    bookingdates "checkin"is  "2020-09-09",
                expect(actualData.bookingdates.checkin).to.eq(payload.bookingdates.checkin);
                //7-Assert that    bookingdates "checkout is  "2020-09-21"    
                expect(actualData.bookingdates.checkout).to.eq(payload.bookingdates.checkout);

                })
            })
           

        });
       });        
         
     
   
