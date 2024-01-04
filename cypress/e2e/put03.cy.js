/*
    Given
        https://dummy.restapiexample.com/api/v1/update/21
    And
        {
            "employee_name": "Tom Hanks",
            "employee_salary": 111111,
            "employee_age": 23,
            "profile_image": "Perfect image"
        }
    When
        User sends PUT Request to the URL
    Then
        Status code is 200
    And
        Response body should be like    {
                                            "status": "success",
                                            "data": {
                                                "employee_name": "Tom Hanks",
                                                "employee_salary": 111111,
                                                "employee_age": 23,
                                                "profile_image": "Perfect image"
                                            },
                                            "message": "Successfully! Record has been updated."
                                        }
*/

describe('PUT request data', () => {
    it('should update the existing data', function () {
        //Set the url
        const pathparam1 = "/api";
        const pathparam2 = "/v1";
        const pathparam3 = "/update";
        const pathparam4 = "/21";
        //Set the payload
        cy.fixture("putDummyPayload").as("payload");
        cy.fixture('putDummyResponse').as('expectedData');
        //Send the put  request

        cy.get('@payload').then((payload) => {
            cy.get('@expectedData').then((expectedData) => {
                cy.request({
                    method: 'PUT',
                    url: `${pathparam1}${pathparam2}${pathparam3}${pathparam4}`,
                    body: payload,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    //Do assertions
                    const actualData = response.body;
                    //Assert that Status code is 200
                    expect(response.status).to.eq(200);
                    expect(actualData.status).to.eq(expectedData.status);
                    // Assert that "employee_name" is "Tom Hanks"
                    expect(actualData.data.employee_name).to.eq(expectedData.data.employee_name);
                    // Assert that "employee_salary" is 111111
                    expect(actualData.data.employee_salary).to.eq(expectedData.data.employee_salary);
                    // Assert that "employee_age" is 23
                    expect(actualData.data.employee_age).to.eq(expectedData.data.employee_age);
                    // Assert that "profile_image" is "Perfect image"
                    expect(actualData.data.profile_image).to.eq(expectedData.data.profile_image);
                    //Assert  that   "message" is "Successfully! Record has been updated."
                    expect(actualData.message).to.eq(expectedData.message);
                })
            })
        });
    });
})