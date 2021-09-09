#@debug
Feature: UI Testing Demo
Scenario: Log In
    
    Given driver "https://katalon-demo-cura.herokuapp.com/"
    * fullscreen()
    And click('#btn-make-appointment')
    And input('#txt-username','John Doe')
    And input('#txt-password','ThisIsNotAPassword')
    When click("#btn-login")
    Then match driver.url == 'https://katalon-demo-cura.herokuapp.com/#appointment'

    Then click('#combo_facility')
    Then click('#chk_hospotal_readmission')
    Then click('#radio_program_medicaid')
    Then input('#txt_visit_date','25/08/2021')
    Then input('#txt_comment','Fever')
    Then click('#btn-book-appointment')
    Then waitUntil("document.readyState == 'complete'")
    
    
    * close()