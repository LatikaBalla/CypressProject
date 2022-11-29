/// <reference types="cypress" />
const SearchItemElements = require("../PageElements/SearchItemElements.js")
const SearchTestDataElements = require("../PageElements/SearchTestDataElements.js");


export class SearchItemAction {
    constructor() {
        globalThis.searchItem = new SearchItemElements();
        globalThis.tdata = new SearchTestDataElements();
    }

    enterSearchItemName() {
        searchItem.searchBoxElement().type(tdata.searchItemNameElement())
    }
    clickOnSearchButton() {
        searchItem.searchButtonElement().click()
    }
    selectCataegoryName() {
        searchItem.categoryElement()
        .children()
        .eq(6)
        .click({ force: true })
        .should('have.text',tdata.searchItemNameElement())
    }
    validateCategoryResult()  {
        searchItem.valCategoryElements().should('have.length','5')
    }
    clickBrandName() {
        searchItem.brandNamePumaElement().click()
    }
    validateBrandNameResult() {
        cy.get('h5').each($ele => {
            const d = $ele.text()
            expect(d).to.include(tdata.brandNameValueElement())
        })

    }
    clickBrandNameSeeMore() {
        searchItem.brandSeeMoreOptionElement()
            .prev()
            .eq(0)
            .click({ force: true })
        searchItem.brandNameBATAElement().click()
    }
    clickPriceRangeValue() {
        searchItem.priceRangeElement().click()
    }
    enterMinPriceValue() {
        searchItem.minPriceElement().type(tdata.minValueElement())
    }
    enterMaxPriceValue() {
        searchItem.maxPriceElement().type(tdata.maxValueElement())
    }
    clickOnPriceGoButton() {
        searchItem.goButtonElement().click()
    }
    clickOnSize() {
        searchItem.sizeElement().click()
    }
    selectItemfromList() {
        searchItem.sizeResultElement().invoke('removeAttr', 'target')
            .children()
            .eq(1)
            .click({ force: true });
    }
   
    validateSizeResult() {
        searchItem.valSizeElement().should('have.text', ' 6 UK ')
    }
   
    selectOptionInSortBy() {
        searchItem.sortByOptionElement().click()
        searchItem.sortLowtoHighElement().click()
    }
    validateSearchItemList() {

        cy.get('.cat-link').should('include.text',tdata.searchItemNameElement())
    }
    validatePriceRangeResult() {
        cy.get('.a-price-whole').each($ele => {
            const d = $ele.text()
            if (d < 500) {
                expect(true).to.be.true
            }
            else if (d >= 500 && d < 1000) {
                expect(true).to.be.true
            }
            else if (d >= 1000 && d < 2500) {
                expect(true).to.be.true
            }
            else if (d >= 2500 && d <= 5000) {
                expect(true).to.be.true
            } else {
                expect(false).to.be.false
            } })
    }
    validateEnteredPriceResult() {

        cy.get('.a-price-whole').each($ele => {
            const d = $ele.text()

            if (d >= tdata.minValueElement() && d <= tdata.maxValueElement()) {
                expect(true).to.be.true
            }
            else {
                expect(false).to.be.false
            } })
    }
    validateSortByResult() 
    {
     
       cy.wait(5000)
       cy.get('.a-price-whole').each($el=>{
        let d=parseInt($el.text())
        let m=parseInt(tdata.sortMinValueElement())
        let mx=parseInt(tdata.sortMaxValueElement())
       expect(d).to.be.within(m,mx)
       })
    }

}
export default SearchItemAction