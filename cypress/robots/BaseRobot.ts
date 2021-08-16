/// <reference types="Cypress" />
import '../support/index';

export abstract class BaseEyes {
  seesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should('have.text', text);
    return this;
  }

  doesNotseesTextWithId(id: string, text: string) {
    cy.get(`#${id}`).should('not.have.text', text);
    return this;
  }

  seesIdVisible(id: string) {
    cy.get(`#${id}`).should('be.visible')
    return this;
  }

  seeClassVisible(classname:string)
  {
    cy.get(`.${classname}`).should('be.visible')
    return this;
  }

  doesNotseesIdVisible(id: string) {
    cy.get(`#${id}`).should('not.be.visible');
    return this;
  }

  seesTextWithClass(domClass: string, text: string) {
    cy.get(`.${domClass}`).should('have.text', text);
    return this;
  }

 

  seesDomVisibleWithCustomMatcher(domlabel: string, matcher: string) {
    cy.get(`[${domlabel}=${matcher}]`).should('be.visible');
    return this;
  }

  seesDomVisible(domlabel: string){                                  //element is enabled or disabled
    cy.get(domlabel).should('be.visible');
    return this;
  }

  seesTextInChildDom(parentDom: string, childDom: string, text: string) {
    cy.get(`${parentDom} ${childDom}`).should('contain', text);
    return this;
  }

  seesTextWithClassAndIndex(domClass: string, index: number, text: string) {
    cy.get(`.${domClass}`)
      .eq(index)
      
      .should('have.text', text);
    return this;
  }

  hasLengthForDomWithClass(domClass: string, length: number) {
    cy.get(`.${domClass}`).should('have.length', length);
    return this;
  }

  hasLengthForDom(parentDomClass: string, childDom:string, length: number) {
    cy.get(parentDomClass).find(childDom).should('have.length', length);
    return this;
  }

  seesDomContainText(dom: string, text: string) {
    cy.get(dom).should('contain', text);
    return this;
  }

  doesNotseesDom(dom: string) {
    cy.get(dom).should('not.be.visible');
    return this;
  }

  seesTextInAgGridCell(rowId: string, colId: string, text: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should('have.text', text);
    return this;
  }

  seesAgGridColumnSelected(rowId: string, colId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .should('have.class', 'ag-cell-range-selected');
    return this;
  }

  seesAgGridRowSelected(rowIndexId: string) {
    cy.get(`[aria-rowindex=${rowIndexId}]`).should(
      'have.class',
      'ag-row-selected',
    );
    return this;
  }

  seesMinimumNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    minimumLength: number,
  ) {
    cy.get(dom)
      .find(`.${childDomClass}`)
      .should('have.length.greaterThan', minimumLength);
    return this;
  }

  seesNumberOfElementsInDom(
    dom: string,
    childDomClass: string,
    length: number,
  ) {
    cy.get(dom)
      .find(`.${childDomClass}`)
      .should('have.length', length);
    return this;
  }

  seesPathNameInUrl(path: string) {
    cy.location('pathname').should('eq', path);
    return this;
  }

  seesFullPathNameWithQueryParams(path: string) {
    const HOST = Cypress.env('APP_URL');
    cy.location('href').should('eq', `${HOST}/${path}`);
    return this;
  }

  seesDomDisabled(dom: string) {
    cy.get(dom).should('be.disabled');
    return this;
  }

  seesDomEnabled(dom: string) {
    cy.get(dom).should('not.be.disabled');
    return this;
  }
}

export class BaseHands {

  wait_to_load(num:number){
    cy.wait(num)
  }
  clickOnId(id: string) {
    cy.get(`#${id}`).click().wait(1000);
    return this;
  }
  clickOnIdTD(id: string) {
   // cy.get(`#deals-shoveler-ns_MGC1EDC67DYNF624J2RH_1317_`).scrollTo('bottom');
   //cy.get('.a-cardui-header > .a-section > .a-spacing-none').type('{downarrow}{downarrow}{downarrow}')
    cy.get(`#${id}`).wait(25000).click();
    return this;
  }

