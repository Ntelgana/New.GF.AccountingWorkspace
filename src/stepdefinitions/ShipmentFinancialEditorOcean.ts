import { ShipmentFinEditorLandingPage } from "../pages/ShipmentFinancialEditorLandingPage";
import { shipmentNumbers } from "../data/data";
import { page } from "../support/hooks";
import { doesNotReject } from "assert";
import { assert, Console } from "console";
import { ShipmentFinSummaryHome } from "../pages/ShipmentFinSummaryHomepage";
import { url } from "inspector";
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


Given(
  "I am on the shipment Financial editor page for ocean shipment",
  async function () {

    await page.waitForFewSeconds(3000);
    // await this.page.waitForTimeout(5000);
    await page.sendElementText(ShipmentFinEditorLandingPage.usernameTextBox, "telgnav@chrobinson.com");
    // await this.page.type(landingPage.usernameTextBox, "telgnav@chrobinson.com", {delay: 100});
    await page.sendElementText(ShipmentFinEditorLandingPage.passwordTextBox, "Alphonsa@123456");
    await page.clickElement(ShipmentFinEditorLandingPage.signinButton);
    //await this.page.screenshot({path:'testfailed.png'});
    console.log("Shipment Financial Editor landing page login successfully");

    

    // console.log("I am on ocean shipment Financial Editor landing page");
    // const url =
    //   ShipmentFinEditorLandingPage.url +
    //   shipmentNumbers["Shipment_number_Air_SFO"] +
    //   "/financialsummary/branchdetails";
    // console.log(url);
  }
);

Then("I Verify the Title of the landing page as {string}",
  async function (text: string) {
    
    await page.waitForFewSeconds(3000);
    const title = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipmentFinSummaryHomeTitle);
    await expect(title).equals(text);
    console.log("Title  of the Shipment Summary page is verified");
  });

Then(
  "I verify if the Shipment number is  displayed on the right corner of the Shipment Fin Summary landing page"
,
  async function () {
    const Shipmentnumber = await page.getText(
      ShipmentFinSummaryHome.ShipmentNumberDisplay
    );
    const expectedShipmentNumber =
      "Shipment Number - " + shipmentNumbers.Shipment_number_Air_SFO; 
    await expect(Shipmentnumber).equals(expectedShipmentNumber);
    console.log("Shipment number displayed is verified on the home page ");
  });

  Then('I verify if the Shipment Financial summary landing page has the tab {string}',async function (text:string) {
    await page.waitForFewSeconds(1000);
    if (text === "Branch") {
      const Branchtabstatus = await page.isElementVisibleByXpath(
        ShipmentFinSummaryHome.ShipmentFinSummarypageBranchtab
      );
      await expect(Branchtabstatus).equals(true);
      console.log("The branch tab is visible on Shipment Summary page");

    } else if (text === "Branch Role") {
      const BranchRoletabstatus = await page.isElementVisibleByXpath(
        ShipmentFinSummaryHome.ShipmentFinSummarypageBranchRoletab
      );
      await expect(BranchRoletabstatus).equals(true);
      console.log("The branch role tab is visible on Shipment Summary page");
    } else if (text === "Revenue/Expense Party") {
      const RevExpensetabstatus = await page.isElementVisibleByXpath(
        ShipmentFinSummaryHome.ShipmentFinSummarypageBranchRoletab
      );
      await expect(RevExpensetabstatus).equals(true);
      console.log("The Revenue/Expense Party is visible on Shipment Summary page");
    } else if (text === "Party Role") {
      const PartyRoletabstatus = await page.isElementVisibleByXpath(
        ShipmentFinSummaryHome.ShipmentFinSummarypagePartyRoletab
      );
      await expect(PartyRoletabstatus).equals(true);
      console.log("The Party Role tab is visible on Shipment Summary page");
    }
    else if (text === "Currency") {
        const currencytabstatus = await page.isElementVisibleByXpath(
          ShipmentFinSummaryHome.ShipmentFinSummarypageCurrencytab
        );
        await expect(currencytabstatus).equals(true);
        console.log("The Currency tab is visible on Shipment Summary page");
      }
      else if (text === "Total Amount") {
        const TotalAmounttabstatus = await page.isElementVisibleByXpath(
          ShipmentFinSummaryHome.ShipmentFinSummarypageTotalAmounttab
        );
        await expect(TotalAmounttabstatus).equals(true);
        console.log("The Total Amount tab is visible on Shipment Summary page");
      }
       else {
        console.log("Implementation for this step not Found");
         await expect(false).equals(true);
        }
  }
);

Then ("I verify if the Shipment Financial summary landing page has Export to Excel button", async function() {
    const ExporttoExcelButtonStatus = await page.isElementVisibleByXpath(
        ShipmentFinSummaryHome.ShipmentFinSummarypageExportToExcelButton
      );
      await expect(ExporttoExcelButtonStatus).equals(true);
      console.log("The Export to excel button is visible on Shipment Summary page");
    
    
})

Then ("I verify if the Shipment Financial summary landing page has Close button" , async function () { 
    const CloseButtonStatus = await page.isElementVisibleByXpath(
        ShipmentFinSummaryHome.ShipmentFinSummarypageExportToExcelButton
      );
      await expect(CloseButtonStatus).equals(true);
      console.log("The Close button is visible on Shipment Summary page");
})

Then('I verify if the value for the tab {string} should not be empty', async function(text : String) 
{
  const landingpagepartyname = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipmentFinaSummartLandingpageRevenueexpensepartyvalue);
  let flag = true;
  if (landingpagepartyname===""){
    flag = false;
  }
  await expect(flag).equal(true);
    console.log("The revenue expense party name for the shipment is " +landingpagepartyname);
})

Then('Verify if the Shipment financial summary landing page has a hamburger menu', async function () {       
  const HamburgerMenuButton = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.ShipmentFinlandingpageHamburgerMenuxpath);
  await expect(HamburgerMenuButton).equal(true);
  console.log("Hamburger menu is present on the landing page");
});


Then('I click on the hamburger menu on the landing page',async function () {
  
  // await page.waitUntilPageLoad();
  await page.waitForFewSeconds(3000);
  
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ShipmentFinlandingpageHamburgerMenuxpath);
  
  // await page.clickElement(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);
  // await page.clickElement(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);
  // await page.clickElement(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);

  // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ShipmentFinlandingpagehamburgerMenuButtoncss);
  console.log("Hamburger menu is clicked");
});

Then('Verify if the Profitability option is availble upon clicking the hamburger menu',async function () {  
  const ProfitabilityButton = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.ShipFinlanpageProfitabilityButtonDropdown);
  await expect(ProfitabilityButton).equals(true);
  console.log("Profitability button is present on the hamburger menu option");
});


Then('Verify if the Charge code entry option is available upon clicking the hamburger menu', async function () {
  const ChargeCodeEntryButton = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.ShipFinlanpageChargeCodeEntryButtonoption);
  await expect(ChargeCodeEntryButton).equals(true);
  console.log("Charge Code Entry button is present on the hamburger menu option");
});


Then('verify if the Branch view option is present in the dropdown',async  function () {
  const Branchviewoption = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.ShipFinLandingBranchView);
  await expect(Branchviewoption).equals(true);
  console.log("Branch View option button is present on the Profitability dropdown")
});


Then('verify if the Charge code view option is present in the dropdown', async function () {
  const ChargeCodeView = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.ShipFinlanpageChargeCodeEntryButtonoption);
  await expect(ChargeCodeView).equals(true);
  console.log("Charge Code View option button is present on the Profitability dropdown");
});

Then('I Verify if the Add Branch Accounting option is present in the Charge Code entry menu', async function () {
  const AddNewFinancialsOption = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.ShipFinLandAddNewFinancialsButton);
  await expect(AddNewFinancialsOption).equals(true);
  console.log("Add new Financials option is present on the Charge Code entry menu");
});


// us-748256

Then('I verify the branch for Charge code entry exits or not', async function () {
const branchdetailtext = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchCode);
if (branchdetailtext==='Add Branch Accounting') {
  Flag = true;

}
});

Then('I verify the branch {string} for charge code entry exists or not',async function(text: string){


  const temp =((ShipmentFinSummaryHome.ShipFinEditorAvailableLISTEDBranchCodes).replace("{0}",text));

  const usBranchVisibility = await page.isElementVisibleByXpath(temp);
  if (usBranchVisibility===true) { 
    Flag= true;
  }
  else {
  Flag= false;
  }
});



Then('If Charge code entry exists ignore else add new branch financials for the shipment',async function () {  
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

  const temp =((ShipmentFinSummaryHome.ShipFinEditorAvailableLISTEDBranchCodes).replace("{0}","9850"));
console.log("Before click ");
   await page.clickElementUsingXpathNew(temp);
   console.log("after click ");

 }
 else { 
  //  await page.waitForFewSeconds(3000);   
  console.log("entered else consdition");     
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ShipFinEditorAddBranchAccountingMenuButton);
   console.log("The add Branch accounting button is clicked on the hambueger menu ");
   await page.waitForFewSeconds(1000);
   await page.sendElementText(ShipmentFinSummaryHome.AddNewBranchFinancialsPlaceholderCSS,'9850');
  await page.waitForFewSeconds(1000);
  console.log("9850 entered");
    await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ShipFinEditorFirstBranchindropdowninAddBranchFinancial);
    console.log("9850 selected");
     await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ShipFinEditorAddBranchFinancialsButton);
     console.log("add accointing branch cliecked");

 }

});



 When('I click on any of the branch on the Charge code entry option',async function () {
  const branchdetailtext = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchCode) 
  Firstbranchnumber = branchdetailtext.split('-')[0].trim();
  console.log("The first branch number on the shipment is " + Firstbranchnumber );
  

  await page.clickElementUsingXpath(ShipmentFinSummaryHome.ShipFinEditorFirstAvailableBranchChargeCodeUI);
console.log("The First vaiable branch is clicked on the Charge code entry UI section on hamburger menu");
});



