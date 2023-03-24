import { searchPage } from "../pages/searchPage";
import { landingPage } from "../pages/landingPage";
import { homePage } from "../pages/homePage";
import { categoryDisplayScreen } from "../pages/categoryDisplayScreen";
import { addaCategoryChargeCodeScreen } from "../pages/addaCategoryChargeCodeScreen";
import { globalChargeCodedisplayScreen } from "../pages/GlobalChargeCodedisplayScreen";
import { countryChargeCodedisplayScreen } from "../pages/CountryChargeCodedisplayScreen";
import { page } from "../support/hooks";
import { doesNotReject } from "assert";
import { assert, Console } from "console";
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

When('I click on the Country link on home page', async function () {
    await page.waitForFewSeconds(3);
    console.log("I click on the Country Charge code button on Home page");
  
    await page.clickElement(homePage.countryHomeButton);
  });

  Then('I should see the Country Charge code display screen', async function () {
    console.log("I should see the Conutry Charge code display screen");
    const isCountryCCHeadertext = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCDisplayScreenTitle);

      await expect(isCountryCCHeadertext).equals("Country Charge Codes")
    console.log("The title of the country cc display screen is = " + isCountryCCHeadertext);
  });

  Then(
    'I should see the add, filter and override icons on Country Display Screen',
    async function () {
      console.log("I should see the add, filter and override icons on Country Display Screen");
      const isaddNewCountryCCIconisVisible = await page.isElementVisible(
        countryChargeCodedisplayScreen.CountryPageAddIconCss
      );
      const isFilterCountryCCIconisVisible = await page.isElementVisible(
        countryChargeCodedisplayScreen.CountryFilterIconCss
      );
      const isOverrideCountryCCIconisVisible = await page.isElementVisible(
        countryChargeCodedisplayScreen.CountryPageOverrideIconCss
      );
      if (isaddNewCountryCCIconisVisible && isFilterCountryCCIconisVisible && isOverrideCountryCCIconisVisible) {
        console.log("The add, filter and override icons on Country Display Screen are visible");
      } else {
        console.log("One of the add, filter and override icons on Country Display Screen are NOT visible");
        await expect(true).equals(false);
      }
    }
  );

  When(
    "I hover the mouse on add icon on Country Charge code display Screen",
    async function () {
      console.log("I hover the mouse on add icon");
  
      await page.hoverElement(countryChargeCodedisplayScreen.CountryPageAddIconCss);
    }
  );

  When(
    "I hover the mouse on the filter icon on Country Charge code display Screen",
    async function () {
      console.log("I hover the mouse on the filter icon on Country Page");
      await page.waitForFewSeconds(30);
      await page.hoverElement(countryChargeCodedisplayScreen.CountryFilterIconCss);
    }
  );

  When(
    "I hover the mouse on the Override icon on Country Charge code display Screen",
    async function () {
      console.log("I hover the mouse on the Override icon on Country Page");
      await page.waitForFewSeconds(30);
      await page.hoverElement(countryChargeCodedisplayScreen.CountryPageOverrideIconCss);
    }
  );

  Then('I should see the country icons tooltip text {string}', async function (text: string) {
    let isIcontooltiptext = await page.getTextFromXpath(
      countryChargeCodedisplayScreen.CountryPageIconsToolTipText
    );
    await console.log("The expected text from icon tool tip is " + text);
    await console.log("The actual text from icon tool tip is " + isIcontooltiptext);
    await expect(isIcontooltiptext).equals(text);

  });

  Then(
    "I should see an accordian view of all the Countries linked to Country charge codes in accordion view",
    async function () {
      await page.waitForFewSeconds(3);
      var accordionCountriesList = await page.getAllTextContent(
        countryChargeCodedisplayScreen.CountryCCountryAccordionView
      );
      var flag = false;
      await console.log(
        "The total Countries list in accordion view are " +
        accordionCountriesList.length
      );
      if (accordionCountriesList.length >= 1) {
        flag = true;
      }
      await expect(flag).equals(true);
    }
  );

  // country code accordion view 

  When("I click on any Country in the accordian view", async function () {
    await page.clickElementUsingXpath(
      countryChargeCodedisplayScreen.CountryCCDisplayScreenFirstAccordion
    );
    await console.log("First Country in accordion view is clicked");
  });
  
  Then(
    "I should see an expanded view of all the charge codes linked to that country in card format",
    async function () {
      var CountryChargeCodelistlinkedtoFirstCountry = await page.getAllTextContent(
          countryChargeCodedisplayScreen.CountryCCChargeCodeCardBody
        );
      await console.log(
        "The number of charge codes in first country accordion are  " +
        CountryChargeCodelistlinkedtoFirstCountry.length
      );
      var flag = false;
      if (CountryChargeCodelistlinkedtoFirstCountry.length >= 1) {
        flag = true;
      }
      await expect(flag).equals(true);
    }
  );
  
  When("I click on the Country expanded view again", async function () {
    await page.clickElementUsingXpath(
      countryChargeCodedisplayScreen.CountryCCDisplayScreenFirstAccordion
    );
  });
  
  Then(
    "The expanded country view should collapse back to accordion view",
    async function () {
      var CountryChargeCodelistlinkedtoFirstCountry =
        await page.getAllTextContent(
          countryChargeCodedisplayScreen.CountryCCChargeCodeCardBody
        );
      await console.log(
        "The number of charge codes in after closing accordion are  " +
        CountryChargeCodelistlinkedtoFirstCountry.length
      );
      var flag = false;
      if (CountryChargeCodelistlinkedtoFirstCountry.length === 0) {
        flag = true;
      }
      await expect(flag).equals(true);
    }
  );

