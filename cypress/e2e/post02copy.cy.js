/*
    Given
        https://jsonplaceholder.typicode.com/todos
    And
        {
            "userId": 55,
            "title": "Tidy your room",
            "completed": false
        }
    When
        I send POST Request to the Url
    Then
        Status code is 201
    And
        response body is like {
                                "userId": 55,
                                "title": "Tidy your room",
                                "completed": false,
                                "id": 201
                            }
    */

    describe("POST Request Method",()=>{
        it("should create new data",function(){

            //set the url 
            const patParam="/todos";
            //set the payload
            cy.fixture("postTodosPayload").as("payload");
            // send post request 
            cy.get("@payload").then((payload)=>{
                cy.request({
                    method:"POST",
                    url:`${patParam}`,
                    body:payload,
                    headers:{
                      "Content-Type":"application/json"  
                    }
                }).then((response)=>{
                    //Status code is 201
                    const actualData=response.body;
                    expect(response.status).to.eq(200);
                    expect(actualData.userId).to.eq(payload.userId);
                    expect(actualData.title).to.eq(payload.title);
                    expect(actualData.completed).to.eq(payload.completed);
                    expect(actualData.id).to.eq(payload.id);


                })
            })


        });
    });