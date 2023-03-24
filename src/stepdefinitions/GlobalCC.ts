import { searchPage } from "../pages/searchPage";
import { landingPage } from "../pages/landingPage";
import { homePage } from "../pages/homePage";
import { categoryDisplayScreen } from "../pages/categoryDisplayScreen";
import { addaCategoryChargeCodeScreen } from "../pages/addaCategoryChargeCodeScreen";
import { globalChargeCodedisplayScreen } from "../pages/GlobalChargeCodedisplayScreen";
import { page } from "../support/hooks";
import { doesNotReject } from "assert";
import { assert, Console } from "console";
const { Given, When, Then } = require("@cucumber/cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var GlobalTestChargeCodeName;
var TestGlobalCCDescription;
var TestGlobalCCRandomName;

When("I click on the Global link on home page", async function () {
  await page.waitForFewSeconds(3);
  console.log("I click on the Global Charge code button on Home page");

  await page.clickElement(homePage.globalHomeButton);
});

Then(/^I should see the Global Charge code display screen$/, async function () {
  console.log("I should see the Category display screen");
  await page.waitForFewSeconds(1000);
  const isGlobalCCHeaderisVisible = await page.isElementVisible(
    globalChargeCodedisplayScreen.GlobalCCDisplayScreenTitle
  );
  if (isGlobalCCHeaderisVisible) {
    console.log("Global CC  Header is visible");
  } else {
    console.log("Global CC Header is not visible");
  }
});

Then(
  /^I should see the add and filter icons on Global Display Screen$/,
  async function () {
    console.log("I should see the add and filter icons");
    const isaddNewGlobalCCIconisVisible = await page.isElementVisible(
      globalChargeCodedisplayScreen.GlobalPageAddIcon
    );
    if (isaddNewGlobalCCIconisVisible) {
      console.log("Add new Global Charge Code icon is visible");
    } else {
      console.log("Add new Global Charge Code icon is not visible");
    }

    const isFilterGlobalCCIconisVisible = await page.isElementVisible(
      globalChargeCodedisplayScreen.GlobalFilterIcon
    );
    if (isFilterGlobalCCIconisVisible) {
      console.log("Filter  Global Charge Code icon is visible");
    } else {
      console.log(
        "Filter  Global Charge Code icon is visible icon is not visible"
      );
    }
  }
);

When(
  "I hover the mouse on add icon on Global Display Screen",
  async function () {
    console.log("I hover the mouse on add icon");

    await page.hoverElement(globalChargeCodedisplayScreen.GlobalPageAddIcon);
  }
);

Then(/^I should see the add tooltip text "(.*?)"$/, async function (text) {
  let addGlobalCCToolTip = await page.getTextFromXpath(
    globalChargeCodedisplayScreen.GlobalPageAddIconToolTipText
  );
  await console.log("Tool tip is of Add icon:" + addGlobalCCToolTip);

  await console.log("Tool tip of add icon  :" + addGlobalCCToolTip);

  await console.log("The expected text from add icon tool tip is " + text);
  await expect(addGlobalCCToolTip).equals(text);
});

When(
  "I hover the mouse on the filter icon on Global Display Screen",
  async function () {
    console.log("I hover the mouse on the filter icon on Global Page");
    await page.waitForFewSeconds(30);
    await page.hoverElement(globalChargeCodedisplayScreen.GlobalFilterIcon);
  }
);

Then(/^I should see the tooltip text "(.*?)"$/, async function (text: string) {
  let GlobalCCPageFilterToolTip = await page.getTextFromXpath(
    globalChargeCodedisplayScreen.GlobalPageFilterIconToolTipText
  );
  await console.log("Tool tip of Filter icon :" + GlobalCCPageFilterToolTip);
  await console.log("The expected text from Filter tool tip is " + text);
  await expect(GlobalCCPageFilterToolTip).equals(text);
});

Then(
  "I should see an accordian view of all the Categories linked to Global charge codes",
  async function () {
    await page.waitForFewSeconds(3);
    var accordionCategoriesList = await page.getAllTextContent(
      globalChargeCodedisplayScreen.GlobalCategoriesAccordionView
    );
    var flag = false;
    await console.log(
      "The total global categories in accordion view are " +
        accordionCategoriesList.length
    );
    if (accordionCategoriesList.length >= 1) {
      flag = true;
    }
    await expect(flag).equals(true);
  }
);

When("I click on any category in the accordian view", async function () {
  await page.clickElementUsingXpath(
    globalChargeCodedisplayScreen.GlobalCategoryScreenFirstAccordion
  );
  await console.log("First category of accordion view is clicked");
});

Then(
  "I should see an expanded view of all the Global charge codes linked to that category in card format",
  async function () {
    var globalCategorieslistlinkedtoFirstCategory =
      await page.getAllTextContent(
        globalChargeCodedisplayScreen.GlobalCategoryChargeCodeCardBody
      );
    await console.log(
      "The number of charge codes in first accordion are  " +
        globalCategorieslistlinkedtoFirstCategory.length
    );
    var flag = false;
    if (globalCategorieslistlinkedtoFirstCategory.length >= 1) {
      flag = true;
    }
    await expect(flag).equals(true);
  }
);

When("I click on the category view again", async function () {
  await page.clickElementUsingXpath(
    globalChargeCodedisplayScreen.GlobalCategoryScreenFirstAccordion
  );
});

Then(
  "The expanded view should collapse back to accordion view",
  async function () {
    var globalCategorieslistlinkedtoFirstCategory =
      await page.getAllTextContent(
        globalChargeCodedisplayScreen.GlobalCategoryChargeCodeCardBody
      );
    await console.log(
      "The number of charge codes in after closing accordion are  " +
        globalCategorieslistlinkedtoFirstCategory.length
    );
    var flag = false;
    if (globalCategorieslistlinkedtoFirstCategory.length === 0) {
      flag = true;
    }
    await expect(flag).equals(true);
  }
);

Then(
  /^I should enter the category description {string} and purpose as {string}in the respective text boxes$/,
  async function (description: string, purpose: string) {
    console.log("I create description and purpose text boxes");
    await page.sendElementText(
      categoryDisplayScreen.categoryDescriptionTextBox,
      description
    );
    await page.sendElementText(
      categoryDisplayScreen.categoryPurposeTextBox,
      purpose
    );
  }
);

When("I click on Add icon on Global Charge Codes screen", async function () {
  await console.log(
    "I click on the add icon oon the Global charge code screen"
  );
  await page.clickElement(globalChargeCodedisplayScreen.GlobalPageAddIcon);
});

Then(
  "I should be on the Add New Global Charge Code display screen",
  async function () {
    var addGlobalCCTitle = await page.getTextFromXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCaPageTitle
    );
    console.log(
      "The title of the add global charge code page is  " + addGlobalCCTitle
    );
    await expect(addGlobalCCTitle).equals("Add New Global Charge Code");
  }
);

