#  Feature: Verify the Global charge code display screen

# # Background:
# # Given I am on Home page of charge codes
# # When I click on the hamburger menu of Home page
# # Then I should see Home and charge codes buttons
# # When I click on the Charge code button on Home page
# # When I click on the Global link on home page

# # # #  @RegressionTest
# # TC-023: verifying if we are on the Global charge codes display screen 
# Scenario: Verify the user is on the Global Charge code display screen
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I close my browser

# # # TC024 : done   
# Scenario: Verify the Add button icon on Global Charge Code screen
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
#  Then I should see the add and filter icons on Global Display Screen
#  When I hover the mouse on add icon on Global Display Screen 
#  Then I should see the add tooltip text "Add New Global Charge Code"
# Then I close my browser 

# # # tc025: done
# Scenario: Verify the Filter button icon on Global Charge Code screen
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the add and filter icons on Global Display Screen
# When I hover the mouse on the filter icon on Global Display Screen
# Then I should see the tooltip text "Filter Global Charge Codes"
# Then I close my browser 


# # # tc-026: done
# Scenario: Verify if the Global charge codes are present in Global display screen in the category accordian view
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should see an accordian view of all the Categories linked to Global charge codes
#  Then I close my browser 


# # # TC-027: done
# # # # #TC02: Verify is the drop down feature is working for the Global categories accordian view 
# Scenario: Verify if the global charge codes are displayed in card format when clicking on any Global Category
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on any category in the accordian view 
# Then I should see an expanded view of all the Global charge codes linked to that category in card format
# When I click on the category view again
# Then The expanded view should collapse back to accordion view
# Then I close my browser

# # # TC-028: done
# Scenario: Create a new Category for Global charge code test automation
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description as "Global Charge code category for Automation" and purpose as "Global Charge Code automation" in the respective text boxes
# Then I should click on Save Button
# Then I verify success message


# Scenario: Add a new Global Charge Code for test automation
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should enter the name and description of the new Global charge code
# Then I should enter the Default unit amount 
# Then I should click on save icon button 
# Then I should see the Global Charge code display screen
# Then I should verify the success message for new Global charge code
# Then I should be verify the newly created Global charge code 


# # # TC-028 : done : Verify the global charge code has the name and descrition on the card
# Scenario: to verify the newly created global charge code  
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should be verify the newly created Global charge code 
#   Then I close my browser

# # #  TC029: done : verify the error message when no default amount is entered in GCC addition
# Scenario: Verify the error message when no default net amount is provided in the text box while adding a new Global charge code
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the name and description of the new Global charge code
# When I should click on save icon button
# Then I should get an error message "Default Unit Amount must be numeric" and "Default Unit Amount can have no more than 4 decimal places" below the text placeholder
#  Then I close my browser

# # # TC-030: done
# Scenario: Verify the error message when no charge code name is provided in the text box while adding a new Global charge code
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# When I should click on save icon button
# Then I should get an error message "Code must not be empty" and "Code must be unique" below the Charge code name placeholder
#  Then I close my browser


# # # TC-031: done
# Scenario: Verify the error message when NO Description is provided in the text box while adding a new Global charge code
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# When I should click on save icon button
# Then I should get an error message "Description must not be empty" below the Charge code description placeholder
#  Then I close my browser

# # # tc032: Done
# Scenario: Verify the functionality of the radio buttons in the transaction config option in Global charge code
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the Test automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should click on all the radio button on Transaction config section 
# Then I should click on save icon button
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify if the checkboxes are checked for the transaction config option
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should click on Close button on the modal
# Then I close my browser

# # # TC033: Done
# Scenario: Verify if clicking on the Edit button on the Modal is navigating to the Edit Global Charge code screen
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# Then I click on the charge code card
# When I click on the Edit button on the Pop Up Modal
# Then I should be on the Edit Global Charge code Screen
# When I click on the cancel button on Edit Global Charge code screen
# Then I should see the Global Charge code display screen
# Then I close my browser

# # # TC034: Done 
# Scenario: Verify the Transaction filters selection info in available on the card pop up modal
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the Test automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the transaction type filters
# Then I should click on save icon button
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify if the Transaction types selected are reflecting on the Global Charge code Card pop up modal 
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should click on Close button on the modal
# Then I close my browser

# # # TC035: done
# Scenario: Verify the Revenue Expense Transaction filters selection info in available on the card pop up modal
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the Test automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Revenue-Expense filters
# Then I should click on save icon button
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify if the Revenue-Expense Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should click on Close button on the modal
# Then I close my browser

