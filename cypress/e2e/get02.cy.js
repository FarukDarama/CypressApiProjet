/*
    Given 
        https://restful-booker.herokuapp.com/booking/2024
    When
        User sends a GET Request to the endpoint
    Then
        Status code is "404"
    And 
        Status text is "Not Found"
    And
        Response body includes "Not Found"
    And 
        Response body does not include "TechPro Education"
    And 
       Header Serverr is "Cowboy"
    And 
       Header Connection is "keep-alive"
*/

describe("Status Method Testing",()=>{
 it("Status code, text, body, header will be tested",()=>{
    //1: Set the URL
    const url ="https://restful-booker.herokuapp.com/booking/20245";
    //2. Set the payload
    //3.Send the GET request
    cy.request({
        method:"GET",
        url : url,
        failOnStatusCode: false //4xx ile baslayan status codelarda testin oromatik olarak fail etmesini engeller

    }).then((response)=>{
      
        //developer consola response body yazdir
       // console.log(response.body);
        //Cypress consola response body yazdir
       // cy.log(JSON.stringify(response.body));
        // do Assertion
        expect(response.status).to.eq(404);
        expect(response.statusText).to.eq("Not Found");
        expect(response.body).to.include("Not Found");
        expect(response.body).to.not.include("TechPro Education");
        expect(response.headers["server"]).to.eq("Cowboy");
        expect(response.headers["connection"]).to.eq("keep-alive");
    })
 });
});