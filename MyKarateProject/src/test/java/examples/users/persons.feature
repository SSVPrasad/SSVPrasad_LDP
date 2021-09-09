
Feature: Reqres Demo
    Background: Set url
        * url 'https://reqres.in/api/'
    Scenario: Get details of user 2
        Given path "users/2"
        When method GET
        Then status 200

    Scenario: Create a person
        Given path 'users'
        And request
        """
            {
                "name": "Shiva",
                "job":"leader"
                        }
        """
        When method POST
        Then status 201
        Then match response == "#object"
        Then match response.name == "Shiva"
    
        * def Pid = response.id
        * print Pid
    
        Given path "users"
         When method GET
         Then status 200
     
    
    
       
        Scenario: Passing parameter in the request url
        Given path "users"
        And param page = 2
        When method GET
        Then status 200
        Then match response.page == 2
    
        Scenario: Put Request to Change the entire object
        Given path 'api/users/2'
        And request
        """
            {
        "name": "MyName",
        "job": "MyJob"
    }
            """
        When method PUT
        Then status 200
    
    Scenario: Put Request to Change the entire object
        Given path 'api/users/2'
        And request
        """
            {
        "name": "MyName",
        "job": "MyNewJob"
    }
            """
        When method PATCH
        Then status 200
        
    Scenario: Delete the created record
        Given path   'api/users/2'
        When method Delete
        Then status 204 