#@debug
Feature: GraphQLDemo
Background:
     * url 'https://api.graphql.jobs/'
    Scenario: GraphqlTEsts
       # Given path '/'
        Given text query = 
        """
               query{
                   
                     jobs{
                           id
                           title
                         }
                     }
        """
        And request { query: '#(query)'}
        When method POST
        Then status 200
        Then match response == "#object"
        Then match response.data.jobs[76].title == "Backend Engineer"
    