//   tc054:create  a country charge code

When('I click on Add icon on Country Charge Codes screen',async function () {
   await page.clickElement(countryChargeCodedisplayScreen.CountryPageAddIconCss);
   console.log("The Add a country charge code icon ibutton is clicked");
  });

  Then('I should be on the Add New Country Charge Code display screen',async function () {
  {
        var addCountryCCTitle = await page.getTextFromXpath(
          countryChargeCodedisplayScreen.CountryAddCountryCCaPageTitle
        );
        console.log(
          "The title of the add Country charge code page is  " + addCountryCCTitle
        );
        await expect(addCountryCCTitle).equals("Add New Country Charge Code");
      }
  });  


  Then('I should click the desired country {string} from the Country Placeholder',async function (text:string) {
    await page.clickElementUsingXpath((countryChargeCodedisplayScreen.CountryAddCountryChargeCodeCountryPlaceholder));
    await page.clickElementUsingXpath((countryChargeCodedisplayScreen.CountryAddCountryChargeCodeCountryDynamicInput).replace("{0}",text));  
console.log("The country China is selected for country charge code test automation ")
});


Then(
    "I should enter the name and description of the new Country charge code",
    async function () {
      await page.waitForFewSeconds(2000);
      CountryTestChargeCodeName = "TestCouCC - Test Country Charge code";
      await page.sendElementText(
        countryChargeCodedisplayScreen.CountryAddCountryChargeCodeNametextbox,
        "TestCouCC"
      );
      await page.sendElementText(
        countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDescriptiontextbox,
        "Test Country Charge code"
      );
    }
  );


  Then ("I should select the Default Unit Type as {string}", async function(text: string) {
    
    OverriddenDefaultUnitType = text;

    const temp =((countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeDropdownValue).replace("{0}",text));
  if (text==="F - Flat Rate") {
    await page.selectValueFromDropDown(countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeDropdown, "a22e3d9a-8430-49af-a364-9dc8c2650294");

  }
  else {
      // console.log("The value of temp is " + temp);
    //  var defaultunitvalue = await page.getAttributeValue(temp, "value");
    //  console.log("The value of overrideen default unit type is  " + defaultunitvalue);
    await page.selectValueFromDropDown(countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeDropdown, "3f364b32-06b0-4abd-a668-c93588e8aa95");
  }
  });

  Then("I should enter the Default unit amount as {string}", async function (text:string) {
   await page.clearElement(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox);

    OverriddenDefaultUnitAmount = text;
    await page.sendElementText(
      globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox,
      text);
  });

      



  Then('I should verify the success message for new Country charge code',async function () {
    console.log("Global charge code created Success message recieved");

    var successConfirmationMessageText = await page.getTextFromXpath(
      addaCategoryChargeCodeScreen.addNewCategorySuccessMessage
    );
    console.log("alert message is : " + successConfirmationMessageText);
    await expect(successConfirmationMessageText).equal(
      "Successfully created charge code"
    );
    console.log("New Global charge code Success message verified");
  
  });

  Then('I should be verify the newly created Country charge code',async function () {
    await page.clickElementUsingXpath(
        countryChargeCodedisplayScreen.CountryAddCountryChargeCodeAccordionForChina
      );
      var CountryTestChargeCodeText = await page.getTextFromXpath(
        countryChargeCodedisplayScreen.CountryAddCountryChargeCodeTestCodeCard
      );
      console.log(
        "The name and description of the test Global charge code is " +
        CountryTestChargeCodeText
      );
  
      await expect(CountryTestChargeCodeText).equals(CountryTestChargeCodeName);
    
  });
