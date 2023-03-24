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
const GlobalChargeCodedisplayScreen_1 = require("../pages/GlobalChargeCodedisplayScreen");
const hooks_1 = require("../support/hooks");
const { Given, When, Then } = require("@cucumber/cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var GlobalTestChargeCodeName;
var TestGlobalCCDescription;
var TestGlobalCCRandomName;
When("I click on the Global link on home page", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3);
        console.log("I click on the Global Charge code button on Home page");
        yield hooks_1.page.clickElement(homePage_1.homePage.globalHomeButton);
    });
});
Then(/^I should see the Global Charge code display screen$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see the Category display screen");
        yield hooks_1.page.waitForFewSeconds(1000);
        const isGlobalCCHeaderisVisible = yield hooks_1.page.isElementVisible(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCDisplayScreenTitle);
        if (isGlobalCCHeaderisVisible) {
            console.log("Global CC  Header is visible");
        }
        else {
            console.log("Global CC Header is not visible");
        }
    });
});
Then(/^I should see the add and filter icons on Global Display Screen$/, function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see the add and filter icons");
        const isaddNewGlobalCCIconisVisible = yield hooks_1.page.isElementVisible(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalPageAddIcon);
        if (isaddNewGlobalCCIconisVisible) {
            console.log("Add new Global Charge Code icon is visible");
        }
        else {
            console.log("Add new Global Charge Code icon is not visible");
        }
        const isFilterGlobalCCIconisVisible = yield hooks_1.page.isElementVisible(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalFilterIcon);
        if (isFilterGlobalCCIconisVisible) {
            console.log("Filter  Global Charge Code icon is visible");
        }
        else {
            console.log("Filter  Global Charge Code icon is visible icon is not visible");
        }
    });
});
When("I hover the mouse on add icon on Global Display Screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I hover the mouse on add icon");
        yield hooks_1.page.hoverElement(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalPageAddIcon);
    });
});
Then(/^I should see the add tooltip text "(.*?)"$/, function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let addGlobalCCToolTip = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalPageAddIconToolTipText);
        yield console.log("Tool tip is of Add icon:" + addGlobalCCToolTip);
        yield console.log("Tool tip of add icon  :" + addGlobalCCToolTip);
        yield console.log("The expected text from add icon tool tip is " + text);
        yield expect(addGlobalCCToolTip).equals(text);
    });
});
When("I hover the mouse on the filter icon on Global Display Screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I hover the mouse on the filter icon on Global Page");
        yield hooks_1.page.waitForFewSeconds(30);
        yield hooks_1.page.hoverElement(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalFilterIcon);
    });
});
Then(/^I should see the tooltip text "(.*?)"$/, function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let GlobalCCPageFilterToolTip = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalPageFilterIconToolTipText);
        yield console.log("Tool tip of Filter icon :" + GlobalCCPageFilterToolTip);
        yield console.log("The expected text from Filter tool tip is " + text);
        yield expect(GlobalCCPageFilterToolTip).equals(text);
    });
});
Then("I should see an accordian view of all the Categories linked to Global charge codes", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3);
        var accordionCategoriesList = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCategoriesAccordionView);
        var flag = false;
        yield console.log("The total global categories in accordion view are " +
            accordionCategoriesList.length);
        if (accordionCategoriesList.length >= 1) {
            flag = true;
        }
        yield expect(flag).equals(true);
    });
});
When("I click on any category in the accordian view", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCategoryScreenFirstAccordion);
        yield console.log("First category of accordion view is clicked");
    });
});
Then("I should see an expanded view of all the Global charge codes linked to that category in card format", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var globalCategorieslistlinkedtoFirstCategory = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCategoryChargeCodeCardBody);
        yield console.log("The number of charge codes in first accordion are  " +
            globalCategorieslistlinkedtoFirstCategory.length);
        var flag = false;
        if (globalCategorieslistlinkedtoFirstCategory.length >= 1) {
            flag = true;
        }
        yield expect(flag).equals(true);
    });
});
When("I click on the category view again", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCategoryScreenFirstAccordion);
    });
});
Then("The expanded view should collapse back to accordion view", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var globalCategorieslistlinkedtoFirstCategory = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCategoryChargeCodeCardBody);
        yield console.log("The number of charge codes in after closing accordion are  " +
            globalCategorieslistlinkedtoFirstCategory.length);
        var flag = false;
        if (globalCategorieslistlinkedtoFirstCategory.length === 0) {
            flag = true;
        }
        yield expect(flag).equals(true);
    });
});
Then(/^I should enter the category description {string} and purpose as {string}in the respective text boxes$/, function (description, purpose) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I create description and purpose text boxes");
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryDescriptionTextBox, description);
        yield hooks_1.page.sendElementText(categoryDisplayScreen_1.categoryDisplayScreen.categoryPurposeTextBox, purpose);
    });
});
When("I click on Add icon on Global Charge Codes screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("I click on the add icon oon the Global charge code screen");
        yield hooks_1.page.clickElement(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalPageAddIcon);
    });
});
Then("I should be on the Add New Global Charge Code display screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var addGlobalCCTitle = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCaPageTitle);
        console.log("The title of the add global charge code page is  " + addGlobalCCTitle);
        yield expect(addGlobalCCTitle).equals("Add New Global Charge Code");
    });
});
Then("I Should select the {string} from category drop down menu", function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.clickElement(globalChargeCodedisplayScreen.GlobalAddGlobalCCCategoryDropDown);
        var dafaultdropdownvalue = yield hooks_1.page.selectFromDropDownValue(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCCategoryDropDown, GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddCCDropDownvalue);
        yield hooks_1.page.waitForFewSeconds(3000);
        // await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);
        //   await page.scrollToElement(globalChargeCodedisplayScreen.GlobalAddChargeCodeDropDownOption);
        // await page.clickElement(globalChargeCodedisplayScreen.GlobalAddChargeCodeDropDownOption);
    });
});
Then("I should enter the name and description of the new Global charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        GlobalTestChargeCodeName = "TestGCC - Test Global Charge code";
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, "TestGCC");
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, "Test Global Charge code");
    });
});
Then('I should select the default unit type from the drop down menu and select F-Flat Rate type', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.selectFromDropDownValue(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdowndefault, GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdownFRateValue);
    });
});
Then("I should enter the Default unit amount", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox, "1");
    });
});
Then("I should click on save icon button", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);
    });
});
Then("I should verify the success message for new Global charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Global charge code created Success message recieved");
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        console.log("alert message is : " + successConfirmationMessageText);
        yield expect(successConfirmationMessageText).equal("Successfully created charge code");
        console.log("New Global charge code Success message verified");
    });
});
Then("I should be verify the newly created Global charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddCCTestChargeCodeCategory);
        var GlobalTestChargeCodeText = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCTestChargeCodeCard);
        console.log("The name and description of the test Global charge code is " +
            GlobalTestChargeCodeText);
        yield expect(GlobalTestChargeCodeText).equals(GlobalTestChargeCodeName);
    });
});
//  deafult error message validation
Then("I should get an error message {string} and {string} below the text placeholder", function (String1, String2) {
    return __awaiter(this, void 0, void 0, function* () {
        var defaultamounterrormsg1 = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCDefaultNetAmountErrormsg1);
        var defaultamounterrormsg2 = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCDefaultNetAmountErrormsg2);
        yield expect(defaultamounterrormsg1).equals(String1);
        yield expect(defaultamounterrormsg2).equals(String2);
    });
});
Then("I should get an error message {string} and {string} below the Charge code name placeholder", function (String1, String2) {
    return __awaiter(this, void 0, void 0, function* () {
        var CCNameemptyerrormsg1 = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCNameEmptyErrormsg1);
        var CCNameemptyerrormsg2 = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCNameEmptyErrormsg2);
        yield expect(CCNameemptyerrormsg1).equals(String1);
        yield expect(CCNameemptyerrormsg2).equals(String2);
    });
});
// description error validation
Then("I should get an error message {string} below the Charge code description placeholder", function (String1) {
    return __awaiter(this, void 0, void 0, function* () {
        var CCDescriptionemptyerrormsg1 = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCDescriptionErrormsg);
        yield expect(CCDescriptionemptyerrormsg1).equals(String1);
    });
});
//  random name for testing Global charge code
Then('I should enter the test name and description for the new Global charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see description and purpose text boxes");
        var randomGlobalChargeCodeName = "Test" + Math.floor(Math.random() * 2000);
        console.log("random Global Charge Code name = " + randomGlobalChargeCodeName);
        TestGlobalCCRandomName = randomGlobalChargeCodeName;
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, randomGlobalChargeCodeName);
        var randomGlobalChargeCodeDescription = "TestGlobalCCDesc" + Math.floor(Math.random() * 2000);
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, randomGlobalChargeCodeDescription);
        TestGlobalCCDescription = randomGlobalChargeCodeDescription;
    });
});
Then('I should click on edit icon button on the newly created Global charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCLastCardEditIcon);
        console.log("The Edit button on the Last Global charge code is clicked");
    });
});
Then('I should click on all the radio button on Transaction config section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCTaxRadiobutton);
        console.log("The tax option radio button  in transaction config is clicked");
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCPassthroughRadiobutton);
        console.log("The Passthrough option radio button  in transaction config is clicked");
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCDutyNettingRadiobutton);
        console.log("The Duty Netting option radio button  in transaction config is clicked");
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCProformaRadiobutton);
        console.log("The Proforma option radio button  in transaction config is clicked");
    });
});
Then('I should click on the Test automation Category in Accordion view', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddCCGlobalTestAutomationCategoryAccordion);
        console.log("The Global Automation Test Category in accordiong view is clicked");
    });
});
When('I click on the charge code card', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
        console.log("The most recently created Global charge code is clicked");
    });
});
Then('I should verify if the checkboxes are checked for the transaction config option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalTaxCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Tax check box on the Pop up modal is checked");
        hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalDutyNettingCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Duty Netting check box on the Pop up modal is checked");
        hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalPassthroughCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Passthrough check box on the Pop up modal is checked");
        hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickProformaCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Proforma check box on the Pop up modal is checked");
    });
});
Then('I should verify the title of the Modal is matching to the New Global charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCNameandDecription = TestGlobalCCRandomName + " - " + TestGlobalCCDescription;
        console.log("The expected Name and Description of GlobalCC is = " + CCNameandDecription);
        var GlobalCCActualModalHeader = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
        yield expect(CCNameandDecription).equals(GlobalCCActualModalHeader);
        console.log("The name and the description of the Global charge code is matching the header on the pop up modal ");
    });
});
Then('I should click on Close button on the modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalCloseButton);
        console.log("The close button on the Modal is clicked sucessfully");
    });
});
When('I click on the Edit button on the Pop Up Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalEditButton);
        console.log("The Edit button on the Modal is clicked sucessfully");
    });
});
Then('I should be on the Edit Global Charge code Screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var EditSCreenActualTitle = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCEditChargeCodeScreenTitleText);
        console.log("The actual title of the Edit screen is  " + EditSCreenActualTitle);
        var EditScreenExpectedTitle = "Edit Global Charge Code";
        yield expect(EditSCreenActualTitle).equals(EditScreenExpectedTitle);
    });
});
When('I click on the cancel button on Edit Global Charge code screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCEditScreenCancelButton);
        console.log("The Cancel button on the Edit Global charge code screen is clicked sucessfully");
    });
});
//   transaction filter selection
Then('I should click on the Transaction Filters section and select all the transaction type filters', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterTransactionTypeAccordion);
        console.log("The transaction Type is clicked on the accordion in the transaction Filter section");
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeAirShipmentCheckBox);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeOceanShipmentCheckBox);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeCustomsFinOnlyCheckBox);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeServiceFinOnlyCheckBox);
    });
});
Then('I should verify if the Transaction types selected are reflecting on the Global Charge code Card pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var TransactionTypeValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(TransactionTypeValues);
        yield expect(TransactionTypeValues.includes("Air Shipment")).equals(true);
        yield expect(TransactionTypeValues.includes("Ocean Shipment")).equals(true);
        yield expect(TransactionTypeValues.includes("Service Fin Only")).equals(true);
        yield expect(TransactionTypeValues.includes("Customs Fin Only")).equals(true);
    });
});
Then('I should click on the Transaction Filters section and select all the Revenue-Expense filters', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterRevenueExpenseAccordion);
        console.log("The Revenue-Expense filter is clicked on the accordion in the transaction Filter section");
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterExpenseMandatoryCheckBox);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterRevenueMandatoryCheckBox);
    });
});
Then('I should verify if the Revenue-Expense Filters selected are reflecting on the Global Charge code Card pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var RevenueExpenseFilterValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(RevenueExpenseFilterValues);
        yield expect(RevenueExpenseFilterValues.includes("Revenue Mandatory")).equals(true);
        yield expect(RevenueExpenseFilterValues.includes("Expense Mandatory")).equals(true);
    });
});
//   importcountry transaction filter verification on pop  up
Then('I should click on the Transaction Filters section and select all the Import Country filters', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterImportCountryAccordion);
        console.log("The Import Country Filter is clicked on the accordion in the transaction Filter section");
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterImportCountryChina);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterImportCountryIndia);
    });
});
Then('I should verify if the Import Country Filters selected are reflecting on the Global Charge code Card pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var ImportCountryFilterValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(ImportCountryFilterValues);
        yield expect(ImportCountryFilterValues.includes("China")).equals(true);
        yield expect(ImportCountryFilterValues.includes("India")).equals(true);
    });
});
//  Export country transaction filter pop up modal verification
Then('I should click on the Transaction Filters section and select all the Export Country filters', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterExportCountryAccordion);
        console.log("The Export Country Filter is clicked on the accordion in the transaction Filter section");
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterExportCountryUnitedStates);
    });
});
Then('I should verify if the Export Country Filters selected are reflecting on the Global Charge code Card pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var ExportCountryFilterValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(ExportCountryFilterValues);
        yield expect(ExportCountryFilterValues.includes("United States")).equals(true);
    });
});
//  Archive Global Charge code 
Then('I should Archive the Global Charge Code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.pageRefresh();
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(homePage_1.homePage.hamburgerMenuButton);
        yield hooks_1.page.clickElement(homePage_1.homePage.chargeCodeButton);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(homePage_1.homePage.globalHomeButton);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddCCGlobalTestAutomationCategoryAccordion);
        yield hooks_1.page.clearElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCLastCardEditIcon);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCChargeCodeArchiveButtonIcon);
        var GlobalChargeCodeCArchiveModalText = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCArchiveModalText);
        yield expect(GlobalChargeCodeCArchiveModalText).equals("Click Ok to proceed with archiving this Global Charge Code?");
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCArchiveModalOKButton);
        yield hooks_1.page.clearElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);
        console.log("Global Charge code has been archived");
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        console.log("alert message is : " + successConfirmationMessageText);
        yield expect(successConfirmationMessageText).equal("Charge code has been archived");
        console.log("Global charge code archived message verified");
    });
});
// Filter Functionality
When('I hover the mouse on the Global display screen Filter icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.hoverElement(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterIcon);
        console.log("The mouse is hovered on the Filter icon on the Global charge code display screen");
    });
});
Then('I should get the text {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        var FiltericonToolTipText = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterIconTooltipText);
        yield expect(FiltericonToolTipText).equals(text);
    });
});
When('I click on the Filter icon on the Global charge code screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElement(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterIcon);
        console.log("The Filter icon on the Global display screen is clicked");
        yield hooks_1.page.waitForFewSeconds(2000);
    });
});
Then('I should enter the text input and the relevant categories having the matching charge codes should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTextinputField, TestGlobalCCRandomName);
        yield hooks_1.page.waitForFewSeconds(1000);
        var FilteredFirstAccordionText = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilteredFirstAccordionText);
        yield expect(FilteredFirstAccordionText.includes("Global Charge code category for Automation")).equals(true);
    });
});
Then('I should validate if the accordion displayed is having the matching charge codes to the filter text input', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilteredFirstAccordionText);
        var LastCreatedGlobalCCCardText = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
        yield expect(LastCreatedGlobalCCCardText.includes(TestGlobalCCRandomName)).equals(true);
        console.log("The Filtered card is validated");
    });
});
// Filter Global charge codes with transaction Config
//   Then('I should select the check boxes on the transaction Config dropdown on the Filter input section',async function () {
//     await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigFilterDropdownButton);
//     await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigTaxCheckBox);
//     await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigPassthroughCheckBox);
//     await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigDutynettingCheckBox);
//     await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigProformaCheckBox);
//     await page.waitForFewSeconds(2000);
//  });
Then('I should select the {string} check box on the transaction Config dropdown on the Filter input section', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigFilterDropdownButton);
        yield hooks_1.page.waitForFewSeconds(2000);
        if (text === "Tax") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigTaxCheckBox);
        }
        else if (text === "Passthrough") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigPassthroughCheckBox);
        }
        else if (text === "DutyNetting") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigDutynettingCheckBox);
        }
        else if (text === "Proforma") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigProformaCheckBox);
        }
    });
});
Then('I should click on the Transaction Config Dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigFilterDropdownButton);
    });
});
Then('I should open the first accordion and click on the first Global Charge code card', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFirstCategoryAccordion);
        console.log("The First available category in the accordion is clicked");
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
        console.log("The last Global Charge code card on the First accordion is clicked ");
    });
});
Then('I should click on the First Accordion', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFirstCategoryAccordion);
        console.log("The First available category in the accordion is re clicked");
    });
});
Then('I should verify if the {string} checkbox is checked for the transaction config option', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        if (text === "Tax") {
            hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalTaxCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
            console.log("The Tax check box on the Pop up modal is checked");
        }
        else if (text === "Passthrough") {
            hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalPassthroughCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
            console.log("The Passthrough check box on the Pop up modal is checked");
        }
        else if (text === "DutyNetting") {
            hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalDutyNettingCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
            console.log("The Duty Netting check box on the Pop up modal is checked");
        }
        else if (text === "Proforma") {
            hooks_1.page.checkBoxCheckedorNot(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickProformaCheckbox).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
            console.log("The Proforma check box on the Pop up modal is checked");
        }
    });
});
// transaction Type Filter verificstion 
Then('I should select the {string} check box on the transaction type Transaction Filter dropdown on the Filter input section', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeFilterDropdownButton);
        yield hooks_1.page.waitForFewSeconds(2000);
        if (text === "Air Shipment") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeAirShipmentCheckBox);
        }
        else if (text === "Ocean Shipment") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeOceanShipmentCheckBox);
        }
        else if (text === "Service Fin Only") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeServiceFinOnlyCheckBox);
        }
        else if (text === "Customs Fin Only") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeCustomFinOnlyCheckBox);
        }
    });
});
Then('I should verify if the {string} label is visible for the transaction type Transaction Filter option', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeFilterDropdownButton);
        yield hooks_1.page.waitForFewSeconds(2000);
        if (text === "Air Shipment") {
            var TransactionTypeValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
            console.log(TransactionTypeValues);
            yield expect(TransactionTypeValues.includes("Air Shipment")).equals(true);
        }
        else if (text === "Ocean Shipment") {
            var TransactionTypeValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
            console.log(TransactionTypeValues);
            yield expect(TransactionTypeValues.includes("Ocean Shipment")).equals(true);
        }
        else if (text === "Service Fin Only") {
            var TransactionTypeValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
            console.log(TransactionTypeValues);
            yield expect(TransactionTypeValues.includes("Service Fin Only")).equals(true);
        }
        else if (text === "Customs Fin Only") {
            var TransactionTypeValues = yield hooks_1.page.getAllTextContent(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
            console.log(TransactionTypeValues);
            yield expect(TransactionTypeValues.includes("Customs Fin Only")).equals(true);
        }
    });
});
Then('I should select the {string} check box on the Revenue Expense Transaction Filter dropdown on the Filter input section', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterExpenseRevenueFilterDropdownButton);
        yield hooks_1.page.waitForFewSeconds(2000);
        if (text === "Revenue Mandatory") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeRevenueMandatoryCheckBox);
        }
        else if (text === "Expense Mandatory") {
            yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeExpenseMandatoryCheckBox);
        }
    });
});
Then('I should verify if the {string} label is visible for the Revenue Expense Transaction Filter option', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterExpenseRevenueFilterDropdownButton);
        yield hooks_1.page.waitForFewSeconds(2000);
        if (text === "Revenue Mandatory") {
            var revenueONModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCRevenueExpenseRevenueMandatoryTextonModalXpath);
            yield expect(revenueONModal).equals(true);
            console.log("The revenue mandatory selection is verified on the Card Modal");
        }
        else if (text === "Expense Mandatory") {
            var expenseONModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCRevenueExpenseExpenseMandatoryTextonModalXpath);
            yield expect(expenseONModal).equals(true);
            console.log("The Expense mandatory selection is verified on the Card Modal");
        }
    });
});
//  verifying import country via filter functionality
Then('I should select few countries check box on the Import Country Transaction Filter dropdown on the Filter input section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterImportCountryFilterDropdownButton);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterScreenImportCountryFilterCHINACheckBox);
        console.log("The china country is selected form import country filter on filter screen");
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterScreenImportCountryFilterINDIACheckBox);
        console.log("The india country is selected form import country filter on filter screen");
    });
});
Then('I should verify if the selected countries are visible for the Import Country Transaction Filter option on the Cahrge code Card Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var ChinaOnModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCImportCountryFilterCHINAOnCardModal);
        yield expect(ChinaOnModal).equals(true);
        console.log("The Import country selection  as China  is verified on the Card Modal");
        var IndiaOnModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCImportCountryFilterINDIAOnCardModal);
        yield expect(IndiaOnModal).equals(true);
        console.log("The IMPORT country selection  as India  is verified on the Card Modal");
    });
});
//verifying EXPORT country via filter functionality  on modal
Then('I should select few countries check box on the Export Country Transaction Filter dropdown on the Filter input section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterExportCountryFilterDropdownButton);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFilterScreenExportCountryFilterUNITEDSTATESCheckBox);
        console.log("The country United States is selected form import country filter on filter screen");
    });
});
Then('I should verify if the selected countries are visible for the Export Country Transaction Filter option on the Charge code Card Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var UnitedStatesOnModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCImportCountryFilterUnitedStatesOnCardModal);
        yield expect(UnitedStatesOnModal).equals(true);
        console.log("The EXPORT country selection  as UNITED STATES  is verified on the Card Modal");
    });
});
Then('I should archive the E2E Test Category', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoriesPageE2ETestingCategorycardEditButton);
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditCategoryPageArchiveButton);
        console.log("The archive button is clicked successfully");
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditConfirmationModalOKButton);
        console.log("The OK button on the archive confirmation alert is clicked successfully");
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditCategoryScreenSaveButton);
        console.log("The Save button on the Edit Category screen is clicked successfully");
    });
});
Then('I Should select the Last Category from category drop down menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var lastCategoryofDropdown = yield hooks_1.page.getAttributeValue(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddaGlobalCCScreenLastCategoryDropdownitem, "value");
        console.log("The value of the last drop down is " + lastCategoryofDropdown);
        yield hooks_1.page.selectFromDropDownValue(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCCategorydropdownButton, lastCategoryofDropdown);
    });
});
Then('I should click on the E2E TEST automation Category in Accordion view', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.globalAddCCForE2ETestCategoryAccordion);
        console.log("The E2E GLOBAL Test Automation Category in accordion view is clicked");
    });
});
Then('I should verify the title of the updated global charge code is not matching to the orignal Global charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCDescription;
        // console.log("The expected Name and Description of GlobalCC is = " + CCNameandDecription);
        var GlobalCCActualModalHeader = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
        yield expect(GlobalCCActualModalHeader).contains(TestGlobalCCRandomName);
        yield expect(GlobalCCActualModalHeader).contains(TestGlobalCCDescription);
        console.log("The name and the description of the Global charge code is not matching the header on the pop up modal implying the charge code is updated");
    });
});
// E2EFLITERS VERIFICATION
Then('I should verify if the Import Country Filters selected are reflecting on the E2E Charge code Card pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var ChinaOnModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCImportCountryFilterCHINAOnCardModal);
        yield expect(ChinaOnModal).equals(true);
        console.log("The Import country selection  as China  is verified on the Card Modal");
        var IndiaOnModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCImportCountryFilterINDIAOnCardModal);
        yield expect(IndiaOnModal).equals(true);
        console.log("The IMPORT country selection  as India  is verified on the Card Modal");
    });
});
Then('I should verify if the Export Country Filters selected are reflecting on the E2E Charge code Card pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var UnitedStatesOnModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCImportCountryFilterUnitedStatesOnCardModal);
        yield expect(UnitedStatesOnModal).equals(true);
        console.log("The EXPORT country selection  as UNITED STATES  is verified on the Card Modal");
    });
});
Then('I should verify if the Revenue-Expense Fliters selected are reflecting on the E2E Charge code Card Card pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var revenueONModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCRevenueExpenseRevenueMandatoryTextonModalXpath);
        yield expect(revenueONModal).equals(true);
        console.log("The revenue mandatory selection is verified on the Card Modal");
        var expenseONModal = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCRevenueExpenseExpenseMandatoryTextonModalXpath);
        yield expect(expenseONModal).equals(true);
        console.log("The Expense mandatory selection is verified on the Card Modal");
    });
});
// E2E ARCHIVE
Then('I should click on the E2E Archive test automation Category in Accordion view', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCArchiveE2ECategoryAccordion);
        console.log("The E2E Archive Test Automation Category in accordion view is clicked");
    });
});
Then('I should archive the E2E Archive Test automation Category', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.GlobalCCArchiveE2ECategoryCardEditButton);
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditCategoryPageArchiveButton);
        console.log("The archive button is clicked successfully");
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditConfirmationModalOKButton);
        console.log("The OK button on the archive confirmation alert is clicked successfully");
        yield hooks_1.page.clickElementUsingXpath(categoryDisplayScreen_1.categoryDisplayScreen.categoryEditCategoryScreenSaveButton);
        console.log("The Save button on the Edit Category screen is clicked successfully");
    });
});
Then('I should Archive the E2E Global Charge Code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.pageRefresh();
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(homePage_1.homePage.hamburgerMenuButton);
        yield hooks_1.page.clickElement(homePage_1.homePage.chargeCodeButton);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(homePage_1.homePage.globalHomeButton);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCArchiveE2ECategoryAccordion);
        yield hooks_1.page.clearElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCLastCardEditIcon);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCChargeCodeArchiveButtonIcon);
        var GlobalChargeCodeCArchiveModalText = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCArchiveModalText);
        yield expect(GlobalChargeCodeCArchiveModalText).equals("Click Ok to proceed with archiving this Global Charge Code?");
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCArchiveModalOKButton);
        yield hooks_1.page.clearElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);
    });
});
Then('I should not be able to access the E2E Archive test automation Category in Accordion view', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var E2EArchiveCategoryvisibility = yield hooks_1.page.isElementVisibleByXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCArchiveE2ECategoryAccordion);
        yield expect(E2EArchiveCategoryvisibility).equals(false);
        console.log("The e2e global charge code has been archived");
    });
});
// Then ('I should delete the test automation category', async function () { 
//   await page.clickElementUsingXpath()
// });
