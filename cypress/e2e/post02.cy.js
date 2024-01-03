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
describe('POST Request Method', () => {
it('should create new data  ',function ()  {
    //Set The Url 
    const pathParam="/todos";
    //Set the Payload
    cy.fixture("postTodosPayload").as("payload");
    //Send the POST Request
    cy.get('@payload').then((payload)=>{
        //payloadu buraya cekıcez get methodu ile  .
        cy.request({
            method: 'POST',
            url: `${pathParam}`,
            body: payload,
            headers:{
                "Content-Type": "application/json",
            }
            }).then((response) => {
            //Do assertions
            const actualData=response.body;
            //Assert that Status code is 201
            expect(response.status).to.eq(201);
            //Assert that  "userId" is  55,
            expect(actualData.userId).to.eq(payload.userId);
            //Assert that "title" is  "Tidy your room",
            expect(actualData.title).to.eq(payload.title);
            //Assert that "completed" is  false,
            expect(actualData.completed).to.eq(payload.completed);
            });
        }) 
    });
});