Then('I land on the Charge code entry UI', async function () {
await page.waitForFewSeconds(2000);
const Heading = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipFinEditorChargeCodeEntryHeader);
await expect(Heading).equals("Charge Code Entry");
console.log("The user is on the Charge Code Entry UI page");

});




Then('I verify the Shipment and Branch number needs to be displayed and Stacked to the Top right of the Charge code UI', async function () {
  await page.waitForFewSeconds(2000);
 const CurrentShipmentNumber  = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipFinEditorShipmentnumberonChargeCodeEntryUI);       
const CurrentBranchNumber = await page.getTextFromXpath(ShipmentFinSummaryHome.ShipFinEditorBranchnumberonChargeCodeEntryUI);

console.log("the current branch is " + CurrentBranchNumber);

await expect(CurrentShipmentNumber).equals(shipmentNumbers.Shipment_number_Air_SFO);
console.log("The Shipment number on the Charge code UI is same as the Shipment number used on landing page")
if  (Flag === true) {
  await expect(CurrentBranchNumber).equals("9850");
console.log("The branch number is verified on the charge code entry UI page");

}
else {
  await expect(CurrentBranchNumber).equals(Firstbranchnumber);
console.log("The branch number is verified on the charge code entry UI page");
}

});


// expand and collpas all parties 


Then('I verify if the  Collapse all Parties and Expand all Parties button is present on the footer of the charge code entry UI',async function () {
       const collapsepartiesButton= await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CollpaseAllPartiesButtonxpath);
       const expandpartiesButton= await page.isElementVisibleByXpath(ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath) ;
       await expect(collapsepartiesButton).equals(true);
       console.log("The collapse all parties button is present on the UI ");
       await expect(expandpartiesButton).equals(true);
       console.log("The expand all parties button is present on the UI ");

         });


         Then('I verify if the parties are all collpased by default',async function () {
          var accordionarrowstatus = await page.getAllTextAttributes(ShipmentFinSummaryHome.ShipfinEditAllPartyAccordionArrowCSS);
            console.log(accordionarrowstatus);
            console.log(accordionarrowstatus.length);
            var count=1;
            for(var i of accordionarrowstatus) {
              var flag = i.includes('accordion-header-open');
              await expect(flag).equals(false);
              console.log(`The accordion number ${count} is closed`);
              count = count + 1;
            }
        });


        Then('I click on Expand all Parties button to verify if all the existing parties are expanding',async function () {
          await page.clickElementUsingXpath(ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath);
          await page.waitForFewSeconds(2000);

          var accordionarrowstatus = await page.getAllTextAttributes(ShipmentFinSummaryHome.ShipfinEditAllPartyAccordionArrowCSS);
         console.log(accordionarrowstatus);
          var count=1;
  
          for(var i of accordionarrowstatus) {
            console.log(" the value of " + i);
            var flag = i.includes('accordion-header-open');
            console.log(`The accordion ${typeof(flag)} and ${flag}`);
            await expect(flag).equals(true);
            console.log(`The accordion number ${count} is open`);
            count = count + 1;
          }

        });

        Then('I click on Collapse all Parties to verify if all existing parties have collpased',async function () {
          
          await page.clickElementUsingXpath(ShipmentFinSummaryHome.CollpaseAllPartiesButtonxpath);
          await page.waitForFewSeconds(2000);

          var accordionarrowstatus = await page.getAllTextAttributes(ShipmentFinSummaryHome.ShipfinEditAllPartyAccordionArrowCSS);
            console.log(accordionarrowstatus);
            console.log(accordionarrowstatus.length);
            var count=1;
            for(var i of accordionarrowstatus) {
              var flag = i.includes('accordion-header-open');
              await expect(flag).equals(false);
              console.log(`The accordion number ${count} is closed`);
              count = count + 1;
            }

        });


  Then('Verify if the revenue party {string} already exists', async function (text : string) {
    
  const temp =((ShipmentFinSummaryHome.CCCodeRevenueCCODEPARTYTEXTBOX).replace("{0}",text));

    revenuepartyVisible = await page.isElementVisibleByXpath(temp);

    customercodetext = text ;

    console.log("The revenue party visible " +   revenuepartyVisible )

    


  });



// error message customer credit not active 

Then('I click on the Add revenue party button on Charge code entry UI page',async function () {
  if (revenuepartyVisible===false) {
    await page.waitForFewSeconds(3000);
  
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.AddRevenuePartyButtonXpath);
  const revenuepartyBoxes = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesRevenuePartyInputBoxesCSS);

initialPartiesCount = revenuepartyBoxes.length;
console.log("The Count of the parties in Charge code entry UI is " + initialPartiesCount );

  }
  
else {
console.log("A  customer party  (c code ) for Revenue already exists");

}
});










Then('I verify if the party input field with a arrow dropdown is displayed to the user',async function () {
 
  if (revenuepartyVisible===false) {
 
  const newEmptypartyRevenuebox =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEntryRevenueNewPartytextbox);
  await expect(newEmptypartyRevenuebox).equals(true);
  console.log("The new party text box is displayed to the user");
}


});


Then('I enter {string} and selecting the party from the dropdown',async function (text:string) {
  
  if (revenuepartyVisible===false) {
    
  
  await page.sendElementTextUsingXpath(ShipmentFinSummaryHome.CCEntryRevenueNewPartytextbox, text);

  const temp =((ShipmentFinSummaryHome.CCEntrypartytextboxvalueSelectDropdown).replace("{0}",text));

  console.log("The xpath is" + temp);
  
const temp1 =((ShipmentFinSummaryHome.CCEntrypartytextboxvalueINDROP).replace("{0}",text));
 customercodetext = await page.getTextFromXpath(temp1);
console.log("The current Customer code is " + customercodetext);

  await page.clickElementUsingXpathNew(temp);
  }

});

Then('I verify if the user is displayed with a Modal with the header title {string}',async function (string) {
  
const custocodeonmodal = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCCodepartyCreditErrormodalTitle);
  await expect(custocodeonmodal).equals(customercodetext);
  console.log("The customer code is verified on the error modal ");

});

Then('I verify the body of the info modal as {string}',async function (text :string) {
  const errormodalCommonbody = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCCodepartyCreditErrormodalBODY);
  await expect(errormodalCommonbody).equals(text);
  console.log("The  is verified modal body text is verified "); 

});

Then('I verify the message on the modal is displaying {string} for the no active credit party',async function (text : string) {
  const creditnotactiveerrortext = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCustCodepartyErrorCreditNotActive);
  await expect(creditnotactiveerrortext).equals(text);
  console.log("The customer credit is currently not active so unalbe to add bill to "); 

         });


Then('I verify the message on the modal is displaying {string}', async function (text :string) {    
  const custoUSRestrictedtext = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCustCodepartyErrorUSRestriction);
  await expect(custoUSRestrictedtext).equals(text);
  console.log("This C-Code is restricted for US transactions so unable to add charges to the customer "); 

        });

        Then('I verify if clicking on OK button will return the user back to the party input field on the Charge code Entry UI screen',async function () {
         await page.clickElementUsingXpath(ShipmentFinSummaryHome.CCCustomerCodeErrormodalOKButton);
         const modalTitlevisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCCodepartyCreditErrormodalTitle);
          await expect(modalTitlevisiblity).equals(false);

          console.log("The user is returned to the Charge code Entry UI screen");
        });

        // actions menu button delete party 

       


        Then('I click on the arrow to expand the dropdown', async function () {
  const temp =((ShipmentFinSummaryHome.CCCCodePartyAccordionArrow).replace("{0}",customercodetext));
  await page.clickElementUsingXpathNew(temp);
  console.log("The Accordion arrow for the party is clicked to expand the menu");

  await page.waitForFewSeconds(1000);
        });


  
        Then('I click on actions menu button to show only option label {string}',async function (string) {
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButton);
          console.log("The actions buitton is clicked");
        });

        When('I click on Remove Party option on the Actions menu button',async function () {
          await page.waitForFewSeconds(1000);
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonRemoveParty);
          console.log("The remove party option on the actions menu button is clicked");
        });

        Then('I verify if the user is displayed with a modal with Header {string} with Cancel and OK buttons',async function (text :string) {
          const removepartymodaltitle = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodePartyRemovepartyModalTitle);
        await expect(removepartymodaltitle).equal("Delete Party");
        console.log("the title of the remove party modal is " + removepartymodaltitle );

        });

        Then('I verify the body n the Modal is {string}',async function (text :string) {
          const removepartymodalbody = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodePartyRemovepartyModalBody);
        await expect(removepartymodalbody).equal("Are you sure you want to delete this party from this transaction?");
        console.log("the title of the remove party modal is " + removepartymodalbody );
        });

        When('I click on Cancel Button on the Delete party Modal',async function () {
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodePartyRemovepartyModalCancelButton);
          console.log("The cancel button on hte modal is clicked" );
        });

        Then('I verify the user is returned back to the Charge Code entry UI screen',async function () {
          const ismodalvisible = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodePartyRemovepartyModalTitle);

          await expect(ismodalvisible).equals(false);
          console.log("The remove party modal is not visible to user upon click on cancel button");
        });


        Then('I click on YES button on the Delete party Modal', async function () {
          await page.waitForFewSeconds(1000);
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodePartyRemovepartyModalYESButton);
          console.log("the OK Button on the delete party modal is clicked ");
        
        });


