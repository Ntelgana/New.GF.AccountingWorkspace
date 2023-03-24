import { searchPage } from '../pages/searchPage';
import { landingPage } from '../pages/landingPage';
import { homePage } from '../pages/homePage';
import { categoryDisplayScreen } from '../pages/categoryDisplayScreen';
import { addaCategoryChargeCodeScreen } from '../pages/addaCategoryChargeCodeScreen';
import { page } from '../support/hooks';
import { doesNotReject } from 'assert';
import { Console } from 'console';
import { globalChargeCodedisplayScreen } from '../pages/GlobalChargeCodedisplayScreen';
import { ShipmentFinEditorLandingPage } from '../pages/ShipmentFinancialEditorLandingPage';
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


Given('I am on Home page of charge codes', async function () {
    console.log('I am on home page');

    await page.waitForFewSeconds(3000);
    // await this.page.waitForTimeout(5000);
    await page.sendElementText(ShipmentFinEditorLandingPage.usernameTextBox, "telgnav@chrobinson.com");
    // await this.page.type(landingPage.usernameTextBox, "telgnav@chrobinson.com", {delay: 100});
    await page.sendElementText(ShipmentFinEditorLandingPage.passwordTextBox, "Newcastle@123456");
    await page.clickElement(ShipmentFinEditorLandingPage.signinButton);
    //await this.page.screenshot({path:'testfailed.png'});
    console.log("Global home page login successfully");


});

When('I click on the hamburger menu of Home page', async function () {

    console.log('I am clicking on the hamburger menu');

    await page.clickElement(homePage.hamburgerMenuButton);


});

