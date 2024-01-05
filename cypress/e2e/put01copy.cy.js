/*
    Given
        https://jsonplaceholder.typicode.com/todos/198
    And
        {
            "userId": 21,
            "title": "Wash the dishes",
            "completed": false
        }
    When
        I send PUT Request to the Url
    Then
        Status code is 200
    And
        And response body is like   {
                                        "userId": 21,
                                        "title": "Wash the dishes",
                                        "completed": false
                                    }
    */
 describe("PUT TEKRAR",()=>{
     it("Test Case 1",()=>{
            //set the url
            const patParam1 = "/todos";
            const patParam2 = "/198";
            //set the payload and expected data
            cy.fixture("putTodosPayload").as("payload");
            // send the request
            cy.get("@payload").then((payload)=>{
                cy.request({
                    method:"PUT",
                    url:`${patParam1}${patParam2}`,
                    body:payload,
                    headers:{
                        "Content-Type" : "application/json",
                    }

                }).then((response)=>{
                    const actualData =response.body;
                    expect(response.status).to.eq(200);
                    expect(actualData.userId).to.eq(payload.userId);
                    expect(actualData.title).to.eq(payload.title);
                    expect(actualData.completed).to.eq(payload.completed);

                })
            })
     });
 });