Then('I click Action Button on the latest added C code for this test case scenario', async function() {
const latestaddedCCode = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForRevenueTopMostCCode);
const TotalrevenuepartyBoxes = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesRevenuePartyInputBoxesCSS);
 if (latestaddedCCode===true) {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForRevenueTopMostCCode);
  console.log("The actions button is clicked in order to delete the topmost C Code"); 
 }
 else if (TotalrevenuepartyBoxes.length > 0){ 
await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath);
await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForRevenueTopMostCCode);
  console.log("The actions button is clicked in order to delete the topmost C Code");
}
else if (TotalrevenuepartyBoxes.length === 0){
  console.log("No C Codes are present in the Revenue section");
}

else {

  console.log("The c codes are not present in the Rev");
}


 });


        Then('I Verify the Uncharged party is deleted from the Charge Code Entry UI screen',async function () {
         const revenuepartyBoxes = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesRevenuePartyInputBoxesCSS);
          console.log(revenuepartyBoxes + "number");
          console.log(revenuepartyBoxes.length + "number");
          const FinalPartyCount = revenuepartyBoxes.length;
          await expect(initialPartiesCount-FinalPartyCount).equal(0);
          console.log("The Uncharged party is deleted successfully and No C Codes exist in the Charge code Entry UI");

        });



        // add charge codes to revenue party

        Then('I verfiy the estimated charges input box and available credit amount is displayed to the user', async function () {
          
           const availableCreditText = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedAvailableCredittext);
          await expect(availableCreditText).equals("Available credit: ");
          console.log("The Available credit text is displayed to the user below the revenue party name");

          const CreditAmount = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedCreditAmount);
          await expect(CreditAmount).equals(true);
          console.log("The Credit amount of the Revenue Party is visible to the  user");
         });


         Then('I click on Charge Code text box and input a charge code value {string}', async function (text :string) {          
          const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

          if (checkboxpresent === false) {
          
          await page.clickElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent);
          console.log("Click charge code text box");

          await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresentCSS, text);
          console.log("A charge code freight charge has been entered in the Charge code input box");
         }

         else {
          await page.clickElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

          await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresentCSS, text);
         }

        });


        Then('I click on the dropdown value in charge code text box {string}', async function (text :string){
          const temp1 =((ShipmentFinSummaryHome.CCCOdesRevenuePARTYChargeCodetextBoxEntryDropdown).replace("{0}",text));
          
          await page.clickElementUsingXpathNew(temp1);
          console.log("The value Freight Surcharge has been selected from the dropdown");
        });


Then('I verify the add Note icon is visible to the user',  async function() { 
  await page.waitForFewSeconds(1000);
  const addNotesIconVisible = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuePartyAddNoteIconCSSCheckBoxPresentXPATH); 
  
if (addNotesIconVisible === true) {
  console.log("The add note icon is visible to the user ");

}
else { 
  console.log("The note icon is not visible to user");
}
});


        Then('I click on the Unit type and select a unit type {string}', async function (text :string) {

          const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

          if (checkboxpresent === false) {

        
            await page.waitForFewSeconds(500);
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNotPresent);
          console.log("Unit Type input box is Clicked");

          const temp1 =((ShipmentFinSummaryHome.CCCodesRevenuePartyUnitTypeSelectionValue).replace("{0}",text));
    await page.clickElementUsingXpathNew(temp1);
    console.log("The Unit type has been selected from the dropdown");

    await page.hitTab();
          
          console.log("the tab is pressed");
          }

    else {
      await page.waitForFewSeconds(1000);
      await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresentCSS);
      
      const temp1 =((ShipmentFinSummaryHome.CCCodesRevenuePartyUnitTypeSelectionValueCheckBoxPresent).replace("{0}",text));
await page.clickElementUsingXpathNew(temp1);

    }
    
        });

        Then('I enter a value for Units field "{int}"',async function (text: string) {
          await page.waitForFewSeconds(2000);
          const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

        
            await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxPresentCSS);

          console.log("The unit are cleared");
        const temp = "" + text;

        console.log("The value is " + temp );
        console.log("The type is " + typeof(temp));

        await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxPresentCSS, temp);
        });


        Then('I enter a value for Per Units field "{int}"',async function (text: string ) {
           const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

            await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyPerUnitsTextBoxCheckBoxPresentCSS);

          console.log("The unit are cleared");
        const temp = "" + text;

        console.log("The value is " + temp );
        console.log("The type is " + typeof(temp));

        await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyPerUnitsTextBoxCheckBoxPresentCSS, temp);
        
      });

        Then('I verify the currency {string} is displayed to the user in the currency text box',async function (text : string) {
        // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBox);
         const currentCurrency = await page.getAttributeValue(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSS , "value");
           
          await expect(currentCurrency).equals(text);
          console.log("The currency of the Party is being displayed as " +  currentCurrency );
        });

        // non USD currency invoice
        Then('I enter the currency {string} other than USD in the currency text box', async function(text: string){
await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyTextBoxCSS);

await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyTextBoxCSS);

await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyTextBoxCSS, text);

const temp1 =((ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyDropDownValue).replace("{0}",text));
          
          await page.clickElementUsingXpathNew(temp1);
          console.log("The Currency AUD has been selected from the dropdown");

        });

        Then('I verify the currency {string} is displayed to the user in the currency text box when non USD curreny is entered',async function (text : string) {
          // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBox);
           const currentCurrency = await page.getAttributeValue(ShipmentFinSummaryHome.CCCodesRevenuepartyNewAddedCurrencyValidation , "value");
             
            await expect(currentCurrency).equals(text);
            console.log("The currency of the Party is being displayed as " +  currentCurrency );
          });

//           Then('I verify if the sell FX details is displayed to the user for charge codes differnt that invoice currency', 
//           function () {
//             const sellFXCoulmnVisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXChargesheader); 
//             console.log("The  SELL FX charges column is displayed and text is =" + sellFXCoulmnVisiblity);    
// await expect(sellFXCoulmnVisiblity).equals(true);
//           });
                   
                  
          Then('I Verify if the charges column is displayed to the user for charge codes differnt that invoice currency',async function () {
            await page.waitForFewSeconds(2000);
            const sellFXchargesCoulmnVisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXChargesheader); 
            console.log("The  SELL FX charges column is displayed and text is =" + sellFXchargesCoulmnVisiblity);    
await expect(sellFXchargesCoulmnVisiblity).equals(true);
          });

          Then('I Verify if the Exchange rate column is displayed to the user for charge codes differnt that invoice currency', async function(){
            const sellFXexchangeRateColumnVisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXExchangeRateheader); 
            console.log("The  SELL FX Exchange rate column is displayed and text is =" + sellFXexchangeRateColumnVisiblity);
            await expect(sellFXexchangeRateColumnVisiblity).equals(true);
          });

          Then('I Verify if the Mark Up column column is displayed to the user for charge codes differnt that invoice currency', async function(){
            const sellFXFXMarkUPColumnVisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXFXMarkUPColumn); 
            console.log("The  SELL FX mARK uP column is displayed and text is =" + sellFXFXMarkUPColumnVisiblity);
            await expect(sellFXFXMarkUPColumnVisiblity).equals(true);
          });

          Then('I Verify if the FX Rate column is displayed to the user for charge codes differnt that invoice currency', async function(){
            const sellFXFXFxRateColumnVisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXFxRateColumnHeader); 
            console.log("The  SELL FX FX rate column is displayed and text is =" + sellFXFXFxRateColumnVisiblity);
            await expect(sellFXFXFxRateColumnVisiblity).equals(true);
          });

          Then('I Verify if the SELL FX Total column is displayed to the user for charge codes differnt that invoice currency', async function(){
            const sellFXFXSELLFXTotalColumnText = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceSELLFXSELLFXTotalColumnHeader); 
            console.log("The  SELL FX SELLFXTotal column is displayed and text is =" + sellFXFXSELLFXTotalColumnText);
            await expect(sellFXFXSELLFXTotalColumnText).equals("Sell FX Total");

                   });

// SELL FX Calculation 

Then('I Verify if the SELL FX  total is equal to the value of total charge multiplied with current FX RATE',async function () {
const fxRateValue = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceFirstFXRATEValue);
console.log("The fxrate value is =" + fxRateValue );
const SELLFXTotalValue = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCreateInvoiceFirstSELLFXTotalValue)
const sellFXtOTALvALUETEMP = SELLFXTotalValue.replace("USD","");
console.log("The SELL FX Total value is =" + sellFXtOTALvALUETEMP );


const fxRateValueNew = Number(fxRateValue);
const SELLFXTotalValueNew  = Number(sellFXtOTALvALUETEMP);
console.log("new sell fx rate" + fxRateValueNew);
console.log("new sell fx total  rate" + SELLFXTotalValueNew);
const totalchargechargecodenew = Number(totalchargechargecode);
console.log("Total charge for verification " +  totalchargechargecodenew);

let expectedSELLFXTotal = fxRateValueNew * totalchargechargecodenew;
expectedSELLFXTotal = Math.round(expectedSELLFXTotal*100)/100;
console.log("The value of expected SELLFX Total is =" + expectedSELLFXTotal );

await expect(expectedSELLFXTotal).equals(SELLFXTotalValueNew);

});


        // total charges 
        Then('I click on the total Charge field',async function () {
          
            await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckBoxPresent);

        
        });

        Then('I verify if the total Charge amount to be billed to the party is calculated with units "{int}" and per unit "{int}" and displayed to the user in the Total Charge field',async function (text1, text2) {
          const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
          console.log("The  check box is present (total chqarge)" + checkboxpresent);

          if (checkboxpresent === false) {
          console.log("false123")
          const totalcalculatedCharge = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckboxNotPresent);
          console.log("the value (total charge) " + totalcalculatedCharge);
          totalchargechargecode =  totalcalculatedCharge;

          totalChargevalue = await totalcalculatedCharge;
          console.log("TCVALUE" +  totalChargevalue);

          const expectedCharge = parseInt(text1,10)*parseInt(text2,10);
          

          console.log(totalcalculatedCharge + "dummy");
          console.log(expectedCharge + "    dummy");
 GlobalexpectedCharge = expectedCharge;

 await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckboxNotPresent);

 console.log("the total charge is clicked ");

await page.hitTab();
          }

          else {
            console.log("checkbox is present");
            const totalcalculatedCharge = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckBoxPresent);
           console.log("checking value total " + totalcalculatedCharge);
            totalchargechargecode =  totalcalculatedCharge;
        
          const expectedCharge = parseInt(text1,10)*parseInt(text2,10);
          

          console.log(totalcalculatedCharge + "dummy");
          console.log(expectedCharge + "    dummy");
 GlobalexpectedCharge = expectedCharge;

 await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeTextBoxCheckBoxPresent);

 console.log("the total charge is clicked ");