# # # TC036: Done
# Scenario: Verify the Import Country Transaction filters selection info in available on the card pop up modal
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the Test automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Import Country filters
# Then I should click on save icon button
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify if the Import Country Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should click on Close button on the modal
# Then I should Archive the Global Charge Code
# Then I close my browser





# # # TC037-done
# Scenario: Verify the Export Country Transaction filters selection info in available on the card pop up modal
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the Test automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Export Country filters
# Then I should click on save icon button
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify if the Export Country Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should click on Close button on the modal
# Then I should Archive the Global Charge Code
# Then I close my browser


# # # TC038_ Done
# Scenario: Verify the tool tip text of the Filter icon in Global Charge code screen
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I hover the mouse on the Global display screen Filter icon
# Then I should get the text "Filter Global Charge Codes"
# # Then I close my browser

# # # TC039_ Done
# Scenario: Verify the text in the filter field is displaying "Filter by Charge code"
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# When I click on the Filter icon on the Global charge code screen
# Then I should enter the text input and the relevant categories having the matching charge codes should be displayed
# Then I should validate if the accordion displayed is having the matching charge codes to the filter text input
# Then I close my browser


# # # TC040-Done
# Scenario: Verify if the Global charges are filtered for matching transaction config 
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on all the radio button on Transaction config section 
# Then I should click on save icon button
# Then I should see the Global Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I click on the Filter icon on the Global charge code screen
# Then I should select the "Tax" check box on the transaction Config dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Tax" checkbox is checked for the transaction config option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Tax" check box on the transaction Config dropdown on the Filter input section
# Then I should click on the Transaction Config Dropdown
# Then I should select the "Passthrough" check box on the transaction Config dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Passthrough" checkbox is checked for the transaction config option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Passthrough" check box on the transaction Config dropdown on the Filter input section
# Then I should click on the Transaction Config Dropdown
# Then I should select the "DutyNetting" check box on the transaction Config dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "DutyNetting" checkbox is checked for the transaction config option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "DutyNetting" check box on the transaction Config dropdown on the Filter input section
# Then I should click on the Transaction Config Dropdown
# Then I should select the "Proforma" check box on the transaction Config dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Proforma" checkbox is checked for the transaction config option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Proforma" check box on the transaction Config dropdown on the Filter input section
# Then I close my browser

# # # TC041_ Done
# Scenario: Verify if the Global charges are filtered for matching Transaction type transaction filter 
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should enter the Default unit amount  
# Then I should click on all the radio button on Transaction config section 
# Then I should click on save icon button
# Then I should see the Global Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I click on the Filter icon on the Global charge code screen
# Then I should select the "Air Shipment" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Air Shipment" label is visible for the transaction type Transaction Filter option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Air Shipment" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I should click on the Transaction Config Dropdown
# Then I should select the "Ocean Shipment" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Ocean Shipment" label is visible for the transaction type Transaction Filter option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Ocean Shipment" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I should click on the Transaction Config Dropdown
# Then I should select the "Service Fin Only" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Service Fin Only" label is visible for the transaction type Transaction Filter option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Service Fin Only" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I should click on the Transaction Config Dropdown
# Then I should select the "Customs Fin Only" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Customs Fin Only" label is visible for the transaction type Transaction Filter option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Customs Fin Only" check box on the transaction type Transaction Filter dropdown on the Filter input section
# Then I close my browser

# # # TC042:Done 
# Scenario: Verify if the Global charges are filtered for matching Revenue/Expense transaction filter 
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I click on the Filter icon on the Global charge code screen
# Then I should select the "Revenue Mandatory" check box on the Revenue Expense Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Revenue Mandatory" label is visible for the Revenue Expense Transaction Filter option
# Then I should click on Close button on the modal
# Then I should click on the First Accordion
# Then I should select the "Revenue Mandatory" check box on the Revenue Expense Transaction Filter dropdown on the Filter input section
# Then I should click on the Transaction Config Dropdown
# Then I should select the "Expense Mandatory" check box on the Revenue Expense Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the "Expense Mandatory" label is visible for the Revenue Expense Transaction Filter option
# Then I close my browser


# # # TC043- Done
# Scenario: Verify if the Global charges are filtered for matching IMPORT Country transaction filter on card modal  
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should select the default unit type from the drop down menu and select F-Flat Rate type
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the Test automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Import Country filters
# Then I should click on save icon button
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify if the Import Country Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should click on Close button on the modal
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I click on the Filter icon on the Global charge code screen
# Then I should select few countries check box on the Import Country Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the selected countries are visible for the Import Country Transaction Filter option on the Cahrge code Card Modal
# Then I should click on Close button on the modal
# Then I close my browser

