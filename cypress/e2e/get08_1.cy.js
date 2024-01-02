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
    it("should verify response body details and headers",()=>{
        //set the url
        const petParam1 ="/todos";
        const petParam2 ="/2";
        //set the expected data
        const expectedData={
            statusCode:200,
            userId:1,
            title:"quis ut nam facilis et officia qui",
            completed:false,
            via:"1.1 vegur",
            server:"cloudflare"
        }
        // send the request
       cy.request({
        method:"GET",
        url:`${petParam1}${petParam2}`
        }).then((response)=>{
            expect(response.status).to.eq(expectedData.statusCode);
            expect(response.body.userId).to.eq(expectedData.userId);
            expect(response.body.title).to.eq(expectedData.title);
            expect(response.body.completed).to.eq(expectedData.completed);
            expect(response.headers.via).to.eq(expectedData.via);
            expect(response.headers.server).to.eq(expectedData.server);

        })

    });
});