await page.hitTab();



  //           const expectedCharge = parseInt(text1,10)*parseInt(text2,10);
  //           console.log(totalcalculatedCharge + "dummy");
  //           console.log(expectedCharge + "dummy");
  //  GlobalexpectedCharge = expectedCharge;
  //   console.log ( "A charge code with a total charge has been succesfully added to the C Party")
  // //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyClickEMptySpace);
  //  await page.waitForFewSeconds(2000);
          }

        });

      Then('I calculate the total sum of all the currently added charge codes', async function (){

        const SumofAllChargeCodes = await page.getAllTextContent(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalchargesofallNEWLYAddedChargeCodesCSS);

       console.log("checking value total " + SumofAllChargeCodes);
      //   totalchargechargecode =  totalcalculatedCharge;
      let p = 0;
    for (let i of SumofAllChargeCodes){
      console.log("The value of i " + i);
let j = i.replace('.00','');
console.log("The value of J " + j);
p = p + Number(j);
    }

    TotalSumofAllChargeCodes = p;
    console.log("The value of P " + p);
      // const expectedCharge = parseInt(text1,10)*parseInt(text2,10);

        });


        Then('I verify if a new empty charge code input row is added below when a charge code is successfully added to the Party',async function () {
         
        });





        Then('I would refresh the page',async function () {
      
        await page.waitForFewSeconds(2000);
          page.pageRefresh();

        }); 

        // remove charge code 



        Then('I would click on the checkbox on the newly added charge code',async function () {   
          await page.waitForFewSeconds(1000);   
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodeRevPartyFirstCCodeCheckBox);
          console.log("The first charge code checkbox is checked") ;
        
          await page.waitForFewSeconds(1000); 
        
        });
// multiple charge codes
        Then('I would click on the checkbox on the newly added multiple charge Codes',async function () {
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeAllNONInvoicedChargeCodes);
          console.log("The Select all check box for the newly added charge codes in revenue section is selected");

        });

        When('I click on actions menu button',async function () {
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButton);
          console.log("The actions menu button on the revenue oarty is clicked ") ;
          
        });

        Then('I would click on the Remove Charge Codes option', async function () {
          
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonRemoveChargeCodes);

        });

        Then('I verify the warning modal to remove the selected charge Codes',async function () {    
          const removeCCModal = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodePartyRemovepartyWarningModalTitle);
  await expect(removeCCModal).equals("Confirm");
  console.log("The  is verified modal title text is verified "); 

  const removeCCModalBody = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodePartyRemovepartyWarningModalBody);
  await expect(removeCCModalBody).equals("Are you sure you want to remove the selected charge codes?");
  console.log("The  is warning modal body text is verified ");

        });

        Then('I click on the OK button on the warning modal',async function () {
          
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodePartyRemovepartyModalOKButton);

          console.log("The OK button is clicked on the Warning modal ");

        });

        Then('I click on the last arrow to expand the dropdown', async function () {
          
          await page.waitForFewSeconds(2000);
          const temp =((ShipmentFinSummaryHome.CCCCodePartyAccordionArrowlast).replace("{0}",customercodetext));
          await page.clickElementUsingXpathNew(temp);
          console.log("The Accordion arrow for the last party is clicked to expand the menu")
                });

        Then('I verify if the charge code is removed from the Expense party {string}',async function (text: string) {

         const chargecodevalue =  await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeinputWhenCheckboxNotPresent);
         if (chargecodevalue === "405 - Fuel Surcharge")
         {
          console.log("The charge code was not deleted");
         }
         else {
          console.log("The charge code was successfully deleted");
         }
       
        });

// restricting Charges netting charges to be invoiced for US SFO 
Then('I verify the toast message is displayed to the user {string}',async function (text : string) {

  await page.waitForFewSeconds(1000);
  const toastmsgtext = await page.getAllTextContent(ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToastCSS);
  console.log("The charges netting restrictiong toast is : " + toastmsgtext[0]);


  await expect(toastmsgtext[0]).equals(text);
  console.log("The charges netting restrictiong toast is displayed to the user");

});

Then('I click on the x on the toast',async function () {
  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToastButtonCloseCSS);
  console.log("The x on the toast is clicked");

});

Then('I verify the charge code input box is empty',async function () {
  const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);
          console.log("The  check box is present " + checkboxpresent);

          if (checkboxpresent === false) { 

            console.log("if block ");
const checkboxtext = await page.getAllTextAttributesValue(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxNOTPresentCSS);

await expect(checkboxtext[0]).equals("");
          }
          else { 

            console.log("else block ");
            const checkboxtext = await page.getAllTextAttributesValue(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresentCSS);

            await expect(checkboxtext[0]).equals("");

          }

});

Then('I verify the toast message is not displayed to the user',async function () {
 const toastmessagevisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToast);
console.log("visibility"  + toastmessagevisiblity)
 await expect(toastmessagevisiblity).equals(false);
});

// adding notes
Then('verify if the tool tip on notes icon is {string}', async function (text : string) {
  
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIcon);
  const noteiconTooltiptext = await page.getText(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIconToolTipCSS);

  console.log("The tool tip on the notes icon  is = " + noteiconTooltiptext);
await expect(noteiconTooltiptext).equals(text);

});

When('I click on the Notes Icon',async function () {

await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIcon);

});

Then('Verify if the notes modal is displayed to the user',async function () {
 const modalvisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTitle);
 if (modalvisiblity === true) {

 const modalheadertext = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTitle);
console.log("The title of the notes Modal is = " + modalheadertext);
 await expect(modalheadertext).equals("Charge Code Notes");
}
else
{
  console.log("The modal is not visible to the user");
await expect(false).equals(true)
}
});


Then('Verify if I can add notes in the notes input field with text {string}',async function (text:string) {
 await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
 await page.waitForFewSeconds(1000);
 await page.sendElementTextUsingXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput, text);
console.log("The text entered in the note is " + text);
const EnteredtextfromNotes = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
 console.log("The text from the notes is " + EnteredtextfromNotes);
 await expect(EnteredtextfromNotes).equals(text);


});

Then('I should verify if the cancel button is displayed',async function () {
  const cancelButtonvisible = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalCancelButton);
console.log("The text on the button " + cancelButtonvisible);
await expect(cancelButtonvisible).equals("Cancel");
});

Then('I should be able to click on save',async function () {
await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalSAVEButton);
console.log("The save button is clicked ");
});

Then('Verify the notes icon tool tip updated to {string}',async function (text: string) {

  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIcon);
  const noteiconTooltiptext = await page.getText(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIconToolTipCSS);

  console.log("The tool tip after saving note  is = " + noteiconTooltiptext);
await expect(noteiconTooltiptext).equals(text);
});

Then('I verify the text entered in the notes modal is displayed upon hovering the checkbox associated to the charge code',async function () {
  await page.hoverElement(ShipmentFinSummaryHome.CCCodesRevenuefirstchargecodeCheckBoxtoverifyNotes);
  const checkboxnoteTooltiptext = await page.getText(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesLatestNoteIconToolTipCSS);

  console.log("The tool tip after saving note on check box is  = " + checkboxnoteTooltiptext);
await expect(checkboxnoteTooltiptext).includes("GF Accounting workspace");


});


Then('I verify the text entered in the notes modal is existing or not and return to charge code entry',async function () {


 const textfromNotes = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
 console.log("The text from the notes is " + textfromNotes);
 await expect(textfromNotes).equals("GF Accounting workspace");

 await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalCancelButton);


});

Then('Verify if the system is limiting adding notes to only {int} characters',async function (count : number) {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);
  await page.waitForFewSeconds(1000);

  const charInput = 'A';

  await page.sendElementTextUsingXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput, charInput.repeat(count));
 console.log("The text entered in the note is " + charInput);

 const charlength = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTInput);

  console.log("The text from the notes is " + charlength);
  await expect(charlength.length).equals(50); 

  const notelength = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalTEXTNoteLength);
  await expect(notelength).equals("0 Characters Remaining");

  });

  Then('I click on cancel button on the Modal',async function () {
    await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesNoteDialogModalCancelButton);
  });


// GB GHOSTBUSTER TEST CASES 

Then('I verify the Available credit amount for the revenue party {string}',async function (string) {
  
  const CurrentAvailableCreditAmount = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
  availbaleCreditAmount = Number(CurrentAvailableCreditAmount.replace(",","").trim())
  console.log("The amount if availabe credit is  = " + availbaleCreditAmount + "str" + typeof(availbaleCreditAmount))
});

Then('I verify the estimated charges amount is empty',async function () {

 const estimatedChargeCurrentAmount = await page.getAllTextAttributesValue(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyEstimatedChargesAmount);
 console.log("The estimated charge currently is " + estimatedChargeCurrentAmount[0]);


 await expect(estimatedChargeCurrentAmount[0]).equals("");
 console.log("The estimated charge text box is Empty");
 
});

