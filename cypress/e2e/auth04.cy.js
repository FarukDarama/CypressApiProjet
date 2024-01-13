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
describe("GitHub Repo creation with token", () => {
    const repoPostUrl = Cypress.env("GIT_HUB_API_REPOS_POST_URL");
    const gitHubToken = Cypress.env("GIT_HUB_TOKEN");
    const repoDeleteUrl = Cypress.env("GIT_HUB_API_REPO_DELETE_URL");
    const githubUsername = Cypress.env("GIT_HUB_USERNAME");
    const postPayload = {
        name: "testRepo",
        description: "This is a test repository",
        private: false
    };


    it("deletes repo", () => {
        const repoName = "testRepo";
        cy.request({
            method: "POST",
            url: repoPostUrl,
            body: postPayload,
            headers: {
                Authorization: `token ${gitHubToken}`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property("name", postPayload.name);
            expect(response.body).to.have.property("private", postPayload.private);
        })
    });


    /*
        Given
            Users url https://api.github.com/repos
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


    it("deletes repo", () => {
        const repoName = "testRepo";
        cy.request({
            method: "DELETE",
            url: `${repoDeleteUrl}/${githubUsername}/${repoName}`,
            headers: {
                Authorization: `token ${gitHubToken}`
            }
        }).then((response)=>{
            expect(response.status).to.eq(204);
            expect(response.body).to.have.property("");
        })
    });

});