Then(
  "I Should select the {string} from category drop down menu",
  async function (text: string) {
    // await page.clickElement(globalChargeCodedisplayScreen.GlobalAddGlobalCCCategoryDropDown);

    var dafaultdropdownvalue = await page.selectFromDropDownValue(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCCategoryDropDown,
      globalChargeCodedisplayScreen.GlobalAddCCDropDownvalue
    );
    await page.waitForFewSeconds(3000);
    // await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);

    //   await page.scrollToElement(globalChargeCodedisplayScreen.GlobalAddChargeCodeDropDownOption);
    // await page.clickElement(globalChargeCodedisplayScreen.GlobalAddChargeCodeDropDownOption);
  }
);

Then(
  "I should enter the name and description of the new Global charge code",
  async function () {
    await page.waitForFewSeconds(2000);
    GlobalTestChargeCodeName = "TestGCC - Test Global Charge code";
    await page.sendElementText(
      globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox,
      "TestGCC"
    );
    await page.sendElementText(
      globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox,
      "Test Global Charge code"
    );
  }
);

Then ('I should select the default unit type from the drop down menu and select F-Flat Rate type', async function() { 
await page.selectFromDropDownValue(globalChargeCodedisplayScreen.GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdowndefault, globalChargeCodedisplayScreen.GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdownFRateValue);

});

