import { RobotHands, Dependencies,RobotEyes } from '../../robots/GreenCommuteAssign/GreenCommuteRobot'

context('Search Test', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()

   

    describe('Search the required information', ()=>{

        it('Visit  Green Commute page', () => {
           
            dependencies.visitWebsite('http://bc15-green-commute.dev-apps.io/')
        })

        it('Check the visibility and type Your Location ',()=>{
          
           
            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
            robotEyes.seesTextWithId('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss10 > div:nth-child(1) > p','Your Location')
            robotHands.clickOnInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div','Hyderabad, Telangana, India')

        })
        it('Check the visibility of next button  click on it',()=>{

            robotEyes.seeNextButton('MuiButton-label',0,'Next')
            
            robotHands.clickOnNextButton('MuiButton-label',0)
        })

        it('Check the visibility and type the Job location ',()=>{


            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
            robotEyes.seesTextWithId('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss10 > div:nth-child(2) > p','Job Location')
            robotHands.clickOnInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')


        })
        it('Check the visibility of next button and click on it',()=>{

            robotEyes.seeNextButton('MuiButton-label',0,'Next')
            robotHands.clickOnNextButton('MuiButton-label',0)
        })
        it('Check the visibility and type the Skills ',()=>{
           
            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div')
            robotEyes.seesTextWithId('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss10 > div:nth-child(3) > p','Your skills')
            robotHands.clickOnInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div.jss7 > div > div > div > div','Software Engineer')

        })
        it('Check the visibility of finish button and click on it',()=>{

            robotEyes.seeNextButton('MuiButton-label',0,'Finish')
            robotHands.clickOnNextButton('MuiButton-label',0)
            robotEyes.seesPathNameInUrl('/findJobs')
        })
        it('Check the visibility and click on find jobs',()=>{
           
            robotEyes.seeInputTextBox('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(2) > div.MuiListItemText-root.jss53 > p')
            robotHands.clickOnFindJobs('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(2) > div.MuiListItemText-root.jss53 > p')
            robotEyes.seesPathNameInUrl('/findJobs')
        })

        it('Click on Filter',()=>{
           
            robotHands.clickOnFilter('.jss72')
        })


        it('Apply  Filter',()=>{
            
           
            robotHands.applyFilter(':nth-child(2) > [data-testid=filter-type] > :nth-child(5) > .jss116 > [data-testid=filter] > .MuiTypography-root')
            
            robotHands.clickOnApplyFilter(':nth-child(2) > [data-testid=button] > .MuiButton-label')

        })
        it('Click on the first Job of the applied filter and click on Save',()=>{

            robotHands.clickOnFirstJob(':nth-child(1) > .jss98 > [data-testid=jobCard-placeholder]')
            robotEyes.seeSavedJobAfterFilter("MuiGrid-root > .MuiButton-outlined > .MuiButton-label")
            robotHands.clickOnTheJobToBeSaved('.MuiGrid-root > .MuiButton-outlined > .MuiButton-label')
           
            
        })

        it('Check the visibility of saved jobs and click on it ',()=>{

            robotEyes.seeSavedJobs('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(3) > div.MuiListItemText-root.jss54 > p')
            robotHands.clickOnSavedJobs('root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(3) > div.MuiListItemText-root.jss54 > p')
            robotEyes.seesPathNameInUrl('/savedJobs')
            
        })
        
        it('Remove the saved Job ',()=>{
           
            robotHands.clickOnFirstSavedJob('.jss153 > .MuiSvgIcon-root',0)
            robotHands.removeFirstSavedJob('.MuiButton-outlined > .MuiButton-label',0)
            robotEyes.seesTextWithClass('MuiAlert-message','Job removed from saved jobs.')
   
   
   
   
   
        })

    })

})