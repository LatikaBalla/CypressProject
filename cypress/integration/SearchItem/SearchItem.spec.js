
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SearchItemAction } from '../PageObject/PageActions/SearchItemAction'

const search = new SearchItemAction()

//1st seanario 
Given('User should navigate to Website', function () {
  cy.visit("/", { timeout: 60000 });
  cy.url().should('include', 'amazon')
})
When('User enter an Item and Click on Search Button', function () {
  search.enterSearchItemName()
  search.clickOnSearchButton()
})
Then('Validate the Category For Search Item', function () {

  search.selectCataegoryName()
  search.validateCategoryResult()
})

//2nd 
When('Select Brand options', function () {
  //`search.clickBrandName()
  search.clickBrandNameSeeMore()
})
Then('Validate list of Items with Brand Name', function () {
  search.validateBrandNameResult()
})

//3rd 
And('Select Price from Available option range', function () {
  search.clickPriceRangeValue()
})
Then('Validate list of Items with price range', function () {
  search.validatePriceRangeResult()
})

//4th
And('Enter min and max price range and Click on Go button', function () {

  search.enterMinPriceValue()
  search.enterMaxPriceValue()
  search.clickOnPriceGoButton()
})
Then('Validate list of Items with Entered price range', function () {
  search.validateEnteredPriceResult()
})

//5th
And('Select the size of shoes', function () {
  search.clickOnSize()
})
And('Select one of the Item', function () {
  search.selectItemfromList()
})

Then('Validate list of Items with sizes', function () {
  search.validateSizeResult()
})

//6th
And('Select the Sort by option', function () {

  search.selectOptionInSortBy()
})
Then('Validate sorted list of Items details', function () {
  search.validateSortByResult()
})