Then("I should enter the Default unit amount", async function () {
  await page.sendElementText(
    globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox,
    "1");
});

Then("I should click on save icon button", async function () {
  await page.clickElementUsingXpath(
    globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton
  );
});

Then(
  "I should verify the success message for new Global charge code",
  async function () {
    console.log("Global charge code created Success message recieved");

    var successConfirmationMessageText = await page.getTextFromXpath(
      addaCategoryChargeCodeScreen.addNewCategorySuccessMessage
    );
    console.log("alert message is : " + successConfirmationMessageText);
    await expect(successConfirmationMessageText).equal(
      "Successfully created charge code"
    );
    console.log("New Global charge code Success message verified");
  }
);

Then(
  "I should be verify the newly created Global charge code",
  async function () {
    await page.clickElementUsingXpath(
      globalChargeCodedisplayScreen.GlobalAddCCTestChargeCodeCategory
    );
    var GlobalTestChargeCodeText = await page.getTextFromXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCTestChargeCodeCard
    );
    console.log(
      "The name and description of the test Global charge code is " +
        GlobalTestChargeCodeText
    );

    await expect(GlobalTestChargeCodeText).equals(GlobalTestChargeCodeName);
  }
);

//  deafult error message validation
Then(
  "I should get an error message {string} and {string} below the text placeholder",
  async function (String1, String2) {
    var defaultamounterrormsg1 = await page.getTextFromXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCDefaultNetAmountErrormsg1
    );
    var defaultamounterrormsg2 = await page.getTextFromXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCDefaultNetAmountErrormsg2
    );
    await expect(defaultamounterrormsg1).equals(String1);
    await expect(defaultamounterrormsg2).equals(String2);
  }
);

Then(
  "I should get an error message {string} and {string} below the Charge code name placeholder",
  async function (String1, String2) {
    var CCNameemptyerrormsg1 = await page.getTextFromXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCNameEmptyErrormsg1
    );
    var CCNameemptyerrormsg2 = await page.getTextFromXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCNameEmptyErrormsg2
    );
    await expect(CCNameemptyerrormsg1).equals(String1);
    await expect(CCNameemptyerrormsg2).equals(String2);
  }
);

// description error validation
Then(
  "I should get an error message {string} below the Charge code description placeholder",
  async function (String1) {
    var CCDescriptionemptyerrormsg1 = await page.getTextFromXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCDescriptionErrormsg
    );

    await expect(CCDescriptionemptyerrormsg1).equals(String1);
  }
);
//  random name for testing Global charge code
Then('I should enter the test name and description for the new Global charge code', async function () 
{   
    console.log("I should see description and purpose text boxes");
var randomGlobalChargeCodeName = "Test" +Math.floor(Math.random()*2000);
console.log("random Global Charge Code name = "  + randomGlobalChargeCodeName);
TestGlobalCCRandomName = randomGlobalChargeCodeName;

await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, randomGlobalChargeCodeName );

var randomGlobalChargeCodeDescription = "TestGlobalCCDesc" +Math.floor(Math.random()*2000);
    await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, randomGlobalChargeCodeDescription);
TestGlobalCCDescription =  randomGlobalChargeCodeDescription;     
         });


 Then('I should click on edit icon button on the newly created Global charge code', async function () 
          {
              await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCLastCardEditIcon);
                     console.log("The Edit button on the Last Global charge code is clicked");
                     
                   });


Then('I should click on all the radio button on Transaction config section',async  function () {      
                    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCTaxRadiobutton);
                    console.log("The tax option radio button  in transaction config is clicked");
                    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCPassthroughRadiobutton);
                    console.log("The Passthrough option radio button  in transaction config is clicked");
                    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCDutyNettingRadiobutton);
                    console.log("The Duty Netting option radio button  in transaction config is clicked");
                    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCProformaRadiobutton);
                    console.log("The Proforma option radio button  in transaction config is clicked");

                  });
