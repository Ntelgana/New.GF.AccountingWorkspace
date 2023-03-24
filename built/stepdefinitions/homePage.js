"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const homePage_1 = require("../pages/homePage");
const categoryDisplayScreen_1 = require("../pages/categoryDisplayScreen");
const addaCategoryChargeCodeScreen_1 = require("../pages/addaCategoryChargeCodeScreen");
const hooks_1 = require("../support/hooks");
const GlobalChargeCodedisplayScreen_1 = require("../pages/GlobalChargeCodedisplayScreen");
const ShipmentFinancialEditorLandingPage_1 = require("../pages/ShipmentFinancialEditorLandingPage");
const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
var CategoryDescriptionname;
var filteredCategoriesListLength;
var TotalCategoryListLength;
// Given(/^I am on "(.*?)" search page$/, async (text) => {
//     if (text === 'google') {
//         await expect(page.getTitle()).to.eventually.equal('Google');;
//     }
// });
// When(/^I type "(.*?)"$/, async (text) => {
//         await page.sendElementText(searchPage.searchTextBox, text);
// });
// When(/^I click on search button$/, async () => {
//     await page.enterKeys('Enter');
// });
// Then(/^I click on google logo$/, async () => {
//     await page.clearElement(searchPage.logo);
// })
Given('I am on Home page of charge codes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I am on home page');
        yield hooks_1.page.waitForFewSeconds(3000);
        // await this.page.waitForTimeout(5000);
        yield hooks_1.page.sendElementText(ShipmentFinancialEditorLandingPage_1.ShipmentFinEditorLandingPage.usernameTextBox, "telgnav@chrobinson.com");
        // await this.page.type(landingPage.usernameTextBox, "telgnav@chrobinson.com", {delay: 100});
        yield hooks_1.page.sendElementText(ShipmentFinancialEditorLandingPage_1.ShipmentFinEditorLandingPage.passwordTextBox, "Newcastle@123456");
        yield hooks_1.page.clickElement(ShipmentFinancialEditorLandingPage_1.ShipmentFinEditorLandingPage.signinButton);
        //await this.page.screenshot({path:'testfailed.png'});
        console.log("Global home page login successfully");
    });
});
When('I click on the hamburger menu of Home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I am clicking on the hamburger menu');
        yield hooks_1.page.clickElement(homePage_1.homePage.hamburgerMenuButton);
    });
});
Then('I should see Home and charge codes buttons', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I am seeing the home and charge code buttons');
        const isHomeLinkVisible = yield hooks_1.page.isElementVisible(homePage_1.homePage.homeButton);
        const isChargeCodeLinkVisible = yield hooks_1.page.isElementVisible(homePage_1.homePage.chargeCodeButton);
        if (isHomeLinkVisible) {
            console.log('Home link is available');
        }
        else {
            console.log('Home link is not available');
        }
        if (isChargeCodeLinkVisible) {
            console.log('Charge code link is available');
        }
        else {
            console.log('Charge Code link is not available');
        }
    });
});
When('I click on the Home button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('User is clicking on the Home button');
        yield hooks_1.page.clickElement(homePage_1.homePage.homeButton);
        console.log("Home link is clicked successfully");
    });
});
Then("Verify the title of the home page", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I am verifying the title of the Home button');
        yield hooks_1.page.clickElement(homePage_1.homePage.homeButton);
        var welcomeText = yield hooks_1.page.getText(homePage_1.homePage.hometext);
        console.log("Welcome text is: " + welcomeText);
    });
});
When('I click on the Charge code button on Home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I click on the Charge code button on Home page');
        yield hooks_1.page.clickElement(homePage_1.homePage.chargeCodeButton);
    });
});
Then('I should see three different options under charge codes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(' I should see three different options under charge codes');
        const isCategoryLinkVisible = yield hooks_1.page.isElementVisible(homePage_1.homePage.categoryHomeButton);
        const isGlobalLinkVisible = yield hooks_1.page.isElementVisible(homePage_1.homePage.globalHomeButton);
        const isCountryLinkVisible = yield hooks_1.page.isElementVisible(homePage_1.homePage.countryHomeButton);
        const isCustomerLinkVisible = yield hooks_1.page.isElementVisible(homePage_1.homePage.customerHomeButton);
        if (isCategoryLinkVisible) {
            console.log('Category link is available');
        }
        else {
            console.log('Category link is not available');
        }
        if (isGlobalLinkVisible) {
            console.log('Global link is available');
        }
        else {
            console.log('Global link is not available');
        }
        if (isCountryLinkVisible) {
            console.log('Country link is available');
        }
        else {
            console.log('Country link is not available');
        }
        if (isCustomerLinkVisible) {
            console.log('Customer link is available');
        }
        else {
            console.log('Customer link is not available');
        }
    });
});
When(/^I click on the Category link$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I click on the Category link');
        yield hooks_1.page.clickElement(homePage_1.homePage.categoryHomeButton);
    });
});
Then(/^I should see the Category display screen$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I should see the Category display screen');
        const isCategoriesHeaderisVisible = yield hooks_1.page.isElementVisible(".screen-title-header");
        if (isCategoriesHeaderisVisible) {
            console.log('Categories Header is visible');
        }
        else {
            console.log('Categories Header is not visible');
        }
    });
});
Then(/^I should see the add and filter icons$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I should see the add and filter icons');
        const isaddNewCategoryIconisVisible = yield hooks_1.page.isElementVisible(categoryDisplayScreen_1.categoryDisplayScreen.addCategoryicon);
        if (isaddNewCategoryIconisVisible) {
            console.log('add new category icon is visible');
        }
        else {
            console.log('add new category icon is not visible');
        }
        const isFilterCategoriesIconisVisible = yield hooks_1.page.isElementVisible(categoryDisplayScreen_1.categoryDisplayScreen.categoryFiltericon);
        if (isFilterCategoriesIconisVisible) {
            console.log('Filter categories icon is visible');
        }
        else {
            console.log('Filter categories icon is not visible');
        }
    });
});
When(/^I hover the mouse on add icon$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I hover the mouse on add icon');
        yield hooks_1.page.hoverElement(categoryDisplayScreen_1.categoryDisplayScreen.addCategoryicon);
    });
});
Then(/^I should see the text "(.*?)"$/, function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let addCategoryToolTip = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoriesPageAddIconToolTipText);
        yield console.log('Tool tip of add icon :' + addCategoryToolTip);
        yield console.log("The expected text from category screen add icon tool tip is " + text);
        yield expect(addCategoryToolTip).equals(text);
    });
});
When(/^I hover the mouse on the filter icon$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('I hover the mouse on the filter icon');
        yield hooks_1.page.waitForFewSeconds(30);
        yield hooks_1.page.hoverElement(categoryDisplayScreen_1.categoryDisplayScreen.categoryFiltericon);
    });
});
Then('I should see the text on filter icon {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.hoverElement(categoryDisplayScreen_1.categoryDisplayScreen.categoryFiltericon);
        yield hooks_1.page.waitForFewSeconds(3000);
        let categoryFilterToolTip = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoriesPageFilterIconToolTipText);
        yield console.log('Tool tip of category screen Filter icon :' + categoryFilterToolTip);
        yield console.log("The expected text from category screen Filter icon tool tip is " + text);
        yield expect(categoryFilterToolTip).equals(text);
    });
});
When(/^I click on the add category icon$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I click on the add category icon");
        yield hooks_1.page.clickElement(categoryDisplayScreen_1.categoryDisplayScreen.addCategoryicon);
        var addCategoryScreenWelcomeText = yield hooks_1.page.getText(categoryDisplayScreen_1.categoryDisplayScreen.addCategoryScreenTitle);
        console.log("Add a categroy display screen title is: " + addCategoryScreenWelcomeText);
    });
});
Then(/^I should see Add New Category screen$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see Add New Category screen");
        const isAddACategoryDisplayScreen = yield hooks_1.page.isElementVisible(categoryDisplayScreen_1.categoryDisplayScreen.addCategoryScreenTitle);
        if (isAddACategoryDisplayScreen) {
            console.log("The user is on add a category display screen");
        }
        else {
            console.log("The add a category screen is not available to the user");
        }
    });
});
Then(/^I should see description and purpose text boxes$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see description and purpose text boxes");
        const isDescriptionTextBoxTitleAvailable = yield hooks_1.page.isElementVisible(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionlabel);
        const isPurposeTextBoxTitleAvailable = yield hooks_1.page.isElementVisible(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposelabel);
        const isDescriptiontextBoxAvailable = yield hooks_1.page.isElementVisible(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposelabel);
        var isDescriptionTextBoxTitle = yield hooks_1.page.getText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionlabel);
        var isPurposeTextBoxTitle = yield hooks_1.page.getText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionlabel);
        console.log("The text box title is: " + isPurposeTextBoxTitle);
        if (isDescriptionTextBoxTitleAvailable) {
            console.log("The description text box is available");
        }
        else {
            console.log("The description text box is unavailable");
        }
        if (isPurposeTextBoxTitleAvailable) {
            console.log("The purpose text box is available");
        }
        else {
            console.log("The purpose text box is unavailable");
        }
    });
});
Then(/^I should enter the category description and purpose in the respective text boxes$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see description and purpose text boxes");
        var randomCategoryName = "hitest" + Math.floor(Math.random() * 2000);
        console.log("random category name = " + randomCategoryName);
        CategoryDescriptionname = randomCategoryName;
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox, randomCategoryName);
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposeTextBox, "Automation purpose test" + randomCategoryName);
    });
});
Then(/^I should click on Save Button$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I click on save button");
        yield hooks_1.page.clickElementUsingXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategorySaveButtonXpath);
    });
});
Then(/^I verify success message$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Success message recieved");
        //var successMessagealertText = await page.getText(addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        //var successMessagealertText = await page.getAlertText();
        //console.log("alert message is : " + successMessagealertText);
        yield hooks_1.page.waitForFewSeconds(2000);
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        console.log("alert message is : " + successConfirmationMessageText);
        yield expect(successConfirmationMessageText).equal('Successfully created charge code');
        console.log("Success message verified");
    });
});
Then(/^I verify the new category code created$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.scrollToBottom();
        var mostRecentCategoryCreated = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryMostRecentCategoryCardText);
        console.log("The most recent category name is " + mostRecentCategoryCreated);
        yield expect(CategoryDescriptionname).equal(mostRecentCategoryCreated);
    });
});
Then(/^I click on Cancel button$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I click on Cancel Button");
        yield hooks_1.page.clickElementUsingXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryCancelButton);
    });
});
Then(/^I click on OK button on the pop up modal$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I recieve the pop up modal for cancellation");
        var cancelCategoryConfirmMessage = yield hooks_1.page.getText(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryCancelModalConfirmText);
        console.log("The cancel confirmation mesage is" + cancelCategoryConfirmMessage);
        yield expect(cancelCategoryConfirmMessage).equal("The pending changes on charge codes will be discarded on click of OK.");
        yield hooks_1.page.clickElement(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryCancelModalOKButton);
    });
});
Then('I should enter the text in purpose text box and leave Description text box empty', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var randomPurposeName = "hitest" + Math.floor(Math.random() * 2000);
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposeTextBox, "Automation purpose test" + randomPurposeName);
    });
});
Then('I should get error message on description text box {string} and {string}', function (String1, String2) {
    return __awaiter(this, void 0, void 0, function* () {
        var Message1 = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryDescriptionEmptyvalueError);
        var Message2 = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryDescriptionUniquevalueError);
        console.log("Expected 1st description box error message is : " + String1 + "Actual 1st message is : " + Message1);
        console.log("Expected 2nd description box error message is : " + String2 + "   Actual 2nd message is : " + Message2);
        yield expect(Message1).equal(String1);
        yield expect(Message2).equal(String2);
    });
});
Then('I should get confirmation message as a modal with the text {string} with option OK and cancel buttons', function (String1) {
    return __awaiter(this, void 0, void 0, function* () {
        var Message1 = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryCancelModalConfirmText);
        console.log("Expected cancel confirmation message is : " + String1 + "Actual confirmation message is : " + Message1);
        yield expect(Message1).equal(String1);
    });
});
Then('I click on Cancel on Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryCancelModalCancelButton);
        console.log("Cancel on modal is clicked ");
    });
});
Then('I should enter the text in description text box and leave purpose text box empty', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var randomCategoryName = "hitest" + Math.floor(Math.random() * 2000);
        console.log("random category name = " + randomCategoryName);
        CategoryDescriptionname = randomCategoryName;
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox, randomCategoryName);
    });
});
Then('I should get error message on purpose text box {string}', function (String) {
    return __awaiter(this, void 0, void 0, function* () {
        var Message = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategoryPurposeEmptyvalueError);
        console.log("Expected purpose error message is : " + String + "  and Actual 1st message is : " + Message);
        yield expect(Message).equal(String);
    });
});
When('I hover the cursor on the tool tip of any Category charge code card', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.hoverElement(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardTooltipWithCSSCardOne);
        console.log("The cursor is on the tool tip of the Card (css)");
    });
});
Then('I should see the purpose of the card in the modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CardTooltipPopHeading = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardPurposeToolTipPopUp);
        yield expect(CardTooltipPopHeading).equals("Purpose");
        console.log("The heading of the tool tip is: " + CardTooltipPopHeading);
    });
});
When('I click on any category charge code card to get a Pop up modal with Description as Title', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var firstCategoryCardName = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryFirstCategoryCardText);
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryFirstCategoryCardText);
        console.log("The Category card is clicked");
        var ModalTitleName = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardModalTitle);
        yield expect(firstCategoryCardName).equals(ModalTitleName);
        console.log("The text of the first Card is " + firstCategoryCardName + "The text on the pop up modal is " + ModalTitleName);
    });
});
Then('I should see edit and close icon buttons at the bottom right corner of the pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var modalEditButtonStatus = yield hooks_1.page.isElementVisibleByXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardModalEditButton);
        console.log("The status of edit button " + modalEditButtonStatus);
        yield expect(modalEditButtonStatus).equals(true);
        var modalCloseButtonStatus = yield hooks_1.page.isElementVisibleByXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardModalCloseButton);
        console.log("The status of close button " + modalCloseButtonStatus);
        yield expect(modalCloseButtonStatus).equals(true);
    });
});
Then('I should click on the Close button on the pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardModalCloseButton);
        console.log("The Close button on card Pop modal is Clicked");
    });
});
Then('I should refresh the page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.pageRefresh();
    });
});
When('I click on the Filter button icon on the category charge code display screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.waitForFewSeconds(5000);
        var filterbuttonvisibility = yield hooks_1.page.isElementVisibleByXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryFilterButtonIcon);
        console.log("The filter button is : " + filterbuttonvisibility);
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryFilterButtonIcon);
    });
});
Then('I should see a text box filter with the text {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I am on the Filters bar of category display screen");
        var filterBarStatus = yield hooks_1.page.isElementVisibleByXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryFilterbar);
        yield expect(filterBarStatus).equal(true);
        console.log("The filter bar is visible");
    });
});
Then('I should not see the Filter bar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var filterBarStatus = yield hooks_1.page.isElementVisibleByXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryFilterbar);
        console.log("The value of filterBarStatus: " + filterBarStatus);
        yield expect(filterBarStatus).equal(false);
        console.log("The filter bar is not visible");
    });
});
When('I enter {string} in the filter text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryFilterbarCSS, text);
        console.log("The text is entered in Filter  bar");
    });
});
Then('I should filter and display only the matching category charge codes to the text {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        var filteredCategoriesList = yield hooks_1.page.getAllTextContent(categoryDisplayScreen_1.categoryDisplayScreen.categoryChargeCodeCardsAllCategoryNames);
        for (const temp of filteredCategoriesList) {
            yield expect(temp).contains(text);
        }
        console.log("The Filtered category charge codes are verified with matching text");
        filteredCategoriesListLength = filteredCategoriesList.length;
    });
});
When('I delete the text in the filter text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryFilterbar);
        console.log("The text on Filter bar is cleared");
        var TotalCategoryList = yield hooks_1.page.getAllTextContent(categoryDisplayScreen_1.categoryDisplayScreen.categoryChargeCodeCardsAllCategoryNames);
        TotalCategoryListLength = TotalCategoryList.length;
        var temp;
        if (TotalCategoryListLength == filteredCategoriesListLength) {
            temp = true;
        }
        else {
            temp = false;
        }
        yield expect(temp).equal(false);
        console.log();
    });
});
Then('I should get error message "No charge codes match your search criteria"', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var NoFilterErrorMsg = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryNoFilterMatchedErrorText);
        console.log("Actual error message is : " + NoFilterErrorMsg);
        yield expect(NoFilterErrorMsg).equals("No charge codes match your search criteria");
    });
});
When(/^I enter a duplicate category description and purpose in the respective text boxes$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see description and purpose text boxes");
        var duplicateCategoryName = "hitest";
        console.log("Duplicate description of charge code = " + duplicateCategoryName);
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox, duplicateCategoryName);
    });
});
Then('I should enter the category description as {string} and purpose as {string} in the respective text boxes', function (categoryDescription, categoryPurpose) {
    return __awaiter(this, void 0, void 0, function* () {
        CategoryDescriptionname = categoryDescription;
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox, categoryDescription);
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposeTextBox, categoryPurpose);
        console.log("Description and Purpose of charge code category are entered");
    });
});
When('I click on the Edit icon button of a Charge code Card', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardEditButtonLastCard);
        console.log("Edit icon button on the Test Archive category card is clicked ");
    });
});
Then(/^I verify the new category code created for Archive functionality$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.scrollToBottom();
        var mostRecentCategoryCreated = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryMostRecentCategoryCardText);
        console.log("The most recent category name is " + mostRecentCategoryCreated);
        yield expect("Test Archive").equal(mostRecentCategoryCreated);
    });
});
Then('I should be on Edit Category screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var categoryEditPageTitle = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditCategoryPageTitle);
        console.log("Title of the Edit category screen = " + categoryEditPageTitle);
        yield expect(categoryEditPageTitle).equals("Edit Category");
    });
});
When('I click on Archive icon button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditCategoryPageArchiveButton);
        console.log("The archive button is clicked successfully");
    });
});
Then('I should get a alert pop up with  body {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        var archiveConfirmationAlertBody = yield hooks_1.page.getText(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditConfirmationModalBodyCSS);
        console.log("The body of the archive modal alert is " + archiveConfirmationAlertBody);
        yield expect(archiveConfirmationAlertBody.trim()).equals(text.trim());
    });
});
Then('I should click on OK button on alert', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditConfirmationModalOKButton);
        console.log("The OK button on the archive confirmation alert is clicked successfully");
    });
});
Then('I should click on the Save button of Edit Category Page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditCategoryScreenSaveButton);
        console.log("The Save button on the Edit Category screen is clicked successfully");
    });
});
Then('I should not see the archived charge code card in the Category Charge code display screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.scrollToBottom();
        var mostRecentCategoryCreated = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryMostRecentCategoryCardText);
        console.log("The most recent category name is " + mostRecentCategoryCreated);
        var flag = true;
        if (mostRecentCategoryCreated === "Test Archive") {
            flag = false;
        }
        yield expect(flag).equals(true);
    });
});
Then('I clear the Category description and purpose text boxes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clearElement(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox);
        yield hooks_1.page.clearElement(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposeTextBox);
        console.log("The description and purpose text boxes values are cleared");
    });
});
Then('I should update the category description as {string} and purpose as {string} in the respective text boxes', function (categoryDescription, categoryPurpose) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clearElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox);
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox, categoryDescription);
        yield hooks_1.page.clearElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposeTextBox);
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposeTextBox, categoryPurpose);
        console.log("A charge code category is updated to test update functionality");
    });
});
Then(/^I should verify the update success alert message$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Success message recieved");
        //var successMessagealertText = await page.getText(addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        //var successMessagealertText = await page.getAlertText();
        //console.log("alert message is : " + successMessagealertText);
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        console.log("alert message is : " + successConfirmationMessageText);
        yield expect(successConfirmationMessageText).equal('Successfully updated charge code');
        console.log("Success message verified");
    });
});
Then(/^I should get the new charge code card view title truncated with ellipsis$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        var bool = false;
        var lastCardTitle = yield hooks_1.page.getTextFromXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardModalTitle);
        if (lastCardTitle.includes('...')) {
            bool = true;
        }
        yield expect(bool).equal(true);
        console.log(lastCardTitle);
        console.log("The ellipses is present for text overflow of 33 characters");
    });
});
When('I click on the new charge code category card', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
        console.log("The most recently created  charge code category is clicked");
    });
});
Then('I should verify the information on the updated charge code category', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //add this step to verify updated category info 
    });
});
Then('I close the browser', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.close();
        console.log("I am closing the browser");
    });
});
Then('I should see the description and purpose of the New Category on a pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.getAllTextContent(categoryDisplayScreen_1.categoryDisplayScreen.categoryCardModalTitle);
    });
});