Then('I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges',async function () {
await page.waitForFewSeconds(2000);
  const CurrentAvailableCreditAmount = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
  let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",","").trim());

  console.log("The update credit amount after entering estimated charges is =" + availableUpdatedCreditAmount);
 
  await expect(availableUpdatedCreditAmount + Number(estimatedChargeEntered)).equals(availbaleCreditAmount);
 console.log("The available credit is updating as per the calculated total charge");
   });


   Then('I calculate and verify if the from available credit is updated at the same rate as the amount calculated in total charge from selected charge codes',async function () {
   
    
    await page.waitForFewSeconds(2000);
    const CurrentAvailableCreditAmount = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
    let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",","").trim());
console.log("auc" + availableUpdatedCreditAmount);
console.log("aca" + availbaleCreditAmount);
console.log("totalcharge  " + totalChargevalue);

    await expect(availableUpdatedCreditAmount).equals(availbaleCreditAmount-Number(totalChargevalue))
         });




// 03/12
         Then('I Verify if the party and Estimated charge code input fields are disabled',async function () {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

        Then('I verify if the charge code is removed from the revenue party {string}',async function (string) {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

        Then('I verify if the avaiable credit is recalculated to the previous value after deletion of a charge code',async function () {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

        Then('I  verify if the charge code is removed from the revenue party {string}',async function (string) {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

        Then('I calculate and verify if the from available credit is updated to the deducted value of {string}',async function (text:  string) {       
          await page.waitForFewSeconds(2000);
          const CurrentAvailableCreditAmount = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
          let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",","").trim());
        
          console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
          console.log("The total charge code value after entering charge codes is =" + totalchargechargecode);
          totalchargechargecode = totalchargechargecode.replace(",","");
          console.log("the credit amount GB" + availbaleCreditAmount);
          await expect(availableUpdatedCreditAmount + Number(totalchargechargecode)).equals(availbaleCreditAmount);
         console.log("The available credit is updating as per the total charge greater than estimated charges");
        });


        Then('I calculate and verify if the available credit when total charge is less than estimated charge and deducution is {string}',async  function (string) {
          await page.waitForFewSeconds(2000);
          const CurrentAvailableCreditAmount = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
          let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",","").trim());

          console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
          console.log("The total charge code value after entering charge codes is =" + estimatedChargeEntered);
          totalchargechargecode = totalchargechargecode.replace(",","");
          console.log("the credit amount GB" + availbaleCreditAmount);
          await expect(availableUpdatedCreditAmount + Number(estimatedChargeEntered)).equals(availbaleCreditAmount);
         console.log("The available credit is updating as per the total charge less than estimated charges");


        });

// sum of charge codes 
Then('I validate the sum of total charge is greater than the estimated charges and available credit is updated accordingly', async function (){
  await page.waitForFewSeconds(2000);
  const CurrentAvailableCreditAmount = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
  let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",","").trim());

  console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
  console.log("The sum of total charge code value after entering charge codes is =" + TotalSumofAllChargeCodes);
  // SumofAllChargeCodes = SumofAllChargeCodes.replace(",","");
  console.log("the credit amount GB" + availbaleCreditAmount);
  await expect(availableUpdatedCreditAmount + TotalSumofAllChargeCodes).equals(availbaleCreditAmount);
 console.log("The available credit is updating as per the sum of total charge greater than estimated charges");

});

Then('I calculate and verify if the available credit is recalculated according to total sum of charge codes greater than estimated charges',async function () {       
  await page.waitForFewSeconds(2000);
  const CurrentAvailableCreditAmount = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueCCODEPartyAvailableCreditAmount);
  let availableUpdatedCreditAmount = Number(CurrentAvailableCreditAmount.replace(",","").trim());

  console.log("The updated available credit amount after entering charge codes is =" + availableUpdatedCreditAmount);
  console.log("The total charge code value after entering charge codes is =" + totalchargechargecode);
  totalchargechargecode = totalchargechargecode.replace(",","");
  console.log("the credit amount GB" + availbaleCreditAmount);
  await expect(availableUpdatedCreditAmount + Number(totalchargechargecode)).equals(availbaleCreditAmount);
 console.log("The available credit is updating as per the total charge greater than estimated charges");
});










        
// create Invoice 

Then('I click on the Create Invoice button on the Actions menu button',async function () {   
  // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodeRevPartyFirstEnabledChargeCodeCheckBox);

  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonCREATEINVOICEOption);
  console.log("Create invoice option on actions menu is clicked");
});

Then('I verify the Create invoice section header',async function () {
  await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);

  const createinvoicetitle = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);

  await expect(createinvoicetitle).equals(true);

  console.log("The title in create invoice is verified");


});

Then('I verify the Customer Name in the create invoice section',async function () {
  const custNameoninvoice = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICEorVOUCHERSectionCustomerName);
await expect(custNameoninvoice).equals(customercodetext);
console.log("The customer name on the create invoice page is " + custNameoninvoice);

});



Then('I verify if the Currency invoice text box is having the same currency as the invoiced charge code',async function () {
  const currencyboxvalue = await page.getAttributeValue(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, "value");
   
  await expect(currencyboxvalue).equals("USD");

  console.log("The currency on the create invoice page is " + currencyboxvalue );


});

// change currency in invoice currency box
Then('I change the currency from branch currency {string} the Currency invoice text box to {string}',async function (text : string, text1: string) {
  const currencyboxvalue = await page.getAttributeValue(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, "value");
   
  await expect(currencyboxvalue).equals(text);

  console.log("The currency on the create invoice page is " + currencyboxvalue );

  await page.clearElement(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS);

  await page.sendElementText(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, text1);


  const newCurrencyboxvalue = await page.getAttributeValue(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionInvoiceCurrencyboxCSS, "value");
   
  await expect(newCurrencyboxvalue).equals(text1);
  const temp1 =((ShipmentFinSummaryHome.CCCodesRevenuepartyEnterCurrencyDropDownValue).replace("{0}",text1));
          
          await page.clickElementUsingXpathNew(temp1);
          console.log("The new Currency AED has been selected from the dropdown");

  console.log("The NEW currency on the create invoice page is " + newCurrencyboxvalue );

});



Then('I get the total charges amount on the first non invoiced Charge code', async function(){
firstTotalChargenoninvoiced = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalChargeFirstNONInvoicedChargeCode);



});

Then('I verify if the Invoice total is equal to the sum of all the total charges being invoiced',async function () {
  const totalinvoice =  await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodePartyCreateInvoiceINVOICETOTAL);

  const invoicevariable = totalinvoice.split('-')[1].replace('USD','').trim()

  console.log("The invoice text " + invoicevariable );

  console.log("The dummy tezt " + GlobalexpectedCharge);
  await expect(invoicevariable).equals(firstTotalChargenoninvoiced)
});

Then('I verify if the Invoice total is equal to the sum of all the total charges being invoiced for multiple charge codes',async function () {
  const totalinvoice =  await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodePartyCreateInvoiceINVOICETOTAL);

  const invoicevariable = totalinvoice.split('-')[1].replace('USD','').trim()

  console.log("The invoice text " + invoicevariable );

  console.log("The dummy tezt " + GlobalexpectedCharge);
  await expect(invoicevariable).equals(TotalSumofAllChargeCodes + ".00");
});

Then('I verify cancel button is displayed to the user in create invoice section',async function () {
 const Invoicecancelbutton =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelButton);
 await expect(Invoicecancelbutton).equals(true);

});

Then('I verify preview invoice button is displayed to the user in create invoice section',async function () {
  const Invoicepreviewbutton =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
 await expect(Invoicepreviewbutton).equals(true);
});

Then('I verify Generate Invoice button is displayed to the user in create invoice section',async function () {
  const Invoicegeneratebutton =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionGenerateInvoice);
 await expect(Invoicegeneratebutton).equals(true);
});

Then('I would click on generate invoice button',async function () {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionGenerateInvoice);

});

Then('I would verify the success message on creation of invoice modal',async function () {

  await page.waitForFewSeconds(2000);
const successmodalheadertext = await  page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSmodalTitle);
console.log("The modal  header on the success invoice modal is " +  successmodalheadertext);
await expect(successmodalheadertext).equals("Success");

const successmodalbodytext = await  page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSmodalBODY);
console.log("The body on the success invoice modal is " +  successmodalbodytext);
await expect(successmodalbodytext).includes("Invoice data saved. The invoice can be viewed in the Financial Overview screen. Would you like to create another invoice for Bowne & Company?");
  
});

Then('I would click on NO button on the modal to return to the charge code entry screen',async function () {        
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSModalNObutton);
});


Then('I verify for all the charge codes that are invoiced are greyed out in the charge code entry', async function(){

  const SumofAllChargeCodes = await page.getAllTextContent(ShipmentFinSummaryHome.CCCodesRevenuepartyTotalchargesofallNEWLYAddedChargeCodesCSS);

  await expect(SumofAllChargeCodes.length).equals(1);

  await expect(SumofAllChargeCodes[0]).equals('0.00');
});

// cancel invoice creation 

When('I click on cancel button on the Create invoice section', async function () {
 await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelButton);
 console.log("The cancel button on create invoice is clicked");
});

Then('I verify the modal title should be {string}', async function (text : string) {
const mTitle =await page.getTextFromXpath(ShipmentFinSummaryHome.ModalTitle);
await expect(mTitle).equals(text);
console.log("The modal title on the cancel invoice modal is " +  mTitle);
});


Then('I verify the modal body should be {string}', async function (text : string) {
  const mBody =await page.getTextFromXpath(ShipmentFinSummaryHome.ModalBody);
  await expect(mBody).equals(text);
  console.log("The modal  body on the cancel invoice modal is " +  mBody);
});


Then('I click on NO Button on the Warning modal', async function () {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelWarningModalNO);

  console.log("The NO on the warning modal is clicked")
});

Then('I verify if the warning modal is closed and the user is on the create invoice section',async function () {
 const createinvoiceheader =await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);

  await expect(createinvoiceheader).equals(true);
  console.log("The user returns gto the create invoice section successfully");
});

