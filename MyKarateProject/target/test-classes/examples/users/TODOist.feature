@debug
Feature:
  Background: 
    * url 'https://api.todoist.com/rest/v1'
    * def Token = '119f5e89fd97fffa74750404a5f9ac49376d136a'
   
  Scenario: Get, Create Project, Add, Update,Complete and Delete a Task 
    Given path '/projects'
    And header Authorization = 'Bearer ' + Token
    When method GET
    Then status 200

  
   # Add New Project
    Given path '/projects'
    And header Authorization = 'Bearer ' + Token
    And request
    """
        {"name": "Holiday Trip"}
    """
    When method post
    * def ProjectId = response.id
    Then status 200
    
    # Add New Task
  
    Given path '/tasks'
    And header Authorization = 'Bearer ' + Token
    And header content-type = 'application/json'
    And request 
    """
        { content:"Visit Park", project_id :'#(ProjectId)'}
    """ 
    When method post
    * def TaskId = response.id 
    Then status 200
   
    # Update Task
   
    Given path '/tasks',TaskId
    And header Authorization = 'Bearer ' + Token
    And header content-type = 'application/json'
    And request 
    """
        {"due_string": "tomorrow"}
    """
    When method post
    Then status 204
  
    # Complete Task
    Given path '/tasks/'+TaskId+"/close"
    And header Authorization = 'Bearer ' + Token
    When method post
    Then status 204

    # Delete Project
    Given path '/projects',ProjectId
    And header Authorization = 'Bearer ' + Token
    When method DELETE
    Then status 204