# # # TC044- done
# Scenario: Verify if the Global charges are filtered for matching EXPORT Country transaction filter on card modal  
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the Test automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Export Country filters
# Then I should click on save icon button
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify if the Export Country Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should click on Close button on the modal
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I click on the Filter icon on the Global charge code screen
# Then I should select few countries check box on the Export Country Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the selected countries are visible for the Export Country Transaction Filter option on the Charge code Card Modal
# Then I should click on Close button on the modal
# Then I close my browser






# # change tc number 

# # # GloBAL Charge codes E2E tEST 

# # # TC044:E2E : Creating a global charge code and save and verify the charge code
# Scenario: To verify if the user can create a new Global charge code and verify it on the Global charge code display screen
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should enter the test name and description for the new Global charge code
# Then I should select the default unit type from the drop down menu and select F-Flat Rate type
# Then I should enter the Default unit amount 
# Then I should click on save icon button 
# Then I should see the Global Charge code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the Test automation Category in Accordion view
# When  I click on the charge code card
# Then I should verify the title of the Modal is matching to the New Global charge code
# Then I should Archive the Global Charge Code
# Then I close my browser


# # #  TC045:E2E pending : Creating a global charge code, Edit/Update the charge code and verify the changes
# Scenario: Verify if the user is able to create a new charge code category and a new Globa lcharge code and update it 
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description as "E2E TEST Category" and purpose as "Test purpose for E2E Test Category" in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the Last Category from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should select the default unit type from the drop down menu and select F-Flat Rate type
# Then I should enter the Default unit amount  
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the E2E TEST automation Category in Accordion view
# Then I should click on edit icon button on the newly created Global charge code
# Then I should clear the text boxes of the name and description for the Global charge code
# Then I should enter the test name and description for the new Global charge code
# Then I should click on save icon button
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the E2E TEST automation Category in Accordion view
# When I click on the charge code card
# Then I should verify the title of the updated global charge code is not matching to the orignal Global charge code
# Then I should click on Close button on the modal
# Then I should refresh the page
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should archive the E2E Test Category
# Then I close my browser

# # #  E2ETC046: done
#  Scenario: Verify if the user is able to create a new charge code category and a new Global charge code and edit and apply filters and verify the changes 
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description as "E2E TEST Category" and purpose as "Test purpose for E2E Test Category" in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the Last Category from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should select the default unit type from the drop down menu and select F-Flat Rate type
# Then I should enter the Default unit amount
# Then I should click on all the radio button on Transaction config section 
# Then I should click on the Transaction Filters section and select all the transaction type filters
# Then I should click on the Transaction Filters section and select all the Revenue-Expense filters
# # swappng export selection to avoid error 
# Then I should click on the Transaction Filters section and select all the Export Country filters
# Then I should click on the Transaction Filters section and select all the Import Country filters
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should click on the E2E TEST automation Category in Accordion view
# When I click on the charge code card
# Then I should verify if the checkboxes are checked for the transaction config option
# Then I should verify if the Transaction types selected are reflecting on the Global Charge code Card pop up modal
# Then I should verify if the Revenue-Expense Fliters selected are reflecting on the E2E Charge code Card Card pop up modal 
# Then I should verify if the Export Country Filters selected are reflecting on the E2E Charge code Card pop up modal 
# Then I should verify if the Import Country Filters selected are reflecting on the E2E Charge code Card pop up modal 
# Then I should click on Close button on the modal
# Then I should refresh the page
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should archive the E2E Test Category
# Then I close my browser


# # #  E2ETC047: archiving the global charge code : DONE 
# Scenario: Verify if the user is able to create a new charge code category and a new Global charge code and archive the newly created charge code 
# Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description as "E2E Archive test Category" and purpose as "Test ARCHIVE for E2E GLOBAL CCTest Category" in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the Last Category from category drop down menu
# Then I should enter the test name and description for the new Global charge code 
# Then I should select the default unit type from the drop down menu and select F-Flat Rate type
# Then I should enter the Default unit amount
# Then I should click on save icon button
# Then I should be on the Add New Global Charge Code display screen
# Then I should verify the success message for new Global charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should click on the E2E Archive test automation Category in Accordion view
# When I click on the charge code card
# Then I should Archive the E2E Global Charge Code 
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# Then I should not be able to access the E2E Archive test automation Category in Accordion view 
# Then I should refresh the page
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should archive the E2E Archive Test automation Category
# Then I close my browser


# @after
# Then I should delete the test automation category 