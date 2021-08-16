import { RobotHands, Dependencies,RobotEyes } from '../../robots/AmazonAssign/AmazonRobot';

context('Search Test', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()

   

    describe('Search the required information', ()=>{
        before(()=>{

        
           
            dependencies.visitWebsite('https://www.amazon.in/')
      
      
            robotEyes.seeSignInButton('nav-link-accountList > .nav-line-2', 'Account & Lists\n  ')
             robotHands.clickOnSignInButton('#nav-link-accountList > .nav-line-2')
       

      


        robotEyes.seeInputTextBox('ap_email')
    
       robotHands.clickOnInputTextBox('ap_email','9440056361')


    

        robotEyes.seeNextButton('a-button-inner > #continue','')
        
        robotHands.clickOnNextButton('.a-button-inner > #continue')
     

        robotEyes.seeInputTextBox('ap_password')
        robotHands.clickOnInputTextBox('ap_password','jntuhcem')


    
        robotEyes.seeSignInButton('signInSubmit','')
        
        robotHands.clickOnNextButton1('signInSubmit');
       
        
            robotHands.wait_to(3000)
       
      
    
 
    })

       
        

        

       

       it('Check the visibility of Todays Deals and click on it',()=>{
            robotHands.wait_to(25000)

              robotHands.clickOnTodaysDeals("Today's Deals")
            robotHands.clickOn3Item(':nth-child(3) > [data-testid=deal-card]');
            robotHands.clickOn3Item(':nth-child(2) > .a-list-item > .octopus-dlp-asin-section > .octopus-dlp-asin-info-section > .octopus-dlp-asin-title > .a-size-base');

         })
          it('Add the Item to the Cart then Verify Cart',()=>{

            robotHands.clickOnNextButton1('add-to-cart-button')
              robotHands.wait_to(8000)
              robotHands.clickOnNextButton1('nav-cart')

            
           
            })

            it('Check the visibility of Search Bar and Search For Mobiles ',()=>{
                      robotEyes.seesTextWithId('twotabsearchtextbox','')
                
                        robotHands.clickEnter('#twotabsearchtextbox')
             
            })
 

            it('Check Amazon prime checkbox',()=>{
               robotHands.clickOnNextButton1('nav-xshop > a:nth-child(3)')
                robotHands.clickOnNextButton(':nth-child(3) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon')
                robotHands.wait_to(3000)
               
            })
            it('Get Delivery Details of the First Product ', ()=>
            {
              dependencies.visitWebsite('https://www.amazon.in/255-Bluetooth-Wireless-Earphone-Immersive/dp/B07C2VJXP4/ref=sr_1_4?dchild=1&qid=1629081560&refinements=p_85%3A10440599031&rnid=10440598031&rps=1&s=electronics&sr=1-4')
            })

    it('Navigate from left menu and select mobiles',()=>
    {
      dependencies.visitWebsite('https://www.amazon.in/')
      robotHands.clickOnSignInButton('#nav-link-accountList > .nav-line-2')
      robotHands.clickOnInputTextBox('ap_email','9440056361')
      robotHands.clickOnNextButton('.a-button-inner > #continue')
      robotHands.clickOnInputTextBox('ap_password','jntuhcem')
      robotHands.clickOnNextButton1('signInSubmit');
      robotHands.wait_to(6000)


      robotHands.clickOnNextButton1('nav-main > .nav-left')
      robotHands.wait_to(3000)
      robotHands.clickOn3Item(':nth-child(15) > .hmenu-item > div')
      robotHands.wait_to(3000)
      robotHands.clickOnNextButton('.hmenu-visible > :nth-child(3) > .hmenu-item')
      robotHands.clickOnNextButton1('nav-logo-sprites')



    }) 
    
    it('Go to orders then Select Past one year orders',()=>{


      robotHands.clickOnSignInButton('#nav-link-accountList > .nav-line-2')
      robotHands.clickOn3Item(':nth-child(2) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner')// click on your orders


      robotHands.clickOnInputTextBox('ap_email','9440056361')
      robotHands.clickOnNextButton('.a-button-inner > #continue')
      robotHands.clickOnInputTextBox('ap_password','jntuhcem')
      robotHands.clickOnNextButton1('signInSubmit');
      robotHands.wait_to(3000) 

      robotHands.clickOnNextButton1('nav-orders')
     

     cy.get('.a-dropdown-prompt').click()
     cy.get('#orderFilter_2').click()
    

    })

    it('Add Payment Option and Verify it',()=>{
      dependencies.visitWebsite('https://www.amazon.in/')
      robotHands.clickOnSignInButton('#nav-link-accountList > .nav-line-2')
      robotHands.clickOnInputTextBox('ap_email','9440056361')
      robotHands.clickOnNextButton('.a-button-inner > #continue')
      robotHands.clickOnInputTextBox('ap_password','jntuhcem')
      robotHands.clickOnNextButton1('signInSubmit');
      robotHands.wait_to(30000)

      robotHands.clickOnSignInButton('#nav-link-accountList > .nav-line-2')
     robotHands.clickOn3Item(':nth-child(3) > :nth-child(2) > .ya-card__whole-card-link > .a-box')// click on your orders
     robotHands.clickOnNextButton('.a-expander-header')
})
  it('Add new Address and Verify',()=>{

    dependencies.visitWebsite('https://www.amazon.in/')
      robotHands.clickOnSignInButton('#nav-link-accountList > .nav-line-2')
      robotHands.clickOnInputTextBox('ap_email','9440056361')
      robotHands.clickOnNextButton('.a-button-inner > #continue')
      robotHands.clickOnInputTextBox('ap_password','jntuhcem')
      robotHands.clickOnNextButton1('signInSubmit');
      robotHands.wait_to(30000)



    robotHands.clickOnSignInButton('#nav-link-accountList > .nav-line-2')
    robotHands.clickOn3Item(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner > .a-row')// click on your orders
    robotHands.clickOnSignInButton('#ya-myab-address-add-link > .a-box')
    robotHands.clickOnInputTextBox('address-ui-widgets-enterAddressFullName','Shiva')
    robotHands.clickOnInputTextBox('address-ui-widgets-enterAddressPhoneNumber','9491553612')
    robotHands.clickOnInputTextBox('address-ui-widgets-enterAddressPostalCode','505001')
    robotHands.clickOnInputTextBox('address-ui-widgets-enterAddressLine1','1-44')
    robotHands.clickOnInputTextBox('address-ui-widgets-enterAddressLine2','Durshed')
    robotHands.clickOnInputTextBox('address-ui-widgets-landmark','Temple Street')
   
    cy.get('#address-ui-widgets-addr-details-address-type-and-business-hours > .a-button-inner > .a-button-text').type('{downarrow}{downarrow}{enter}')

    robotHands.clickOnNextButton1('address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input')
  })




    })
