/*
    Given
        https://reqres.in/api/users/3
    And
        {
            "email": "techpro@gmail.com",
            "first_name": "Tech",
            "last_name": "Pro",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        }
    When
        User sends PUT Request to the URL
    Then
        Status code is 200
    And
        Response body should be like    {
                                            "email": "techpro@gmail.com",
                                            "first_name": "Tech",
                                            "last_name": "Pro",
                                            "avatar": "https://reqres.in/img/faces/4-image.jpg",
                                            "updatedAt": "2024-01-04T15:35:08.694Z"
                                        }
*/

describe("PUT Request Method ",()=>{
  it("should update existing date",()=>{
    // set the url
      const patParam1="/api";
      const patParam2="/users";
      const patParam3="/3";
      //set the payload and expected data
      cy.fixture("putReqresPayload").as("payload");
      cy.fixture("putReqresResponse").as("expectedData");
      //send the put request
      cy.get("@payload").then((payload)=>{
        cy.get("@expectedData").then((expectedData)=>{
            cy.request({
              method:"PUT",
              url:`${patParam1}${patParam2}${patParam3}`,
              body:payload,
              headers:{
                "Content-Type":"application/json"
              }  
            }).then((response)=>{
                const actualData=response.body;
                expect(response.status).to.eq(200);
                expect(actualData.first_name).to.eq(expectedData.first_name);
                expect(actualData.email).to.eq(expectedData.email);
                expect(actualData.last_name).to.eq(expectedData.last_name);
                expect(actualData).to.property("updatedAt");
             })
        });
      });
      
  });
});