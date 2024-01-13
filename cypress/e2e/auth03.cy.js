/*
    Given
        Users url https://api.github.com/users/
    And
        Repo Name is "testRepo"
    And
        GitHub token
    And 
        GitHub username
    When 
        User sends POST Request to the url
    Then 
        Status code is 201
    And
        Response body has name property with the name value
    And 
        Response body has private property with the private value
*/

describe("Using GitHub GET Method API with real token", () => {

    const gitHubUrl = Cypress.env("GIT_HUB_API_USERS_URL");
    const gitHubToken = Cypress.env("GIT_HUB_TOKEN");
    const gitHubUsername = Cypress.env("GIT_HUB_USERNAME");

    it("Fetchs user info", () => {
        cy.request({
            method: "GET",
            url: `${gitHubUrl}/${gitHubUsername}`,
            headers: {
                Authorization : `token ${gitHubToken}`
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("login",gitHubUsername);
            expect(response.body).to.have.property("id");
            expect(response.body).to.have.property("url");
            expect(response.body.location).to.eq("Germany");

        })
        });
    });