//  tc057:transaction config button

Then('I should click on the Test automation Country {string} in Accordion view',async function (text: string) {
     
    await page.waitForFewSeconds(2000);

    const temp =((countryChargeCodedisplayScreen.CountryAddCountryChargeCodeAccordionDynamic).replace("{0}",text));
    await page.clickElementUsingXpath(temp);

    console.log("THIS IS ERROR STEP");
    
  });

  Then('I should click on edit icon button on the newly created country charge code',async function () {  
      
    await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryAddCountryChargeCodeLastCardEditIcon);
    console.log("The edit icon on the newly created country charge code is clicked ");

  });

  Then('I should verify if the checkboxes are checked for the transaction config option of Country charge code', async function () {  
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

Then ('I should verify the title of the Modal is matching to the New test Country charge code', async function() {
    var CCNameandDecription = CountryTestChargeCodeName;
    console.log("The expected Name and Description of CountryCC is = " + CCNameandDecription);
    var GlobalCCActualModalHeader = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
    console.log ("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
    await expect(CCNameandDecription).equals(GlobalCCActualModalHeader);
    console.log("The name and the description of the Country charge code is matching the header on the pop up modal ");
    });

    Then('I should verify of the default unit type selected is matching the info on the carge code card Modal', async function (){
      
var defaultUnitypeactual = await page.getAttributeValue(countryChargeCodedisplayScreen.CountryAddCountryChargeCodeDefaultUnitTypeOnModalCSS, "value");
console.log("Text from default ", defaultUnitypeactual);
await expect(defaultUnitypeactual).equals("F - Flat Rate");
    });


    Then('I should be on the Edit Country Charge code Screen',async function () {
    var editscreenTitle =   await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryAddCountryChargeCodeEditSCreenTitle);
console.log("The actual value on the edit screen title is : " + editscreenTitle  )
    await expect(editscreenTitle).equals("Edit Country Charge Code")
    });


    When('I click on the cancel button on Edit Country Charge code screen',async function () {
    await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCEditScreenCancelButton);
    });


    When('I click on the Filter icon on the country charge code display screen',async function () {       
    await page.clickElement(countryChargeCodedisplayScreen.CountryCCFilterIconCSS);
    console.log("The filter icon on the country charge code screen is clicked");
    });

    Then('I should get the label {string} near the filter drop downs',async function (text : string) {
     var filterbarlabelText = await page.getAttributeValue(countryChargeCodedisplayScreen.CountryCCFilterlabelCSS, "placeholder" );
    console.log("The actual value of the filter bar label is : " + filterbarlabelText);
    console.log("The  expected of the filter bar label is : " + text);

     await expect(filterbarlabelText).equals(text);

    });

    Then('I should enter the text {string} in the Filter text box', async function (text:string){
      await page.sendElementText(countryChargeCodedisplayScreen.CountryCCFilterlabelCSS, text);

      await page.waitForFewSeconds(2000);
    });

    

    Then ('I should open the first accordion and validate the text on the first filtered Country Charge code card with name as {string}', async function (text:string){
      await page.waitForFewSeconds(2000);
      await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalCCFirstCategoryAccordion);

      var filteredfirstcardtext = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCChargeCodeFirstCardText);
      
      if (filteredfirstcardtext.includes(text)) {
        await expect(true).equals(true);
      }
      else { 
        await expect(false).equals(true);
      }
    });


    // to create a global charge code to be overridden for country charge code
    Then('I should enter the test name and description for the new Global charge code to override country charge code', async function () 
{   
    console.log("I should see description and purpose text boxes for the new charge code");
var randomGlobalChargeCodeName = "Test" +Math.floor(Math.random()*2000);
console.log("random Global override Charge Code name = "  + randomGlobalChargeCodeName);
TestGlobalCCRandomName = randomGlobalChargeCodeName;

await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, randomGlobalChargeCodeName );

var randomGlobalChargeCodeDescription = "TestGlobalCCDesc" +Math.floor(Math.random()*2000);
    await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, randomGlobalChargeCodeDescription);
