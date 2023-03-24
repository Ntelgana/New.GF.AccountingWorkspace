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
const addaCategoryChargeCodeScreen_1 = require("../pages/addaCategoryChargeCodeScreen");
const GlobalChargeCodedisplayScreen_1 = require("../pages/GlobalChargeCodedisplayScreen");
const CountryChargeCodedisplayScreen_1 = require("../pages/CountryChargeCodedisplayScreen");
const hooks_1 = require("../support/hooks");
const { Given, When, Then } = require("@cucumber/cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var CountryTestChargeCodeName;
var TestGlobalCCDescription;
var TestGlobalCCRandomName;
var TestGlobalCCOverriddenDescription;
var OverriddenDefaultUnitAmount;
var OverriddenDefaultUnitType;
var UpdatedDefaultUnitAmount;
var UpdatedDefaultUnitType;
When('I click on the Country link on home page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3);
        console.log("I click on the Country Charge code button on Home page");
        yield hooks_1.page.clickElement(homePage_1.homePage.countryHomeButton);
    });
});
Then('I should see the Country Charge code display screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see the Conutry Charge code display screen");
        const isCountryCCHeadertext = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCDisplayScreenTitle);
        yield expect(isCountryCCHeadertext).equals("Country Charge Codes");
        console.log("The title of the country cc display screen is = " + isCountryCCHeadertext);
    });
});
Then('I should see the add, filter and override icons on Country Display Screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see the add, filter and override icons on Country Display Screen");
        const isaddNewCountryCCIconisVisible = yield hooks_1.page.isElementVisible(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryPageAddIconCss);
        const isFilterCountryCCIconisVisible = yield hooks_1.page.isElementVisible(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryFilterIconCss);
        const isOverrideCountryCCIconisVisible = yield hooks_1.page.isElementVisible(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryPageOverrideIconCss);
        if (isaddNewCountryCCIconisVisible && isFilterCountryCCIconisVisible && isOverrideCountryCCIconisVisible) {
            console.log("The add, filter and override icons on Country Display Screen are visible");
        }
        else {
            console.log("One of the add, filter and override icons on Country Display Screen are NOT visible");
            yield expect(true).equals(false);
        }
    });
});
When("I hover the mouse on add icon on Country Charge code display Screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I hover the mouse on add icon");
        yield hooks_1.page.hoverElement(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryPageAddIconCss);
    });
});
When("I hover the mouse on the filter icon on Country Charge code display Screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I hover the mouse on the filter icon on Country Page");
        yield hooks_1.page.waitForFewSeconds(30);
        yield hooks_1.page.hoverElement(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryFilterIconCss);
    });
});
When("I hover the mouse on the Override icon on Country Charge code display Screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I hover the mouse on the Override icon on Country Page");
        yield hooks_1.page.waitForFewSeconds(30);
        yield hooks_1.page.hoverElement(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryPageOverrideIconCss);
    });
});
Then('I should see the country icons tooltip text {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        let isIcontooltiptext = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryPageIconsToolTipText);
        yield console.log("The expected text from icon tool tip is " + text);
        yield console.log("The actual text from icon tool tip is " + isIcontooltiptext);
        yield expect(isIcontooltiptext).equals(text);
    });
});
Then("I should see an accordian view of all the Countries linked to Country charge codes in accordion view", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3);
        var accordionCountriesList = yield hooks_1.page.getAllTextContent(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCountryAccordionView);
        var flag = false;
        yield console.log("The total Countries list in accordion view are " +
            accordionCountriesList.length);
        if (accordionCountriesList.length >= 1) {
            flag = true;
        }
        yield expect(flag).equals(true);
    });
});
// country code accordion view 
When("I click on any Country in the accordian view", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCDisplayScreenFirstAccordion);
        yield console.log("First Country in accordion view is clicked");
    });
});
Then("I should see an expanded view of all the charge codes linked to that country in card format", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CountryChargeCodelistlinkedtoFirstCountry = yield hooks_1.page.getAllTextContent(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCChargeCodeCardBody);
        yield console.log("The number of charge codes in first country accordion are  " +
            CountryChargeCodelistlinkedtoFirstCountry.length);
        var flag = false;
        if (CountryChargeCodelistlinkedtoFirstCountry.length >= 1) {
            flag = true;
        }
        yield expect(flag).equals(true);
    });
});
When("I click on the Country expanded view again", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCDisplayScreenFirstAccordion);
    });
});
Then("The expanded country view should collapse back to accordion view", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CountryChargeCodelistlinkedtoFirstCountry = yield hooks_1.page.getAllTextContent(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCChargeCodeCardBody);
        yield console.log("The number of charge codes in after closing accordion are  " +
            CountryChargeCodelistlinkedtoFirstCountry.length);
        var flag = false;
        if (CountryChargeCodelistlinkedtoFirstCountry.length === 0) {
            flag = true;
        }
        yield expect(flag).equals(true);
    });
});
//   tc054:create  a country charge code
When('I click on Add icon on Country Charge Codes screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElement(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryPageAddIconCss);
        console.log("The Add a country charge code icon ibutton is clicked");
    });
});
Then('I should be on the Add New Country Charge Code display screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        {
            var addCountryCCTitle = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryCCaPageTitle);
            console.log("The title of the add Country charge code page is  " + addCountryCCTitle);
            yield expect(addCountryCCTitle).equals("Add New Country Charge Code");
        }
    });
});
Then('I should click the desired country {string} from the Country Placeholder', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath((CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeCountryPlaceholder));
        yield hooks_1.page.clickElementUsingXpath((CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeCountryDynamicInput).replace("{0}", text));
        console.log("The country China is selected for country charge code test automation ");
    });
});
Then("I should enter the name and description of the new Country charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        CountryTestChargeCodeName = "TestCouCC - Test Country Charge code";
        yield hooks_1.page.sendElementText(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeNametextbox, "TestCouCC");
        yield hooks_1.page.sendElementText(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDescriptiontextbox, "Test Country Charge code");
    });
});
Then("I should select the Default Unit Type as {string}", function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        OverriddenDefaultUnitType = text;
        const temp = ((CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeDropdownValue).replace("{0}", text));
        if (text === "F - Flat Rate") {
            yield hooks_1.page.selectValueFromDropDown(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeDropdown, "a22e3d9a-8430-49af-a364-9dc8c2650294");
        }
        else {
            // console.log("The value of temp is " + temp);
            //  var defaultunitvalue = await page.getAttributeValue(temp, "value");
            //  console.log("The value of overrideen default unit type is  " + defaultunitvalue);
            yield hooks_1.page.selectValueFromDropDown(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeDropdown, "3f364b32-06b0-4abd-a668-c93588e8aa95");
        }
    });
});
Then("I should enter the Default unit amount as {string}", function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clearElement(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox);
        OverriddenDefaultUnitAmount = text;
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox, text);
    });
});
Then('I should verify the success message for new Country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Global charge code created Success message recieved");
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        console.log("alert message is : " + successConfirmationMessageText);
        yield expect(successConfirmationMessageText).equal("Successfully created charge code");
        console.log("New Global charge code Success message verified");
    });
});
Then('I should be verify the newly created Country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeAccordionForChina);
        var CountryTestChargeCodeText = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeTestCodeCard);
        console.log("The name and description of the test Global charge code is " +
            CountryTestChargeCodeText);
        yield expect(CountryTestChargeCodeText).equals(CountryTestChargeCodeName);
    });
});
//  tc057:transaction config button
Then('I should click on the Test automation Country {string} in Accordion view', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const temp = ((CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeAccordionDynamic).replace("{0}", text));
        yield hooks_1.page.clickElementUsingXpath(temp);
        console.log("THIS IS ERROR STEP");
    });
});
Then('I should click on edit icon button on the newly created country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeLastCardEditIcon);
        console.log("The edit icon on the newly created country charge code is clicked ");
    });
});
Then('I should verify if the checkboxes are checked for the transaction config option of Country charge code', function () {
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
Then('I should verify the title of the Modal is matching to the New test Country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCNameandDecription = CountryTestChargeCodeName;
        console.log("The expected Name and Description of CountryCC is = " + CCNameandDecription);
        var GlobalCCActualModalHeader = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
        yield expect(CCNameandDecription).equals(GlobalCCActualModalHeader);
        console.log("The name and the description of the Country charge code is matching the header on the pop up modal ");
    });
});
Then('I should verify of the default unit type selected is matching the info on the carge code card Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var defaultUnitypeactual = yield hooks_1.page.getAttributeValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeOnModalCSS, "value");
        console.log("Text from default ", defaultUnitypeactual);
        yield expect(defaultUnitypeactual).equals("F - Flat Rate");
    });
});
Then('I should be on the Edit Country Charge code Screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var editscreenTitle = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeEditSCreenTitle);
        console.log("The actual value on the edit screen title is : " + editscreenTitle);
        yield expect(editscreenTitle).equals("Edit Country Charge Code");
    });
});
When('I click on the cancel button on Edit Country Charge code screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCEditScreenCancelButton);
    });
});
When('I click on the Filter icon on the country charge code display screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElement(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCFilterIconCSS);
        console.log("The filter icon on the country charge code screen is clicked");
    });
});
Then('I should get the label {string} near the filter drop downs', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        var filterbarlabelText = yield hooks_1.page.getAttributeValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCFilterlabelCSS, "placeholder");
        console.log("The actual value of the filter bar label is : " + filterbarlabelText);
        console.log("The  expected of the filter bar label is : " + text);
        yield expect(filterbarlabelText).equals(text);
    });
});
Then('I should enter the text {string} in the Filter text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.sendElementText(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCFilterlabelCSS, text);
        yield hooks_1.page.waitForFewSeconds(2000);
    });
});
Then('I should open the first accordion and validate the text on the first filtered Country Charge code card with name as {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCFirstCategoryAccordion);
        var filteredfirstcardtext = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCChargeCodeFirstCardText);
        if (filteredfirstcardtext.includes(text)) {
            yield expect(true).equals(true);
        }
        else {
            yield expect(false).equals(true);
        }
    });
});
// to create a global charge code to be overridden for country charge code
Then('I should enter the test name and description for the new Global charge code to override country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see description and purpose text boxes for the new charge code");
        var randomGlobalChargeCodeName = "Test" + Math.floor(Math.random() * 2000);
        console.log("random Global override Charge Code name = " + randomGlobalChargeCodeName);
        TestGlobalCCRandomName = randomGlobalChargeCodeName;
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, randomGlobalChargeCodeName);
        var randomGlobalChargeCodeDescription = "TestGlobalCCDesc" + Math.floor(Math.random() * 2000);
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, randomGlobalChargeCodeDescription);
        TestGlobalCCDescription = randomGlobalChargeCodeDescription;
    });
});
Then('I should verify the title of the Modal is matching to the New Global charge code for override', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCNameandDecription = TestGlobalCCRandomName + " - " + TestGlobalCCDescription;
        console.log("The expected Name and Description of GlobalCC is = " + CCNameandDecription);
        var OverrideGlobalCCActualModalHeader = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + OverrideGlobalCCActualModalHeader);
        yield expect(CCNameandDecription).equals(OverrideGlobalCCActualModalHeader);
        console.log("The name and the description of the Global charge code  created for overriding is matching the header on the pop up modal ");
    });
});
// override button country charge code
When('I click on the override button on the Country Charge code display screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clickElement(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryPageOverrideIconCss);
        console.log("The Override button on country charge code screen is clicked");
        yield hooks_1.page.waitForFewSeconds(2000);
    });
});
// verify override screen title 
Then('I should be on the Override Global Charge Code screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var Overridescreentitle = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideScreenTitle);
        yield expect(Overridescreentitle).equals("Override Global Charge Code");
        console.log("The title of the overrdie screen is verified");
    });
});
// overriding the global charge code
Then('I should select the Newly created Global charge Code from the global drop dox text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var lastGlobalCCofDropdown = yield hooks_1.page.getAttributeValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideScreenLastGlobalCCDropdownitem, "value");
        console.log("The value of the last global charge code from drop down is " + lastGlobalCCofDropdown);
        yield hooks_1.page.selectFromDropDownValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideScreengGlobalCCdropdownButton, lastGlobalCCofDropdown);
    });
});
Then('I should select the Country China from the country dropdox text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideScreenCountryinputplaceholder);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideScreenCountryinputvalueChina);
        console.log("The country china is selected as the country linked to overridden charge code");
    });
});
// greyed out CC name text box
Then('I should not be able to change the Name of the charge code in the Name textbox', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideScreenCountryinputvalueChina).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Charge code name text box on the override screen is disabled");
    });
});
Then("I should provide a new description for the overridden Charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, "Overridden Description");
        TestGlobalCCOverriddenDescription = "Overridden Description";
    });
});
Then('I should verify the transaction config toggle buttons are disabled while overriding country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideTaxToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Tax toggle on the transaction config is disabled");
        hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverridePassthroughToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Passthrough toggle on the transaction config is disabled");
        hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideDutyNettingToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Duty Netting toggle on the transaction config is disabled");
        hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideProformaToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Proforma toggle on the transaction config is disabled");
    });
});
Then('I should verify if all the the transaction filters section toggle buttons are disabled while overriding country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCAddTransactionFilterTransactionTypeAccordion);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCAirshipmentToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Air shipment toggle on the transaction config is disabled");
        yield hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOceanshipmentToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Ocean shipment toggle on the transaction config is disabled");
        yield hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCServiceFinOnlyshipmentToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Service Fin only toggle on the transaction config is disabled");
        yield hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCCustomFinOnlyshipmentToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Custome Fin Only toggle on the transaction config is disabled");
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCAddTransactionFilterRevenueExpenseAccordion);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCRevenueMandatoryFilterToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Revenue mandatory toggle on the transaction config is disabled");
        yield hooks_1.page.ElementDisabledorNot(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCExpenseMandatoryToggle).then(value => { expect(value).equals(true); }).catch(err => { console.log(err); });
        console.log("The Expense Mandatory shipment toggle on the transaction config is disabled");
    });
});
Then('I should verify the description of the overridden charge code on the pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCNameandDecription = TestGlobalCCRandomName + " - " + TestGlobalCCOverriddenDescription;
        console.log("The expected Name and Description of overridden Charge Code is = " + CCNameandDecription);
        var OverriddenCCActualModalHeader = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + OverriddenCCActualModalHeader);
        yield expect(CCNameandDecription).equals(OverriddenCCActualModalHeader);
        console.log("The name and the description of the overridden charge code has been updated");
    });
});
Then('I should verify whether a country is linked to the overridden charge code on the pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var OverriddenCardModalCoUntryText = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalCountryinfo);
        yield expect(OverriddenCardModalCoUntryText).equals("China");
    });
});
Then('I should verify the default unit type and default unit amount on the overridden charge code on the pop up modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var overridencarddefaultunittypetext = yield hooks_1.page.getAttributeValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitTypeCSS, "value");
        var overridencarddefaultunitamounttext = yield hooks_1.page.getAttributeValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitAmountCSS, "value");
        yield expect(overridencarddefaultunittypetext).equals(OverriddenDefaultUnitType);
        yield expect(overridencarddefaultunitamounttext).equals(OverriddenDefaultUnitAmount);
    });
});
//  archiving the country charge code
When("I click on the edit button on the newly created Country charge code card", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCEditiconLastChargeCode);
        console.log("The last charge code edit icon is clicked ");
    });
});
Then("I should be on the Country charge code edit screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var actualEditScreenTitle = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCEditscreenTitle);
        console.log("The actual title of the edit screen is " + actualEditScreenTitle);
        yield expect(actualEditScreenTitle).equals("Edit Country Charge Code");
    });
});
Then("I should click on archive icon button on the edit screen", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCEditScreenArchiveButton);
        console.log("The archive button on the country charge code edit screen is clicked ");
    });
});
Then("I should verify the text on the archive alert pop up", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var ActualArchiveAlertOPOPupText = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.ConutryCCArchivePOPuPText);
        console.log("The actual text on the archive pop up is " + ActualArchiveAlertOPOPupText);
        var expectedPOUPText = "On 'Save' this Charge Code will be archived and will not be active. Click OK to Continue";
        yield expect(ActualArchiveAlertOPOPupText).equals(expectedPOUPText);
    });
});
Then("I should click the OK button on the alert pop up", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCArchiveAlertOKButton);
        console.log("The OK button on the archive pop up alert is clicked");
    });
});
Then("I should verify the charge code archive success message", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCArchiveCCSuccessMessage);
        console.log("alert message is : " + successConfirmationMessageText);
        yield expect(successConfirmationMessageText).equal("Charge code has been archived");
        console.log("Country charge code archived message verified");
    });
});
Then("I should verify that the user is not be able to access the archived charge code again", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CountryTestChargeCodeText = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeTestCodeCard);
        console.log("The name and description of the test Global charge code is " +
            CountryTestChargeCodeText);
        if (CountryTestChargeCodeText.includes(TestGlobalCCRandomName)) {
            yield expect(true).equals(false);
            console.log("The country charge code is archived successfully");
        }
        else {
            yield expect(true).equals(true);
            console.log("The country charge code was not archived test case failed ");
        }
    });
});
Then("I should Archive the Country Charge Code from {string}", function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.pageRefresh();
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(homePage_1.homePage.hamburgerMenuButton);
        yield hooks_1.page.clickElement(homePage_1.homePage.chargeCodeButton);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(homePage_1.homePage.countryHomeButton);
        const isCountryCCHeadertext = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCDisplayScreenTitle);
        yield expect(isCountryCCHeadertext).equals("Country Charge Codes");
        console.log("The title of the country cc display screen is = " + isCountryCCHeadertext);
        const temp = ((CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryAddCountryChargeCodeAccordionDynamic).replace("{0}", text));
        yield hooks_1.page.clickElementUsingXpath(temp);
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCEditiconLastChargeCode);
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCEditScreenArchiveButton);
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCArchiveAlertOKButton);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCArchiveCCSuccessMessage);
        yield expect(successConfirmationMessageText).equal("Charge code has been archived");
    });
});
// E2E 
Then("I should enter the test name and description for the new Country charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("I should see description and purpose text boxes for the new charge code");
        var randomGlobalChargeCodeName = "Test" + Math.floor(Math.random() * 2000);
        console.log("random e2e Country Charge Code name = " + randomGlobalChargeCodeName);
        TestGlobalCCRandomName = randomGlobalChargeCodeName;
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, randomGlobalChargeCodeName);
        var randomGlobalChargeCodeDescription = "TestGlobalCCDesc" + Math.floor(Math.random() * 2000);
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, randomGlobalChargeCodeDescription);
        TestGlobalCCDescription = randomGlobalChargeCodeDescription;
        console.log("The value of CC random name = " + TestGlobalCCRandomName);
        console.log("The value of CC random description = " + TestGlobalCCDescription);
    });
});
Then("I should verify the title of the Modal is matching to the Newly created E2E Country charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("The value of CC random name 1 = " + TestGlobalCCRandomName);
        console.log("The value of CC random description 1 = " + TestGlobalCCDescription);
        var CCNameandDecription = TestGlobalCCRandomName + " - " + TestGlobalCCDescription;
        console.log("The expected Name and Description of CountryCC is = " + CCNameandDecription);
        var GlobalCCActualModalHeader = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
        yield expect(CCNameandDecription).equals(GlobalCCActualModalHeader);
        console.log("The name and the description of the Country charge code is matching the header on the E2E pop up modal ");
    });
});
Then("I should update the test name and description of the newly created E2E charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        console.log("The name and description text boxes are cleared");
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, "Up");
        TestGlobalCCOverriddenDescription = "Up";
        yield hooks_1.page.sendElementText(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, "Update Description");
        TestGlobalCCOverriddenDescription = "Update Description";
    });
});
Then('I should verify the update success message for new Country charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Country charge code updated Success message recieved");
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(addaCategoryChargeCodeScreen_1.addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
        console.log("alert message is : " + successConfirmationMessageText);
        yield expect(successConfirmationMessageText).equal("Successfully updated charge code");
        console.log("New Global charge code update successful message verified");
    });
});
Then("I should verify the new information on the updated Country charge code", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var ActualUpdatedCountryChargeCodeHeader = yield hooks_1.page.getTextFromXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + ActualUpdatedCountryChargeCodeHeader);
        const temparray = ActualUpdatedCountryChargeCodeHeader.split("-");
        yield expect(temparray[0].includes("Up"));
        yield expect(temparray[1].includes("Update Description"));
        console.log("The country charge code name and description is updated");
    });
});
Then("I should verify the default unit type and default unit amount on the updated charge code on the pop up modal", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var Updatedcarddefaultunittypetext = yield hooks_1.page.getAttributeValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitTypeCSS, "value");
        var Updatedcarddefaultunitamounttext = yield hooks_1.page.getAttributeValue(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitAmountCSS, "value");
        yield expect(Updatedcarddefaultunittypetext).equals(OverriddenDefaultUnitType);
        yield expect(Updatedcarddefaultunitamounttext).equals(OverriddenDefaultUnitAmount);
    });
});
// var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCOverriddenDescription;
Then("I should click on the edit button on the overridden charge code modal", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryChargeCodeModalEditButtonXpath);
        console.log("The edit button on the country charge code modal is clicked");
    });
});
Then("I should click on archive button on the edit screen and click on OK on the pop up alert", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCEditScreenArchiveButton);
        yield hooks_1.page.clickElementUsingXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCArchiveAlertOKButton);
        yield hooks_1.page.clickElementUsingXpath(GlobalChargeCodedisplayScreen_1.globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);
    });
});
Then("I should click on save icon button and verify the archive success message", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var successConfirmationMessageText = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCArchiveCCSuccessMessage);
        yield expect(successConfirmationMessageText).equal("Charge code has been archived");
    });
});
Then("verify if the overridden charge code is archived", function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCNameandDecription = TestGlobalCCRandomName + " - " + TestGlobalCCOverriddenDescription;
        console.log("The expected Name and Description of overridden Charge Code is = " + CCNameandDecription);
        var OverriddenCCActualModalHeader = yield hooks_1.page.getTextFromXpath(CountryChargeCodedisplayScreen_1.countryChargeCodedisplayScreen.CountryCCCardClickModalHeader);
        console.log("The actual text on the modal Header is = " + OverriddenCCActualModalHeader);
        if (CCNameandDecription === OverriddenCCActualModalHeader) {
            console.log("The Charge code is not archived ");
            yield expect(true).equals(false);
        }
        else {
            console.log("The Charge code is Archived ");
            yield expect(true).equals(true);
        }
    });
});