Then ('I should click on the Test automation Category in Accordion view', async function () {
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddCCGlobalTestAutomationCategoryAccordion);
    console.log("The Global Automation Test Category in accordiong view is clicked");
});

When('I click on the charge code card', async function () {
     await page.waitForFewSeconds(3000);          
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
    console.log("The most recently created Global charge code is clicked");
                  });


Then('I should verify if the checkboxes are checked for the transaction config option', async function () {  
    await page.waitForFewSeconds(2000);
    
    page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickModalTaxCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
    console.log("The Tax check box on the Pop up modal is checked");
    page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickModalDutyNettingCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});   
    console.log("The Duty Netting check box on the Pop up modal is checked");     
    page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickModalPassthroughCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
    console.log("The Passthrough check box on the Pop up modal is checked");
    page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickProformaCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
    console.log("The Proforma check box on the Pop up modal is checked");


});  
              
Then ('I should verify the title of the Modal is matching to the New Global charge code', async function() {
var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCDescription;
console.log("The expected Name and Description of GlobalCC is = " + CCNameandDecription);
var GlobalCCActualModalHeader = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
console.log ("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
await expect(CCNameandDecription).equals(GlobalCCActualModalHeader);
console.log("The name and the description of the Global charge code is matching the header on the pop up modal ");
});
                    

  Then('I should click on Close button on the modal',async function () {
                  await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalCloseButton);
                  console.log("The close button on the Modal is clicked sucessfully");
                  });

 When('I click on the Edit button on the Pop Up Modal', async function () {
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalEditButton);
       console.log("The Edit button on the Modal is clicked sucessfully");

    });

       Then('I should be on the Edit Global Charge code Screen',async function () {
       var EditSCreenActualTitle= await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCEditChargeCodeScreenTitleText);
       console.log("The actual title of the Edit screen is  " + EditSCreenActualTitle);
       var EditScreenExpectedTitle= "Edit Global Charge Code";
       await expect(EditSCreenActualTitle).equals(EditScreenExpectedTitle);
       

    });

    When('I click on the cancel button on Edit Global Charge code screen',async function () {
       await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCEditScreenCancelButton);
       console.log("The Cancel button on the Edit Global charge code screen is clicked sucessfully");
      });

    //   transaction filter selection
      Then ('I should click on the Transaction Filters section and select all the transaction type filters', async function () { 
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterTransactionTypeAccordion);
        console.log("The transaction Type is clicked on the accordion in the transaction Filter section");

        await page.waitForFewSeconds(1000);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeAirShipmentCheckBox);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeOceanShipmentCheckBox);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeCustomsFinOnlyCheckBox);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCTransactionFilterTransactionTypeServiceFinOnlyCheckBox);

      });

      Then ('I should verify if the Transaction types selected are reflecting on the Global Charge code Card pop up modal', async function(){
        var TransactionTypeValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(TransactionTypeValues);
        await expect(TransactionTypeValues.includes("Air Shipment")).equals(true);
        await expect(TransactionTypeValues.includes("Ocean Shipment")).equals(true);
        await expect(TransactionTypeValues.includes("Service Fin Only")).equals(true);
        await expect(TransactionTypeValues.includes("Customs Fin Only")).equals(true);


      });

      Then ('I should click on the Transaction Filters section and select all the Revenue-Expense filters', async function () { 
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterRevenueExpenseAccordion);
        console.log("The Revenue-Expense filter is clicked on the accordion in the transaction Filter section");

        await page.waitForFewSeconds(1000);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterExpenseMandatoryCheckBox);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterRevenueMandatoryCheckBox);

      });


      Then ('I should verify if the Revenue-Expense Filters selected are reflecting on the Global Charge code Card pop up modal', async function(){
        var RevenueExpenseFilterValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(RevenueExpenseFilterValues);
        await expect(RevenueExpenseFilterValues.includes("Revenue Mandatory")).equals(true);
        await expect(RevenueExpenseFilterValues.includes("Expense Mandatory")).equals(true);
     
      });

    //   importcountry transaction filter verification on pop  up
    Then ('I should click on the Transaction Filters section and select all the Import Country filters', async function () { 
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterImportCountryAccordion);
        console.log("The Import Country Filter is clicked on the accordion in the transaction Filter section");

        await page.waitForFewSeconds(1000);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterImportCountryChina);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterImportCountryIndia);

      });

      Then ('I should verify if the Import Country Filters selected are reflecting on the Global Charge code Card pop up modal', async function(){
        var ImportCountryFilterValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(ImportCountryFilterValues);
        await expect(ImportCountryFilterValues.includes("China")).equals(true);
        await expect(ImportCountryFilterValues.includes("India")).equals(true);
     
      });

    //  Export country transaction filter pop up modal verification
    Then ('I should click on the Transaction Filters section and select all the Export Country filters', async function () { 
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterExportCountryAccordion);
        console.log("The Export Country Filter is clicked on the accordion in the transaction Filter section");

        await page.waitForFewSeconds(1000);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCAddTransactionFilterExportCountryUnitedStates);
       

      });

      Then ('I should verify if the Export Country Filters selected are reflecting on the Global Charge code Card pop up modal', async function(){
        var ExportCountryFilterValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
        console.log(ExportCountryFilterValues);
        await expect(ExportCountryFilterValues.includes("United States")).equals(true);
        
     
      });  

    //  Archive Global Charge code 
    Then('I should Archive the Global Charge Code', async function () { 
        await page.pageRefresh();
        await page.waitForFewSeconds(1000);
        await page.clickElement(homePage.hamburgerMenuButton);
        await page.clickElement(homePage.chargeCodeButton);
        await page.waitForFewSeconds(1000);
        await page.clickElement(homePage.globalHomeButton);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddCCGlobalTestAutomationCategoryAccordion);

        await page.clearElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCLastCardEditIcon);
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCChargeCodeArchiveButtonIcon);
    var GlobalChargeCodeCArchiveModalText = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCArchiveModalText);
    await expect(GlobalChargeCodeCArchiveModalText).equals("Click Ok to proceed with archiving this Global Charge Code?");
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCArchiveModalOKButton);
        await page.clearElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);

        console.log("Global Charge code has been archived");

        var successConfirmationMessageText = await page.getTextFromXpath(
          addaCategoryChargeCodeScreen.addNewCategorySuccessMessage
        );
        console.log("alert message is : " + successConfirmationMessageText);
        await expect(successConfirmationMessageText).equal(
          "Charge code has been archived"
        );
        console.log("Global charge code archived message verified");
      

    });

    // Filter Functionality
    When('I hover the mouse on the Global display screen Filter icon',async function () {
       await page.hoverElement(globalChargeCodedisplayScreen.GlobalCCFilterIcon);
       console.log("The mouse is hovered on the Filter icon on the Global charge code display screen");
      });

      Then('I should get the text {string}', async function (text : string) {
        var FiltericonToolTipText = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCFilterIconTooltipText);
        await expect(FiltericonToolTipText).equals(text);

      });

      When('I click on the Filter icon on the Global charge code screen', async function () {
        await page.clickElement(globalChargeCodedisplayScreen.GlobalCCFilterIcon);
        console.log("The Filter icon on the Global display screen is clicked");
        await page.waitForFewSeconds(2000);
      });

    

      Then('I should enter the text input and the relevant categories having the matching charge codes should be displayed',async function () {
        await page.sendElementText(globalChargeCodedisplayScreen.GlobalCCFilterTextinputField,TestGlobalCCRandomName);
        await page.waitForFewSeconds(1000);
        var FilteredFirstAccordionText = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCFilteredFirstAccordionText);
        await expect(FilteredFirstAccordionText.includes("Global Charge code category for Automation")).equals(true);
      });

      Then('I should validate if the accordion displayed is having the matching charge codes to the filter text input',async function () {
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilteredFirstAccordionText);
        var LastCreatedGlobalCCCardText = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
        await expect(LastCreatedGlobalCCCardText.includes(TestGlobalCCRandomName)).equals(true);
        console.log("The Filtered card is validated");
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


    Then('I should select the {string} check box on the transaction Config dropdown on the Filter input section',async function (text:string) {
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigFilterDropdownButton);
      await page.waitForFewSeconds(2000);
      if (text ==="Tax"){
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigTaxCheckBox);

     } else if (text === "Passthrough") { 
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigPassthroughCheckBox);
     } else if ( text === "DutyNetting") {
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigDutynettingCheckBox); 
    } else if (text === "Proforma") { 
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigProformaCheckBox);
    }

    });

    Then('I should click on the Transaction Config Dropdown', async function () { 
await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionConfigFilterDropdownButton);
    });

     Then('I should open the first accordion and click on the first Global Charge code card',async function () {
      await page.waitForFewSeconds(2000);
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFirstCategoryAccordion);
console.log("The First available category in the accordion is clicked");

      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
console.log("The last Global Charge code card on the First accordion is clicked ");
    });

    Then('I should click on the First Accordion',async function () {
      await page.waitForFewSeconds(2000);
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFirstCategoryAccordion);
console.log("The First available category in the accordion is re clicked");
    });



    Then('I should verify if the {string} checkbox is checked for the transaction config option',async function (text:string) {
await page.waitForFewSeconds(2000);
      if (text ==="Tax"){
        page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickModalTaxCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});

    console.log("The Tax check box on the Pop up modal is checked");
     } else if (text === "Passthrough") { 
      page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickModalPassthroughCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
      console.log("The Passthrough check box on the Pop up modal is checked");
     } else if ( text === "DutyNetting") {
      page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickModalDutyNettingCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});   
    console.log("The Duty Netting check box on the Pop up modal is checked"); 
    } else if (text === "Proforma") { 
      page.checkBoxCheckedorNot(globalChargeCodedisplayScreen.GlobalCCCardClickProformaCheckbox).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
      console.log("The Proforma check box on the Pop up modal is checked");
    }

    });

    // transaction Type Filter verificstion 
    Then('I should select the {string} check box on the transaction type Transaction Filter dropdown on the Filter input section',async function (text:string) {
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeFilterDropdownButton);
      await page.waitForFewSeconds(2000);
      if (text ==="Air Shipment"){
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeAirShipmentCheckBox);

     } else if (text === "Ocean Shipment") { 
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeOceanShipmentCheckBox);
     } else if ( text === "Service Fin Only") {
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeServiceFinOnlyCheckBox); 
    } else if (text === "Customs Fin Only") { 
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeCustomFinOnlyCheckBox);
    }
    });





    Then('I should verify if the {string} label is visible for the transaction type Transaction Filter option', async function (text: string) {
    
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeFilterDropdownButton);
      
    await page.waitForFewSeconds(2000);
    if (text ==="Air Shipment"){
      var TransactionTypeValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
      console.log(TransactionTypeValues);
      await expect(TransactionTypeValues.includes("Air Shipment")).equals(true);
      

   } else if (text === "Ocean Shipment") { 
    var TransactionTypeValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
    console.log(TransactionTypeValues);
    await expect(TransactionTypeValues.includes("Ocean Shipment")).equals(true);
      
   } else if ( text === "Service Fin Only") {
    var TransactionTypeValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
    console.log(TransactionTypeValues);
    await expect(TransactionTypeValues.includes("Service Fin Only")).equals(true);
      
  } else if (text === "Customs Fin Only") { 
    var TransactionTypeValues= await page.getAllTextContent(globalChargeCodedisplayScreen.GlobalCCTransactionTypeFilterselectedValuesCSS);
    console.log(TransactionTypeValues);
    await expect(TransactionTypeValues.includes("Customs Fin Only")).equals(true);
  }
         });
        
         Then('I should select the {string} check box on the Revenue Expense Transaction Filter dropdown on the Filter input section',async function (text :string) {
  await page.waitForFewSeconds(2000);
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterExpenseRevenueFilterDropdownButton);
      await page.waitForFewSeconds(2000);
      if (text ==="Revenue Mandatory"){
        await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeRevenueMandatoryCheckBox);

     } else if (text === "Expense Mandatory") { 
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterTransactionTypeExpenseMandatoryCheckBox);
 }
 });

 Then('I should verify if the {string} label is visible for the Revenue Expense Transaction Filter option',async function (text: string) {
  await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterExpenseRevenueFilterDropdownButton);
    
  await page.waitForFewSeconds(2000);
  if (text ==="Revenue Mandatory"){
   var revenueONModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCRevenueExpenseRevenueMandatoryTextonModalXpath);
  
    await expect(revenueONModal).equals(true);
    console.log("The revenue mandatory selection is verified on the Card Modal");

 } else if (text === "Expense Mandatory") { 
  var expenseONModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCRevenueExpenseExpenseMandatoryTextonModalXpath);
  await expect(expenseONModal).equals(true);
  console.log("The Expense mandatory selection is verified on the Card Modal");

 }
 });