TestGlobalCCDescription =  randomGlobalChargeCodeDescription;     
         });


         Then ('I should verify the title of the Modal is matching to the New Global charge code for override', async function() {
         var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCDescription;
         console.log("The expected Name and Description of GlobalCC is = " + CCNameandDecription);
         var OverrideGlobalCCActualModalHeader = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
         console.log ("The actual text on the modal Header is = " + OverrideGlobalCCActualModalHeader);
         await expect(CCNameandDecription).equals(OverrideGlobalCCActualModalHeader);
         console.log("The name and the description of the Global charge code  created for overriding is matching the header on the pop up modal ");
         });
      


// override button country charge code
When('I click on the override button on the Country Charge code display screen',async function () { 
  await page.waitForFewSeconds(2000);    
  await page.clickElement(countryChargeCodedisplayScreen.CountryPageOverrideIconCss);
  console.log("The Override button on country charge code screen is clicked");
  await page.waitForFewSeconds(2000);
});



// verify override screen title 
Then('I should be on the Override Global Charge Code screen',async function () {
  var Overridescreentitle = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCOverrideScreenTitle);

  await expect(Overridescreentitle).equals("Override Global Charge Code");
  console.log("The title of the overrdie screen is verified");
});


// overriding the global charge code
Then('I should select the Newly created Global charge Code from the global drop dox text box',async function () {
  var lastGlobalCCofDropdown = await page.getAttributeValue(countryChargeCodedisplayScreen.CountryCCOverrideScreenLastGlobalCCDropdownitem, "value");

  console.log("The value of the last global charge code from drop down is " + lastGlobalCCofDropdown);
  await page.selectFromDropDownValue(countryChargeCodedisplayScreen.CountryCCOverrideScreengGlobalCCdropdownButton, lastGlobalCCofDropdown);


});


Then('I should select the Country China from the country dropdox text box', async function () { 
  await page.waitForFewSeconds(2000);
  await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCOverrideScreenCountryinputplaceholder);

  await page.waitForFewSeconds(1000);
  await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCOverrideScreenCountryinputvalueChina);

  console.log("The country china is selected as the country linked to overridden charge code");
});



// greyed out CC name text box
Then('I should not be able to change the Name of the charge code in the Name textbox',async function () 
{
  await page.waitForFewSeconds(2000);
    
  page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCOverrideScreenCountryinputvalueChina).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
  console.log("The Charge code name text box on the override screen is disabled");
});
                               
Then ("I should provide a new description for the overridden Charge code", async function(){
  
  await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, "Overridden Description");
  TestGlobalCCOverriddenDescription =  "Overridden Description";    

});





