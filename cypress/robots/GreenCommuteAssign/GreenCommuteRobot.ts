import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';



export class Dependencies extends BaseDependencies 
{
   visitWebsite(text:string)
   {
        this.accessUrl(text);
    }
}

export class RobotEyes extends BaseEyes{
    
    seeInputTextBox(text1:string)
    {
        this.seesIdVisible(text1)
            
    }

    seeNextButton(text1:string,index:number,text2:string)
    {
        
    this.seesTextWithClassAndIndex(text1,index,text2)
        
    }

    seeSavedJobs(text:string)
    {
        this.seesIdVisible(text)
    }
    seeSavedJobAfterFilter(text:string)
    {
        this.seeClassVisible(text)
    }
    

}

export class RobotHands extends BaseHands{

    clickOnInputTextBox(text1:string,text2:string)
    {
        this.dropDownWithoutSelectTag(text1,text2)
    }

    clickOnNextButton(text1:string,index:number)
    {
        this.ClickOnTextWithClassAndIndex(text1,index)
        
    }
   

    clickOnFindJobs(text:string)
    {
        this.clickOnId(text)
    }
    clickOnSavedJobs(text:string)
    {
        this.clickOnId(text)
    }
    clickOnFilter(text:string)
    {
        this.clickOnDomElement(text)
    }
    applyFilter(text:string)
    {
        this.clickOnDomElement(text)
    }
    clickOnApplyFilter(text:string)
    {
        this.clickOnDomElement(text)
    }
    clickOnFirstJob(text:string)
    {
        this.clickOnDomElement(text)
    }
    clickOnTheJobToBeSaved(text1:string)
    {
        this.clickOnDomElement(text1)
    }
    clickOnFirstSavedJob(text:string,index:number)
    {
        this.clickOnDomElementWithIndex(text,index)

    }
    removeFirstSavedJob(text:string,index:number)
    {
        this.clickOnDomElementWithIndex(text,index)
    }
}