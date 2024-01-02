/*
  Given
        https://jsonplaceholder.typicode.com/todos/2
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that userId is "1"
    And
        Assert that title is "quis ut nam facilis et officia qui"
    And 
        Assert that completed is "false"
    And
        Assert that header via is "1.1 Vegur"
    And 
        Assert that header server is "cloudflare"


*/

describe("GET Request method",()=>{
    it("should verify response body details and headers",function(){
        //set the url
        const petParam1 ="/todos";
        const petParam2 ="/2";
        //set the expected data
       
        cy.fixture("todosTestData").as("expectedData");
        // send the request
       cy.request({
        method:"GET",
        url:`${petParam1}${petParam2}`
        }).then((response)=>{
            expect(response.status).to.eq(this.expectedData.statusCode);
            expect(response.body.userId).to.eq(this.expectedData.userId);
            expect(response.body.title).to.eq(this.expectedData.title);
            expect(response.body.completed).to.eq(this.expectedData.completed);
            expect(response.headers.via).to.eq(this.expectedData.via);
            expect(response.headers.server).to.eq(this.expectedData.server);

        })

    });
});