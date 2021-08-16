import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';



export class Dependencies extends BaseDependencies 
{
   visitWebsite(text:string)
   {
        this.accessUrl(text);
    }
}
//-----------------------------------------------------Eyes-------------------------------------------------------------

export class RobotEyes extends BaseEyes{
    
    seeInputTextBox(text1:string)
    {
        this.seesIdVisible(text1)
            
    }

    seeSignInButton(text1:string,text2:string)
    {
        
    this.seesTextWithId(text1,text2)
        
    }

    seeNextButton(text1:string,text2:string)
    {
        
    this.seesTextWithClass(text1,text2)
        
    }

}
/*----------------------------------Hands--------------------------------------------------*/
export class RobotHands extends BaseHands{

    clickOnInputTextBox(text1:string,text2:string)
    {
        this.typeTextonId(text1,text2)
    }
    clickOnSignInButton(text1:string,index:number)
    {
        this.clickOnDomElement(text1)
        
    }
    clickOnNextButton1(text1:string,index:number)
    {
        this.clickOnId(text1) 

        
    }
    clickOnNextButton(text1:string)
    {
        this.clickOnDomElement(text1)
        
    }
    clickOnTodaysDeals(element : string){
        this.clickOnContainElement(element)

    }

    clickOn3Item(text:string)
    {
        this.clickOnDomElement(text)
    }

    clickEnter(text:string)
    {
        this.Enter(text)
    }
    wait_to(num: number)
    {
        this.wait_to_load(num)
    }
   select_past_order(id: string,id2: string)
   {
    this.past_order(id)
   }
    scroll(domclass: string)
    {
        this. scrollAndClickOndom(domclass  )
    }
}