Then('I should verify the transaction config toggle buttons are disabled while overriding country charge code',async function () {
  page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCOverrideTaxToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
  console.log("The Tax toggle on the transaction config is disabled");
  page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCOverridePassthroughToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
  console.log("The Passthrough toggle on the transaction config is disabled");
  page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCOverrideDutyNettingToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
  console.log("The Duty Netting toggle on the transaction config is disabled");
  page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCOverrideProformaToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
  console.log("The Proforma toggle on the transaction config is disabled");

});



Then('I should verify if all the the transaction filters section toggle buttons are disabled while overriding country charge code',async function () {
          await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCAddTransactionFilterTransactionTypeAccordion);
          await page.waitForFewSeconds(1000);
        await page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCAirshipmentToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
        console.log("The Air shipment toggle on the transaction config is disabled");
        await page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCOceanshipmentToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
        console.log("The Ocean shipment toggle on the transaction config is disabled");
        await page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCServiceFinOnlyshipmentToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
        console.log("The Service Fin only toggle on the transaction config is disabled");
        await page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCCustomFinOnlyshipmentToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
        console.log("The Custome Fin Only toggle on the transaction config is disabled");

        await page.waitForFewSeconds(1000);

        await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCAddTransactionFilterRevenueExpenseAccordion);
        await page.waitForFewSeconds(1000);
      await page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCRevenueMandatoryFilterToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
      console.log("The Revenue mandatory toggle on the transaction config is disabled");
      await page.ElementDisabledorNot(countryChargeCodedisplayScreen.CountryCCExpenseMandatoryToggle).then(value => {expect(value).equals(true)}).catch(err => {console.log(err)});
      console.log("The Expense Mandatory shipment toggle on the transaction config is disabled");


         });


  Then('I should verify the description of the overridden charge code on the pop up modal',async function () {
          var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCOverriddenDescription;
          console.log("The expected Name and Description of overridden Charge Code is = " + CCNameandDecription);
          var OverriddenCCActualModalHeader = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCCardClickModalHeader);
          console.log ("The actual text on the modal Header is = " + OverriddenCCActualModalHeader);
          await expect(CCNameandDecription).equals(OverriddenCCActualModalHeader);
          console.log("The name and the description of the overridden charge code has been updated");
  });



     Then('I should verify whether a country is linked to the overridden charge code on the pop up modal',async function () {
                 var OverriddenCardModalCoUntryText = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalCountryinfo);

                 await expect(OverriddenCardModalCoUntryText).equals("China")
                  });


   Then('I should verify the default unit type and default unit amount on the overridden charge code on the pop up modal',async function () {
                    var overridencarddefaultunittypetext = await page.getAttributeValue(countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitTypeCSS, "value");
                    var overridencarddefaultunitamounttext = await page.getAttributeValue(countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitAmountCSS, "value");

                    await expect(overridencarddefaultunittypetext).equals(OverriddenDefaultUnitType);
                    await expect(overridencarddefaultunitamounttext).equals(OverriddenDefaultUnitAmount)
                  });

//  archiving the country charge code

When ("I click on the edit button on the newly created Country charge code card", async function () { 

await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCEditiconLastChargeCode);
console.log("The last charge code edit icon is clicked ");
});
  
Then ("I should be on the Country charge code edit screen", async function () { 
var actualEditScreenTitle = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCEditscreenTitle);
  console.log("The actual title of the edit screen is " + actualEditScreenTitle );
await expect(actualEditScreenTitle).equals("Edit Country Charge Code");
});


Then ("I should click on archive icon button on the edit screen", async function () { 
  
await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCEditScreenArchiveButton);
console.log("The archive button on the country charge code edit screen is clicked " );
  
});

Then ("I should verify the text on the archive alert pop up", async function () { 
var ActualArchiveAlertOPOPupText = await page.getTextFromXpath(countryChargeCodedisplayScreen.ConutryCCArchivePOPuPText);
  console.log("The actual text on the archive pop up is " + ActualArchiveAlertOPOPupText);
  var expectedPOUPText = "On 'Save' this Charge Code will be archived and will not be active. Click OK to Continue";
  await expect(ActualArchiveAlertOPOPupText).equals(expectedPOUPText);
});


