#  Feature: Verify the Country charge code display screen

#  Background:
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen


# # # TC048 : VERIFYING if user is in country display screen
# # Scenario: Verify the user is on the Country Charge code display screen
# # Given I am on Home page of charge codes
# # When I click on the hamburger menu of Home page
# # Then I should see Home and charge codes buttons
# # When I click on the Charge code button on Home page
# # When I click on the Country link on home page
# # Then I should see the Country Charge code display screen
# # # Then I close my browser

# # TC049
# Scenario: Verify the Add button icon on Country Charge code display screen
#  Then I should see the add, filter and override icons on Country Display Screen
#  When I hover the mouse on add icon on Country Charge code display Screen 
#  Then I should see the country icons tooltip text "Add New Country Charge Code"
#  Then I close my browser 

# TC050
# Scenario: Verify the Filter button icon on Country Charge code display screen
# Then I should see the add, filter and override icons on Country Display Screen
# When I hover the mouse on the filter icon on Country Charge code display Screen
# Then I should see the country icons tooltip text "Filter Country Charge Codes"
#  Then I close my browser

# TC-051
# Scenario: Verify the Override button icon on Country Charge code display screen
# Then I should see the add, filter and override icons on Country Display Screen
# When I hover the mouse on the Override icon on Country Charge code display Screen
# Then I should see the country icons tooltip text "Override Country Charge Code"
#  Then I close my browser

# tc-052: done
# Scenario: Verify if the Country Charge codes linked Countries are present in Global display screen in the category accordian view
# Then I should see the Country Charge code display screen
# Then I should see an accordian view of all the Countries linked to Country charge codes in accordion view
# # Then I close my browser 

# TC-0:53 done Verify is the drop down feature is working for the Global categories accordian view 
# Scenario: Verify if the Country charge codes are displayed in card format when clicking on any Country Accordion
# Then I should see the Country Charge code display screen
# When I click on any Country in the accordian view 
#  Then I should see an expanded view of all the charge codes linked to that country in card format
#  When I click on the Country expanded view again
#  Then The expanded country view should collapse back to accordion view
#   Then I close my browser

# # TC-054: done: NEW COUNTRY CHARGE CODE 
# Scenario: Add a new Country Charge Code for test automation
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount 
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should verify the success message for new Country charge code
# Then I should be verify the newly created Country charge code 
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser



# TC-055: pending: descrption error 
# Scenario: Verify the error message when NO Description is provided in the text box while adding a new Country charge code
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should click the desired country from the Country Placeholder
# When I should click on save icon button
# Then I should get an error message "Description must not be empty" below the Charge code description placeholder
# #  Then I close my browser

# TC-055: done :Name error validation
# Scenario: Verify the error message when NO Charge Code name is provided in the text box while adding a new Country charge code
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should click the desired country "China" from the Country Placeholder
# When I should click on save icon button
# Then I should get an error message "Code must not be empty" and "Code must be unique" below the Charge code name placeholder
# Then I close my browser


# TC-056: done :Default unit error validation
# Scenario: verify the error message when no default amount is entered in the text box while adding a new Country charge code
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu
# Then I should click the desired country "China" from the Country Placeholder
# When I should click on save icon button
# Then I should get an error message "Default Unit Amount must be numeric" and "Default Unit Amount can have no more than 4 decimal places" below the text placeholder
# #  Then I close my browser
# Then I close my browser


# TC-057: Done : TRANSACTION CONFIG BUTTON 
# Scenario: Verify the functionality of the radio buttons in the transaction config option in Global charge code
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should verify the success message for new Country charge code
# Then I should be verify the newly created Country charge code
#  Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# Then I should click on edit icon button on the newly created country charge code
# Then I should click on all the radio button on Transaction config section 
# Then I should click on save icon button
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When  I click on the charge code card
# Then I should verify if the checkboxes are checked for the transaction config option of Country charge code
# Then I should verify the title of the Modal is matching to the New test Country charge code
# Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser

# TC-058: Done : DEFAULT uNIT TYPE Verification on Modal
# Scenario: To Verify the default unit type is showing up on the Country charge code card modal
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount 
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should verify the success message for new Country charge code
# Then I should be verify the newly created Country charge code
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When  I click on the charge code card
# Then I should verify the title of the Modal is matching to the New test Country charge code
# Then I should verify of the default unit type selected is matching the info on the carge code card Modal 
# Then I should click on Close button on the modal 
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser

# TC059": done
# Scenario: Verify if clicking on the Edit button on the Modal is navigating to the Edit Country Charge code screen
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# Then I click on the charge code card
# When I click on the Edit button on the Pop Up Modal
# Then I should be on the Edit Country Charge code Screen
# When I click on the cancel button on Edit Country Charge code screen
# Then I should see the Country Charge code display screen
# Then I close my browser



# TC060: done: transaction filters test
# Scenario: Verify the Transaction filters selection info in available on the card pop up modal for country charge codes
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should verify the success message for new Country charge code
# Then I should be verify the newly created Country charge code
#  Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# Then I should click on edit icon button on the newly created country charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the transaction type filters
# Then I should click on save icon button
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the charge code card
# Then I should verify if the Transaction types selected are reflecting on the Global Charge code Card pop up modal 
# Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser



# TC061: done : revenue /expense validation
#  Scenario: Verify the Revenue Expense Transaction filters selection info in available on the card pop up modal on country charge code
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should verify the success message for new Country charge code
# Then I should be verify the newly created Country charge code
#  Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# Then I should click on edit icon button on the newly created country charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Revenue-Expense filters
# Then I should click on save icon button
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the charge code card
# Then I should verify if the Revenue-Expense Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser


# tc62: pending: import country filter
# Scenario: Verify the Import Country Transaction filters selection info in available on the card pop up modal on country charge code
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should verify the success message for new Country charge code
# Then I should be verify the newly created Country charge code
#  Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# Then I should click on edit icon button on the newly created country charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Import Country filters
# Then I should click on save icon button
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the charge code card
# Then I should verify if the Import Country Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser

# tc063: pending
# Scenario: Verify the Export Country Transaction filters selection info in available on the card pop up modal on country charge code
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should verify the success message for new Country charge code
# Then I should be verify the newly created Country charge code
#  Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# Then I should click on edit icon button on the newly created country charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on the Transaction Filters section and select all the Export Country filters
# Then I should click on save icon button
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the charge code card
# Then I should verify if the Export Country Filters selected are reflecting on the Global Charge code Card pop up modal 
# Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser

# TC064: Done: fILTER BOX TEXT VERIICATION
# Scenario: Verify the text in the filter field is displaying "Filter by Charge code"
# When I click on the Filter icon on the country charge code display screen
# Then I should get the label "Filter by charge code" near the filter drop downs
# Then I close my browser


# tc065:pending:Filtering transaction config
#  Scenario: Verify if the Country charge charges are filtered for matching transaction config  
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on all the radio button on Transaction config section
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the Filter icon on the country charge code display screen
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
#  Then I should select the "Proforma" check box on the transaction Config dropdown on the Filter input section
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser





# TC066: done
# Scenario: Verify if the Country charges are filtered for matching Transaction type transaction filter 
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on the Transaction Filters section and select all the transaction type filters
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the Filter icon on the country charge code display screen
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
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser







# TC067-PENDING: 
#  Scenario: Verify if the Country charges are filtered for matching Revenue/Expense transaction filter
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on the Transaction Filters section and select all the Revenue-Expense filters
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the Filter icon on the country charge code display screen
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
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser

# TC068_ PENDING
#  Scenario: Verify if the Country charges are filtered for matching IMPORT Country transaction filter on card modal 
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on the Transaction Filters section and select all the Import Country filters
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the Filter icon on the country charge code display screen
#  Then I should select few countries check box on the Import Country Transaction Filter dropdown on the Filter input section
#  Then I should open the first accordion and click on the first Global Charge code card 
#  Then I should verify if the selected countries are visible for the Import Country Transaction Filter option on the Cahrge code Card Modal
#  Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser


 # TC069:Done export country filter box 
# Scenario: Verify if the Country charges are filtered for matching EXPORT Country transaction filter on card modal 
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on the Transaction Filters section and select all the Export Country filters
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the Filter icon on the country charge code display screen
#  Then I should select few countries check box on the Export Country Transaction Filter dropdown on the Filter input section
# Then I should open the first accordion and click on the first Global Charge code card
# Then I should verify if the selected countries are visible for the Export Country Transaction Filter option on the Charge code Card Modal
# Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser

# TC070- done
# Scenario: Verify if the Global charges are filtered BY MATCHING TEXT INPUT of charge code name 
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the Filter icon on the country charge code display screen
# Then I should enter the text "TestCouCC" in the Filter text box
# Then I should open the first accordion and validate the text on the first filtered Country Charge code card with name as "TestCouCC"
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser


# tc71: done 
# Scenario: Verify if the country charges are filtered BY MATCHING TEXT INPUT of charge code description 
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the name and description of the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the Filter icon on the country charge code display screen
# Then I should enter the text "Test Country" in the Filter text box
# Then I should open the first accordion and validate the text on the first filtered Country Charge code card with name as "Test Country"
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser


# TC072 : pending 
# Scenario: Verify If the country charges can be overridden
# Then I should refresh the page 
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should enter the test name and description for the new Global charge code to override country charge code 
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
# Then I should verify the title of the Modal is matching to the New Global charge code for override
# Then I should click on Close button on the modal
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the override button on the Country Charge code display screen
# Then I should be on the Override Global Charge Code screen
# Then I should select the Newly created Global charge Code from the global drop dox text box
# Then I should select the Country China from the country dropdox text box
# Then I should not be able to change the Name of the charge code in the Name textbox
# Then I should provide a new description for the overridden Charge code
# Then I should select the Default Unit Type as "3 - Per Container"
# Then I should enter the Default unit amount as "3"
# Then I should verify the transaction config toggle buttons are disabled while overriding country charge code
# Then I should verify if all the the transaction filters section toggle buttons are disabled while overriding country charge code
# Then I should click on save icon button
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the charge code card
# Then I should verify the description of the overridden charge code on the pop up modal
# Then I should verify whether a country is linked to the overridden charge code on the pop up modal
# Then I should verify the default unit type and default unit amount on the overridden charge code on the pop up modal
# Then I should Archive the Country Charge Code from "China"
# Then I close my browser


# TC073: Archiving a Country charge code : done 
# Scenario: verify if the user can click on the archive button on the edit screen and archive a country charge code 
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "China" from the Country Placeholder
# Then I should enter the test name and description for the new Global charge code to override country charge code 
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the edit button on the newly created Country charge code card
# Then I should be on the Country charge code edit screen
# Then I should click on archive icon button on the edit screen
# Then I should verify the text on the archive alert pop up
# Then I should click the OK button on the alert pop up 
# Then I should click on save icon button
# Then I should verify the charge code archive success message 
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# Then I should verify that the user is not be able to access the archived charge code again
# Then I should close the browser  
# Then I close my browser

#  Archiving the newly createdcountry charge code for every test run : pending
# Then I should Archive the Country Charge Code from "China"


# TC074-e2e : Done
# Scenario: verify if the user can create a new country charge code for country India and save and verify it 
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should click the desired country "India" from the Country Placeholder
# Then I should enter the test name and description for the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on all the radio button on Transaction config section
# Then I should click on save icon button 
# Then I should verify the success message for new Country charge code
# Then I should see the Country Charge code display screen
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "India" in Accordion view
# When I click on the charge code card
# Then I should verify the title of the Modal is matching to the Newly created E2E Country charge code
# Then I should verify of the default unit type selected is matching the info on the carge code card Modal
# Then I should verify if the checkboxes are checked for the transaction config option of Country charge code
# Then I should click on Close button on the modal
# Then I should Archive the Country Charge Code from "India"
# Then I close my browser