Then('I should see Home and charge codes buttons', async function () {
    console.log('I am seeing the home and charge code buttons');
    const isHomeLinkVisible = await page.isElementVisible(homePage.homeButton);
    const isChargeCodeLinkVisible = await page.isElementVisible(homePage.chargeCodeButton)

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

When('I click on the Home button', async function () {

    console.log('User is clicking on the Home button');
    await page.clickElement(homePage.homeButton);
    console.log("Home link is clicked successfully");

});

Then("Verify the title of the home page", async function () {

    console.log('I am verifying the title of the Home button');

    await page.clickElement(homePage.homeButton);
    var welcomeText = await page.getText(homePage.hometext)
    console.log("Welcome text is: " + welcomeText);
});

When('I click on the Charge code button on Home page', async function () {

    console.log('I click on the Charge code button on Home page');

    await page.clickElement(homePage.chargeCodeButton);

});

Then('I should see three different options under charge codes', async function () {
    console.log(' I should see three different options under charge codes');
    const isCategoryLinkVisible = await page.isElementVisible(homePage.categoryHomeButton
    )
    const isGlobalLinkVisible = await page.isElementVisible(homePage.globalHomeButton)
    const isCountryLinkVisible = await page.isElementVisible(homePage.countryHomeButton)
    const isCustomerLinkVisible = await page.isElementVisible(homePage.customerHomeButton)
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


When(/^I click on the Category link$/, async function () {

    console.log('I click on the Category link');

    await page.clickElement(homePage.categoryHomeButton);
});

Then(/^I should see the Category display screen$/, async function () {
    console.log('I should see the Category display screen');
    const isCategoriesHeaderisVisible = await page.isElementVisible(".screen-title-header")
    if (isCategoriesHeaderisVisible) {
        console.log('Categories Header is visible')
    }
    else {
        console.log('Categories Header is not visible');
    }
});

Then(/^I should see the add and filter icons$/, async function () {
    console.log('I should see the add and filter icons');
    const isaddNewCategoryIconisVisible = await page.isElementVisible(categoryDisplayScreen.addCategoryicon)
    if (isaddNewCategoryIconisVisible) {
        console.log('add new category icon is visible');

    }
    else {
        console.log('add new category icon is not visible');
    }

    const isFilterCategoriesIconisVisible = await page.isElementVisible(categoryDisplayScreen.categoryFiltericon)
    if (isFilterCategoriesIconisVisible) {
        console.log('Filter categories icon is visible');

    }
    else {
        console.log('Filter categories icon is not visible');
    }

});

When(/^I hover the mouse on add icon$/, async function () {
    console.log('I hover the mouse on add icon');

    await page.hoverElement(categoryDisplayScreen.addCategoryicon);

});

Then(/^I should see the text "(.*?)"$/, async function (text: string) {


    let addCategoryToolTip = await page.getTextFromXpath(categoryDisplayScreen.categoriesPageAddIconToolTipText)
    await console.log('Tool tip of add icon :' + addCategoryToolTip);
    await console.log("The expected text from category screen add icon tool tip is " + text);
    await expect(addCategoryToolTip).equals(text);
});

When(/^I hover the mouse on the filter icon$/, async function () {
    console.log('I hover the mouse on the filter icon');
    await page.waitForFewSeconds(30);
    await page.hoverElement(categoryDisplayScreen.categoryFiltericon);
});

Then('I should see the text on filter icon {string}',async function (text:string){
    await page.hoverElement(categoryDisplayScreen.categoryFiltericon);
    await page.waitForFewSeconds(3000);
    let categoryFilterToolTip = await page.getTextFromXpath(categoryDisplayScreen.categoriesPageFilterIconToolTipText)
    await console.log('Tool tip of category screen Filter icon :' + categoryFilterToolTip);
    await console.log("The expected text from category screen Filter icon tool tip is " + text);
    await expect(categoryFilterToolTip).equals(text);
});


When(/^I click on the add category icon$/, async function () {
    console.log("I click on the add category icon");

    await page.clickElement(categoryDisplayScreen.addCategoryicon);

    var addCategoryScreenWelcomeText = await page.getText(categoryDisplayScreen.addCategoryScreenTitle)
    console.log("Add a categroy display screen title is: " + addCategoryScreenWelcomeText);


});


Then(/^I should see Add New Category screen$/, async function () {
    console.log("I should see Add New Category screen");

    const isAddACategoryDisplayScreen = await page.isElementVisible(categoryDisplayScreen.addCategoryScreenTitle)

    if (isAddACategoryDisplayScreen) {
        console.log("The user is on add a category display screen");
    } else {
        console.log("The add a category screen is not available to the user");
    }


});

Then(/^I should see description and purpose text boxes$/, async function () {
    console.log("I should see description and purpose text boxes");

    const isDescriptionTextBoxTitleAvailable = await page.isElementVisible(categoryDisplayScreen.categoryDescriptionlabel);
    const isPurposeTextBoxTitleAvailable = await page.isElementVisible(categoryDisplayScreen.categoryPurposelabel);
    const isDescriptiontextBoxAvailable = await page.isElementVisible(categoryDisplayScreen.categoryPurposelabel);

    var isDescriptionTextBoxTitle = await page.getText(categoryDisplayScreen.categoryDescriptionlabel);


    var isPurposeTextBoxTitle = await page.getText(categoryDisplayScreen.categoryDescriptionlabel);
    console.log("The text box title is: " + isPurposeTextBoxTitle);




    if (isDescriptionTextBoxTitleAvailable) {
        console.log("The description text box is available");
    } else {
        console.log("The description text box is unavailable");
    }
    if (isPurposeTextBoxTitleAvailable) {
        console.log("The purpose text box is available");
    } else {
        console.log("The purpose text box is unavailable");
    }
});

Then(/^I should enter the category description and purpose in the respective text boxes$/, async function () {
    console.log("I should see description and purpose text boxes");
var randomCategoryName = "hitest" +Math.floor(Math.random()*2000);
console.log("random category name = "  + randomCategoryName);
CategoryDescriptionname = randomCategoryName;
    await page.sendElementText(categoryDisplayScreen.categoryDescriptionTextBox, randomCategoryName );
    await page.sendElementText(categoryDisplayScreen.categoryPurposeTextBox, "Automation purpose test" + randomCategoryName);

});

Then(/^I should click on Save Button$/, async function () {
console.log("I click on save button")
    await page.clickElementUsingXpath(addaCategoryChargeCodeScreen.addNewCategorySaveButtonXpath);
});

Then(/^I verify success message$/, async function () {
    console.log("Success message recieved")
    //var successMessagealertText = await page.getText(addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
    //var successMessagealertText = await page.getAlertText();
    //console.log("alert message is : " + successMessagealertText);
    await page.waitForFewSeconds(2000);
   var successConfirmationMessageText = await page.getTextFromXpath(addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
    console.log("alert message is : " + successConfirmationMessageText);
    await expect(successConfirmationMessageText).equal('Successfully created charge code');
    console.log("Success message verified");
});

Then(/^I verify the new category code created$/, async function () {
    await page.scrollToBottom();
   var  mostRecentCategoryCreated = await page.getTextFromXpath(categoryDisplayScreen.categoryMostRecentCategoryCardText);
    console.log("The most recent category name is " + mostRecentCategoryCreated);
    await expect(CategoryDescriptionname).equal(mostRecentCategoryCreated);

});

 Then(/^I click on Cancel button$/, async function () {

    console.log("I click on Cancel Button");
    await page.clickElementUsingXpath(addaCategoryChargeCodeScreen.addNewCategoryCancelButton);
    
});

Then(/^I click on OK button on the pop up modal$/, async function (){
    console.log("I recieve the pop up modal for cancellation");
    var cancelCategoryConfirmMessage = await page.getText(addaCategoryChargeCodeScreen.addNewCategoryCancelModalConfirmText);
    console.log("The cancel confirmation mesage is" + cancelCategoryConfirmMessage);
    await expect(cancelCategoryConfirmMessage).equal("The pending changes on charge codes will be discarded on click of OK.");
    await page.clickElement(addaCategoryChargeCodeScreen.addNewCategoryCancelModalOKButton);



});

Then('I should enter the text in purpose text box and leave Description text box empty', async function() {
    var randomPurposeName = "hitest" +Math.floor(Math.random()*2000);
    await page.sendElementText(categoryDisplayScreen.categoryPurposeTextBox, "Automation purpose test" + randomPurposeName);
        
        });



Then('I should get error message on description text box {string} and {string}', async function (String1, String2) {
          var Message1 = await page.getTextFromXpath(addaCategoryChargeCodeScreen.addNewCategoryDescriptionEmptyvalueError);
          var Message2 = await page.getTextFromXpath(addaCategoryChargeCodeScreen.addNewCategoryDescriptionUniquevalueError);
          console.log("Expected 1st description box error message is : "  + String1 + "Actual 1st message is : " + Message1  );
          console.log("Expected 2nd description box error message is : "  + String2 + "   Actual 2nd message is : " + Message2  );
        await expect(Message1).equal(String1);
        await expect(Message2).equal(String2);

         });


         Then('I should get confirmation message as a modal with the text {string} with option OK and cancel buttons', async function (String1) {
            var Message1 = await page.getTextFromXpath(addaCategoryChargeCodeScreen.addNewCategoryCancelModalConfirmText);
            
            console.log("Expected cancel confirmation message is : "  + String1 + "Actual confirmation message is : " + Message1  );
            
          await expect(Message1).equal(String1);
  
           });
 Then('I click on Cancel on Modal',async function () {

    await page.clickElementUsingXpath(addaCategoryChargeCodeScreen.addNewCategoryCancelModalCancelButton);
    console.log("Cancel on modal is clicked ");
           
          });

Then('I should enter the text in description text box and leave purpose text box empty', async function()  {
    var randomCategoryName = "hitest" +Math.floor(Math.random()*2000);
    console.log("random category name = "  + randomCategoryName);
    CategoryDescriptionname = randomCategoryName;
        await page.sendElementText(categoryDisplayScreen.categoryDescriptionTextBox, randomCategoryName );            

                   });

 Then('I should get error message on purpose text box {string}', async function (String) {
            var Message = await page.getTextFromXpath(addaCategoryChargeCodeScreen.addNewCategoryPurposeEmptyvalueError);
            console.log("Expected purpose error message is : "  + String + "  and Actual 1st message is : " + Message  );
            await expect(Message).equal(String);
        });


 When('I hover the cursor on the tool tip of any Category charge code card', async function () {
    await page.hoverElement(categoryDisplayScreen.categoryCardTooltipWithCSSCardOne);
            console.log("The cursor is on the tool tip of the Card (css)");
          });

          Then('I should see the purpose of the card in the modal', async function () {
            var CardTooltipPopHeading = await page.getTextFromXpath(categoryDisplayScreen.categoryCardPurposeToolTipPopUp);
            await expect(CardTooltipPopHeading).equals("Purpose");
            console.log("The heading of the tool tip is: " + CardTooltipPopHeading );
        });





     When('I click on any category charge code card to get a Pop up modal with Description as Title',async function () {
             var firstCategoryCardName = await page.getTextFromXpath(categoryDisplayScreen.categoryFirstCategoryCardText);
          await page.clickElementUsingXpath(categoryDisplayScreen.categoryFirstCategoryCardText);
          console.log("The Category card is clicked");
             var ModalTitleName = await page.getTextFromXpath(categoryDisplayScreen.categoryCardModalTitle);
          await expect(firstCategoryCardName).equals(ModalTitleName);
          console.log("The text of the first Card is " + firstCategoryCardName + "The text on the pop up modal is " + ModalTitleName );
          });


     Then('I should see edit and close icon buttons at the bottom right corner of the pop up modal',async function () {
   
           var modalEditButtonStatus = await page.isElementVisibleByXpath(categoryDisplayScreen.categoryCardModalEditButton);
           console.log("The status of edit button " + modalEditButtonStatus);
        await expect(modalEditButtonStatus).equals(true);
        var modalCloseButtonStatus = await page.isElementVisibleByXpath(categoryDisplayScreen.categoryCardModalCloseButton);
        console.log("The status of close button " + modalCloseButtonStatus);
        await expect(modalCloseButtonStatus).equals(true);

          });


          Then('I should click on the Close button on the pop up modal',async function () {
            await page.clickElementUsingXpath(categoryDisplayScreen.categoryCardModalCloseButton);
            console.log("The Close button on card Pop modal is Clicked");
          });


       




          Then('I should refresh the page',async function () {
            await page.pageRefresh();
          });








When('I click on the Filter button icon on the category charge code display screen', async function () {
    // await page.waitForFewSeconds(5000);
    
    var filterbuttonvisibility = await page.isElementVisibleByXpath(categoryDisplayScreen.categoryFilterButtonIcon);
    console.log("The filter button is : " + filterbuttonvisibility );
    await page.clickElementUsingXpath(categoryDisplayScreen.categoryFilterButtonIcon);
  });
     

  Then('I should see a text box filter with the text {string}', async function (string) {
    console.log("I am on the Filters bar of category display screen");
    var filterBarStatus = await page.isElementVisibleByXpath(categoryDisplayScreen.categoryFilterbar);
    await expect(filterBarStatus).equal(true);
    console.log("The filter bar is visible");
  });

  Then('I should not see the Filter bar', async function(){
    var filterBarStatus = await page.isElementVisibleByXpath(categoryDisplayScreen.categoryFilterbar);
    console.log("The value of filterBarStatus: " + filterBarStatus);
    await expect(filterBarStatus).equal(false);
    console.log("The filter bar is not visible");
    
  });


  When('I enter {string} in the filter text box',async function (text: string) {
    await page.sendElementText(categoryDisplayScreen.categoryFilterbarCSS, text);
    console.log("The text is entered in Filter  bar");

 });

 Then('I should filter and display only the matching category charge codes to the text {string}',async function (text: string) {
     
  var filteredCategoriesList = await page.getAllTextContent(categoryDisplayScreen.categoryChargeCodeCardsAllCategoryNames);
for (const temp of filteredCategoriesList){
    await expect(temp).contains(text);
}
console.log("The Filtered category charge codes are verified with matching text");

filteredCategoriesListLength = filteredCategoriesList.length;

  });



  When('I delete the text in the filter text box',async function () {
    await page.clickElementUsingXpath(categoryDisplayScreen.categoryFilterbar);
    console.log("The text on Filter bar is cleared");

    var TotalCategoryList = await page.getAllTextContent(categoryDisplayScreen.categoryChargeCodeCardsAllCategoryNames);
    TotalCategoryListLength= TotalCategoryList.length;
    var temp;
    if (TotalCategoryListLength==filteredCategoriesListLength){
        temp = true;
    } else {
        temp= false;
    }
    await expect(temp).equal(false);
    console.log()
  });


  Then('I should get error message "No charge codes match your search criteria"', async function () {
    var NoFilterErrorMsg=  await page.getTextFromXpath(categoryDisplayScreen.categoryNoFilterMatchedErrorText);
    console.log("Actual error message is : " + NoFilterErrorMsg);
  await expect(NoFilterErrorMsg).equals("No charge codes match your search criteria");

  });

  When(/^I enter a duplicate category description and purpose in the respective text boxes$/, async function () {
    console.log("I should see description and purpose text boxes");
var duplicateCategoryName = "hitest" ;
console.log("Duplicate description of charge code = "  + duplicateCategoryName);

    await page.sendElementText(categoryDisplayScreen.categoryDescriptionTextBox, duplicateCategoryName );
});







Then('I should enter the category description as {string} and purpose as {string} in the respective text boxes', async function (categoryDescription: string, categoryPurpose: string) {
    CategoryDescriptionname = categoryDescription;
    await page.sendElementText(categoryDisplayScreen.categoryDescriptionTextBox, categoryDescription);
    await page.sendElementText(categoryDisplayScreen.categoryPurposeTextBox, categoryPurpose)

    console.log("Description and Purpose of charge code category are entered");

    
  });

  When('I click on the Edit icon button of a Charge code Card',async function () {
     await page.clickElementUsingXpath(categoryDisplayScreen.categoryCardEditButtonLastCard);
    console.log("Edit icon button on the Test Archive category card is clicked ");

  });

  Then(/^I verify the new category code created for Archive functionality$/, async function () {
    await page.scrollToBottom();
   var  mostRecentCategoryCreated = await page.getTextFromXpath(categoryDisplayScreen.categoryMostRecentCategoryCardText);
    console.log("The most recent category name is " + mostRecentCategoryCreated);
    await expect("Test Archive").equal(mostRecentCategoryCreated);

  });

  Then('I should be on Edit Category screen',async function () {
      var categoryEditPageTitle = await page.getTextFromXpath(categoryDisplayScreen.categoryEditCategoryPageTitle);
      console.log("Title of the Edit category screen = "  + categoryEditPageTitle);
      await expect(categoryEditPageTitle).equals("Edit Category");
  });

  When('I click on Archive icon button', async function () {
      await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditCategoryPageArchiveButton);
      console.log("The archive button is clicked successfully");
    
  });

  
  Then('I should get a alert pop up with  body {string}', async function (text: string) {
var archiveConfirmationAlertBody =  await page.getText(categoryDisplayScreen.categoryEditConfirmationModalBodyCSS);
console.log("The body of the archive modal alert is " + archiveConfirmationAlertBody );
await expect(archiveConfirmationAlertBody.trim()).equals(text.trim());
  });

  Then('I should click on OK button on alert',async function () {
   await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditConfirmationModalOKButton);
   console.log("The OK button on the archive confirmation alert is clicked successfully");
  });

  Then('I should click on the Save button of Edit Category Page',async function () {
    await page.clickElementUsingXpath(categoryDisplayScreen.categoryEditCategoryScreenSaveButton);
    console.log("The Save button on the Edit Category screen is clicked successfully");
  });

  Then('I should not see the archived charge code card in the Category Charge code display screen',async function () {
    await page.scrollToBottom();
    var  mostRecentCategoryCreated = await page.getTextFromXpath(categoryDisplayScreen.categoryMostRecentCategoryCardText);
     console.log("The most recent category name is " + mostRecentCategoryCreated);
     var flag= true; 
     if (mostRecentCategoryCreated==="Test Archive"){
         flag= false;
     }
        await expect(flag).equals(true);
  });

  Then('I clear the Category description and purpose text boxes', async function () { 
      await page.clearElement(categoryDisplayScreen.categoryDescriptionTextBox);
      await page.clearElement(categoryDisplayScreen.categoryPurposeTextBox);
      console.log("The description and purpose text boxes values are cleared");

  });



 
    Then('I should update the category description as {string} and purpose as {string} in the respective text boxes', async function (categoryDescription: string, categoryPurpose: string) {
        await page.clearElementUsingXpath(categoryDisplayScreen.categoryDescriptionTextBox);
        await page.sendElementText(categoryDisplayScreen.categoryDescriptionTextBox, categoryDescription);
        await page.clearElementUsingXpath(categoryDisplayScreen.categoryPurposeTextBox);
        await page.sendElementText(categoryDisplayScreen.categoryPurposeTextBox, categoryPurpose)
    
        console.log("A charge code category is updated to test update functionality");
    
        
      }); 


Then(/^I should verify the update success alert message$/, async function () {
    console.log("Success message recieved");
    //var successMessagealertText = await page.getText(addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
    //var successMessagealertText = await page.getAlertText();
    //console.log("alert message is : " + successMessagealertText);
   var successConfirmationMessageText = await page.getTextFromXpath(addaCategoryChargeCodeScreen.addNewCategorySuccessMessage);
    console.log("alert message is : " + successConfirmationMessageText);
    await expect(successConfirmationMessageText).equal('Successfully updated charge code');
    console.log("Success message verified");

});


Then(/^I should get the new charge code card view title truncated with ellipsis$/, async function () {
    var bool = false;
    var lastCardTitle = await page.getTextFromXpath(categoryDisplayScreen.categoryCardModalTitle);
    if (lastCardTitle.includes('...')) {
        bool = true;
    }
    await expect(bool).equal(true);
    console.log(lastCardTitle);
    console.log("The ellipses is present for text overflow of 33 characters");
    
});

         When('I click on the new charge code category card',async function () {
            await page.waitForFewSeconds(3000);          
            await page.clickElementUsingXpath(globalChargeCodedisplayScreen.GlobalAddGlobalCCLastGlobalChargeCard);
            console.log("The most recently created  charge code category is clicked");
          });

          Then('I should verify the information on the updated charge code category',async  function () {
            //add this step to verify updated category info 
            
          });



          Then('I close the browser', async function () {
    await page.close();
    console.log("I am closing the browser");
});


Then('I should see the description and purpose of the New Category on a pop up modal',async function () {
    await page.getAllTextContent(categoryDisplayScreen.categoryCardModalTitle)
  });





























