/*Given
     https://jsonplaceholder.typicode.com/todos/198
When 
     User sends  a get request  to the endpoint
then 
     Status code  is  200
And 
   status text is OK
And 
    Response time is less than 300ms
And
   Response  body is JSON data type
And 
   "title" is "quis eius est sint explicabo"
   And
   "completed" is "true"
   And
   "userid" is 10
    */

   describe("GET Request Method",()=>{
    it("Status code, text, response time, data type, body details wit hard assertion",()=>{
        //set the url
        const url ="https://jsonplaceholder.typicode.com/todos/198";
        //set the payload
        //Send the get request#
        cy.request({
          method:"GET",
          url:url  
        }).then((response)=>{
           console.log(response.body);
           cy.log(JSON.stringify(response.body));
           //do assertion
           //====> Asagidakiler Hard Assertion
           expect(response.status).to.eq(200);
           expect(response.statusText).to.eq("OK");
           expect(response.duration).to.be.lessThan(500);
           expect(response.headers["content-type"]).to.include("application/json");
           expect(response.body.title).to.eq("quis eius est sint explicabo");
           expect(response.body.comleted).to.be.true
           expect(response.body.userId).to.eq(10);
           //===> Asagidakiler Soft Assertion'dir

        })

      

    })

    it.only("Status code, text, response time, data type, body details with soft   assertion",()=>{
        //1:set teh url
        const url ="https://jsonplaceholder.typicode.com/todos/198";
        //set the payload
        //Send the get request
        cy.request({
            url:url,
            method:"GET"
        }).then((response)=>{
            console.log(response.body);
            cy.log(JSON.stringify(response.body));
             //Do soft assertion
             // Assert that status code is 200
             cy.softAssert(response.status,200,"Status code should habe been 200","equal");
              // Assert that status text is OK
             cy.softAssert(response.statusText,"OK","Status text should have been Ok","equal");
            // Response time is less than 300ms
             cy.softAssert(response.duration,300,"Response time should have been less than 300","lessThan");
            // Response  body is JSON data type
            cy.softAssert(response.headers["content-type"],"application/json","Response body should habe been JSON data type","include");
            //Assert that response title is "quis eius est sint explicabo"
            cy.softAssert(response.body.title,"quis eius est sint explicabo", "Title is wrong","equal");
            //Assert that "completed" is "true"
            cy.softAssert(response.body.completed,true,"Completed is wrong","equal");
            //Assert that "userid" is 10
            cy.softAssert(response.body.userId,10,"UserId is wrong","equal");
        })
    })






   });