Then('I click on YES Button on the Warning modal',async function () {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionCancelWarningModalYes);

  console.log("The YES on the warning modal is clicked")

});

Then('I  verify if the Create invoice Section is closed and the user returns to the revenue section screen',async function () {
  const createinvoiceheader =await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);

  await expect(createinvoiceheader).equals(false);
  console.log("The user returns gto the charge code entryUI and the creation of invoice is cancelled");
});


// preview invoice : 
When('I click on the preview invoice button in the create invoice section',async function () {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
  console.log("The preview invoice button is clicked successfully");
});

Then('I wait for 2 seconds', async function (){
await page.waitForFewSeconds(4000);
}
  );

Then('I verify if the invoice preview title can be verified as {string}',async function (text : string) {     
  const PreviewInvoiceTitle = await page.getTextFromXpath(ShipmentFinSummaryHome.ModalTitle);

  await expect(PreviewInvoiceTitle).equals(text);

  console.log("The user is currently on the  preview invoice Frame ");

});

Then('I click the OK button on the invoice preview frame',async function () {
await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodePartyPreviewInvoiceFrameOKButton);

});

Then('I verify if the user is returned back to the Create invoice section', async function(){
const createinvoiceheader = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionHeader);

await expect(createinvoiceheader).equals(true);
console.log("The user has previewd and returned back to the create invoice screen successfully");
});



Then('I enter the Estimated charge of {string} in the estimated charges field',async function (text : string){
  
// await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS);
estimatedChargeEntered = text;

if (revenuepartyVisible=== false){

  // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxXpath);
  await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS);
  // await page.waitForFewSeconds(1000);
  await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS, text);
console.log("The estimate revenue charge of 10 has been entered");

await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedAvailableCredittext);
}

else {
  await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS);
  // await page.waitForFewSeconds(1000);
  await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuePartyEstimatedChargesTextboxCSS, text);

  console.log("The estimate revenue charge of 10 has been entered");
  
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyExpandedAvailableCredittext);
}
}); 


// Revenue field error validation :

Then('I remove the existing charge code value',async function () {
  await page.waitForFewSeconds(1000);
    await page.clearElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent);
 console.log("The value in the charge code inout field is cleared");
 await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent)
});

Then('I hover on the Charge code text box', async function () {
  // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
console.log("The cursor is hovering over the charge code text box");
});

Then('I verify if the charge code input field is providing the error message',async function () {
  await page.waitForFewSeconds(1000);
  // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
  const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxWARNINGCell);
  await expect(valueinCCinputbox).equals("");
  console.log("The value in the box after removal of charge code is " + valueinCCinputbox);
  
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
  // await page.waitForFewSeconds(1000);
  const chargecodeboxtooltip = await page.getText(ShipmentFinSummaryHome.CCCodesRevenueChargeCodeFieldToolTip);
  await expect(chargecodeboxtooltip).equals("Please select a value");
  console.log("The text in tool tip is " + chargecodeboxtooltip);

});

Then('I remove the Unit type value',async function () {
  await page.waitForFewSeconds(2000);

  await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNOTPresentCSS);
  console.log("The value in the unit type  input field is cleared");
  
});

Then('I hover on the Unit type text box',async function () {
  
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
  //  await page.waitForFewSeconds(1000);
  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCheckBoxPresentCSS);
  
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
console.log("The cursor is hovering over the unit type text box");
});

Then('I verify if the unit type field is providing the the error box and tool tip',async function () {
  await page.waitForFewSeconds(1000);
   await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  //  double click units
   await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
   await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
   
   await page.hitTab();


  // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  // await expect(valueinCCinputbox).equals("");
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);

await page.hitTab();                          
  const UnitTypeTooltipText = await page.getText(ShipmentFinSummaryHome.CCCodesRevenueuNITTypeFieldToolTip);
  await expect(UnitTypeTooltipText).equals("Please select a value");
  console.log("The text in tool tip is " + UnitTypeTooltipText);
  const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  await expect(valueinCCinputbox).equals("");
  console.log("The value in the box after removal of charge code is :  " + valueinCCinputbox + "indicating Empty");
});


Then('I clear the existing curreny value',async  function () {
  await page.waitForFewSeconds(2000);
  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSS);
  await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSS);
  console.log("The value in the currency field is cleared");
});


Then('I verify if the Currency input field is providing the the error box and tool tip',async function () {
  
  //  
  //  double click units
  //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
   
  //  await page.hitTab();

  await page.waitForFewSeconds(1000);
  // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  // await expect(valueinCCinputbox).equals("");
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
  
  await page.hoverElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
  // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
  // await page.waitForFewSeconds(1000);
  
  await page.hoverElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
  await page.hitTab();
  const valueinCurrencyinputbox = await page.getText(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
  await expect(valueinCurrencyinputbox).equals("");
  console.log("The value in the box after removal of charge code is :  " + valueinCurrencyinputbox + "indicating Empty");
  const CurrencyTooltipText = await page.getText(ShipmentFinSummaryHome.CCCodesRevenueCurrencyFieldToolTip);
  await expect(CurrencyTooltipText).equals("Please select a value");
  console.log("The text in tool tip is " + CurrencyTooltipText);

});

//  revenue red warning cell validation CC, Unit type & currency : 

Then('I verify if the charge code input field is displaying a red colored warning cell',async function () {
 
          var CCredcellattribute = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
         console.log(CCredcellattribute[0]);
         await expect(CCredcellattribute[0].includes('warning-cell')).equals(true);


});

Then('I verify if the unit type field is displaying a red colored warning cell',async function () {

  var UnitTyperedcellattribute = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeCellTopmostREDwarningCellCSS);
  console.log(UnitTyperedcellattribute[0]);
  await expect(UnitTyperedcellattribute[0].includes('warning-cell')).equals(true);

});



Then('I verify if the Currency input field is displaying a red colored warning cell',async function () {
  
  var Currentredcellattribute = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
  console.log(Currentredcellattribute[0]);
  await expect(Currentredcellattribute[0].includes('warning-cell')).equals(true);
});





// Revenue Invalid value field errors

Then('I enter the invalid value of {string} in the revenue section charge code input text box',async function (text : string) { 
  const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

  if (checkboxpresent === false) {
  
  await page.clickElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresent);
  console.log("Click charge code text box");

  await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresentCSS, text);
  console.log("A charge code freight charge has been entered in the Charge code input box");
 }

 else {
  await page.clickElementUsingXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

  await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxnotPresentCSS, text);
 }

});


Then('I verify if the charge code input field is providing the {string} message',async function (text :string) {
 
  const errormsgvisible = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDChargeCodeValueDropdown);
  if (errormsgvisible === true){
  const errormsgvalue = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDChargeCodeValueDropdown);
  
  console.log("The error msg value is =" + errormsgvalue );
  await expect(errormsgvalue).equals(text);
 }
  await expect(errormsgvisible).equals(true);

});


Then('I enter the invalid value of {string} in the revenue section Unit Type text box',async function (text :string) {
  const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeSelectionCheckBoxVisible);

  if (checkboxpresent === false) {


    
  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNotPresentCSS);
  console.log("Unit Type input box is Clicked");

  // await page.waitForFewSeconds(1000);
  await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxNotPresentCSS, text);
  console.log("Invalid Unit Type  is entered");
  }

else {
  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresentCSS);
  console.log("Unit Type input box is Clicked");

// await page.waitForFewSeconds(1000);
  await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresentCSS, text);
  console.log("Invalid Unit Type  is entered");

  
}

});


Then('I verify if the unit type field is providing the {string} message',async function (text: string) { 
  const errormsgvisible = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDUnitTYPEValueDropdown);
  if (errormsgvisible === true){
  const errormsgvalue = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDUnitTYPEValueDropdown);
  
  console.log("The error msg value is =" + errormsgvalue );
  await expect(errormsgvalue).equals(text);
 }
  await expect(errormsgvisible).equals(true);

});

Then('I enter a invalid value of the currency {string} in the revenue section currency text box', async function (text : string) 
{
  
  await page.clearElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSCheckBoxNotPresent);
  await page.waitForFewSeconds(1000);
   await page.sendElementText(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSCheckBoxNotPresent , text);
    
         });

         Then('I verify if the currency input field is providing the {string} message',async function (text: string) {
          const errormsgvisible = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDCurrencyValueDropdown);
          if (errormsgvisible === true){
          const errormsgvalue = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenueChargeCodesINVALIDCurrencyValueDropdown);
          
          console.log("The error msg value is =" + errormsgvalue );
          await expect(errormsgvalue).equals(text);
         }
          await expect(errormsgvisible).equals(true);
                  });      


         Then('I verify if the total Charge amount field is providing an error message tool tip {string}',async function (text : string) 
         {

                  });
                  Then('I verify if the Total Charge input field is providing the the error box and tool tip for no total charges',async function () {
                    
                  });
        




// ********************************// Expense party section :***********************************

 Then('I click on the Add Expense party button on Charge code entry UI page',async function () {
  if (expensePartyVisible===false) {
    await page.waitForFewSeconds(3000);
  
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.AddExpensePartyButtonXpath);
  const expensePartyBoxes = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesExpensePartyInputBoxesCSS);

initialPartiesCount = expensePartyBoxes.length;
console.log("The Count of the parties in Charge code entry UI is " + initialPartiesCount );

  }
  
else {
console.log("A  customer party  (T code ) for Expense already exists");

}
});
         Then('I verify if the Expense party input field with a arrow dropdown is displayed to the user',async function () {
          if (expensePartyVisible===false) {
 
            const newEmptypartyExpensebox =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEntryExpenseNewPartytextbox);
            await expect(newEmptypartyExpensebox).equals(true);
            console.log("The new T party text box is displayed to the user");
          }
          
        });