//  verifying import country via filter functionality
Then('I should select few countries check box on the Import Country Transaction Filter dropdown on the Filter input section',async function () {
  await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterImportCountryFilterDropdownButton);

await page.waitForFewSeconds(1000);

await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterScreenImportCountryFilterCHINACheckBox);
console.log("The china country is selected form import country filter on filter screen");

await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterScreenImportCountryFilterINDIACheckBox);
console.log("The india country is selected form import country filter on filter screen");


});


Then('I should verify if the selected countries are visible for the Import Country Transaction Filter option on the Cahrge code Card Modal',async function () {
  var ChinaOnModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCImportCountryFilterCHINAOnCardModal);
  
  await expect(ChinaOnModal).equals(true);
  console.log("The Import country selection  as China  is verified on the Card Modal");


  var IndiaOnModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCImportCountryFilterINDIAOnCardModal);
  
  await expect(IndiaOnModal).equals(true);
  console.log("The IMPORT country selection  as India  is verified on the Card Modal");

});

//verifying EXPORT country via filter functionality  on modal
Then('I should select few countries check box on the Export Country Transaction Filter dropdown on the Filter input section',async function () {
  await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterExportCountryFilterDropdownButton);

  await page.waitForFewSeconds(1000);
  
  await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFilterScreenExportCountryFilterUNITEDSTATESCheckBox);
  console.log("The country United States is selected form import country filter on filter screen");
  

});

