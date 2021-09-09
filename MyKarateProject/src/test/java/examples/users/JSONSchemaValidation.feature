#@debug
Feature: JSON Schema Validation
  Scenario: Validate with the Third Party
    Given url 'https://reqres.in/api/users/2'
    When method GET
    Then match response == '#object'
    * string jsonSchemaExpected = read('file:src/test/java/examples/dataSchema.json') 
    * string jsonData = response
    * def SchemaUtils = Java.type('examples.JSONSchemaUtil')
    * assert SchemaUtils.isValid(jsonData, jsonSchemaExpected)