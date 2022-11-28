/// <reference types="cypress" />
const tdata = require("../../../testData.json");

export default class SearchTestDataElements {

    searchItemNameElement() {
        return tdata.search.searchItemName
    }
    minValueElement() {
        return tdata.search.minValue
    }
    maxValueElement() {
        return tdata.search.maxValue
    }
    brandNameValueElement() {
        return tdata.search.brandName
    }
}