Then ("I should click the OK button on the alert pop up", async function () { 
await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCArchiveAlertOKButton);
console.log("The OK button on the archive pop up alert is clicked");
  
});
  
Then ("I should verify the charge code archive success message", async function () { 
  var successConfirmationMessageText = await page.getTextFromXpath(
    countryChargeCodedisplayScreen.CountryCCArchiveCCSuccessMessage
  );
  console.log("alert message is : " + successConfirmationMessageText);
  await expect(successConfirmationMessageText).equal(
    "Charge code has been archived"
  );
  console.log("Country charge code archived message verified");
  
});

Then ("I should verify that the user is not be able to access the archived charge code again", async function () { 


  var CountryTestChargeCodeText = await page.getTextFromXpath(
    countryChargeCodedisplayScreen.CountryAddCountryChargeCodeTestCodeCard
  );
  console.log(
    "The name and description of the test Global charge code is " +
    CountryTestChargeCodeText
  );

  if (CountryTestChargeCodeText.includes(TestGlobalCCRandomName)) { 
    await expect(true).equals(false);
    console.log("The country charge code is archived successfully");
  }

  else 
  {
    await expect(true).equals(true);
    console.log("The country charge code was not archived test case failed ");
  }
});


Then ("I should Archive the Country Charge Code from {string}", async function(text : string) { 
  await page.pageRefresh();
  await page.waitForFewSeconds(1000);
  await page.clickElement(homePage.hamburgerMenuButton);
  await page.clickElement(homePage.chargeCodeButton);
  await page.waitForFewSeconds(1000);
  await page.clickElement(homePage.countryHomeButton);

    const isCountryCCHeadertext = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCDisplayScreenTitle);

      await expect(isCountryCCHeadertext).equals("Country Charge Codes")
    console.log("The title of the country cc display screen is = " + isCountryCCHeadertext);

    const temp =((countryChargeCodedisplayScreen.CountryAddCountryChargeCodeAccordionDynamic).replace("{0}",text));
    await page.clickElementUsingXpath(temp);

    await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCEditiconLastChargeCode);

    await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCEditScreenArchiveButton);

    await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCArchiveAlertOKButton);

    await page.clickElementUsingXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton
    );

    var successConfirmationMessageText = await page.getTextFromXpath(
      countryChargeCodedisplayScreen.CountryCCArchiveCCSuccessMessage
    );
    
    await expect(successConfirmationMessageText).equal(
      "Charge code has been archived"
    );
    
  });

// E2E 

Then("I should enter the test name and description for the new Country charge code", async function () {
  console.log("I should see description and purpose text boxes for the new charge code");
  var randomGlobalChargeCodeName = "Test" +Math.floor(Math.random()*2000);
  console.log("random e2e Country Charge Code name = "  + randomGlobalChargeCodeName);
  TestGlobalCCRandomName = randomGlobalChargeCodeName;
  
  await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, randomGlobalChargeCodeName );
  
  var randomGlobalChargeCodeDescription = "TestGlobalCCDesc" +Math.floor(Math.random()*2000);
      await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, randomGlobalChargeCodeDescription);
  TestGlobalCCDescription =  randomGlobalChargeCodeDescription;     
   console.log("The value of CC random name = " + TestGlobalCCRandomName);
   console.log("The value of CC random description = " + TestGlobalCCDescription);
});




Then("I should verify the title of the Modal is matching to the Newly created E2E Country charge code", async function () {
  console.log("The value of CC random name 1 = " + TestGlobalCCRandomName);
  console.log("The value of CC random description 1 = " + TestGlobalCCDescription);
  var CCNameandDecription = TestGlobalCCRandomName+ " - "+ TestGlobalCCDescription;
    console.log("The expected Name and Description of CountryCC is = " + CCNameandDecription);
    var GlobalCCActualModalHeader = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
    console.log ("The actual text on the modal Header is = " + GlobalCCActualModalHeader);
    await expect(CCNameandDecription).equals(GlobalCCActualModalHeader);
    console.log("The name and the description of the Country charge code is matching the header on the E2E pop up modal ");
  

});

