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
const ShipmentFinancialEditorLandingPage_1 = require("../pages/ShipmentFinancialEditorLandingPage");
const data_1 = require("../data/data");
const hooks_1 = require("../support/hooks");
const ShipmentFinSummaryHomepage_1 = require("../pages/ShipmentFinSummaryHomepage");
const { Given, When, Then } = require("@cucumber/cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let Firstbranchnumber;
let Flag = false;
let customercodetext;
let initialPartiesCount;
let GlobalexpectedCharge;
let revenuepartyVisible = false;
let expensePartyVisible = false;
let firstTotalChargenoninvoiced;
let availbaleCreditAmount;
let estimatedChargeEntered;
let totalchargechargecode;
let totalChargevalue;
let TotalSumofAllChargeCodes;
Given("I am on the shipment Financial editor page for ocean shipment", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3000);
        // await this.page.waitForTimeout(5000);
        yield hooks_1.page.sendElementText(ShipmentFinancialEditorLandingPage_1.ShipmentFinEditorLandingPage.usernameTextBox, "telgnav@chrobinson.com");
        // await this.page.type(landingPage.usernameTextBox, "telgnav@chrobinson.com", {delay: 100});
        yield hooks_1.page.sendElementText(ShipmentFinancialEditorLandingPage_1.ShipmentFinEditorLandingPage.passwordTextBox, "Newcastle@123456");
        yield hooks_1.page.clickElement(ShipmentFinancialEditorLandingPage_1.ShipmentFinEditorLandingPage.signinButton);
        //await this.page.screenshot({path:'testfailed.png'});
        console.log("Shipment Financial Editor landing page login successfully");
        // console.log("I am on ocean shipment Financial Editor landing page");
        // const url =
        //   ShipmentFinEditorLandingPage.url +
        //   shipmentNumbers["Shipment_number_Air_SFO"] +
        //   "/financialsummary/branchdetails";
        // console.log(url);
    });
});
Then("I Verify the Title of the landing page as {string}", function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3000);
        const title = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummaryHomeTitle);
        yield expect(title).equals(text);
        console.log("Title  of the Shipment Summary page is verified");
    });
});
Then("I verify if the Shipment number is  displayed on the right corner of the Shipment Fin Summary landing page", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const Shipmentnumber = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentNumberDisplay);
        const expectedShipmentNumber = "Shipment Number - " + data_1.shipmentNumbers.Shipment_number_Air_SFO;
        yield expect(Shipmentnumber).equals(expectedShipmentNumber);
        console.log("Shipment number displayed is verified on the home page ");
    });
});
Then('I verify if the Shipment Financial summary landing page has the tab {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        if (text === "Branch") {
            const Branchtabstatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypageBranchtab);
            yield expect(Branchtabstatus).equals(true);
            console.log("The branch tab is visible on Shipment Summary page");
        }
        else if (text === "Branch Role") {
            const BranchRoletabstatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypageBranchRoletab);
            yield expect(BranchRoletabstatus).equals(true);
            console.log("The branch role tab is visible on Shipment Summary page");
        }
        else if (text === "Revenue/Expense Party") {
            const RevExpensetabstatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypageBranchRoletab);
            yield expect(RevExpensetabstatus).equals(true);
            console.log("The Revenue/Expense Party is visible on Shipment Summary page");
        }
        else if (text === "Party Role") {
            const PartyRoletabstatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypagePartyRoletab);
            yield expect(PartyRoletabstatus).equals(true);
            console.log("The Party Role tab is visible on Shipment Summary page");
        }
        else if (text === "Currency") {
            const currencytabstatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypageCurrencytab);
            yield expect(currencytabstatus).equals(true);
            console.log("The Currency tab is visible on Shipment Summary page");
        }
        else if (text === "Total Amount") {
            const TotalAmounttabstatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypageTotalAmounttab);
            yield expect(TotalAmounttabstatus).equals(true);
            console.log("The Total Amount tab is visible on Shipment Summary page");
        }
        else {
            console.log("Implementation for this step not Found");
            yield expect(false).equals(true);
        }
    });
});
Then("I verify if the Shipment Financial summary landing page has Export to Excel button", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const ExporttoExcelButtonStatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypageExportToExcelButton);
        yield expect(ExporttoExcelButtonStatus).equals(true);
        console.log("The Export to excel button is visible on Shipment Summary page");
    });
});
Then("I verify if the Shipment Financial summary landing page has Close button", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const CloseButtonStatus = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinSummarypageExportToExcelButton);
        yield expect(CloseButtonStatus).equals(true);
        console.log("The Close button is visible on Shipment Summary page");
    });
});
Then('I verify if the value for the tab {string} should not be empty', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const landingpagepartyname = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinaSummartLandingpageRevenueexpensepartyvalue);
        let flag = true;
        if (landingpagepartyname === "") {
            flag = false;
        }
        yield expect(flag).equal(true);
        console.log("The revenue expense party name for the shipment is " + landingpagepartyname);
    });
});
Then('Verify if the Shipment financial summary landing page has a hamburger menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const HamburgerMenuButton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinlandingpageHamburgerMenuxpath);
        yield expect(HamburgerMenuButton).equal(true);
        console.log("Hamburger menu is present on the landing page");
    });
});
Then('I click on the hamburger menu on the landing page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.waitUntilPageLoad();
        yield hooks_1.page.waitForFewSeconds(3000);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipmentFinlandingpageHamburgerMenuxpath);
        // await page.clickElement(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);
        // await page.clickElement(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);
        // await page.clickElement(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);
        console.log("Hamburger menu is clicked");
    });
});
Then('Verify if the Profitability option is availble upon clicking the hamburger menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const ProfitabilityButton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinlanpageProfitabilityButtonDropdown);
        yield expect(ProfitabilityButton).equals(true);
        console.log("Profitability button is present on the hamburger menu option");
    });
});
Then('Verify if the Charge code entry option is available upon clicking the hamburger menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const ChargeCodeEntryButton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinlanpageChargeCodeEntryButtonoption);
        yield expect(ChargeCodeEntryButton).equals(true);
        console.log("Charge Code Entry button is present on the hamburger menu option");
    });
});
Then('verify if the Branch view option is present in the dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const Branchviewoption = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinLandingBranchView);
        yield expect(Branchviewoption).equals(true);
        console.log("Branch View option button is present on the Profitability dropdown");
    });
});
Then('verify if the Charge code view option is present in the dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const ChargeCodeView = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinlanpageChargeCodeEntryButtonoption);
        yield expect(ChargeCodeView).equals(true);
        console.log("Charge Code View option button is present on the Profitability dropdown");
    });
});
Then('I Verify if the Add Branch Accounting option is present in the Charge Code entry menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const AddNewFinancialsOption = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinLandAddNewFinancialsButton);
        yield expect(AddNewFinancialsOption).equals(true);
        console.log("Add new Financials option is present on the Charge Code entry menu");
    });
});
// us-748256
Then('I verify the branch for Charge code entry exits or not', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const branchdetailtext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchCode);
        if (branchdetailtext === 'Add Branch Accounting') {
            Flag = true;
        }
    });
});
Then('I verify the branch {string} for charge code entry exists or not', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorAvailableLISTEDBranchCodes).replace("{0}", text));
        const usBranchVisibility = yield hooks_1.page.isElementVisibleByXpath(temp);
        if (usBranchVisibility === true) {
            Flag = true;
        }
        else {
            Flag = false;
        }
    });
});
Then('If Charge code entry exists ignore else add new branch financials for the shipment', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //   await page.waitForFewSeconds(3000);        
        //   await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchChargeCodeUI);
        //   console.log("The add new financials is clicked on the menu ");
        //   const branchdetailtext = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchChargeCodeUI) 
        //   Firstbranchnumber = branchdetailtext.split('-')[0].trim();
        //   console.log("The first branch number on the shipment is " + Firstbranchnumber );
        //   if (Flag===true) {
        //     await page.waitForFewSeconds(3000);
        // await page.sendElementText(ShipmentFinSummaryHome.AddNewBranchFinancialsPlaceholderCSS,'9850');
        // await page.waitForFewSeconds(1000);
        //  await page.clickElementUsingXpath(ShipmentFinSummaryHome.ShipFinEditorFirstBranchindropdowninAddBranchFinancial);
        //  await page.clickElementUsingXpath(ShipmentFinSummaryHome.ShipFinEditorAddBranchFinancialsButton);
        // }
        if (Flag === true) {
            const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorAvailableLISTEDBranchCodes).replace("{0}", "9850"));
            console.log("Before click ");
            yield hooks_1.page.clickElementUsingXpathNew(temp);
            console.log("after click ");
        }
        else {
            //  await page.waitForFewSeconds(3000);   
            console.log("entered else consdition");
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorAddBranchAccountingMenuButton);
            console.log("The add Branch accounting button is clicked on the hambueger menu ");
            yield hooks_1.page.waitForFewSeconds(1000);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.AddNewBranchFinancialsPlaceholderCSS, '9850');
            yield hooks_1.page.waitForFewSeconds(1000);
            console.log("9850 entered");
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorFirstBranchindropdowninAddBranchFinancial);
            console.log("9850 selected");
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorAddBranchFinancialsButton);
            console.log("add accointing branch cliecked");
        }
    });
});
When('I click on any of the branch on the Charge code entry option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const branchdetailtext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchCode);
        Firstbranchnumber = branchdetailtext.split('-')[0].trim();
        console.log("The first branch number on the shipment is " + Firstbranchnumber);
        yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchChargeCodeUI);
        console.log("The First vaiable branch is clicked on the Charge code entry UI section on hamburger menu");
    });
});
Then('I land on the Charge code entry UI', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const Heading = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorChargeCodeEntryHeader);
        yield expect(Heading).equals("Charge Code Entry");
        console.log("The user is on the Charge Code Entry UI page");
    });
});
Then('I verify the Shipment and Branch number needs to be displayed and Stacked to the Top right of the Charge code UI', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const CurrentShipmentNumber = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorShipmentnumberonChargeCodeEntryUI);
        const CurrentBranchNumber = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipFinEditorBranchnumberonChargeCodeEntryUI);
        console.log("the current branch is " + CurrentBranchNumber);
        yield expect(CurrentShipmentNumber).equals(data_1.shipmentNumbers.Shipment_number_Air_SFO);
        console.log("The Shipment number on the Charge code UI is same as the Shipment number used on landing page");
        if (Flag === true) {
            yield expect(CurrentBranchNumber).equals("9850");
            console.log("The branch number is verified on the charge code entry UI page");
        }
        else {
            yield expect(CurrentBranchNumber).equals(Firstbranchnumber);
            console.log("The branch number is verified on the charge code entry UI page");
        }
    });
});
// expand and collpas all parties 
Then('I verify if the  Collapse all Parties and Expand all Parties button is present on the footer of the charge code entry UI', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const collapsepartiesButton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CollpaseAllPartiesButtonxpath);
        const expandpartiesButton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath);
        yield expect(collapsepartiesButton).equals(true);
        console.log("The collapse all parties button is present on the UI ");
        yield expect(expandpartiesButton).equals(true);
        console.log("The expand all parties button is present on the UI ");
    });
});
Then('I verify if the parties are all collpased by default', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var accordionarrowstatus = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipfinEditAllPartyAccordionArrowCSS);
        console.log(accordionarrowstatus);
        console.log(accordionarrowstatus.length);
        var count = 1;
        for (var i of accordionarrowstatus) {
            var flag = i.includes('accordion-header-open');
            yield expect(flag).equals(false);
            console.log(`The accordion number ${count} is closed`);
            count = count + 1;
        }
    });
});
Then('I click on Expand all Parties button to verify if all the existing parties are expanding', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath);
        yield hooks_1.page.waitForFewSeconds(2000);
        var accordionarrowstatus = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipfinEditAllPartyAccordionArrowCSS);
        console.log(accordionarrowstatus);
        var count = 1;
        for (var i of accordionarrowstatus) {
            console.log(" the value of " + i);
            var flag = i.includes('accordion-header-open');
            console.log(`The accordion ${typeof (flag)} and ${flag}`);
            yield expect(flag).equals(true);
            console.log(`The accordion number ${count} is open`);
            count = count + 1;
        }
    });
});
Then('I click on Collapse all Parties to verify if all existing parties have collpased', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CollpaseAllPartiesButtonxpath);
        yield hooks_1.page.waitForFewSeconds(2000);
        var accordionarrowstatus = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ShipfinEditAllPartyAccordionArrowCSS);
        console.log(accordionarrowstatus);
        console.log(accordionarrowstatus.length);
        var count = 1;
        for (var i of accordionarrowstatus) {
            var flag = i.includes('accordion-header-open');
            yield expect(flag).equals(false);
            console.log(`The accordion number ${count} is closed`);
            count = count + 1;
        }
    });
});
Then('Verify if the revenue party {string} already exists', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPARTYTEXTBOX).replace("{0}", text));
        revenuepartyVisible = yield hooks_1.page.isElementVisibleByXpath(temp);
        customercodetext = text;
        console.log("The revenue party visible " + revenuepartyVisible);
    });
});
// error message customer credit not active 
Then('I click on the Add revenue party button on Charge code entry UI page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (revenuepartyVisible === false) {
            yield hooks_1.page.waitForFewSeconds(3000);
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.AddRevenuePartyButtonXpath);
            const revenuepartyBoxes = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyInputBoxesCSS);
            initialPartiesCount = revenuepartyBoxes.length;
            console.log("The Count of the parties in Charge code entry UI is " + initialPartiesCount);
        }
        else {
            console.log("A  customer party  (c code ) for Revenue already exists");
        }
    });
});
Then('I verify if the party input field with a arrow dropdown is displayed to the user', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (revenuepartyVisible === false) {
            const newEmptypartyRevenuebox = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntryRevenueNewPartytextbox);
            yield expect(newEmptypartyRevenuebox).equals(true);
            console.log("The new party text box is displayed to the user");
        }
    });
});
Then('I enter {string} and selecting the party from the dropdown', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        if (revenuepartyVisible === false) {
            yield hooks_1.page.sendElementTextUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntryRevenueNewPartytextbox, text);
            const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntrypartytextboxvalueSelectDropdown).replace("{0}", text));
            console.log("The xpath is" + temp);
            const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntrypartytextboxvalueINDROP).replace("{0}", text));
            customercodetext = yield hooks_1.page.getTextFromXpath(temp1);
            console.log("The current Customer code is " + customercodetext);
            yield hooks_1.page.clickElementUsingXpathNew(temp);
        }
    });
});
Then('I verify if the user is displayed with a Modal with the header title {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        const custocodeonmodal = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCCodepartyCreditErrormodalTitle);
        yield expect(custocodeonmodal).equals(customercodetext);
        console.log("The customer code is verified on the error modal ");
    });
});
Then('I verify the body of the info modal as {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const errormodalCommonbody = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCCodepartyCreditErrormodalBODY);
        yield expect(errormodalCommonbody).equals(text);
        console.log("The  is verified modal body text is verified ");
    });
});
Then('I verify the message on the modal is displaying {string} for the no active credit party', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const creditnotactiveerrortext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCustCodepartyErrorCreditNotActive);
        yield expect(creditnotactiveerrortext).equals(text);
        console.log("The customer credit is currently not active so unalbe to add bill to ");
    });
});
Then('I verify the message on the modal is displaying {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const custoUSRestrictedtext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCustCodepartyErrorUSRestriction);
        yield expect(custoUSRestrictedtext).equals(text);
        console.log("This C-Code is restricted for US transactions so unable to add charges to the customer ");
    });
});
Then('I verify if clicking on OK button will return the user back to the party input field on the Charge code Entry UI screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCustomerCodeErrormodalOKButton);
        const modalTitlevisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCCodepartyCreditErrormodalTitle);
        yield expect(modalTitlevisiblity).equals(false);
        console.log("The user is returned to the Charge code Entry UI screen");
    });
});
// actions menu button delete party 
Then('I click on the arrow to expand the dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCCodePartyAccordionArrow).replace("{0}", customercodetext));
        yield hooks_1.page.clickElementUsingXpathNew(temp);
        console.log("The Accordion arrow for the party is clicked to expand the menu");
        yield hooks_1.page.waitForFewSeconds(1000);
    });
});
Then('I click on actions menu button to show only option label {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButton);
        console.log("The actions buitton is clicked");
    });
});
When('I click on Remove Party option on the Actions menu button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonRemoveParty);
        console.log("The remove party option on the actions menu button is clicked");
    });
});
Then('I verify if the user is displayed with a modal with Header {string} with Cancel and OK buttons', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const removepartymodaltitle = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyModalTitle);
        yield expect(removepartymodaltitle).equal("Delete Party");
        console.log("the title of the remove party modal is " + removepartymodaltitle);
    });
});
Then('I verify the body n the Modal is {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const removepartymodalbody = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyModalBody);
        yield expect(removepartymodalbody).equal("Are you sure you want to delete this party from this transaction?");
        console.log("the title of the remove party modal is " + removepartymodalbody);
    });
});
When('I click on Cancel Button on the Delete party Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyModalCancelButton);
        console.log("The cancel button on hte modal is clicked");
    });
});
Then('I verify the user is returned back to the Charge Code entry UI screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const ismodalvisible = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyModalTitle);
        yield expect(ismodalvisible).equals(false);
        console.log("The remove party modal is not visible to user upon click on cancel button");
    });
});
Then('I click on YES button on the Delete party Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyModalYESButton);
        console.log("the OK Button on the delete party modal is clicked ");
    });
});
Then('I click Action Button on the latest added C code for this test case scenario', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const latestaddedCCode = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForRevenueTopMostCCode);
        const TotalrevenuepartyBoxes = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyInputBoxesCSS);
        if (latestaddedCCode === true) {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForRevenueTopMostCCode);
            console.log("The actions button is clicked in order to delete the topmost C Code");
        }
        else if (TotalrevenuepartyBoxes.length > 0) {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath);
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForRevenueTopMostCCode);
            console.log("The actions button is clicked in order to delete the topmost C Code");
        }
        else if (TotalrevenuepartyBoxes.length === 0) {
            console.log("No C Codes are present in the Revenue section");
        }
        else {
            console.log("The c codes are not present in the Rev");
        }
    });
});
Then('I Verify the Uncharged party is deleted from the Charge Code Entry UI screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const revenuepartyBoxes = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyInputBoxesCSS);
        console.log(revenuepartyBoxes + "number");
        console.log(revenuepartyBoxes.length + "number");
        const FinalPartyCount = revenuepartyBoxes.length;
        yield expect(initialPartiesCount - FinalPartyCount).equal(0);
        console.log("The Uncharged party is deleted successfully and No C Codes exist in the Charge code Entry UI");
    });
});
// add charge codes to revenue party
Then('I verfiy the estimated charges input box and available credit amount is displayed to the user', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const availableCreditText = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedAvailableCredittext);
        yield expect(availableCreditText).equals("Available credit: ");
        console.log("The Available credit text is displayed to the user below the revenue party name");
        const CreditAmount = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedCreditAmount);
        yield expect(CreditAmount).equals(true);
        console.log("The Credit amount of the Revenue Party is visible to the  user");
    });
});
Then('I click on Charge Code text box and input a charge code value {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        if (checkboxpresent === false) {
            yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent);
            console.log("Click charge code text box");
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresentCSS, text);
            console.log("A charge code freight charge has been entered in the Charge code input box");
        }
        else {
            yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresentCSS, text);
        }
    });
});
Then('I click on the dropdown value in charge code text box {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCOdesRevenuePARTYChargeCodetextBoxEntryDropdown).replace("{0}", text));
        yield hooks_1.page.clickElementUsingXpathNew(temp1);
        console.log("The value Freight Surcharge has been selected from the dropdown");
    });
});
Then('I verify the add Note icon is visible to the user', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        const addNotesIconVisible = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyAddNoteIconCSSCheckBoxPresentXPATH);
        if (addNotesIconVisible === true) {
            console.log("The add note icon is visible to the user ");
        }
        else {
            console.log("The note icon is not visible to user");
        }
    });
});
Then('I click on the Unit type and select a unit type {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        if (checkboxpresent === false) {
            yield hooks_1.page.waitForFewSeconds(500);
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNotPresent);
            console.log("Unit Type input box is Clicked");
            const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyUnitTypeSelectionValue).replace("{0}", text));
            yield hooks_1.page.clickElementUsingXpathNew(temp1);
            console.log("The Unit type has been selected from the dropdown");
            yield hooks_1.page.hitTab();
            console.log("the tab is pressed");
        }
        else {
            yield hooks_1.page.waitForFewSeconds(1000);
            yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresentCSS);
            const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyUnitTypeSelectionValueCheckBoxPresent).replace("{0}", text));
            yield hooks_1.page.clickElementUsingXpathNew(temp1);
        }
    });
});
Then('I enter a value for Units field "{int}"', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxPresentCSS);
        console.log("The unit are cleared");
        const temp = "" + text;
        console.log("The value is " + temp);
        console.log("The type is " + typeof (temp));
        yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxPresentCSS, temp);
    });
});
Then('I enter a value for Per Units field "{int}"', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyPerUnitsTextBoxCheckBoxPresentCSS);
        console.log("The unit are cleared");
        const temp = "" + text;
        console.log("The value is " + temp);
        console.log("The type is " + typeof (temp));
        yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyPerUnitsTextBoxCheckBoxPresentCSS, temp);
    });
});
Then('I verify the currency {string} is displayed to the user in the currency text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBox);
        const currentCurrency = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSS, "value");
        yield expect(currentCurrency).equals(text);
        console.log("The currency of the Party is being displayed as " + currentCurrency);
    });
});
// non USD currency invoice
Then('I enter the currency {string} other than USD in the currency text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyTextBoxCSS);
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyTextBoxCSS);
        yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyTextBoxCSS, text);
        const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyDropDownValue).replace("{0}", text));
        yield hooks_1.page.clickElementUsingXpathNew(temp1);
        console.log("The Currency AUD has been selected from the dropdown");
    });
});
Then('I verify the currency {string} is displayed to the user in the currency text box when non USD curreny is entered', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBox);
        const currentCurrency = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyNewAddedCurrencyValidation, "value");
        yield expect(currentCurrency).equals(text);
        console.log("The currency of the Party is being displayed as " + currentCurrency);
    });
});
//           Then('I verify if the sell FX details is displayed to the user for charge codes differnt that invoice currency', 
//           function () {
//             const sellFXCoulmnVisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXChargesheader); 
//             console.log("The  SELL FX charges column is displayed and text is =" + sellFXCoulmnVisiblity);    
// await expect(sellFXCoulmnVisiblity).equals(true);
//           });
Then('I Verify if the charges column is displayed to the user for charge codes differnt that invoice currency', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const sellFXchargesCoulmnVisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXChargesheader);
        console.log("The  SELL FX charges column is displayed and text is =" + sellFXchargesCoulmnVisiblity);
        yield expect(sellFXchargesCoulmnVisiblity).equals(true);
    });
});
Then('I Verify if the Exchange rate column is displayed to the user for charge codes differnt that invoice currency', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const sellFXexchangeRateColumnVisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXExchangeRateheader);
        console.log("The  SELL FX Exchange rate column is displayed and text is =" + sellFXexchangeRateColumnVisiblity);
        yield expect(sellFXexchangeRateColumnVisiblity).equals(true);
    });
});
Then('I Verify if the Mark Up column column is displayed to the user for charge codes differnt that invoice currency', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const sellFXFXMarkUPColumnVisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXFXMarkUPColumn);
        console.log("The  SELL FX mARK uP column is displayed and text is =" + sellFXFXMarkUPColumnVisiblity);
        yield expect(sellFXFXMarkUPColumnVisiblity).equals(true);
    });
});
Then('I Verify if the FX Rate column is displayed to the user for charge codes differnt that invoice currency', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const sellFXFXFxRateColumnVisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXFxRateColumnHeader);
        console.log("The  SELL FX FX rate column is displayed and text is =" + sellFXFXFxRateColumnVisiblity);
        yield expect(sellFXFXFxRateColumnVisiblity).equals(true);
    });
});
Then('I Verify if the SELL FX Total column is displayed to the user for charge codes differnt that invoice currency', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const sellFXFXSELLFXTotalColumnText = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXSELLFXTotalColumnHeader);
        console.log("The  SELL FX SELLFXTotal column is displayed and text is =" + sellFXFXSELLFXTotalColumnText);
        yield expect(sellFXFXSELLFXTotalColumnText).equals("Sell FX Total");
    });
});
// SELL FX Calculation 
Then('I Verify if the SELL FX  total is equal to the value of total charge multiplied with current FX RATE', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const fxRateValue = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceFirstFXRATEValue);
        console.log("The fxrate value is =" + fxRateValue);
        const SELLFXTotalValue = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceFirstSELLFXTotalValue);
        const sellFXtOTALvALUETEMP = SELLFXTotalValue.replace("USD", "");
        console.log("The SELL FX Total value is =" + sellFXtOTALvALUETEMP);
        const fxRateValueNew = Number(fxRateValue);
        const SELLFXTotalValueNew = Number(sellFXtOTALvALUETEMP);
        console.log("new sell fx rate" + fxRateValueNew);
        console.log("new sell fx total  rate" + SELLFXTotalValueNew);
        const totalchargechargecodenew = Number(totalchargechargecode);
        console.log("Total charge for verification " + totalchargechargecodenew);
        let expectedSELLFXTotal = fxRateValueNew * totalchargechargecodenew;
        expectedSELLFXTotal = Math.round(expectedSELLFXTotal * 100) / 100;
        console.log("The value of expected SELLFX Total is =" + expectedSELLFXTotal);
        yield expect(expectedSELLFXTotal).equals(SELLFXTotalValueNew);
    });
});
// total charges 
Then('I click on the total Charge field', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckBoxPresent);
    });
});
Then('I verify if the total Charge amount to be billed to the party is calculated with units "{int}" and per unit "{int}" and displayed to the user in the Total Charge field', function (text1, text2) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        console.log("The  check box is present (total chqarge)" + checkboxpresent);
        if (checkboxpresent === false) {
            console.log("false123");
            const totalcalculatedCharge = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckboxNotPresent);
            console.log("the value (total charge) " + totalcalculatedCharge);
            totalchargechargecode = totalcalculatedCharge;
            totalChargevalue = yield totalcalculatedCharge;
            console.log("TCVALUE" + totalChargevalue);
            const expectedCharge = parseInt(text1, 10) * parseInt(text2, 10);
            console.log(totalcalculatedCharge + "dummy");
            console.log(expectedCharge + "    dummy");
            GlobalexpectedCharge = expectedCharge;
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckboxNotPresent);
            console.log("the total charge is clicked ");
            yield hooks_1.page.hitTab();
        }
        else {
            console.log("checkbox is present");
            const totalcalculatedCharge = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckBoxPresent);
            console.log("checking value total " + totalcalculatedCharge);
            totalchargechargecode = totalcalculatedCharge;
            const expectedCharge = parseInt(text1, 10) * parseInt(text2, 10);
            console.log(totalcalculatedCharge + "dummy");
            console.log(expectedCharge + "    dummy");
            GlobalexpectedCharge = expectedCharge;
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckBoxPresent);
            console.log("the total charge is clicked ");
            yield hooks_1.page.hitTab();
            //           const expectedCharge = parseInt(text1,10)*parseInt(text2,10);
            //           console.log(totalcalculatedCharge + "dummy");
            //           console.log(expectedCharge + "dummy");
            //  GlobalexpectedCharge = expectedCharge;
            //   console.log ( "A charge code with a total charge has been succesfully added to the C Party")
            // //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyClickEMptySpace);
            //  await page.waitForFewSeconds(2000);
        }
    });
});
Then('I calculate the total sum of all the currently added charge codes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const SumofAllChargeCodes = yield hooks_1.page.getAllTextContent(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalchargesofallNEWLYAddedChargeCodesCSS);
        console.log("checking value total " + SumofAllChargeCodes);
        //   totalchargechargecode =  totalcalculatedCharge;
        let p = 0;
        for (let i of SumofAllChargeCodes) {
            console.log("The value of i " + i);
            let j = i.replace('.00', '');
            console.log("The value of J " + j);
            p = p + Number(j);
        }
        TotalSumofAllChargeCodes = p;
        console.log("The value of P " + p);
        // const expectedCharge = parseInt(text1,10)*parseInt(text2,10);
    });
});
Then('I verify if a new empty charge code input row is added below when a charge code is successfully added to the Party', function () {
    return __awaiter(this, void 0, void 0, function* () {
    });
});
Then('I would refresh the page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        hooks_1.page.pageRefresh();
    });
});
// remove charge code 
Then('I would click on the checkbox on the newly added charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevPartyFirstCCodeCheckBox);
        console.log("The first charge code checkbox is checked");
        yield hooks_1.page.waitForFewSeconds(1000);
    });
});
// multiple charge codes
Then('I would click on the checkbox on the newly added multiple charge Codes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeAllNONInvoicedChargeCodes);
        console.log("The Select all check box for the newly added charge codes in revenue section is selected");
    });
});
When('I click on actions menu button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButton);
        console.log("The actions menu button on the revenue oarty is clicked ");
    });
});
Then('I would click on the Remove Charge Codes option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonRemoveChargeCodes);
    });
});
Then('I verify the warning modal to remove the selected charge Codes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const removeCCModal = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyWarningModalTitle);
        yield expect(removeCCModal).equals("Warning");
        console.log("The  is verified modal title text is verified ");
        const removeCCModalBody = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyWarningModalBody);
        yield expect(removeCCModalBody).equals("Are you sure you want to remove the selected charge codes?");
        console.log("The  is warning modal body text is verified ");
    });
});
Then('I click on the OK button on the warning modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyRemovepartyModalOKButton);
        console.log("The OK button is clicked on the Warning modal ");
    });
});
Then('I click on the last arrow to expand the dropdown', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCCodePartyAccordionArrowlast).replace("{0}", customercodetext));
        yield hooks_1.page.clickElementUsingXpathNew(temp);
        console.log("The Accordion arrow for the last party is clicked to expand the menu");
    });
});
Then('I verify if the charge code is removed from the Expense party {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const chargecodevalue = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeinputWhenCheckboxNotPresent);
        if (chargecodevalue === "405 - Fuel Surcharge") {
            console.log("The charge code was not deleted");
        }
        else {
            console.log("The charge code was successfully deleted");
        }
    });
});
// restricting Charges netting charges to be invoiced for US SFO 
Then('I verify the toast message is displayed to the user {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        const toastmsgtext = yield hooks_1.page.getAllTextContent(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToastCSS);
        console.log("The charges netting restrictiong toast is : " + toastmsgtext[0]);
        yield expect(toastmsgtext[0]).equals(text);
        console.log("The charges netting restrictiong toast is displayed to the user");
    });
});
Then('I click on the x on the toast', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToastButtonCloseCSS);
        console.log("The x on the toast is clicked");
    });
});
Then('I verify the charge code input box is empty', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        console.log("The  check box is present " + checkboxpresent);
        if (checkboxpresent === false) {
            console.log("if block ");
            const checkboxtext = yield hooks_1.page.getAllTextAttributesValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxNOTPresentCSS);
            yield expect(checkboxtext[0]).equals("");
        }
        else {
            console.log("else block ");
            const checkboxtext = yield hooks_1.page.getAllTextAttributesValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresentCSS);
            yield expect(checkboxtext[0]).equals("");
        }
    });
});
Then('I verify the toast message is not displayed to the user', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const toastmessagevisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToast);
        console.log("visibility" + toastmessagevisiblity);
        yield expect(toastmessagevisiblity).equals(false);
    });
});
// adding notes
Then('verify if the tool tip on notes icon is {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIcon);
        const noteiconTooltiptext = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIconToolTipCSS);
        console.log("The tool tip on the notes icon  is = " + noteiconTooltiptext);
        yield expect(noteiconTooltiptext).equals(text);
    });
});
When('I click on the Notes Icon', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIcon);
    });
});
Then('Verify if the notes modal is displayed to the user', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const modalvisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTitle);
        if (modalvisiblity === true) {
            const modalheadertext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTitle);
            console.log("The title of the notes Modal is = " + modalheadertext);
            yield expect(modalheadertext).equals("Charge Code Notes");
        }
        else {
            console.log("The modal is not visible to the user");
            yield expect(false).equals(true);
        }
    });
});
Then('Verify if I can add notes in the notes input field with text {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.sendElementTextUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput, text);
        console.log("The text entered in the note is " + text);
        const EnteredtextfromNotes = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
        console.log("The text from the notes is " + EnteredtextfromNotes);
        yield expect(EnteredtextfromNotes).equals(text);
    });
});
Then('I should verify if the cancel button is displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const cancelButtonvisible = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalCancelButton);
        console.log("The text on the button " + cancelButtonvisible);
        yield expect(cancelButtonvisible).equals("Cancel");
    });
});
Then('I should be able to click on save', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalSAVEButton);
        console.log("The save button is clicked ");
    });
});
Then('Verify the notes icon tool tip updated to {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIcon);
        const noteiconTooltiptext = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIconToolTipCSS);
        console.log("The tool tip after saving note  is = " + noteiconTooltiptext);
        yield expect(noteiconTooltiptext).equals(text);
    });
});
Then('I verify the text entered in the notes modal is displayed upon hovering the checkbox associated to the charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.hoverElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuefirstchargecodeCheckBoxtoverifyNotes);
        const checkboxnoteTooltiptext = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIconToolTipCSS);
        console.log("The tool tip after saving note on check box is  = " + checkboxnoteTooltiptext);
        yield expect(checkboxnoteTooltiptext).includes("GF Accounting workspace");
    });
});
Then('I verify the text entered in the notes modal is existing or not and return to charge code entry', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const textfromNotes = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
        console.log("The text from the notes is " + textfromNotes);
        yield expect(textfromNotes).equals("GF Accounting workspace");
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalCancelButton);
    });
});
Then('Verify if the system is limiting adding notes to only {int} characters', function (count) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
        yield hooks_1.page.waitForFewSeconds(1000);
        const charInput = 'A';
        yield hooks_1.page.sendElementTextUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput, charInput.repeat(count));
        console.log("The text entered in the note is " + charInput);
        const charlength = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
        console.log("The text from the notes is " + charlength);
        yield expect(charlength.length).equals(50);
        const notelength = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTNoteLength);
        yield expect(notelength).equals("0 Characters Remaining");
    });
});
Then('I click on cancel button on the Modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalCancelButton);
    });
});
// GB GHOSTBUSTER TEST CASES 
Then('I verify the Available credit amount for the revenue party {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        const CurrentAvailableCreditAmount = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
        availbaleCreditAmount = Number(CurrentAvailableCreditAmount.replace(",", "").trim());
        console.log("The amount if availabe credit is  = " + availbaleCreditAmount + "str" + typeof (availbaleCreditAmount));
    });
});
Then('I verify the estimated charges amount is empty', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const estimatedChargeCurrentAmount = yield hooks_1.page.getAllTextAttributesValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyEstimatedChargesAmount);
        console.log("The estimated charge currently is " + estimatedChargeCurrentAmount[0]);
        yield expect(estimatedChargeCurrentAmount[0]).equals("");
        console.log("The estimated charge text box is Empty");
    });
});
Then('I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const CurrentAvailableCreditAmount = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
        let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",", "").trim());
        console.log("The update credit amount after entering estimated charges is =" + availableUpdatedCreditAmount);
        yield expect(availableUpdatedCreditAmount + Number(estimatedChargeEntered)).equals(availbaleCreditAmount);
        console.log("The available credit is updating as per the calculated total charge");
    });
});
Then('I calculate and verify if the from available credit is updated at the same rate as the amount calculated in total charge from selected charge codes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const CurrentAvailableCreditAmount = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
        let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",", "").trim());
        console.log("auc" + availableUpdatedCreditAmount);
        console.log("aca" + availbaleCreditAmount);
        console.log("totalcharge  " + totalChargevalue);
        yield expect(availableUpdatedCreditAmount).equals(availbaleCreditAmount - Number(totalChargevalue));
    });
});
// 03/12
Then('I Verify if the party and Estimated charge code input fields are disabled', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});
Then('I verify if the charge code is removed from the revenue party {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});
Then('I verify if the avaiable credit is recalculated to the previous value after deletion of a charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});
Then('I  verify if the charge code is removed from the revenue party {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});
Then('I calculate and verify if the from available credit is updated to the deducted value of {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const CurrentAvailableCreditAmount = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
        let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",", "").trim());
        console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
        console.log("The total charge code value after entering charge codes is =" + totalchargechargecode);
        totalchargechargecode = totalchargechargecode.replace(",", "");
        console.log("the credit amount GB" + availbaleCreditAmount);
        yield expect(availableUpdatedCreditAmount + Number(totalchargechargecode)).equals(availbaleCreditAmount);
        console.log("The available credit is updating as per the total charge greater than estimated charges");
    });
});
Then('I calculate and verify if the available credit when total charge is less than estimated charge and deducution is {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const CurrentAvailableCreditAmount = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
        let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",", "").trim());
        console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
        console.log("The total charge code value after entering charge codes is =" + estimatedChargeEntered);
        totalchargechargecode = totalchargechargecode.replace(",", "");
        console.log("the credit amount GB" + availbaleCreditAmount);
        yield expect(availableUpdatedCreditAmount + Number(estimatedChargeEntered)).equals(availbaleCreditAmount);
        console.log("The available credit is updating as per the total charge less than estimated charges");
    });
});
// sum of charge codes 
Then('I validate the sum of total charge is greater than the estimated charges and available credit is updated accordingly', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const CurrentAvailableCreditAmount = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
        let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",", "").trim());
        console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
        console.log("The sum of total charge code value after entering charge codes is =" + TotalSumofAllChargeCodes);
        // SumofAllChargeCodes = SumofAllChargeCodes.replace(",","");
        console.log("the credit amount GB" + availbaleCreditAmount);
        yield expect(availableUpdatedCreditAmount + TotalSumofAllChargeCodes).equals(availbaleCreditAmount);
        console.log("The available credit is updating as per the sum of total charge greater than estimated charges");
    });
});
Then('I calculate and verify if the available credit is recalculated according to total sum of charge codes greater than estimated charges', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const CurrentAvailableCreditAmount = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
        let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",", "").trim());
        console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
        console.log("The total charge code value after entering charge codes is =" + totalchargechargecode);
        totalchargechargecode = totalchargechargecode.replace(",", "");
        console.log("the credit amount GB" + availbaleCreditAmount);
        yield expect(availableUpdatedCreditAmount + Number(totalchargechargecode)).equals(availbaleCreditAmount);
        console.log("The available credit is updating as per the total charge greater than estimated charges");
    });
});
// create Invoice 
Then('I click on the Create Invoice button on the Actions menu button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodeRevPartyFirstEnabledChargeCodeCheckBox);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonCREATEINVOICEOption);
        console.log("Create invoice option on actions menu is clicked");
    });
});
Then('I verify the Create invoice section header', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);
        const createinvoicetitle = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);
        yield expect(createinvoicetitle).equals(true);
        console.log("The title in create invoice is verified");
    });
});
Then('I verify the Customer Name in the create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const custNameoninvoice = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICEorVOUCHERSectionCustomerName);
        yield expect(custNameoninvoice).equals(customercodetext);
        console.log("The customer name on the create invoice page is " + custNameoninvoice);
    });
});
Then('I verify if the Currency invoice text box is having the same currency as the invoiced charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const currencyboxvalue = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, "value");
        yield expect(currencyboxvalue).equals("USD");
        console.log("The currency on the create invoice page is " + currencyboxvalue);
    });
});
// change currency in invoice currency box
Then('I change the currency from branch currency {string} the Currency invoice text box to {string}', function (text, text1) {
    return __awaiter(this, void 0, void 0, function* () {
        const currencyboxvalue = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, "value");
        yield expect(currencyboxvalue).equals(text);
        console.log("The currency on the create invoice page is " + currencyboxvalue);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS);
        yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, text1);
        const newCurrencyboxvalue = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, "value");
        yield expect(newCurrencyboxvalue).equals(text1);
        const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyDropDownValue).replace("{0}", text1));
        yield hooks_1.page.clickElementUsingXpathNew(temp1);
        console.log("The new Currency AED has been selected from the dropdown");
        console.log("The NEW currency on the create invoice page is " + newCurrencyboxvalue);
    });
});
Then('I get the total charges amount on the first non invoiced Charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        firstTotalChargenoninvoiced = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeFirstNONInvoicedChargeCode);
    });
});
Then('I verify if the Invoice total is equal to the sum of all the total charges being invoiced', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const totalinvoice = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyCreateInvoiceINVOICETOTAL);
        const invoicevariable = totalinvoice.split('-')[1].replace('USD', '').trim();
        console.log("The invoice text " + invoicevariable);
        console.log("The dummy tezt " + GlobalexpectedCharge);
        yield expect(invoicevariable).equals(firstTotalChargenoninvoiced);
    });
});
Then('I verify if the Invoice total is equal to the sum of all the total charges being invoiced for multiple charge codes', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const totalinvoice = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyCreateInvoiceINVOICETOTAL);
        const invoicevariable = totalinvoice.split('-')[1].replace('USD', '').trim();
        console.log("The invoice text " + invoicevariable);
        console.log("The dummy tezt " + GlobalexpectedCharge);
        yield expect(invoicevariable).equals(TotalSumofAllChargeCodes + ".00");
    });
});
Then('I verify cancel button is displayed to the user in create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const Invoicecancelbutton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelButton);
        yield expect(Invoicecancelbutton).equals(true);
    });
});
Then('I verify preview invoice button is displayed to the user in create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const Invoicepreviewbutton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
        yield expect(Invoicepreviewbutton).equals(true);
    });
});
Then('I verify Generate Invoice button is displayed to the user in create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const Invoicegeneratebutton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionGenerateInvoice);
        yield expect(Invoicegeneratebutton).equals(true);
    });
});
Then('I would click on generate invoice button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionGenerateInvoice);
    });
});
Then('I would verify the success message on creation of invoice modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const successmodalheadertext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSmodalTitle);
        console.log("The modal  header on the success invoice modal is " + successmodalheadertext);
        yield expect(successmodalheadertext).equals("Success");
        const successmodalbodytext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSmodalBODY);
        console.log("The body on the success invoice modal is " + successmodalbodytext);
        yield expect(successmodalbodytext).includes("Invoice data saved. The invoice can be viewed in the Financial Overview screen. Would you like to create another invoice for Bowne & Company?");
    });
});
Then('I would click on NO button on the modal to return to the charge code entry screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSModalNObutton);
    });
});
Then('I verify for all the charge codes that are invoiced are greyed out in the charge code entry', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const SumofAllChargeCodes = yield hooks_1.page.getAllTextContent(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyTotalchargesofallNEWLYAddedChargeCodesCSS);
        yield expect(SumofAllChargeCodes.length).equals(1);
        yield expect(SumofAllChargeCodes[0]).equals('0.00');
    });
});
// cancel invoice creation 
When('I click on cancel button on the Create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelButton);
        console.log("The cancel button on create invoice is clicked");
    });
});
Then('I verify the modal title should be {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const mTitle = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ModalTitle);
        yield expect(mTitle).equals(text);
        console.log("The modal title on the cancel invoice modal is " + mTitle);
    });
});
Then('I verify the modal body should be {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const mBody = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ModalBody);
        yield expect(mBody).equals(text);
        console.log("The modal  body on the cancel invoice modal is " + mBody);
    });
});
Then('I click on NO Button on the Warning modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelWarningModalNO);
        console.log("The NO on the warning modal is clicked");
    });
});
Then('I verify if the warning modal is closed and the user is on the create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const createinvoiceheader = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);
        yield expect(createinvoiceheader).equals(true);
        console.log("The user returns gto the create invoice section successfully");
    });
});
Then('I click on YES Button on the Warning modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelWarningModalYes);
        console.log("The YES on the warning modal is clicked");
    });
});
Then('I  verify if the Create invoice Section is closed and the user returns to the revenue section screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const createinvoiceheader = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);
        yield expect(createinvoiceheader).equals(false);
        console.log("The user returns gto the charge code entryUI and the creation of invoice is cancelled");
    });
});
// preview invoice : 
When('I click on the preview invoice button in the create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
        console.log("The preview invoice button is clicked successfully");
    });
});
Then('I wait for 2 seconds', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(4000);
    });
});
Then('I verify if the invoice preview title can be verified as {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const PreviewInvoiceTitle = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ModalTitle);
        yield expect(PreviewInvoiceTitle).equals(text);
        console.log("The user is currently on the  preview invoice Frame ");
    });
});
Then('I click the OK button on the invoice preview frame', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyPreviewInvoiceFrameOKButton);
    });
});
Then('I verify if the user is returned back to the Create invoice section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const createinvoiceheader = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);
        yield expect(createinvoiceheader).equals(true);
        console.log("The user has previewd and returned back to the create invoice screen successfully");
    });
});
Then('I enter the Estimated charge of {string} in the estimated charges field', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS);
        estimatedChargeEntered = text;
        if (revenuepartyVisible === false) {
            // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxXpath);
            yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS);
            // await page.waitForFewSeconds(1000);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS, text);
            console.log("The estimate revenue charge of 10 has been entered");
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedAvailableCredittext);
        }
        else {
            yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS);
            // await page.waitForFewSeconds(1000);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS, text);
            console.log("The estimate revenue charge of 10 has been entered");
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedAvailableCredittext);
        }
    });
});
// Revenue field error validation :
Then('I remove the existing charge code value', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clearElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent);
        console.log("The value in the charge code inout field is cleared");
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent);
    });
});
Then('I hover on the Charge code text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
        console.log("The cursor is hovering over the charge code text box");
    });
});
Then('I verify if the charge code input field is providing the error message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
        const valueinCCinputbox = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxWARNINGCell);
        yield expect(valueinCCinputbox).equals("");
        console.log("The value in the box after removal of charge code is " + valueinCCinputbox);
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
        // await page.waitForFewSeconds(1000);
        const chargecodeboxtooltip = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodeFieldToolTip);
        yield expect(chargecodeboxtooltip).equals("Please select a value");
        console.log("The text in tool tip is " + chargecodeboxtooltip);
    });
});
Then('I remove the Unit type value', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNOTPresentCSS);
        console.log("The value in the unit type  input field is cleared");
    });
});
Then('I hover on the Unit type text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        //  await page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxPresentCSS);
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        console.log("The cursor is hovering over the unit type text box");
    });
});
Then('I verify if the unit type field is providing the the error box and tool tip', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        //  double click units
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
        yield hooks_1.page.hitTab();
        // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        // await expect(valueinCCinputbox).equals("");
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        yield hooks_1.page.hitTab();
        const UnitTypeTooltipText = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueuNITTypeFieldToolTip);
        yield expect(UnitTypeTooltipText).equals("Please select a value");
        console.log("The text in tool tip is " + UnitTypeTooltipText);
        const valueinCCinputbox = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        yield expect(valueinCCinputbox).equals("");
        console.log("The value in the box after removal of charge code is :  " + valueinCCinputbox + "indicating Empty");
    });
});
Then('I clear the existing curreny value', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSS);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSS);
        console.log("The value in the currency field is cleared");
    });
});
Then('I verify if the Currency input field is providing the the error box and tool tip', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  
        //  double click units
        //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
        //  await page.hitTab();
        yield hooks_1.page.waitForFewSeconds(1000);
        // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        // await expect(valueinCCinputbox).equals("");
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        yield hooks_1.page.hoverElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
        // await page.waitForFewSeconds(1000);
        yield hooks_1.page.hoverElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
        yield hooks_1.page.hitTab();
        const valueinCurrencyinputbox = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
        yield expect(valueinCurrencyinputbox).equals("");
        console.log("The value in the box after removal of charge code is :  " + valueinCurrencyinputbox + "indicating Empty");
        const CurrencyTooltipText = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueCurrencyFieldToolTip);
        yield expect(CurrencyTooltipText).equals("Please select a value");
        console.log("The text in tool tip is " + CurrencyTooltipText);
    });
});
//  revenue red warning cell validation CC, Unit type & currency : 
Then('I verify if the charge code input field is displaying a red colored warning cell', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCredcellattribute = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
        console.log(CCredcellattribute[0]);
        yield expect(CCredcellattribute[0].includes('warning-cell')).equals(true);
    });
});
Then('I verify if the unit type field is displaying a red colored warning cell', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var UnitTyperedcellattribute = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeCellTopmostREDwarningCellCSS);
        console.log(UnitTyperedcellattribute[0]);
        yield expect(UnitTyperedcellattribute[0].includes('warning-cell')).equals(true);
    });
});
Then('I verify if the Currency input field is displaying a red colored warning cell', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var Currentredcellattribute = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
        console.log(Currentredcellattribute[0]);
        yield expect(Currentredcellattribute[0].includes('warning-cell')).equals(true);
    });
});
// Revenue Invalid value field errors
Then('I enter the invalid value of {string} in the revenue section charge code input text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        if (checkboxpresent === false) {
            yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent);
            console.log("Click charge code text box");
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresentCSS, text);
            console.log("A charge code freight charge has been entered in the Charge code input box");
        }
        else {
            yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresentCSS, text);
        }
    });
});
Then('I verify if the charge code input field is providing the {string} message', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const errormsgvisible = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDChargeCodeValueDropdown);
        if (errormsgvisible === true) {
            const errormsgvalue = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDChargeCodeValueDropdown);
            console.log("The error msg value is =" + errormsgvalue);
            yield expect(errormsgvalue).equals(text);
        }
        yield expect(errormsgvisible).equals(true);
    });
});
Then('I enter the invalid value of {string} in the revenue section Unit Type text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
        if (checkboxpresent === false) {
            yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNotPresentCSS);
            console.log("Unit Type input box is Clicked");
            // await page.waitForFewSeconds(1000);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNotPresentCSS, text);
            console.log("Invalid Unit Type  is entered");
        }
        else {
            yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresentCSS);
            console.log("Unit Type input box is Clicked");
            // await page.waitForFewSeconds(1000);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresentCSS, text);
            console.log("Invalid Unit Type  is entered");
        }
    });
});
Then('I verify if the unit type field is providing the {string} message', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const errormsgvisible = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDUnitTYPEValueDropdown);
        if (errormsgvisible === true) {
            const errormsgvalue = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDUnitTYPEValueDropdown);
            console.log("The error msg value is =" + errormsgvalue);
            yield expect(errormsgvalue).equals(text);
        }
        yield expect(errormsgvisible).equals(true);
    });
});
Then('I enter a invalid value of the currency {string} in the revenue section currency text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSCheckBoxNotPresent);
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSCheckBoxNotPresent, text);
    });
});
Then('I verify if the currency input field is providing the {string} message', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const errormsgvisible = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDCurrencyValueDropdown);
        if (errormsgvisible === true) {
            const errormsgvalue = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDCurrencyValueDropdown);
            console.log("The error msg value is =" + errormsgvalue);
            yield expect(errormsgvalue).equals(text);
        }
        yield expect(errormsgvisible).equals(true);
    });
});
Then('I verify if the total Charge amount field is providing an error message tool tip {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
    });
});
Then('I verify if the Total Charge input field is providing the the error box and tool tip for no total charges', function () {
    return __awaiter(this, void 0, void 0, function* () {
    });
});
// ********************************// Expense party section :***********************************
Then('I click on the Add Expense party button on Charge code entry UI page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (expensePartyVisible === false) {
            yield hooks_1.page.waitForFewSeconds(3000);
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.AddExpensePartyButtonXpath);
            const expensePartyBoxes = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyInputBoxesCSS);
            initialPartiesCount = expensePartyBoxes.length;
            console.log("The Count of the parties in Charge code entry UI is " + initialPartiesCount);
        }
        else {
            console.log("A  customer party  (T code ) for Expense already exists");
        }
    });
});
Then('I verify if the Expense party input field with a arrow dropdown is displayed to the user', function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (expensePartyVisible === false) {
            const newEmptypartyExpensebox = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntryExpenseNewPartytextbox);
            yield expect(newEmptypartyExpensebox).equals(true);
            console.log("The new T party text box is displayed to the user");
        }
    });
});
Then('Verify if the expense party {string} already exists', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseTCODEPARTYTEXTBOX).replace("{0}", text));
        expensePartyVisible = yield hooks_1.page.isElementVisibleByXpath(temp);
        customercodetext = text;
        console.log("The expense party visible " + expensePartyVisible);
    });
});
Then('I enter {string} and selecting the Expense party from the dropdown', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        if (expensePartyVisible === false) {
            yield hooks_1.page.sendElementTextUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntryExpenseNewPartytextbox, text);
            const temp = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntrypartytextboxvalueSelectDropdown).replace("{0}", text));
            console.log("The xpath is" + temp);
            const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntrypartytextboxvalueINDROP).replace("{0}", text));
            customercodetext = yield hooks_1.page.getTextFromXpath(temp1);
            console.log("The current Customer code is " + customercodetext);
            yield hooks_1.page.clickElementUsingXpathNew(temp);
        }
    });
});
Then('I verify the actions menu button is present when the party accordion is expanded', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const actionButtonVisibility = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntryExpenseActionsmenuButton);
        yield expect(actionButtonVisibility).equals(true);
        console.log("The Actions menu button is visible to the user on the expense section ");
    });
});
Then('I click Action Button on the latest added T code for this test case scenario', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const latestaddedTCode = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForExpenseTopMostTCode);
        const TotalExpensepartyBoxes = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyInputBoxesCSS);
        if (latestaddedTCode === true) {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForExpenseTopMostTCode);
            console.log("The actions button is clicked in order to delete the topmost T Code");
        }
        else if (TotalExpensepartyBoxes.length > 0) {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath);
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForExpenseTopMostTCode);
            console.log("The actions button is clicked in order to delete the topmost T Code");
        }
        else if (TotalExpensepartyBoxes.length === 0) {
            console.log("No T Codes are present in the Expense section");
        }
        else {
            console.log("The T codes are not present in the expense section");
        }
    });
});
When('I click on Remove Party option on the Expense Actions menu button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseActionsmenuButtonRemoveParty);
        console.log("The remove party option on the expense actions menu button is clicked");
    });
});
// add expense section charge codes
Then('I click on Expense section Charge Code text box and input a charge code value {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
        if (checkboxpresent === false) {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargecodeinputWhenCheckboxnotPresent);
            console.log("Clcik expense charge code text box");
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEntryExpensePartyChargeCodeinputWhenCheckboxNOTPresentCSS, text);
            console.log("expense cc sample2");
        }
        else {
            yield hooks_1.page.clickElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
            yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargeCodeinputWhenCheckboxPresentCSS, text);
        }
    });
});
Then('I click on the dropdown value in Expense section charge code text box {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCOdesRevenuePARTYChargeCodetextBoxEntryDropdown).replace("{0}", text));
        yield hooks_1.page.clickElementUsingXpathNew(temp1);
        console.log("sample3 expsnes");
    });
});
Then('I click on the Expense section Unit type and select a unit type {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
        if (checkboxpresent === false) {
            yield hooks_1.page.waitForFewSeconds(500);
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxNotPresent);
            console.log("Unit sample1 expense");
            const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensePartyUnitTypeSelectionValueCheckboxNotpresent).replace("{0}", text));
            yield hooks_1.page.clickElementUsingXpathNew(temp1);
            console.log("Unit sample 2 expsnes");
            yield hooks_1.page.hitTab();
            console.log("the tab is pressed in expense");
        }
        else {
            yield hooks_1.page.waitForFewSeconds(1000);
            yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxPresentCSS);
            const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensePartyUnitTypeSelectionValue).replace("{0}", text));
            yield hooks_1.page.clickElementUsingXpathNew(temp1);
        }
    });
});
Then('I enter a value for Expense section Units field {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeSelectionCheckBoxVisible);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxPresentCSS);
        console.log("The unit are cleared");
        const temp = "" + text;
        console.log("The value is " + temp);
        console.log("The type is " + typeof (temp));
        yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxPresentCSS, temp);
        //   const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
        //   if (checkboxpresent === false) {
        // await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxNOTPresentCSS);
        // // await page.waitForFewSeconds(1000);
        // // await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxNOTPresentCSS);
        // console.log("The unit are cleared in expnsnes");
        // const temp = "" + text;
        // console.log("The value is " + temp );
        // console.log("The type is " + typeof(temp));
        // await page.sendElementText(ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxNOTPresentCSS, temp);
        //     console.log("The unit value is entered in expense ");
        //   }
        //   else {
        //     await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxPresentCSS);
        //   console.log("The unit are cleared expnense");
        // const temp = "" + text;
        // console.log("The value is " + temp );
        // console.log("The type is " + typeof(temp));
        // await page.sendElementText(ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxPresentCSS, temp);
        //   }
    });
});
Then('I enter a value for Expense section Per Units field {string}', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxPresentCSS);
        console.log("The unit are cleared");
        const temp = "" + text;
        console.log("The value is " + temp);
        console.log("The type is " + typeof (temp));
        yield hooks_1.page.sendElementText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxPresentCSS, temp);
        console.log("The unit value is entered in expense ");
        //   const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
        //   if (checkboxpresent === false) {
        // await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxNotPresentCSS);
        // await page.waitForFewSeconds(1000);
        // await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxNOTPresentCSS);
        // console.log("The unit are cleared in expnsne");
        // const temp = "" + text;
        // console.log("The value is " + temp );
        // console.log("The type is " + typeof(temp));
        // await page.sendElementText(ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxNotPresentCSS, temp);
        //     console.log("The unit value is entered in expense ");
        //   }
        //   else {
        //     await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxPresentCSS);
        //   console.log("The unit are cleared in expense");
        // const temp = "" + text;
        // console.log("The value is " + temp );
        // console.log("The type is " + typeof(temp));
        // await page.sendElementText(ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxPresentCSS, temp);
        //   }
    });
});
// stuff 
Then('I click and the currency {string} from the dropdown in the currency text box', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent);
        const currentCurrency = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent, "value");
        // await expect(currentCurrency).equals(text);
        console.log("The currency of the  Expense Party is being currently displayed as " + currentCurrency);
        const temp1 = ((ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensePartyCurrencySelectionValue).replace("{0}", text));
        yield hooks_1.page.clickElementUsingXpathNew(temp1);
        const NewCurrency = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent, "value");
        console.log(NewCurrency + " is the currency clicked from the dropdown for entering the first expense charge code");
        //   const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
        //   if (checkboxpresent === false) {
        //     await page.waitForFewSeconds(500);
        //   await page.clickElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxNotPresent);
        //   console.log("Expense Currency field clicked");
        //   const temp1 =((ShipmentFinSummaryHome.CCEExpensePartyCurrencySelectionValue).replace("{0}",text));
        // await page.clickElementUsingXpathNew(temp1);
        // console.log("USD is the currency clicked from the dropdown for entering the first expense charge code");
        //   }
        // else {
        //   await page.waitForFewSeconds(500);
        // await page.clickElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent);
        // console.log("For already existing charge codes USD is the currency clicked from the dropdown for entering a new expense charge code");
        // const temp1 =((ShipmentFinSummaryHome.CCEExpensePartyCurrencySelectionValue).replace("{0}",text));
        // await page.waitForFewSeconds(1000);
        // await page.clickElementUsingXpathNew(temp1);
        // }
    });
});
Then('I click on the Expense section total Charge field', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);
        if (checkboxpresent === false) {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyTotalChargeTextBoxCheckboxNotPresent);
        }
        else {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyTotalChargeTextBoxCheckBoxPresent);
        }
    });
});
Then('I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units {string} and per unit {string} and displayed to the user in the Total Charge field', function (text1, text2) {
    return __awaiter(this, void 0, void 0, function* () {
        const totalcalculatedCharge = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyTotalChargeTextBoxCheckBoxPresent);
        const expectedCharge = parseInt(text1, 10) * parseInt(text2, 10);
        console.log(totalcalculatedCharge + " dummy");
        console.log(expectedCharge + " dummy");
        GlobalexpectedCharge = expectedCharge;
        console.log("The total charges for the charge code added is = " + totalcalculatedCharge);
        //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyClickEMptySpace);
    });
});
Then('I verify if a new empty Expense section charge code input row is added below when a charge code is successfully added to the Pay-to Party', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});
// *************create Voucher *********************
Then('I would click on the checkbox on the newly added charge code in the expense party', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeExpensePartyFirstTCodeCheckBox);
        console.log("The first charge code checkbox is checked in the T Code");
        yield hooks_1.page.waitForFewSeconds(1000);
    });
});
Then('I click on the Create Voucher button on the Actions menu button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const createVoucherbuttonstate = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeExpenseActionsMenuCreateVoucherEnabledstate);
        if (createVoucherbuttonstate === true) {
            yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonCREATEVOUCHEROption);
            console.log("Create Voucher option on actions menu is clicked");
        }
        else {
            console.log("The Create Voucher button is disabled on the Action menu button ");
        }
    });
});
Then('I verify the Create Voucher section header', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);
        const createinvoicetitle = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);
        yield expect(createinvoicetitle).equals(true);
        console.log("The title in create Voucher page is verified");
    });
});
Then('I verify the Customer Name in the create Voucher section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const custNameonVoucher = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICEorVOUCHERSectionCustomerName);
        yield expect(custNameonVoucher).equals(customercodetext);
        console.log("The customer name on the create Voucher panel page is " + custNameonVoucher);
    });
});
Then('I verify if the Currency Voucher text box is having the same currency as the Voucher party', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const currencyboxvalue = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionVOUCHERCurrencyboxCSS, "value");
        yield expect(currencyboxvalue).equals("USD");
        console.log("The currency on the create Voucher page is " + currencyboxvalue);
    });
});
Then('I verify if the Voucher total is equal to the sum of all the total charges being Vouchered', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const totalVoucher = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodePartyCreateVoucherTOTAL);
        const voucherVariable = totalVoucher.split('-')[1].replace('USD', '').trim();
        console.log("The Voucher text " + voucherVariable);
        console.log("The dummy tezt " + GlobalexpectedCharge);
    });
});
Then('I verify cancel button is displayed to the user in create Voucher section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const voucherCancelButton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionCancelButton);
        yield expect(voucherCancelButton).equals(true);
    });
});
// Then('I verify preview Voucher button is displayed to the user in create Voucher section',async function () {       
//   const Invoicepreviewbutton =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
//   await expect(Invoicepreviewbutton).equals(true);
// });
Then('I verify Generate Voucher button is displayed to the user in create Voucher section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const voucherGeneratebutton = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionGenerateVoucherButton);
        yield expect(voucherGeneratebutton).equals(true);
    });
});
//  failed line
Then('I verify remove party option is disabled in actions menu when charge code is selected', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const removePartystate = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyActionsButtonRemovePartyCSS);
        console.log("The attribute value of remove party is = " + removePartystate[0]);
        if (removePartystate[0].includes("option-disabled")) {
            yield expect(true).equals(true);
            console.log("The remove charges button is disabled");
        }
        else {
            yield expect(true).equals(false);
            console.log("The remove charges button is Enabled");
        }
    });
});
// expense currency verify
Then('I verify if the Currency Voucher text box is having the same currency as the Vouchered charge code', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const voucherCurrencyboxvalue = yield hooks_1.page.getAttributeValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeExpenseVoucherCurrencyboxCSS, "value");
        yield expect(voucherCurrencyboxvalue).equals("USD");
        console.log("The currency on the create invoice page is " + voucherCurrencyboxvalue);
    });
});
// preview voucher 
When('I click on the preview Voucher button in the create Voucher section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
        console.log("The preview invoice button is clicked successfully");
    });
});
Then('I verify if the Voucher preview title can be verified as {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
Then('I click the OK button on the Voucher preview frame', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
Then('I verify if the user is returned back to the Create Voucher section', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
Then('I click on the Generate Voucher button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeExpenseActionsMenuCreateVoucherButton);
    });
});
Then('I would verify the success message on creation of Voucher modal', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(3000);
        const successmodalheadertext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeExpenseVoucherSUCCESSmodalTitle);
        console.log("The modal  header on the success voucher modal is " + successmodalheadertext);
        yield expect(successmodalheadertext).equals("Success");
        const successmodalbodytext = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSmodalBODY);
        console.log("The body on the success invoice modal is " + successmodalbodytext);
        yield expect(successmodalbodytext).includes("Voucher data saved. The voucher can be viewed in the Financial Overview screen. Would you like to create another voucher for Timothy A. Moore?");
    });
});
// cancel Voucher
When('I click on cancel button on the Create Voucher section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionCancelButton);
        console.log("The cancel button on create Voucher is clicked");
    });
});
Then('I verify if the warning modal is closed and the user is on the create Voucher section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const createVoucherheader = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);
        yield expect(createVoucherheader).equals(true);
        console.log("The user returns gto the create voucher section successfully");
    });
});
Then('I verify if the Create Voucher Section is closed and the user returns to the Expense section screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const createvoucherheader = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);
        yield expect(createvoucherheader).equals(false);
        console.log("The user returns gto the charge code entryUI and the creation of voucher is cancelled");
    });
});
//  expense charge code field validations  : pending 02/27
Then('I remove the existing expense charge code value', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clearElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeinputWhenCheckboxNotPresent);
        console.log("The value in the charge code input field is cleared");
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeinputWhenCheckboxNotPresent);
    });
});
Then('I hover on the expense Charge code text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpensepartyChargeCodeinputWhenCheckboxPresent);
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyChargeCodeinputWhenCheckboxPresent);
        console.log("The cursor is hovering over the charge code text box");
    });
});
Then('I verify if the expense charge code input field is providing the error message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
        const valueinCCExpenseinputbox = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensepartyChargeCodeinputWhenCheckboxWARNINGCell);
        yield expect(valueinCCExpenseinputbox).equals("");
        console.log("The value in the expense CC input box after removal of charge code is " + valueinCCExpenseinputbox);
    });
});
Then('I remove the Expense Unit type value', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxNotPresentCSS);
        console.log("The value in the expense unit type  input field is cleared");
    });
});
Then('I hover on the expense Unit type text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        //  await page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxNotPresentCSS);
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxPresent);
        console.log("The cursor is hovering over the unit type text box");
    });
});
Then('I verify if the expense unit type field is providing the the error box and tool tip', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        //  double click units
        yield hooks_1.page.clickElementUsingXpathNew(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensePartyUnitsTextBoxCSSTopmostwarningCell);
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
        yield hooks_1.page.hitTab();
        // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        // await expect(valueinCCinputbox).equals("");
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        yield hooks_1.page.hoverElementUsingXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxPresent);
        yield hooks_1.page.hitTab();
        const ExpenseUnitTypeTooltipText = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpenseuNITTypeFieldToolTip);
        yield expect(ExpenseUnitTypeTooltipText).equals("Please select a value");
        console.log("The text in tool tip is " + ExpenseUnitTypeTooltipText);
        const valueinCCinputbox = yield hooks_1.page.getTextFromXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        yield expect(valueinCCinputbox).equals("");
        console.log("The value in the expense unit type box after removal of charge code is :  " + valueinCCinputbox + " indicating its Empty");
    });
});
Then('I clear the existing expense curreny value', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(2000);
        yield hooks_1.page.clearElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSS);
        console.log("The value in the expense currency field is cleared");
    });
});
Then('I verify if the expense currency input field is providing the the error box and tool tip', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //  
        //  double click units
        //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
        //  await page.hitTab();
        yield hooks_1.page.waitForFewSeconds(1000);
        // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
        // await expect(valueinCCinputbox).equals("");
        //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
        yield hooks_1.page.hoverElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
        // await page.waitForFewSeconds(1000);
        yield hooks_1.page.hoverElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
        yield hooks_1.page.hitTab();
        const valueinExpenseCurrencyinputbox = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
        yield expect(valueinExpenseCurrencyinputbox).equals("");
        console.log("The value in the expense currency box after removal of charge code is :  " + valueinExpenseCurrencyinputbox + "indicating Empty");
        const CurrencyTooltipText = yield hooks_1.page.getText(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpenseCurrencyFieldToolTip);
        yield expect(CurrencyTooltipText).equals("Please select a value");
        console.log("The text in tool tip is " + CurrencyTooltipText);
    });
});
// expense red warning cell
Then('I verify if the expense charge code input field is displaying a red colored warning cell', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCredcellattribute = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyChargeCodeinputfIRSTcHECKBoxRedWarningcellCSS);
        console.log(CCredcellattribute[0]);
        yield expect(CCredcellattribute[0].includes('warning-cell')).equals(true);
    });
});
Then('I verify if the expense unit type field is displaying a red colored warning cell', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCredcellattribute = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyUnitTypeCellTopmostREDwarningCellCSS);
        console.log(CCredcellattribute[0]);
        yield expect(CCredcellattribute[0].includes('warning-cell')).equals(true);
    });
});
Then('I verify if the expense Currency input field is displaying a red colored warning cell', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var CCredcellattribute = yield hooks_1.page.getAllTextAttributes(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
        console.log(CCredcellattribute[0]);
        yield expect(CCredcellattribute[0].includes('warning-cell')).equals(true);
    });
});
// expense invalid value :
// expense charge netting restriction :Disable Users from Invoicing and Vouchering Charge Codes That Have Been Configured to Charge Net
Then('I verify the toast message is displayed to the user {string} for expense charge', function (text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.waitForFewSeconds(1000);
        const toastmsgtext = yield hooks_1.page.getAllTextContent(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToastCSS);
        console.log("The charges netting restrictiong toast is : " + toastmsgtext[0]);
        yield expect(toastmsgtext[0]).equals(text);
        console.log("The charges netting restrictiong toast is displayed to the user");
    });
});
Then('I click on the x on the toast for expense charge netting', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield hooks_1.page.clickElement(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseSectionChargeNETTINGToastButtonCloseCSS);
        console.log("The x on the toast is clicked");
    });
});
Then('I verify the expense charge code input box is empty', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const checkboxpresent = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeSelectionCheckBoxVisible);
        console.log("The  check box is present " + checkboxpresent);
        if (checkboxpresent === false) {
            console.log("if block ");
            const checkboxtext = yield hooks_1.page.getAllTextAttributesValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargecodeinputWhenCheckboxnotPresentCSS);
            yield expect(checkboxtext[0]).equals("");
        }
        else {
            console.log("else block ");
            const checkboxtext = yield hooks_1.page.getAllTextAttributesValue(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseChargeCodeinputWhenCheckboxPresentCSS);
            yield expect(checkboxtext[0]).equals("");
        }
    });
});
Then('I verify the toast message is not displayed to the user in expense section', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const toastmessagevisiblity = yield hooks_1.page.isElementVisibleByXpath(ShipmentFinSummaryHomepage_1.ShipmentFinSummaryHome.CCEExpenseSectionChargeNETTINGToast);
        console.log("visibility" + toastmessagevisiblity);
        yield expect(toastmessagevisiblity).equals(false);
    });
});
