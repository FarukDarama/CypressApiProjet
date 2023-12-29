/*
Gherkin Language
Given: 
        Kelimesinden sonra ön gereksinim (Prerequisite) yazilir
        Ornegin GET Methodu icin entpoint bir Prerequisite dir.
        POST Methodu icin entponit ve payload prerequisit dir.
When:   Kelimesiden sonra yapilacak is yazilir.  
        Ornegin GET Request
Then:   Istenen sonuclar yazilir.

And:    Yukaridaki 3 kelime icin birden fazla giris yapilacaksa aralarina And yazilir
ORNEK TEST CASE
Given 
Given 
    https://restful-booker.herokuapp.com/booking/3
When 
    User sends a Get Request
Then 
    HTTPS Status code should be 200
And 
    Status text should be OK
And
    Response time should be less than 500ms
And 
    Rspose body should be JSON Data Type        
*/

describe("GET Method Testing", () => {

    it("get01", () => {
        //1: Set the Entpoint
        const url = "https://restful-booker.herokuapp.com/booking/3";
        //2: Set the payload

        //3: Send the request
        cy.request({
            method: "GET",
            url: url,
        }).then((response) => {
            //Response`i developer consolda gorelim
            console.log(response.body);
             //respose i cypress console da  görelim
             cy.log(JSON.stringify(response.body));

            //Assert that Status Code is 200
            expect(response.status).to.eq(200);
            //Assert that Status text is OK
            expect(response.statusText).to.eq("OK");
            //Assert that Response time is less than 300ms
            expect(response.duration).to.be.lessThan(300);
            //Assert that Response body is JSON data type
            expect(response.headers["content-type"]).to.include("application/json")







        });

    });
});