Then('Verify if the expense party {string} already exists',async function (text : string) {

    const temp =((ShipmentFinSummaryHome.CCEExpenseTCODEPARTYTEXTBOX).replace("{0}",text));

    expensePartyVisible = await page.isElementVisibleByXpath(temp);

    customercodetext = text ;

    console.log("The expense party visible " +   expensePartyVisible );

        });

 Then('I enter {string} and selecting the Expense party from the dropdown',async function (text:string) {
          if (expensePartyVisible===false) {
  
            await page.sendElementTextUsingXpath(ShipmentFinSummaryHome.CCEntryExpenseNewPartytextbox, text);
          
            const temp =((ShipmentFinSummaryHome.CCEntrypartytextboxvalueSelectDropdown).replace("{0}",text));
          
            console.log("The xpath is" + temp);
            
          const temp1 =((ShipmentFinSummaryHome.CCEntrypartytextboxvalueINDROP).replace("{0}",text));
           customercodetext = await page.getTextFromXpath(temp1);
          console.log("The current Customer code is " + customercodetext);
          
            await page.clickElementUsingXpathNew(temp);
            }
        
        });        


        Then('I verify the actions menu button is present when the party accordion is expanded',async function () {
        const actionButtonVisibility =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEntryExpenseActionsmenuButton); 
await expect(actionButtonVisibility).equals(true);
console.log("The Actions menu button is visible to the user on the expense section ");
        
        });

        Then('I click Action Button on the latest added T code for this test case scenario',async function () {
          const latestaddedTCode = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForExpenseTopMostTCode);
const TotalExpensepartyBoxes = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesExpensePartyInputBoxesCSS);
 if (latestaddedTCode===true) {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForExpenseTopMostTCode);
  console.log("The actions button is clicked in order to delete the topmost T Code"); 
 }
 else if (TotalExpensepartyBoxes.length > 0){ 
await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.ExpandAllPartiesButtonXpath);
await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonForExpenseTopMostTCode);
  console.log("The actions button is clicked in order to delete the topmost T Code");
}
else if (TotalExpensepartyBoxes.length === 0){
  console.log("No T Codes are present in the Expense section");
}

else {

  console.log("The T codes are not present in the expense section");
}

        });


        

        When('I click on Remove Party option on the Expense Actions menu button',async function () {
          
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpenseActionsmenuButtonRemoveParty);
          console.log("The remove party option on the expense actions menu button is clicked");
        });
      
// add expense section charge codes



Then('I click on Expense section Charge Code text box and input a charge code value {string}',async function (text :string) {
 
  const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);

          if (checkboxpresent === false) {
          
          await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpenseChargecodeinputWhenCheckboxnotPresent);
          console.log("Clcik expense charge code text box");

          await page.sendElementText(ShipmentFinSummaryHome.CCEntryExpensePartyChargeCodeinputWhenCheckboxNOTPresentCSS, text);
          console.log("expense cc sample2");

         
         }

         else {
          await page.clickElementUsingXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);

          await page.sendElementText(ShipmentFinSummaryHome.CCEExpenseChargeCodeinputWhenCheckboxPresentCSS, text);
         }

});


Then('I click on the dropdown value in Expense section charge code text box {string}', async function (text :string) {     
  const temp1 =((ShipmentFinSummaryHome.CCCOdesRevenuePARTYChargeCodetextBoxEntryDropdown).replace("{0}",text));
          
  await page.clickElementUsingXpathNew(temp1);
  console.log("sample3 expsnes");
});


Then('I click on the Expense section Unit type and select a unit type {string}', async function (text :string) {
  const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);

  if (checkboxpresent === false) {
    
    await page.waitForFewSeconds(500);
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxNotPresent);
  console.log("Unit sample1 expense");

  const temp1 =((ShipmentFinSummaryHome.CCEExpensePartyUnitTypeSelectionValueCheckboxNotpresent).replace("{0}",text));
await page.clickElementUsingXpathNew(temp1);
console.log("Unit sample 2 expsnes");

await page.hitTab();
  
  console.log("the tab is pressed in expense");
  }

else {
  await page.waitForFewSeconds(1000);
  await page.clickElement(ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxPresentCSS);
  
  const temp1 =((ShipmentFinSummaryHome.CCEExpensePartyUnitTypeSelectionValue).replace("{0}",text));
await page.clickElementUsingXpathNew(temp1);
}
});

Then('I enter a value for Expense section Units field {string}', async function (text :string) {
  await page.waitForFewSeconds(2000);
          const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeSelectionCheckBoxVisible);

        
            await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxPresentCSS);

          console.log("The unit are cleared");
        const temp = "" + text;

        console.log("The value is " + temp );
        console.log("The type is " + typeof(temp));

        await page.sendElementText(ShipmentFinSummaryHome.CCEExpensepartyUnitsTextBoxCheckBoxPresentCSS, temp);

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


Then('I enter a value for Expense section Per Units field {string}',async function (text :string) {
  const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);

            await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxPresentCSS);

          console.log("The unit are cleared");
        const temp = "" + text;

        console.log("The value is " + temp );
        console.log("The type is " + typeof(temp));

        await page.sendElementText(ShipmentFinSummaryHome.CCEExpensepartyPerUnitsTextBoxCheckBoxPresentCSS, temp);
  
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


// stuff 

Then('I click and the currency {string} from the dropdown in the currency text box', async function (text : string) { 
  await page.clickElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent);
  await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent);
    const currentCurrency = await page.getAttributeValue(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent, "value");
           
          // await expect(currentCurrency).equals(text);
          console.log("The currency of the  Expense Party is being currently displayed as " +  currentCurrency );

          const temp1 =((ShipmentFinSummaryHome.CCEExpensePartyCurrencySelectionValue).replace("{0}",text));
        await page.clickElementUsingXpathNew(temp1);

        const NewCurrency = await page.getAttributeValue(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSCheckboxISPresent, "value");
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

Then('I click on the Expense section total Charge field',async function () {
  const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseChargecodeSelectionCheckBoxVisible);

  if (checkboxpresent === false) {
  
  
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpensepartyTotalChargeTextBoxCheckboxNotPresent);
  }
  else {
    await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpensepartyTotalChargeTextBoxCheckBoxPresent);

  }
});


Then('I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units {string} and per unit {string} and displayed to the user in the Total Charge field', async function (text1:string, text2: string) {    

            const totalcalculatedCharge = await page.getTextFromXpath(ShipmentFinSummaryHome.CCEExpensepartyTotalChargeTextBoxCheckBoxPresent);
            const expectedCharge = parseInt(text1,10)*parseInt(text2,10);
            console.log(totalcalculatedCharge + " dummy");
            console.log(expectedCharge + " dummy");
   GlobalexpectedCharge = expectedCharge;
    console.log ("The total charges for the charge code added is = " + totalcalculatedCharge)
  //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuePartyClickEMptySpace);
});


Then('I verify if a new empty Expense section charge code input row is added below when a charge code is successfully added to the Pay-to Party',async function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


// *************create Voucher *********************

Then('I would click on the checkbox on the newly added charge code in the expense party',async function () {   
  await page.waitForFewSeconds(1000);   
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodeExpensePartyFirstTCodeCheckBox);
  console.log("The first charge code checkbox is checked in the T Code") ;

  await page.waitForFewSeconds(1000); 

});

Then('I click on the Create Voucher button on the Actions menu button', async function () {
 const createVoucherbuttonstate =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodeExpenseActionsMenuCreateVoucherEnabledstate);
 
 if (createVoucherbuttonstate === true) {
  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyActionsmenuButtonCREATEVOUCHEROption);
  console.log("Create Voucher option on actions menu is clicked");
 }
 else {
  console.log("The Create Voucher button is disabled on the Action menu button ");
 }
});



Then('I verify the Create Voucher section header',async function () {
  await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);

  const createinvoicetitle = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);

  await expect(createinvoicetitle).equals(true);

  console.log("The title in create Voucher page is verified");
  
});

Then('I verify the Customer Name in the create Voucher section',async function () {

  const custNameonVoucher = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICEorVOUCHERSectionCustomerName);
  await expect(custNameonVoucher).equals(customercodetext);
  console.log("The customer name on the create Voucher panel page is " + custNameonVoucher);
});

Then('I verify if the Currency Voucher text box is having the same currency as the Voucher party',async function () {
  const currencyboxvalue = await page.getAttributeValue(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionVOUCHERCurrencyboxCSS, "value");
   
  await expect(currencyboxvalue).equals("USD");

  console.log("The currency on the create Voucher page is " + currencyboxvalue );

 });

Then('I verify if the Voucher total is equal to the sum of all the total charges being Vouchered', async function () 
         {
          const totalVoucher =  await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodePartyCreateVoucherTOTAL);

          const voucherVariable = totalVoucher.split('-')[1].replace('USD','').trim()
        
          console.log("The Voucher text " + voucherVariable );
        
          console.log("The dummy tezt " + GlobalexpectedCharge);     
 });

                  
 
 Then('I verify cancel button is displayed to the user in create Voucher section',async  function () {
                    
  const voucherCancelButton =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionCancelButton);
  await expect(voucherCancelButton).equals(true);

                  });

// Then('I verify preview Voucher button is displayed to the user in create Voucher section',async function () {       
                  //   const Invoicepreviewbutton =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
                  //   await expect(Invoicepreviewbutton).equals(true);
                  // });

Then('I verify Generate Voucher button is displayed to the user in create Voucher section',async function () {      
                    
  const voucherGeneratebutton =  await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionGenerateVoucherButton);
  await expect(voucherGeneratebutton).equals(true);
                  });

 

    //  failed line
 Then('I verify remove party option is disabled in actions menu when charge code is selected', async function(){
    const removePartystate = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCCodesExpensePartyActionsButtonRemovePartyCSS);
       console.log("The attribute value of remove party is = " + removePartystate[0]);
    if (removePartystate[0].includes("option-disabled")) {
    await expect(true).equals(true);
    console.log("The remove charges button is disabled");
       }
       else {
        await expect(true).equals(false);
        console.log("The remove charges button is Enabled");
       }

     });