Then('I should verify if the selected countries are visible for the Export Country Transaction Filter option on the Charge code Card Modal',async function () {
  var UnitedStatesOnModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCImportCountryFilterUnitedStatesOnCardModal);
  
  await expect(UnitedStatesOnModal).equals(true);
  console.log("The EXPORT country selection  as UNITED STATES  is verified on the Card Modal");
});


Then ('I should archive the E2E Test Category', async function(){ 
await page.clickElementUsingXpath(categoryDisplayScreen.categoriesPageE2ETestingCategorycardEditButton);

await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditCategoryPageArchiveButton);
console.log("The archive button is clicked successfully");

await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditConfirmationModalOKButton);
   console.log("The OK button on the archive confirmation alert is clicked successfully");

   await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditCategoryScreenSaveButton);
    console.log("The Save button on the Edit Category screen is clicked successfully");

});


Then(
  'I Should select the Last Category from category drop down menu',
  async function () {
   var lastCategoryofDropdown = await page.getAttributeValue(globalChargeCodedisplayScreen.GlobalAddaGlobalCCScreenLastCategoryDropdownitem, "value");

   console.log("The value of the last drop down is " + lastCategoryofDropdown);
   await page.selectFromDropDownValue(globalChargeCodedisplayScreen.GlobalAddGlobalCCCategorydropdownButton, lastCategoryofDropdown);

  });

  Then ('I should click on the E2E TEST automation Category in Accordion view', async function () {
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.globalAddCCForE2ETestCategoryAccordion);
    console.log("The E2E GLOBAL Test Automation Category in accordion view is clicked");
});

