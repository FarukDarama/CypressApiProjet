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
describe("PUT Request Method", () => {
    it("should update existing data", function () {
        //set the url
        const patParam1 = "/todos";
        const patParam2 = "/198";
        //set the payload
        cy.fixture("putTodosPayload").as("payload");
        //send put request
        cy.get("@payload").then((payload) => {
            cy.request({
                method: "PUT",
                url: `${patParam1}${patParam2}`,
                body: payload,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                const actualData = response.body;
                //status code assertion
                expect(response.status).to.eq(200);
                //assertion of userid
                expect(actualData.userId).to.eq(payload.userId);
                expect(actualData.title).to.eq(payload.title);
                expect(actualData.complated).to.eq(payload.complated);


            })


        })
    });
});