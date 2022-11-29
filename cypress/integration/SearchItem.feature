Feature: Search For an Item In Amazon Website
    As a User
    In order to use the application
    I want to Search an Item and the see Specifications

    Background: Background name
        Given User should navigate to Website
        When User enter an Item and Click on Search Button

    Scenario: A user should be able to search an Item
        Then Validate the Category For Search Item

    Scenario: A User search for an Item and Select Brand Name
        And  Select Brand options
        Then Validate list of Items with Brand Name

    Scenario: A User search for an Item and Select Price Range
        And  Select Price from Available option range
        Then Validate list of Items with price range

    Scenario: A User search for an Item and Enter min and max Price range
        And  Enter min and max price range and Click on Go button
        Then Validate list of Items with Entered price range

    Scenario: A User search for an Item and Select size For availability
        And  Select the size of shoes
        And  Select one of the Item
        Then Validate list of Items with sizes

    Scenario: A User search for an Item and Select Sort by option
        And  Select the Sort by option
        Then Validate sorted list of Items

