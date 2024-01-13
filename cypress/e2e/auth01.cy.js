/*
    Given
        url https://reqres.in/api/login
    And
        username eve.holt@reqres.in
    And
        password  cityslicka 
    When 
        User sends POST Request to the given URL
    Then 
        Status code is 200
    And 
        Response body has token
    And
        Print the token on the console
*/
describe("Login to Reqres API and create token", () => {

    const reqresApiUrl = Cypress.env("REGRES_API_URL");
    const reqresUsername = Cypress.env("REGRES_USERNAME");
    const reqresPassword = Cypress.env("REGRES_PASSWORD");
    it("Successfully logs in and recieves token", () => {
        cy.request({
            method: "POST",
            url: reqresApiUrl,
            body: {
                email: reqresUsername,
                password: reqresPassword
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("token");
            cy.log("Received Token: ", response.body.token)
        });
    });
});