Then ("I should update the test name and description of the newly created E2E charge code", async function () {
  
  await page.waitForFewSeconds(1000);
  
  console.log("The name and description text boxes are cleared");

  await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeNametextbox, "Up");
  TestGlobalCCOverriddenDescription =  "Up";

  await page.sendElementText(globalChargeCodedisplayScreen.GlobalAddGlobalCChargeCodeDescriptiontextbox, "Update Description");
  TestGlobalCCOverriddenDescription =  "Update Description";    
  
});

Then('I should verify the update success message for new Country charge code',async function () {
  console.log("Country charge code updated Success message recieved");

  var successConfirmationMessageText = await page.getTextFromXpath(
    addaCategoryChargeCodeScreen.addNewCategorySuccessMessage
  );
  console.log("alert message is : " + successConfirmationMessageText);
  await expect(successConfirmationMessageText).equal(
    "Successfully updated charge code"
  );
  console.log("New Global charge code update successful message verified");
  });


  Then ("I should verify the new information on the updated Country charge code", async function () { 


var ActualUpdatedCountryChargeCodeHeader = await page.getTextFromXpath(globalChargeCodedisplayScreen.GlobalCCCardClickModalHeader);
console.log ("The actual text on the modal Header is = " + ActualUpdatedCountryChargeCodeHeader);

const temparray = ActualUpdatedCountryChargeCodeHeader.split("-");
await expect(temparray[0].includes("Up"));


await expect(temparray[1].includes("Update Description"));

console.log("The country charge code name and description is updated");



  });

  Then ("I should verify the default unit type and default unit amount on the updated charge code on the pop up modal", async function(){




    var Updatedcarddefaultunittypetext = await page.getAttributeValue(countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitTypeCSS, "value");
    var Updatedcarddefaultunitamounttext = await page.getAttributeValue(countryChargeCodedisplayScreen.CountryCCOverrideLastCardModalDefaultUnitAmountCSS, "value");

    await expect(Updatedcarddefaultunittypetext).equals(OverriddenDefaultUnitType);
    await expect(Updatedcarddefaultunitamounttext).equals(OverriddenDefaultUnitAmount)
    

  });

  // var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCOverriddenDescription;

  Then("I should click on the edit button on the overridden charge code modal", async function() { 
await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryChargeCodeModalEditButtonXpath);
console.log("The edit button on the country charge code modal is clicked");

  });

  Then ("I should click on archive button on the edit screen and click on OK on the pop up alert", async function() { 
    await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCEditScreenArchiveButton);
    await page.clickElementUsingXpath(countryChargeCodedisplayScreen.CountryCCArchiveAlertOKButton);

    await page.clickElementUsingXpath(
      globalChargeCodedisplayScreen.GlobalAddGlobalCCSaveIconButton
    );
    });

    Then ("I should click on save icon button and verify the archive success message",async function () {
    var successConfirmationMessageText = await page.getTextFromXpath(
      countryChargeCodedisplayScreen.CountryCCArchiveCCSuccessMessage
    );
    
    await expect(successConfirmationMessageText).equal(
      "Charge code has been archived"
    );
  });

  Then ("verify if the overridden charge code is archived", async function(){
  var CCNameandDecription = TestGlobalCCRandomName+" - "+TestGlobalCCOverriddenDescription;
  console.log("The expected Name and Description of overridden Charge Code is = " + CCNameandDecription);
  var OverriddenCCActualModalHeader = await page.getTextFromXpath(countryChargeCodedisplayScreen.CountryCCCardClickModalHeader);
  console.log ("The actual text on the modal Header is = " + OverriddenCCActualModalHeader);
 
if (CCNameandDecription === OverriddenCCActualModalHeader) { 
  console.log("The Charge code is not archived ");
  await expect(true).equals(false);
}
else{
  console.log("The Charge code is Archived ");
  await expect(true).equals(true);
}
  });