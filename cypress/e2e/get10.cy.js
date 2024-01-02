/* Given
        https://gorest.co.in/public/v1/users/5886275
    When
        User sends GET Request to the URL
    Then
        Assert that Status code is 200
    And
        Assert that Response body is not null
    And
        Assert that id is 5886275
    And 
        Assert that email is "verma_rameshwar@baumbach.example"
    And
        Assert that gender is "male"
    And 
        Assert that status is "active"
*/
describe("GET Request Methods", ()=>{
    it("should verify meta data details", function(){
        //i)Set the url
        const pathParam1 = "/public";
        const pathParam2 = "/v1";
        const pathParam3 = "/users";
        const pathParam4 = "/5886275";
        //ii)Set the expected data
        cy.fixture("goRestUniqueTestData").as('expectedData');
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`,
        }).then((response)=>{
            const actualData=response.body.data;
            // Assert that Status code is 200
             expect(response.status).to.eq(this.expectedData.statusCode);
             //Assert that Response body is not null
             expect(response.body).to.not.be.null;
             //Assert that id is 5886275
             expect(actualData).to.have.property('id',this.expectedData.id)
             //Assert that email is "sanka_asan@morissette.test"
             expect(actualData).to.have.property('email',this.expectedData.email);
             // Assert that gender is "male"
             expect(actualData).to.have.property('gender',this.expectedData.gender);
             //Assert that status is "active"
             expect(actualData).to.have.property("status",this.expectedData.status);
        });
    });

    it("should verify meta data details", function(){
        //i)Set the url
        const pathParam1 = "/public";
        const pathParam2 = "/v1";
        const pathParam3 = "/users";
        const pathParam4 = "/5886275";
        //ii)Set the expected data
        cy.fixture("goRestUniqueTestData").as('expectedData');
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}${pathParam3}${pathParam4}`,
        }).then((response)=>{
            const actualData=response.body.data;
            // Assert that Status code is 200
             expect(response.status).to.eq(this.expectedData.statusCode);
             //Assert that Response body is not null
             expect(actualData).to.include({
                id:this.expectedData.id,
                email: this.expectedData.email,
                gender: this.expectedData.gender,
                status:this.expectedData.status,
                name:this.expectedData.name,
             })
        });
    });




















});