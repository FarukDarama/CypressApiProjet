/*
  Given
        https://jsonplaceholder.typicode.com/todos
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that there are 10 ids greater than 190
    And
        Assert that the number of userIds whose ids less than 5 is 4
    And 
        Assert that "delectus aut autem" is one of the titles whose id is less than 5
*/

describe("Get request testing",()=>{
    it("Testing with number of data",()=>{
        //Set the url
        const pathParam="/todos";
        //Set the payload
        //Send the GET request
      cy.request({
        method:"GET",
        url:pathParam
      }).then((response)=>{
        expect(response.status).to.eq(200);
        //Assert that there are 10 ids greater than 190
        //Oncelikle id si 190 dan buyuk olanlari bir varialede toplamalyiz
        const idGreaterThan190 = response.body.filter((item)=> item.id>190);
        expect(idGreaterThan190).to.have.lengthOf(10);
        //Assert that the number of userIds whose ids less than 5 is 4
        const idsLessThan5=response.body.filter((item)=>item.id<5);
        expect(idsLessThan5).to.have.lengthOf(4);
        //Assert that "delectus aut autem" is one of the titles whose id is less than 5
        const titleWholesIdLessThan5 = response.body.filter((item)=>item.id<5).map((item)=>item.title);
        expect(titleWholesIdLessThan5).to.include("delectus aut autem");

      })
    })
});