# TC074 e2e: DONE : Update the e2e country charge code 
# Scenario: Verify if the user is able to create a new charge code category and a new Country charge code and update it 
# Then I should refresh the page
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description as "E2E TEST Category" and purpose as "Test purpose for E2E Test Country CC" in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on Add icon on Country Charge Codes screen
# Then I should be on the Add New Country Charge Code display screen
# Then I Should select the Last Category from category drop down menu 
# Then I should click the desired country "India" from the Country Placeholder
# Then I should enter the test name and description for the new Country charge code
# Then I should select the Default Unit Type as "F - Flat Rate"
# Then I should enter the Default unit amount  
# Then I should click on save icon button 
# Then I should verify the success message for new Country charge code
# Then I should see the Country Charge code display screen
#  Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "India" in Accordion view
# Then I should click on edit icon button on the newly created country charge code
# Then I should select the Default Unit Type as "3 - Per Container"
# Then I should enter the Default unit amount as "3"
# Then I should update the test name and description of the newly created E2E charge code
# Then I should click on all the radio button on Transaction config section
# Then I should click on Save Button
# Then I should verify the update success message for new Country charge code
# Then I should see the Country Charge code display screen
#  Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "India" in Accordion view
# When I click on the charge code card
# Then I should verify the new information on the updated Country charge code
# Then I should verify the default unit type and default unit amount on the updated charge code on the pop up modal
# Then I should click on Close button on the modal
# Then I should refresh the page
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link
# Then I should see the Category display screen 
# Then I should archive the E2E Test Category
# Then I close my browser


# TC075: CREAte an overidden country charge code an archive it 
# Scenario: To verify if a global charge code can be created and overridden and archived 
#  Then I should refresh the page 
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Global link on home page
# Then I should see the Global Charge code display screen
# When I click on Add icon on Global Charge Codes screen
# Then I should be on the Add New Global Charge Code display screen
# Then I Should select the "Global Charge code category for Automation" from category drop down menu 
# Then I should enter the test name and description for the new Global charge code to override country charge code 
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
#  Then I should verify the title of the Modal is matching to the New Global charge code for override
# Then I should click on Close button on the modal
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# When I click on the override button on the Country Charge code display screen
# Then I should be on the Override Global Charge Code screen
# Then I should select the Newly created Global charge Code from the global drop dox text box
# Then I should select the Country China from the country dropdox text box
# Then I should not be able to change the Name of the charge code in the Name textbox
# Then I should provide a new description for the overridden Charge code
# Then I should select the Default Unit Type as "3 - Per Container"
# Then I should enter the Default unit amount as "3"
# Then I should verify the transaction config toggle buttons are disabled while overriding country charge code
# Then I should verify if all the the transaction filters section toggle buttons are disabled while overriding country charge code
# Then I should click on save icon button
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the charge code card
# Then I should verify the description of the overridden charge code on the pop up modal
# Then I should verify whether a country is linked to the overridden charge code on the pop up modal
# Then I should verify the default unit type and default unit amount on the overridden charge code on the pop up modal
# Then I should click on the edit button on the overridden charge code modal
# Then I should click on archive button on the edit screen and click on OK on the pop up alert
# Then I should click on save icon button and verify the archive success message
# Then I should refresh the page
# When I click on the hamburger menu of Home page
# Then I should see Home and charge codes buttons
# When I click on the Charge code button on Home page
# When I click on the Country link on home page
# Then I should see the Country Charge code display screen
# Then I should click on the Test automation Country "China" in Accordion view
# When I click on the charge code card
# Then verify if the overridden charge code is archived 
# # Then I close my browser


 