Then ('I should verify the title of the updated global charge code is not matching to the orignal Global charge code', async function() {
  // var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCDescription;
  // console.log("The expected Name and Description of GlobalCC is = " + CCNameandDecription);
  var GlobalCCActualModalHeader = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
  console.log ("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
  await expect(GlobalCCActualModalHeader).contains(TestGlobalCCRandomName);
  await expect(GlobalCCActualModalHeader).contains(TestGlobalCCDescription);
  console.log("The name and the description of the Global charge code is not matching the header on the pop up modal implying the charge code is updated");
  });

  // E2EFLITERS VERIFICATION

  Then ('I should verify if the Import Country Filters selected are reflecting on the E2E Charge code Card pop up modal', async function () { 
    var ChinaOnModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCImportCountryFilterCHINAOnCardModal);
  
    await expect(ChinaOnModal).equals(true);
    console.log("The Import country selection  as China  is verified on the Card Modal");
  
  
    var IndiaOnModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCImportCountryFilterINDIAOnCardModal);
    
    await expect(IndiaOnModal).equals(true);
    console.log("The IMPORT country selection  as India  is verified on the Card Modal");
  });

  Then ('I should verify if the Export Country Filters selected are reflecting on the E2E Charge code Card pop up modal', async function () { 
    var UnitedStatesOnModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCImportCountryFilterUnitedStatesOnCardModal);
  
    await expect(UnitedStatesOnModal).equals(true);
    console.log("The EXPORT country selection  as UNITED STATES  is verified on the Card Modal");


  });

  Then ('I should verify if the Revenue-Expense Fliters selected are reflecting on the E2E Charge code Card Card pop up modal', async function () { 
    
     var revenueONModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCRevenueExpenseRevenueMandatoryTextonModalXpath);
    
      await expect(revenueONModal).equals(true);
      console.log("The revenue mandatory selection is verified on the Card Modal");
  
    var expenseONModal = await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCRevenueExpenseExpenseMandatoryTextonModalXpath);
    await expect(expenseONModal).equals(true);
    console.log("The Expense mandatory selection is verified on the Card Modal");
  

  });

  // E2E ARCHIVE

  Then ('I should click on the E2E Archive test automation Category in Accordion view', async function () {
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCArchiveE2ECategoryAccordion);
    console.log("The E2E Archive Test Automation Category in accordion view is clicked");
});