// expense currency verify
     Then('I verify if the Currency Voucher text box is having the same currency as the Vouchered charge code',async function () {
      const voucherCurrencyboxvalue = await page.getAttributeValue(ShipmentFinSummaryHome.CCCodeExpenseVoucherCurrencyboxCSS, "value");
   
      await expect(voucherCurrencyboxvalue).equals("USD");
    
      console.log("The currency on the create invoice page is " + voucherCurrencyboxvalue );
    
    });
  
    
// preview voucher 
    When('I click on the preview Voucher button in the create Voucher section',async function () {
      await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyCREATEINVOICESectionPreviewInvoiceButton);
  console.log("The preview invoice button is clicked successfully");

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

     Then('I click on the Generate Voucher button',async function () {
    await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodeExpenseActionsMenuCreateVoucherButton)

    });

    Then('I would verify the success message on creation of Voucher modal',async function () {
      await page.waitForFewSeconds(3000);
      const successmodalheadertext = await  page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeExpenseVoucherSUCCESSmodalTitle);
      console.log("The modal  header on the success voucher modal is " +  successmodalheadertext);
      await expect(successmodalheadertext).equals("Success");
      
      const successmodalbodytext = await  page.getTextFromXpath(ShipmentFinSummaryHome.CCCodeRevenueInvoiceSUCCESSmodalBODY);
      console.log("The body on the success invoice modal is " +  successmodalbodytext);
      await expect(successmodalbodytext).includes("Voucher data saved. The voucher can be viewed in the Financial Overview screen. Would you like to create another voucher for Timothy A. Moore?");
                       
                      });

// cancel Voucher
    When('I click on cancel button on the Create Voucher section',async function () {
      await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionCancelButton);
 console.log("The cancel button on create Voucher is clicked");
    });

    Then('I verify if the warning modal is closed and the user is on the create Voucher section',async function () {
      const createVoucherheader =await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);

  await expect(createVoucherheader).equals(true);
  console.log("The user returns gto the create voucher section successfully");
    
    });

    Then('I verify if the Create Voucher Section is closed and the user returns to the Expense section screen',async function () {
      const createvoucherheader =await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodepartyCREATEVOUCHERSectionHeader);

  await expect(createvoucherheader).equals(false);
  console.log("The user returns gto the charge code entryUI and the creation of voucher is cancelled");

    });



   
  //  expense charge code field validations  : pending 02/27

  Then('I remove the existing expense charge code value',async function () {
    await page.waitForFewSeconds(1000);
    await page.clearElementUsingXpath(ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeinputWhenCheckboxNotPresent);
 console.log("The value in the charge code input field is cleared");
 await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeinputWhenCheckboxNotPresent);

  });

  Then('I hover on the expense Charge code text box',async function () {
    // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpensepartyChargeCodeinputWhenCheckboxPresent);
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCEExpensepartyChargeCodeinputWhenCheckboxPresent);
  console.log("The cursor is hovering over the charge code text box");
  
  });

  Then('I verify if the expense charge code input field is providing the error message',async function () {
    await page.waitForFewSeconds(1000);
    // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyChargeCodeinputWhenCheckboxPresent);
    const valueinCCExpenseinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesExpensepartyChargeCodeinputWhenCheckboxWARNINGCell);
    await expect(valueinCCExpenseinputbox).equals("");
    console.log("The value in the expense CC input box after removal of charge code is " + valueinCCExpenseinputbox);
  
  });

  Then('I remove the Expense Unit type value', async function () {
    await page.waitForFewSeconds(2000);
    await page.clearElement(ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxNotPresentCSS);
    console.log("The value in the expense unit type  input field is cleared");
  
  });

  Then('I hover on the expense Unit type text box',async function () {
     
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
  //  await page.waitForFewSeconds(1000);
  await page.clickElement(ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxNotPresentCSS);
  
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxPresent);
console.log("The cursor is hovering over the unit type text box");
  });


  Then('I verify if the expense unit type field is providing the the error box and tool tip',async function () {
   await page.waitForFewSeconds(1000);
   await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpensepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  //  double click units
   await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCEExpensePartyUnitsTextBoxCSSTopmostwarningCell);
   await page.clickElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
   
   await page.hitTab();

  // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  // await expect(valueinCCinputbox).equals("");
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
  await page.hoverElementUsingXpath(ShipmentFinSummaryHome.CCEExpenseCCUnitTypeTextBoxCheckBoxPresent);

await page.hitTab();                          
  const ExpenseUnitTypeTooltipText = await page.getText(ShipmentFinSummaryHome.CCCodesExpenseuNITTypeFieldToolTip);
  await expect(ExpenseUnitTypeTooltipText).equals("Please select a value");
  console.log("The text in tool tip is " + ExpenseUnitTypeTooltipText);

  const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCEExpensepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  await expect(valueinCCinputbox).equals("");
  console.log("The value in the expense unit type box after removal of charge code is :  " + valueinCCinputbox + " indicating its Empty");

  });

  Then('I clear the existing expense curreny value',async function () {
    await page.waitForFewSeconds(2000);
    await page.clearElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSS);
    console.log("The value in the expense currency field is cleared");
  
  });

  Then('I verify if the expense currency input field is providing the the error box and tool tip',async  function () {      
   
     
  //  
  //  double click units
  //  await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyCurrencyTextBoxCSSWARNINGCell);
   
  //  await page.hitTab();

  await page.waitForFewSeconds(1000);
  // const valueinCCinputbox = await page.getTextFromXpath(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxWARNINGCellXpath);
  // await expect(valueinCCinputbox).equals("");
  //  await page.clickElement(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitTypeTextBoxCheckBoxPresent);
  
  await page.hoverElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
  // await page.clickElementUsingXpathNew(ShipmentFinSummaryHome.CCCodesRevenuepartyUnitsTextBoxCSSTopmostwarningCell);
  // await page.waitForFewSeconds(1000);
  
  await page.hoverElement(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
  await page.hitTab();
  const valueinExpenseCurrencyinputbox = await page.getText(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
  await expect(valueinExpenseCurrencyinputbox).equals("");
  console.log("The value in the expense currency box after removal of charge code is :  " + valueinExpenseCurrencyinputbox + "indicating Empty");
  const CurrencyTooltipText = await page.getText(ShipmentFinSummaryHome.CCCodesExpenseCurrencyFieldToolTip);
  await expect(CurrencyTooltipText).equals("Please select a value");
  console.log("The text in tool tip is " + CurrencyTooltipText);

  });

  // expense red warning cell
  Then('I verify if the expense charge code input field is displaying a red colored warning cell',async function () {
    var CCredcellattribute = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCEExpensepartyChargeCodeinputfIRSTcHECKBoxRedWarningcellCSS);
    console.log(CCredcellattribute[0]);
    await expect(CCredcellattribute[0].includes('warning-cell')).equals(true);
  });

  Then('I verify if the expense unit type field is displaying a red colored warning cell',async function () {
    var CCredcellattribute = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCEExpensepartyUnitTypeCellTopmostREDwarningCellCSS);
    console.log(CCredcellattribute[0]);
    await expect(CCredcellattribute[0].includes('warning-cell')).equals(true);
  })

  Then('I verify if the expense Currency input field is displaying a red colored warning cell',async function () {
    var CCredcellattribute = await page.getAllTextAttributes(ShipmentFinSummaryHome.CCEExpensepartyCurrencyTextBoxCSSWARNINGCell);
    console.log(CCredcellattribute[0]);
    await expect(CCredcellattribute[0].includes('warning-cell')).equals(true);
  });

  // expense invalid value :




  // expense charge netting restriction :Disable Users from Invoicing and Vouchering Charge Codes That Have Been Configured to Charge Net

  Then('I verify the toast message is displayed to the user {string} for expense charge',async function (text : string) {

    await page.waitForFewSeconds(1000);
    const toastmsgtext = await page.getAllTextContent(ShipmentFinSummaryHome.CCCodesRevenueSectionChargeNETTINGToastCSS);
    console.log("The charges netting restrictiong toast is : " + toastmsgtext[0]);
  
  
    await expect(toastmsgtext[0]).equals(text);
    console.log("The charges netting restrictiong toast is displayed to the user");
  
  });
  
  Then('I click on the x on the toast for expense charge netting',async function () {
    await page.clickElement(ShipmentFinSummaryHome.CCEExpenseSectionChargeNETTINGToastButtonCloseCSS);
    console.log("The x on the toast is clicked");
  
  });
  
  Then('I verify the expense charge code input box is empty',async function () {
    const checkboxpresent = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCCodesExpensePartyChargeCodeSelectionCheckBoxVisible);
            console.log("The  check box is present " + checkboxpresent);
  
            if (checkboxpresent === false) { 
  
              console.log("if block ");
  const checkboxtext = await page.getAllTextAttributesValue(ShipmentFinSummaryHome.CCEExpenseChargecodeinputWhenCheckboxnotPresentCSS);
  
  await expect(checkboxtext[0]).equals("");
            }
            else { 
  
              console.log("else block ");
              const checkboxtext = await page.getAllTextAttributesValue(ShipmentFinSummaryHome.CCEExpenseChargeCodeinputWhenCheckboxPresentCSS);
  
              await expect(checkboxtext[0]).equals("");
  
            }
  
  });
  
  Then('I verify the toast message is not displayed to the user in expense section',async function () {
   const toastmessagevisiblity = await page.isElementVisibleByXpath(ShipmentFinSummaryHome.CCEExpenseSectionChargeNETTINGToast);
  console.log("visibility"  + toastmessagevisiblity)
   await expect(toastmessagevisiblity).equals(false);
  });