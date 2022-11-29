/// <reference types="cypress" />
const locator = require("../../../locators.json");
export default class SearchItemElements {

    searchBoxElement() {
        return cy.get(locator.searchPage.searchBox, {
            timeout: 30000,
        });
    }

    searchButtonElement() {
        return cy.get(locator.searchPage.searchButton, {
            timeout: 30000,
        });
    }
    categoryElement() {
        return cy.xpath(locator.searchPage.category, {
            timeout: 30000,
        });
    }
    valCategoryElements() {
        return cy.xpath(locator.searchPage.valCategory, {
            timeout: 30000,
        });
    }
    brandNamePumaElement() {
        return cy.xpath(locator.brandName.brandPuma, {
            timeout: 30000,
        });
    }
    brandSeeMoreOptionElement() {
        return cy.get(locator.brandName.seeMore, {
            timeout: 30000,
        });
    }
    brandSeeLessOptionElement() {
        return cy.xpath(locator.brandName.seeLess, {
            timeout: 30000,
        });
    }
    brandNameBATAElement() {
        return cy.xpath(locator.brandName.brandBATA, {
            timeout: 30000,
        });
    }
    priceRangeElement() {
        return cy.get(locator.priceRange.price1000_2500, {
            timeout: 30000,
        });
    }

    minPriceElement() {
        return cy.get(locator.priceRange.minPrice, {
            timeout: 30000,
        });
    }

    maxPriceElement() {
        return cy.get(locator.priceRange.maxPrice, {
            timeout: 30000,
        });
    }
    goButtonElement() {
        return cy.get(locator.priceRange.goButton, {
            timeout: 30000,
        });
    }
    priceRangeElement() {
        return cy.xpath(locator.priceRange.price500_1000, {
            timeout: 30000,
        });
    }
    sortByOptionElement() {
        return cy.xpath(locator.sortOption.sortBy, {
            timeout: 30000,
        });
    }

    sortLowtoHighElement() {
        return cy.get(locator.sortOption.sortLowtohigh, {
            timeout: 30000,
        });
    }


    sizeElement() {
        return cy.xpath(locator.size.size_6, {
            timeout: 30000,
        });
    }
    sizeResultElement() {
        return cy.xpath(locator.size.sizeResult, {
            timeout: 30000,

        });
    }


    valSizeElement() {
        return cy.get(locator.size.valSize, {
            timeout: 30000,

        });
    }
}