Then ('I should archive the E2E Archive Test automation Category', async function(){ 
  await page.clickElementUsingXpath(categoryDisplayScreen.GlobalCCArchiveE2ECategoryCardEditButton);
  
  await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditCategoryPageArchiveButton);
  console.log("The archive button is clicked successfully");
  
  await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditConfirmationModalOKButton);
     console.log("The OK button on the archive confirmation alert is clicked successfully");
  
     await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditCategoryScreenSaveButton);
      console.log("The Save button on the Edit Category screen is clicked successfully");
  
  });

  Then('I should Archive the E2E Global Charge Code', async function () { 
    await page.pageRefresh();
    await page.waitForFewSeconds(1000);
    await page.clickElement(homePage.hamburgerMenuButton);
    await page.clickElement(homePage.chargeCodeButton);
    await page.waitForFewSeconds(1000);
    await page.clickElement(homePage.globalHomeButton);
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCArchiveE2ECategoryAccordion);

    await page.clearElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCLastCardEditIcon);
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCChargeCodeArchiveButtonIcon);
var GlobalChargeCodeCArchiveModalText = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCArchiveModalText);
await expect(GlobalChargeCodeCArchiveModalText).equals("Click Ok to proceed with archiving this Global Charge Code?");
    await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCArchiveModalOKButton);
    await page.clearElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton);


  });
  Then ('I should not be able to access the E2E Archive test automation Category in Accordion view', async function(){ 
var E2EArchiveCategoryvisibility= await page.isElementVisibleByXpath(globalChargeCodedisplayScreen.GlobalCCArchiveE2ECategoryAccordion);
await expect(E2EArchiveCategoryvisibility).equals(false);
console.log("The e2e global charge code has been archived")

  });


  // Then ('I should delete the test automation category', async function () { 
  //   await page.clickElementUsingXpath()

  // });

 

  