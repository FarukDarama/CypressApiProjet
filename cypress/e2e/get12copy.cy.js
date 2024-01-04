/*
    Given
        https://dummy.restapiexample.com/api/v1/employees
    When
        User send GET Request to the URL
    Then
        Status code is 200
    And
        There are 24 employees
    And
        "Tiger Nixon" and "Garrett Winters" are among the employees
    And
        The greatest age is 66
    And
        The name of the lowest age is "[Tatyana Fitzpatrick]"
    And
        Total salary of all employees is 6,644,770
    */

describe("Get request method", () => {
    it("should verify response details", function () {
        // set the url
        const patParam1 = "/api";
        const patParam2 = "/v1";
        const patParam3 = "/employees";
        //set the expected data
        cy.fixture("dummyTestData").as("expectedData");
        //send the get request
        cy.request({
            method: "GET",
            url: `${patParam1}${patParam2}${patParam3}`
        }).then((response) => {
            //do assertion
            expect(response.status).to.eq(200);
            //There are 24 employees
            let listOfEmployees = response.body.data;
            expect(listOfEmployees.length).to.eq(this.expectedData.numOfEmployees);
            //"Tiger Nixon" and "Garrett Winters" are among the employees
            let listOfEmployeesName=response.body.data.employee_name;
            expect(response.body.data.map((item)=>item.employee_name)).to.include.members(this.expectedData.namesOfExpectedEmployees);
            //The greatest age is 66
            let ageOfList =response.body.data.map((item)=>item.employee_age);
            ageOfList=ageOfList.sort((a,b)=>a-b);
            expect(ageOfList[ageOfList.length-1]).to.eq(this.expectedData.maxAge);
            //The name of the lowest age is "[Tatyana Fitzpatrick]"
            let theYoungestAge = ageOfList[0];
            let theYoungestEmployeeName = response.body.data.filter((item)=>item.employee_age===theYoungestAge).map((item)=>item.employee_name);
            expect(theYoungestEmployeeName).to.include(this.expectedData.nameOfTheYoungestEmployee);
            //Total salary of all employees is 6,644,770
            let totalSalary= response.body.data.reduce((sum,employee)=>sum+employee.employee_salary,0);
            expect(totalSalary).to.eq(this.expectedData.expectedTotalSalary);
        })
    });
});   