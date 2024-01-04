/*
    Given
        https://dummy.restapiexample.com/api/v1/create
    And
        {
            "employee_name": "Tom Hanks",
            "employee_salary": 111111,
            "employee_age": 23,
            "profile_image": "Perfect image"
        }
    When
        User sends POST Request
    Then
        Status code is 200
    And
        Response body should be like the following
                {
                    "status": "success",
                    "data": {
                        "employee_name": "Ali Can",
                        "employee_salary": 111111,
                        "employee_age": 23,
                        "profile_image": "Perfect image",
                        "id": 6344
                    },
                    "message": "Successfully! Record has been added."
                }
    */
   describe("Post Request method",()=>{
    it("should create new data",function(){
        // set the url
        const patParam1="/api";
        const patParam2="/v1";
        const patParam3="/create";
        //set the payload and expected data
        cy.fixture("postDummyPayload").as("payload");
        cy.fixture("postDummyResponse").as("expectedData");
        //send the post request
        cy.get("@payload").then((payload)=>{
            cy.get("@expectedData").then((expectedData)=>{
                cy.request({
                    method:"POST",
                    url:`${patParam1}${patParam2}${patParam3}`,
                    body:payload,
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then((response)=>{
                   const actualData = response.body;
                 expect(response.status).to.eq(200);
                 expect(actualData.status).to.eq(expectedData.status);
                 expect(actualData.message).to.eq(expectedData.message);
                 expect(actualData.data.employee_name).to.eq(expectedData.data.employee_name);
                 expect(actualData.data.employee_salary).to.eq(expectedData.data.employee_salary);
                 expect(actualData.data.employee_age).to.eq(expectedData.data.employee_age);
                 expect(actualData.data.profile_image).to.eq(expectedData.data.profile_image);
             

                })
            })
        })

    });



});