  Enter(text: string)
  {
    cy.get(text)
    .type('Mobiles')
    .type('{enter}')
  }

  doubleClickOnId(id: string) {
    cy.get(`#${id}`).dblclick();
    return this;
  }

  doubleClickAndDragOnAgGrid(rowId: string, colId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find(`[col-id=${colId}]`)
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
      .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
      .trigger('mouseup', { which: 1, pageX: 600, pageY: 6000 });
    return this;
  }

   clickOnContainElement(element : string){
    cy.contains(element).click({force : true})
    return this;
  }

  clickOnDomElement(dom: string) {
    cy.get(dom).click();
    return this;
  }

  clickOnDomElementWithIndex(dom:string,index:number)
  {
    cy.get(dom).eq(index).click();
    return this;
  }


  checkTheDomElement(dom:string,index:number)
  {
      cy.get(`${dom}`).eq(index).check();
      return this;
  }

  clickOnCSSTypeWithindex(dom:string,index:number)
  {
    cy.get(`${dom}`).eq(index).click();
      return this;
  }

  clickOnChildDomWithIndexAndCSS(parentCSS:string,commonchildCSS:string,index:number)
  {
    cy.get(`${parentCSS},${commonchildCSS}`).eq(index).click();
    return this;
  }

  typeTextonDom(locatorName: string, locatorValue: string, text: string) {
    cy.get(`[${locatorName}="${locatorValue}"]`).type(text, { force: true });
    return this;
  }

  typeTextonId(id: string, text: string) {
    cy.get(`#${id}`).type(text, { force: true });
    return this;
  }

  

  clickOnChildDom(parentId: string, dom: string, index: number) {
    cy.get(`#${parentId} ${dom}`)
      .eq(index)
      .wait(6000)
      .click({force:true});
    return this;
  }

  
  ClickOnTextWithClassAndIndex(domClass: string, index: number) {
    cy.get(`[class=${domClass}]`)
      .eq(index)
      
      .click();
    return this;
  }
  clickOnElementUsingMultiSelectors(text1:string,index:number,text2:string)
  {
    cy.get(`${text1},${text2}`).eq(index).wait(4000).invoke('show').click({force:true});
    return this;
  }

  scrollToWithClassName(domClass: string, direction: PositionType) {
    cy.get(`.${domClass}`).scrollTo(direction);
    return this;
  }

  dropDownWithoutSelectTag(id:string)
  {
      cy.get(`#${id}`).type(`{downarrow}{enter}`);
      return this;
  }
  dropDownWithoutSelectTag11(id:string)
  {
      cy.get(`#${id}`).click({force:true}).type(`{downarrow}{enter}`);
      return this;
  }
   scrollAndClickOndom(dom: string) {
    cy.get(`${dom}`).scrollIntoView().wait(4000).click({force:true});
    return this;
  }
  past_order(id: string)
  {
    cy.get(id).click();
    
  }

  

  dropDownWithoutSelect(classname:string,tagName:string,text:string)
  {
      cy.get(`#${classname}`).find(`${tagName}`).contains(`${text}`).invoke('show').click();
      return this;
  }
  clickOnAgGridRow(rowId: string) {
    cy.get(`[row-id=${rowId}]`)
      .find('.ag-selection-checkbox')
      .click();
    return this;
  }

  

  forceClick()
  {
    cy.click({force:true})
  }
}

export class BaseDependencies {
  visitUrl(url: string) {
    const HOST = Cypress.env('APP_URL');
    cy.visit(`${HOST}${url}`);
    return this;
  }

  accessUrl(url: string) {
    cy.visit(`${url}`);
    return this;
  }

  login() {
    cy.get('#email').type(Cypress.env('USER_NAME'));
    cy.get('#password').type(Cypress.env('PASSWORD'));
    cy.get('#login_submit').click();
    return this;
  }
}

type PositionType =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'left'
  | 'center'
  | 'right'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight';