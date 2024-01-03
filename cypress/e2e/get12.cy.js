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

        describe('GET request method', () => {
            it('should verify status code,number of employees,total salary,oldest and youngest employees', function(){
                 //i)Set the URL
                const pathParam1='/api';
                const pathParam2='/v1';
                const pathParam3='/employees'
                //ii)Set the expected data
                cy.fixture('dummyTestData').as("expectedData");
                //iii)Send the GET Request
                cy.request({
                    method: "GET",
                    url: `${pathParam1}${pathParam2}${pathParam3}`,  
            }).then((response)=>{
                //DoAssertions
                //Assert  Status code is 200
                expect(response.status).to.eq(this.expectedData.statusCode);  
                 //Assert  There are 24 employees   
                expect(response.body.data).to.have.length(this.expectedData.numOfEmployees);        
                //Assert "Tiger Nixon" and "Garrett Winters" are among the employees
               expect(response.body.data.map((item)=>item.employee_name)).to.include.members(this.expectedData.namesOfExpectedEmployees);
                 //Assert The greatest age is 66
                let listOfAges=response.body.data.map((item)=>item.employee_age);
                listOfAges.sort((a,b)=>a-b);//list of age küçükten büyüge sıralandı 
                expect(listOfAges[listOfAges.length-1]).to.eq(this.expectedData.maxAge)
                // length  den 1 az olan index  en son elamanın indexidir
                // Assert that The name of the lowest age is "[Tatyana Fitzpatrick]"
                let theYoungestAge=listOfAges[0];
                let theYoungestEmployeeName=response.body.data.filter((item)=>item.employee_age===theYoungestAge).map((item)=>item.employee_name);
                expect(theYoungestEmployeeName).to.include(this.expectedData.nameOfTheYoungestEmployee);  
                //Assert that Total salary of all employees is 6,644,770
                let totalSalary=response.body.data.reduce((sum,employee)=>sum+employee.employee_salary,0);
                expect (totalSalary).to.eq(this.expectedData.expectedTotalSalary);      
        
            });

            
           });
        });