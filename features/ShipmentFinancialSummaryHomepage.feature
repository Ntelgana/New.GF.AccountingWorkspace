
Feature: Verify Shipment Financial Summary For US SFO 


# Background: Launch url
# Scenario: Verify the Shipment Financial summary page for ocean Shipment
# Given I am on the shipment Financial editor page for ocean shipment




# TC-01:done
#  Scenario: verify the Title of the Shipment Financial Summary landing page 
#  Given I am on the shipment Financial editor page for ocean shipment
# Then I Verify the Title of the landing page as "Shipment Financial Summary"
# Then I verify if the Shipment number is  displayed on the right corner of the Shipment Fin Summary landing page
# Then I close my browser 

# VERIFY TABS : DONE : PASSED

Scenario: Verify the tabs on the Shipment Financial summary landing page
Given I am on the shipment Financial editor page for ocean shipment
Then I verify if the Shipment Financial summary landing page has the tab "Branch"
Then I verify if the Shipment Financial summary landing page has the tab "Branch Role" 
Then I verify if the Shipment Financial summary landing page has the tab "Revenue/Expense Party"
Then I verify if the Shipment Financial summary landing page has the tab "Party Role"
Then I verify if the Shipment Financial summary landing page has the tab "Currency"
Then I verify if the Shipment Financial summary landing page has the tab "Total Amount"
# Then  I close my browser 

# VERIFY AT LEAST ONE BILL TO is present :  DONE : PASSED

Scenario: Verify the revenue expense party column is having at least a single value on the Shipment Financial summary landing page
Given I am on the shipment Financial editor page for ocean shipment
Then I verify if the value for the tab "Revenue/Expense Party" should not be empty


# verify hamburger menu is present :DONE : PASSED


Scenario: Verify if the landing page has the hamburger menu 
Given I am on the shipment Financial editor page for ocean shipment
Then Verify if the Shipment financial summary landing page has a hamburger menu


# verify profitability and Charge code entry menu options is present :DONE : PASSED


Scenario: Verify if the profitability and Charge code entry menu options are available to the user
Given I am on the shipment Financial editor page for ocean shipment
Then Verify if the Profitability option is availble upon clicking the hamburger menu 
Then Verify if the Charge code entry option is available upon clicking the hamburger menu



# Verify if the brancgh view and charge code view menu options DONE : PASSED

Scenario: Verify if the brancgh view and charge code view menu options are available to the user
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
Then verify if the Branch view option is present in the dropdown 
Then verify if the Charge code view option is present in the dropdown

# Verify if the Add new Financials option is present : DONE : PASSED

Scenario: Verify if the Add Branch Accounting option is present and available to the user
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
Then I Verify if the Add Branch Accounting option is present in the Charge Code entry menu 


# us-748256
# verify the Shipment and Branch number needs to be displayed : DONE : PASSED

Scenario: Verify if the Shipment number and branch number must be stacked to the top right of the charge code entry U
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I verify the Shipment and Branch number needs to be displayed and Stacked to the Top right of the Charge code UI

#verify again using another shipment :  us:755371 : add collpase / expand all parties functionality : done


Scenario: Verify if the charge code entry page UI has the option to collapse and expand all existing parties
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I verify if the  Collapse all Parties and Expand all Parties button is present on the footer of the charge code entry UI
Then I verify if the parties are all collpased by default
Then I click on Expand all Parties button to verify if all the existing parties are expanding
Then I click on Collapse all Parties to verify if all existing parties have collpased



# collapse and exoand parties : NA 
# @sample
Scenario: Verify if the charge code entry page UI has the option to collapse and expand all existing parties
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the customer party code is already present in the Revenue section 
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter the party name in the party input field and select a party
Then I click on the arrow to expand the dropdown
Then I verify the actions menu button is present when the party accordion is expanded
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the charge code input fields with a checkbox is displayed for the party 
Then I click on the Charge code field dropdown and select a charge code
Then I click on the Unit type and select a unit type
Then I enter a value for Units field
Then I enter the Per Units value
Then verify the currency is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated and displayed to the user in the Total Charge field
Then I verify if a new empty charge code input row is added below when a charge code is successfully added to the Party


# REVENUE PARTY SECTION:

# add revenue party and charge code
# No credit is active and Restrictions error for a party : DONE 


# no active credit:  C CODE Used: C129996 : DONE : PASSED

Scenario: Verify if the charge code entry page UI has the option to credit check bill to parties
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C129996" and selecting the party from the dropdown
Then I verify if the user is displayed with a Modal with the header title "C129996 - Broughton Foods Company" 
Then I verify the body of the info modal as "We couldn't add this party. Please address the following issue(s):"
Then I verify the message on the modal is displaying 'Credit status must be "Active"' for the no active credit party
Then I verify if clicking on OK button will return the user back to the party input field on the Charge code Entry UI screen



# COUNTRY RESTRICTION AND CREDIT STATUS : Branch used :C4322639 : DONE : passed
# @sample
Scenario: Verify if the customer code error modal for customer code C4322639 which has no active credit and Transactional restrictions
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C4322639" and selecting the party from the dropdown
Then I verify if the user is displayed with a Modal with the header title "C4322639 - R.T.P. Representaciones S de RL de CV" 
Then I verify the body of the info modal as "We couldn't add this party. Please address the following issue(s):"
Then I verify the message on the modal is displaying 'Credit status must be "Active"' for the no active credit party
Then I verify the message on the modal is displaying "Transaction to this country is restricted unless accompanied by U.S. license. Please contact the Export Compliance team."
Then I verify if clicking on OK button will return the user back to the party input field on the Charge code Entry UI screen

# CHARGE CODE ENTRY UI :


# add a charge code to a newly added revenue party : Pending : first feature : Done :passed
# @sample
Scenario: Verify if the charge code can be added to a bill to party/customercode
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C8045490 - IT GFS Test Customer" already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# # note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
# Then I verify if a new empty charge code input row is added below when a charge code is successfully added to the Party
Then I click on Charge Code text box and input a charge code value "065 - Agent Fee - Origin"
Then I click on the dropdown value in charge code text box "065 - Agent Fee - Origin"
# # note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "3"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "3" and displayed to the user in the Total Charge field
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 



# deleting a charge code from a party: done : passed :02/15

# @sample
Scenario: Verify if the charge code can be DELETE for a billto party/customercode
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
When I click on actions menu button
Then I would click on the Remove Charge Codes option
Then I verify the warning modal to remove the selected charge Codes
Then I click on the OK button on the warning modal 
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I  verify if the charge code is removed from the revenue party "C8045490"

# CHARGE Code Field validations : Revenue section : pending 
# @sample
Scenario: Verify The Charge Code field Validations in revenue section
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown



# Creation of invoice :  pending at total charge : passed : 02/15

# @sample
Scenario: Verify if user is able to see the invoice section 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced
Then I verify cancel button is displayed to the user in create invoice section
Then I verify preview invoice button is displayed to the user in create invoice section
Then I verify Generate Invoice button is displayed to the user in create invoice section  





# create invoice cancel  button functionality : done : Passed : 02/15
# @sample
Scenario: Verify if the user can cancel the generation of an Invoice for a charge code for a Customer party 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced
When I click on cancel button on the Create invoice section
Then I verify the modal title should be "Warning"
Then I verify the modal body should be "There are unsaved changes for invoice generation. Are you sure you want to cancel the process?"
Then I click on NO Button on the Warning modal
Then I verify if the warning modal is closed and the user is on the create invoice section
When I click on cancel button on the Create invoice section
Then I click on YES Button on the Warning modal
Then I  verify if the Create invoice Section is closed and the user returns to the revenue section screen
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on OK button on the Delete party Modal 

# preview invoice : passed: 02/15
# @sample
Scenario: Verify if the user can preview the invoice prior to generating it for the Bill to party 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced
When I click on the preview invoice button in the create invoice section
# Then I wait for 2 seconds
# Then I verify if the invoice preview title can be verified as "Preview Invoice"
# Then I click the OK button on the invoice preview frame 
# Then I verify if the user is returned back to the Create invoice section
# When I click on cancel button on the Create invoice section
# Then I click on YES Button on the Warning modal
# Then I click Action Button on the latest added C code for this test case scenario
# When I click on Remove Party option on the Actions menu button 
# Then I click on OK button on the Delete party Modal 



# Invoice creation 03/07 
#  @sample
Scenario: Verify if the user can create an invoice 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C10012 - Bowne & Company" already exists
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C10012" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I get the total charges amount on the first non invoiced Charge code
Then I would click on the checkbox on the newly added charge code
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced
Then I would click on generate invoice button
Then I wait for 2 seconds
Then I would verify the success message on creation of invoice modal
Then I would click on NO button on the modal to return to the charge code entry screen
Then I land on the Charge code entry UI


# Invoice creation with multiple charge codes  03/15
# passed
# @sample
Scenario: Verify if the user can create an invoice with multiple charge codes 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C10012 - Bowne & Company" already exists
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C10012" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "1000" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "6"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "6" and displayed to the user in the Total Charge field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "5"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "5" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
# Then I get the total charges amount on the first non invoiced Charge code
Then I calculate the total sum of all the currently added charge codes
Then I would click on the checkbox on the newly added multiple charge Codes
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced for multiple charge codes
Then I would click on generate invoice button
Then I wait for 2 seconds
Then I would verify the success message on creation of invoice modal
Then I would click on NO button on the modal to return to the charge code entry screen
Then I land on the Charge code entry UI
Then I verify for all the charge codes that are invoiced are greyed out in the charge code entry

# non usd currency charge code and invoice generation

# @sample
Scenario: Verify if the user can create an invoice with different currency charge codes 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C10012 - Bowne & Company" already exists
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C10012" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "1000" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "6"
# 
Then I enter the currency "AUD" other than USD in the currency text box

Then I verify the currency "AUD" is displayed to the user in the currency text box when non USD curreny is entered
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "6" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
Then I get the total charges amount on the first non invoiced Charge code
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
# Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced for multiple charge codes
# Then I verify if the sell FX details is displayed to the user for charge codes differnt that invoice currency
Then I Verify if the charges column is displayed to the user for charge codes differnt that invoice currency
Then I Verify if the Exchange rate column is displayed to the user for charge codes differnt that invoice currency
Then I Verify if the Mark Up column column is displayed to the user for charge codes differnt that invoice currency
Then I Verify if the FX Rate column is displayed to the user for charge codes differnt that invoice currency
Then I Verify if the SELL FX Total column is displayed to the user for charge codes differnt that invoice currency
# Then I would click on generate invoice button
# Then I wait for 2 seconds
# Then I would verify the success message on creation of invoice modal
# Then I would click on NO button on the modal to return to the charge code entry screen
# Then I land on the Charge code entry UI


# non USD CURRENCY SELL FX Calculation verification
# @sample
Scenario: Verify if the SELL FX verification when an invoice is being generated with different currency charge codes 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C10012 - Bowne & Company" already exists
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C10012" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "1000" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "6"
# 
Then I enter the currency "AUD" other than USD in the currency text box

Then I verify the currency "AUD" is displayed to the user in the currency text box when non USD curreny is entered
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "6" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
Then I get the total charges amount on the first non invoiced Charge code
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
# Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced for multiple charge codes
# Then I verify if the sell FX details is displayed to the user for charge codes differnt that invoice currency
Then I Verify if the SELL FX  total is equal to the value of total charge multiplied with current FX RATE
# Then I would click on generate invoice button
# Then I wait for 2 seconds
# Then I would verify the success message on creation of invoice modal
# Then I would click on NO button on the modal to return to the charge code entry screen
# Then I land on the Charge code entry UI


# non USD iNVOICE CURRENCY CHANGE Calculation verification
# @sample
Scenario: Verify if the SELL FX verification when an invoice is being generated with differenT Invoice currency entry 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C10012 - Bowne & Company" already exists
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C10012" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "1000" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "6"
# 
Then I enter the currency "USD" other than USD in the currency text box

Then I verify the currency "USD" is displayed to the user in the currency text box when non USD curreny is entered
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "6" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
Then I get the total charges amount on the first non invoiced Charge code
When I click on actions menu button
Then I click on the Create Invoice button on the Actions menu button
Then I verify the Create invoice section header
Then I verify the Customer Name in the create invoice section
Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
Then I change the currency from branch currency "USD" the Currency invoice text box to "AED"
# Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced for multiple charge codes
# Then I verify if the sell FX details is displayed to the user for charge codes differnt that invoice currency
Then I Verify if the SELL FX  total is equal to the value of total charge multiplied with current FX RATE








# adding notes 
# @sample
Scenario: Verify if the note icon is available for the user and the user can add 50 characters of notes in the note modal 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then verify if the tool tip on notes icon is "Add note" 
When I click on the Notes Icon
Then Verify if the notes modal is displayed to the user
Then Verify if I can add notes in the notes input field with text "GF Accounting workspace"
Then I should verify if the cancel button is displayed
Then I should be able to click on save 
Then Verify the notes icon tool tip updated to "Update note" 
When I click on the Notes Icon
Then I verify the text entered in the notes modal is existing or not and return to charge code entry
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 


# @sample
Scenario: Verify if the note icon is available for the user and user can add only 50 characters of notes in the note modal 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then verify if the tool tip on notes icon is "Add note" 
When I click on the Notes Icon
Then Verify if the notes modal is displayed to the user
Then Verify if the system is limiting adding notes to only 51 characters
Then I click on cancel button on the Modal
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 


# notes on checkbox hover
# @sample 
Scenario: Verify if the note icon is available for the user and the user can add 50 characters of notes in the note modal 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then verify if the tool tip on notes icon is "Add note" 
When I click on the Notes Icon
Then Verify if the notes modal is displayed to the user
Then Verify if I can add notes in the notes input field with text "GF Accounting workspace"
Then I should verify if the cancel button is displayed
Then I should be able to click on save 
Then Verify the notes icon tool tip updated to "Update note" 
# HOVER VERIFY
Then I verify the text entered in the notes modal is displayed upon hovering the checkbox associated to the charge code
Then I wait for 2 seconds
When I click on the Notes Icon
Then I verify the text entered in the notes modal is existing or not and return to charge code entry
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 


# actions button menu
# revenus section actions menu button
# case 1 : delete party modal cancel button :  done 
# @sample
Scenario: Verify the delete party functionality is working from actions menu button : test data : C code = "C8045490" 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C824912" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on actions menu button to show only option label "Remove Party"
When I click on Remove Party option on the Actions menu button 
Then I verify if the user is displayed with a modal with Header "Delete Party" with Cancel and OK buttons
Then I verify the body n the Modal is "Are you sure you want to delete this party from this transaction?"
When I click on Cancel Button on the Delete party Modal
Then I verify the user is returned back to the Charge Code entry UI screen
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 




# revenue section actions menu button:
# case 2 : delete party modal OK button : done
Scenario: Verify the delete party functionality is working from actions menu button OK Button : test data : C code = "C8045490" 
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on actions menu button to show only option label "Remove Party"
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 
Then I Verify the Uncharged party is deleted from the Charge Code Entry UI screen

# case 3 : Revenue Actions menu options remove change code create invoice 
# Given I am on the shipment Financial editor page for ocean shipment
# Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
# Then If Charge code entry exists ignore else add new branch financials for the shipment
# Then I land on the Charge code entry UI
# Then I click on the Add revenue party button on Charge code entry UI page
# Then I verify if the party input field with a arrow dropdown is displayed to the user
# Then I enter the party name in the party input field and select a party
# Then I click on the arrow to expand the dropdown
# Then I verify the actions menu button is present when the party accordion is expanded
# Then I add a new Charge code on the party with the field values of Charge code, Unit Type, Units,Per Units and generate the toal charge 
# Then I verify if a new empty charge code input row is added below when a charge code is successfully added to the Party 
# When I click on actions menu button
# Then I verify if the Action menu button will display select options of "Remove Party" , "Remove Charge Codes" and "Create Invoice"
# Then I verify only the "Remove Party" option is available and the other options are greyed out 
# When I click and select multiple or all of the existing charge codes on a party
# When I click on actions menu button 
# Then I verify if all options other than "RemoveParty" actions are available to the user


# field validation : 02/16/
# @sample
Scenario: Verify if user is displayed an error when the  value are absent in mandatory fields 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C8045490 - IT GFS Test Customer" already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
# pending 
Then I remove the Unit type value
Then I remove the existing charge code value 
Then I hover on the Charge code text box
# Then I would refresh the page 
# Then I land on the Charge code entry UI
# Then I click on the arrow to expand the dropdown
# Then Verify if the revenue party "C8045490 - IT GFS Test Customer" already exists
# # if false
# Then I click on the Add revenue party button on Charge code entry UI page
# Then I verify if the party input field with a arrow dropdown is displayed to the user
# Then I enter "C8045490" and selecting the party from the dropdown
# Then I click on the arrow to expand the dropdown
# Then I verfiy the estimated charges input box and available credit amount is displayed to the user
# Then I enter the Estimated charge of "10" in the estimated charges field 
# Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I verify if the charge code input field is providing the error message
Then I hover on the Unit type text box
Then I verify if the unit type field is providing the the error box and tool tip
Then I clear the existing curreny value
Then I verify if the Currency input field is providing the the error box and tool tip
# Then I click Action Button on the latest added C code for this test case scenario
# When I click on Remove Party option on the Actions menu button 
# Then I click on OK button on the Delete party Modal


# field validation warining  cell : 02/27
# @sample
Scenario: Verify if user is displayed an red warning cell when the  value are absent from the respective cell  
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C8045490 - IT GFS Test Customer" already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then I remove the Unit type value
Then I remove the existing charge code value 
Then I hover on the Charge code text box
Then I verify if the charge code input field is providing the error message
Then I hover on the Unit type text box
Then I verify if the unit type field is providing the the error box and tool tip
Then I clear the existing curreny value
Then I verify if the Currency input field is providing the the error box and tool tip
Then I verify if the charge code input field is displaying a red colored warning cell
Then I verify if the unit type field is displaying a red colored warning cell
Then I verify if the Currency input field is displaying a red colored warning cell
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal

# field validation for invalid values in the charge code entry rows
# @sample
Scenario: Verify if user is displayed an error when the  value are invalid in input fields 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C8045490 - IT GFS Test Customer" already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C8045490" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I enter the invalid value of "h64" in the revenue section charge code input text box
Then I verify if the charge code input field is providing the "No matches found." message
Then I enter the invalid value of "123" in the revenue section Unit Type text box
Then I verify if the unit type field is providing the "No matches found." message
Then I enter a invalid value of the currency "123" in the revenue section currency text box
Then I verify if the currency input field is providing the "No matches found." message 
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal
# Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
# Then I click on the total Charge field
# Then I verify if the total Charge amount field is providing an error message tool tip "Charges with 0 amount cannot be invoiced"
# Then I verify if the Total Charge input field is providing the the error box and tool tip for no total charges
# pending 
# Then I remove the Unit type value
# Then I remove the existing charge code value 
# Then I hover on the Charge code text box 
# Then I would refresh the page 
# Then I land on the Charge code entry UI
# Then I click on the arrow to expand the dropdown
# Then Verify if the revenue party "C8045490 - IT GFS Test Customer" already exists
# # if false
# Then I click on the Add revenue party button on Charge code entry UI page
# Then I verify if the party input field with a arrow dropdown is displayed to the user
# Then I enter "C8045490" and selecting the party from the dropdown
# Then I click on the arrow to expand the dropdown
# Then I verfiy the estimated charges input box and available credit amount is displayed to the user
# Then I enter the Estimated charge of "10" in the estimated charges field 
# Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
# Then I verify if the charge code input field is providing the error message
# Then I hover on the Unit type text box
# Then I verify if the unit type field is providing the the error box and tool tip
# Then I clear the existing curreny value
# Then I verify if the Currenct input field is providing the the error box and tool tip
# Then I click Action Button on the latest added C code for this test case scenario
# When I click on Remove Party option on the Actions menu button 
# Then I click on YES button on the Delete party Modal

#TEST CASE 814850 : revenue Disable Users from Invoicing and Vouchering Charge Codes That Have Been Configured to Charge Net
# @sample
Scenario: Verify entering charge Netting charge codes is disabled for invoicing 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I enter the Estimated charge of "10" in the estimated charges field 
Then I click on Charge Code text box and input a charge code value "BLF - Blueberry Fee"
Then I click on the dropdown value in charge code text box "BLF - Blueberry Fee"
Then I verify the toast message is displayed to the user "Netting charges are not supported. Please use a Customs Fin Only. "
Then I click on the x on the toast
Then I verify the charge code input box is empty 
Then I verify the toast message is not displayed to the user


#  GB TEST CASE 1 : passsed : 03/08
# Credit check GB TEST CASES 
# US797011: delete the estimated charges while deleting the revenue party C CODE
# @sample
Scenario: Verify if the user is able to clear the estimate charges amount when the corresponding C code party is deleted 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "100" in the estimated charges field
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user 
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I verify the estimated charges amount is empty
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 
 



# GB TEST CASE 2 : passed : 03/08
#  US792599: update the available credit according to the amount of estimated charges entered
# @sample
Scenario: Verify if Available credit of a Revenue party is being updated according to the amount of entered in the estimated charges
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "100" in the estimated charges field
Then I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges
Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal


# GB TEST CASE 3 : PENDING : 
#  US792603: updating AVAILABLE CREDIT amount is updated based on comparing and considering the greater value between estimated charges and total charges in charge codes
# @sample 
Scenario: Verify if Available credit of a Revenue party updated bsaed on the greater value of either estimated charges or total charges
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "100" in the estimated charges field
#pending
Then I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges

Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
# PENDING 
Then I calculate and verify if the from available credit is updated at the same rate as the amount calculated in total charge from selected charge codes





# GB TEST CASE 4 : PENDING 
# US 772201 scenario 1 
#  @sample
Scenario: Verify if the system is recalculating the available credit when a charge code is deleted
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "100" in the estimated charges field
#pending
Then I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges

Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
# PENDING 
Then I calculate and verify if the from available credit is updated at the same rate as the amount calculated in total charge from selected charge codes
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
# PENDING 
Then I Verify if the party and Estimated charge code input fields are disabled
# 
When I click on actions menu button
Then I would click on the Remove Charge Codes option
Then I verify the warning modal to remove the selected charge Codes
Then I click on the OK button on the warning modal 
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I  verify if the charge code is removed from the revenue party "C7357580"
# pending
Then I verify if the avaiable credit is recalculated to the previous value after deletion of a charge code



# GB TEST CASES
# TEST CASE US 772167 : scenari 2
#  @sample
Scenario: Verify if the system is recalculating the available credit when a charge code total charge is varied
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "1000" in the estimated charges field
#pending
Then I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges

Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "100"
Then I enter a value for Per Units field "12"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "100" and per unit "12" and displayed to the user in the Total Charge field

# PENDING 

Then I calculate and verify if the from available credit is updated to the deducted value of "200"

Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal


# GB TEST CASES
# TEST CASE US 772167 : scenari 3: passed 
# @sample
Scenario: Verify if the system is recalculating the available credit by when total charge is higher than estimated charge by Diff = Sum(charge codes after insert) - Estimated Charges.
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "1000" in the estimated charges field

Then I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I enter a value for Units field "100"
Then I enter a value for Per Units field "12"
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "100" and per unit "8" and displayed to the user in the Total Charge field
Then I calculate and verify if the from available credit is updated to the deducted value of "200"
Then I enter a value for Units field "100"
Then I enter a value for Per Units field "8"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "100" and per unit "8" and displayed to the user in the Total Charge field
# PENDING 
# Then I Calcuate 
Then I calculate and verify if the available credit when total charge is less than estimated charge and deducution is "0"


Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal 


# GB TEST CASES
# TEST CASE US 772167 : scenari 4: passed
# @sample
Scenario: Verify if the system is recalculating the available credit and NO change happens when a charge code total charge is lower than the estimated charges
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
# Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "1000" in the estimated charges field
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
#pending
Then I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges

Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "100"
Then I enter a value for Per Units field "5"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "100" and per unit "5" and displayed to the user in the Total Charge field
# PENDING 
Then I calculate and verify if the available credit when total charge is less than estimated charge and deducution is "0"
Then I enter a value for Per Units field "8"
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "100" and per unit "8" and displayed to the user in the Total Charge field
Then I calculate and verify if the available credit when total charge is less than estimated charge and deducution is "0"

Then I click Action Button on the latest added C code for this test case scenario
When I click on Remove Party option on the Actions menu button 
Then I click on YES button on the Delete party Modal


# GB TEST CASES
# TEST CASE US 772167 : scenari 5: passed
# @sample
Scenario: Verify if the system is recalculating the available credit and NO change happens when a c
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the revenue party "C7357580 - Amazon Robotics LLC." already exists
# if false
Then I click on the Add revenue party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "C7357580" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verfiy the estimated charges input box and available credit amount is displayed to the user
Then I verify the Available credit amount for the revenue party "C7357580 - Amazon Robotics LLC."
Then I enter the Estimated charge of "1000" in the estimated charges field
#pending
Then I calculate and verify if the from available credit is updated at the same rate as the amount entered in estimated charges

Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "100"
Then I enter a value for Per Units field "5"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "100" and per unit "5" and displayed to the user in the Total Charge field
# second charge code
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in charge code text box "405 - Fuel Surcharge"
# note icon 
Then I click on the Unit type and select a unit type "F"
Then I verify the add Note icon is visible to the user
Then I enter a value for Units field "100"
Then I enter a value for Per Units field "8"
# Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be billed to the party is calculated with units "100" and per unit "8" and displayed to the user in the Total Charge field
# total sum
Then I calculate the total sum of all the currently added charge codes
Then I validate the sum of total charge is greater than the estimated charges and available credit is updated accordingly
# Then I calculate and verify if the available credit is recalculated according to total sum of charge codes greater than estimated charges



# ************************************************************************************************


# # actions button menu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ggggg g g g g g g                                                                                                                                                                                        ggg                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    gggggggggggggggggggag g g                       g 
# Expense section actions menu button
# case 1 : delete party modal cancel button
# passed   : 02/16
# @sample
Scenario: Verify if the actions menu button is present on the Charge code entry UI Expense Section 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I verify the actions menu button is present when the party accordion is expanded
# deleting the added T code
Then I click Action Button on the latest added T code for this test case scenario
When I click on Remove Party option on the Expense Actions menu button 
Then I click on YES button on the Delete party Modal


# charge code can be added to a Pay to party/T code : DONE PASSED: 02/16 
# @sample 
Scenario: Verify if the charge code can be added to a Pay to party/customercode
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on Expense section Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in Expense section charge code text box "405 - Fuel Surcharge"
# next
Then I click on the Expense section Unit type and select a unit type "F"
Then I enter a value for Expense section Units field "10"
Then I enter a value for Expense section Per Units field "50"
Then I click and the currency "AED" from the dropdown in the currency text box
Then I click on the Expense section total Charge field
Then I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
# Then I verify if a new empty charge code input row is added below when a charge code is successfully added to the Pay-to Party
Then I click Action Button on the latest added T code for this test case scenario
When I click on Remove Party option on the Expense Actions menu button 
Then I click on YES button on the Delete party Modal


# Failed test 1
# deleting a charge code from a Expense party: done :passed : 02/17
@sample
Scenario: Verify if the charge code can be DELETE for a Pay-to party/customercode
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on Expense section Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in Expense section charge code text box "405 - Fuel Surcharge"
# next
Then I click on the Expense section Unit type and select a unit type "F"
Then I enter a value for Expense section Units field "10"
Then I enter a value for Expense section Per Units field "50"
Then I click and the currency "AED" from the dropdown in the currency text box
Then I click on the Expense section total Charge field
Then I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
Then I click Action Button on the latest added T code for this test case scenario
Then I verify remove party option is disabled in actions menu when charge code is selected
Then I would click on the Remove Charge Codes option
Then I verify the warning modal to remove the selected charge Codes
Then I click on the OK button on the warning modal 
Then I land on the Charge code entry UI
# Then I click on the last arrow to expand the dropdown
Then I verify if the charge code is removed from the Expense party "T3472027"
Then I click Action Button on the latest added T code for this test case scenario
When I click on Remove Party option on the Expense Actions menu button 
Then I click on YES button on the Delete party Modal



# Creation of Voucher :  passed 03/21
# @sample
Scenario: Verify if the user can generate a Voucher for a charge code for a Customer party 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T4620077 - Timothy A. Moore" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T4620077" and selecting the Expense party from the dropdown
# 
Then I click on the arrow to expand the dropdown
Then I click on Expense section Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in Expense section charge code text box "405 - Fuel Surcharge"
# next,
Then I click on the Expense section Unit type and select a unit type "F"
Then I enter a value for Expense section Units field "10"
Then I enter a value for Expense section Per Units field "50"
Then I click and the currency "AED" from the dropdown in the currency text box
Then I click on the Expense section total Charge field
Then I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code in the expense party
When I click Action Button on the latest added T code for this test case scenario
Then I click on the Create Voucher button on the Actions menu button
Then I verify the Create Voucher section header
Then I verify the Customer Name in the create Voucher section
Then I verify if the Currency Voucher text box is having the same currency as the Voucher party
Then I verify if the Voucher total is equal to the sum of all the total charges being Vouchered
Then I verify cancel button is displayed to the user in create Voucher section
# Then I verify preview Voucher button is displayed to the user in create Voucher section
Then I verify Generate Voucher button is displayed to the user in create Voucher section 
Then I click on the Generate Voucher button
Then I wait for 2 seconds
Then I would verify the success message on creation of Voucher modal
Then I would click on NO button on the modal to return to the charge code entry screen
Then I land on the Charge code entry UI

#  pending
# Then I would click on the checkbox on the newly added charge code
# When I click on actions menu button
# Then I click on the Create Invoice button on the Actions menu button
# Then I verify the Create invoice section header
# Then I verify the Customer Name in the create invoice section
# Then I verify if the Currency invoice text box is having the same currency as the invoiced charge code
# Then I verify if the Invoice total is equal to the sum of all the total charges being invoiced
# Then I would click on generate invoice button
# Then I wait for 2 seconds
# Then I would verify the success message on creation of invoice modal
# Then I would click on NO button on the modal to return to the charge code entry screen
# Then I land on the Charge code entry UI





# create Voucher cancel  button functionality : done
# @sample 
Scenario: Verify if the user can cancel the generation of an Voucher for a charge code for a Customer party 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T4620077 - Timothy A. Moore" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T4620077" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on Expense section Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in Expense section charge code text box "405 - Fuel Surcharge"
# next,
Then I click on the Expense section Unit type and select a unit type "F"
Then I enter a value for Expense section Units field "10"
Then I enter a value for Expense section Per Units field "50"
Then I click and the currency "AED" from the dropdown in the currency text box
Then I click on the Expense section total Charge field
Then I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown

Then I would click on the checkbox on the newly added charge code
When I click Action Button on the latest added T code for this test case scenario
Then I click on the Create Voucher button on the Actions menu button
Then I verify the Create Voucher section header
Then I verify the Customer Name in the create Voucher section
Then I verify if the Voucher total is equal to the sum of all the total charges being Vouchered
# Then I verify if the Voucher total is equal to the sum of all the total charges being Vouchered
When I click on cancel button on the Create Voucher section
Then I verify the modal title should be "Confirm"
Then I verify the modal body should be "The pending changes will be lost. Are you sure you want to proceed?"
Then I click on NO Button on the Warning modal
Then I verify if the warning modal is closed and the user is on the create Voucher section
When I click on cancel button on the Create Voucher section
Then I click on YES Button on the Warning modal
Then I verify if the Create Voucher Section is closed and the user returns to the Expense section screen

# preview Voucher
# @sample
Scenario: Verify if the user can preview the Voucher prior to generating it for the Pay to party 
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
Then I verify the branch "9850" for charge code entry exists or not
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T4620077 - Timothy A. Moore" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T4620077" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the Unit type and select a unit type "F"
Then I enter a value for Units field "10"
Then I enter a value for Per Units field "50"
Then I verify the currency "USD" is displayed to the user in the currency text box 
Then I click on the total Charge field
Then I verify if the total Charge amount to be Paid to the party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field 
Then I would refresh the page
Then I land on the Charge code entry UI
Then I click on the last arrow to expand the dropdown
Then I would click on the checkbox on the newly added charge code
When I click on actions menu button
Then I click on the Create Voucher button on the Actions menu button
Then I verify the Create Voucher section header
Then I verify the Customer Name in the create Voucher section

Then I verify if the Currency Voucher text box is having the same currency as the Vouchered charge code
Then I verify if the Voucher total is equal to the sum of all the total charges being Vouchered
When I click on the preview Voucher button in the create Voucher section
Then I verify if the Voucher preview title can be verified as "Preview Voucher"
Then I click the OK button on the Voucher preview frame 
Then I verify if the user is returned back to the Create Voucher section







# actions button menu
# revenus section actions menu button
# case 1 : delete party modal cancel button :  done 
# @sample
Scenario: Verify the delete party functionality is working from actions menu button : test data : C code = "T3472027" 
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the party input field with a arrow dropdown is displayed to the user
Then I enter "T3470775" and selecting the party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on actions menu button to show only option label "Remove Party"
When I click on Remove Party option on the Actions menu button 
Then I verify if the user is displayed with a modal with Header "Delete Party" with Cancel and OK buttons
Then I verify the body n the Modal is "Are you sure you want to delete this party from this transaction?"
When I click on Cancel Button on the Delete party Modal
Then I verify the user is returned back to the Charge Code entry UI screen

# Expense section actions menu button:
# case 2 : delete party modal OK button : done
Scenario: Verify the Delete EXPENSE party functionality is working from actions menu button OK Button : test data : T code = "T3472027" 
Given I am on the shipment Financial editor page for ocean shipment
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on actions menu button to show only option label "Remove Party"
When I click on Remove Party option on the Actions menu button 
Then I click on OK button on the Delete party Modal 
Then I Verify the Uncharged party is deleted from the Charge Code Entry UI screen

# case 3 : Expense Actions menu options remove chanrge code create Voucher 
# Given I am on the shipment Financial editor page for ocean shipment
# Then I click on the hamburger menu on the landing page
# Then I verify the branch for Charge code entry exits or not 
# Then If Charge code entry exists ignore else add new branch financials for the shipment
# Then I land on the Charge code entry UI
# Then I click on the Add Expense party button on Charge code entry UI page
# Then I verify if the party input field with a arrow dropdown is displayed to the user
# Then I enter the party name in the party input field and select a party
# Then I click on the arrow to expand the dropdown
# Then I verify the actions menu button is present when the party accordion is expanded
# Then I add a new Charge code on the party with the field values of Charge code, Unit Type, Units,Per Units and generate the toal charge 
# Then I verify if a new empty charge code input row is added below when a charge code is successfully added to the Party 
# When I click on actions menu button
# Then I verify if the Action menu button will display select options of "Remove Party" , "Remove Charge Codes" and "Create Voucher"
# Then I verify only the "Remove Party" option is available and the other options are greyed out 
# When I click and select multiple or all of the existing charge codes on a party
# When I click on actions menu button 
# Then I verify if all options other than "RemoveParty" actions are available to the user


#  field validations 02/17: passed 
# @sample
Scenario: Verify if user is displayed an error when the  value are absent in mandatory fields 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on Expense section Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in Expense section charge code text box "405 - Fuel Surcharge"
# next
Then I click on the Expense section Unit type and select a unit type "F"
Then I enter a value for Expense section Units field "10"
Then I enter a value for Expense section Per Units field "50"
Then I click and the currency "AED" from the dropdown in the currency text box
Then I click on the Expense section total Charge field
Then I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then I remove the Expense Unit type value
Then I remove the existing expense charge code value 
Then I hover on the expense Charge code text box 
Then I verify if the expense charge code input field is providing the error message
Then I hover on the expense Unit type text box
Then I verify if the expense unit type field is providing the the error box and tool tip
Then I clear the existing expense curreny value
Then I verify if the expense currency input field is providing the the error box and tool tip
Then I click Action Button on the latest added T code for this test case scenario
When I click on Remove Party option on the Expense Actions menu button 
Then I click on YES button on the Delete party Modal


# expense section warning cell: passed :02/28
# @sample
Scenario: Verify if user on the expense section is displayed an red warning cell when the  value are absent from the respective input cells  
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on Expense section Charge Code text box and input a charge code value "405 - Fuel Surcharge"
Then I click on the dropdown value in Expense section charge code text box "405 - Fuel Surcharge"
# next
Then I click on the Expense section Unit type and select a unit type "F"
Then I enter a value for Expense section Units field "10"
Then I enter a value for Expense section Per Units field "50"
Then I click and the currency "AED" from the dropdown in the currency text box
Then I click on the Expense section total Charge field
Then I verify if the Expense section total Charge amount to be Paid to the pay-to party is calculated with units "10" and per unit "50" and displayed to the user in the Total Charge field
Then I remove the Expense Unit type value
Then I remove the existing expense charge code value
Then I hover on the expense Charge code text box
Then I verify if the expense charge code input field is providing the error message
Then I hover on the expense Unit type text box
Then I verify if the expense unit type field is providing the the error box and tool tip
Then I clear the existing expense curreny value
Then I verify if the expense currency input field is providing the the error box and tool tip
Then I verify if the expense charge code input field is displaying a red colored warning cell
Then I verify if the expense unit type field is displaying a red colored warning cell
Then I verify if the expense Currency input field is displaying a red colored warning cell
# Then I click Action Button on the latest added T code for this test case scenario
# When I click on Remove Party option on the Expense Actions menu button 
# Then I click on YES button on the Delete party Modal




# invalid values expense section
# @sample
Scenario: Verify if user on the Expense section is displayed an error when the  value are invalid in input fields 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then I click on the Add Expense party button on Charge code entry UI page
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
# next
Then I enter the invalid value of "h64" in the expense section charge code input text box
Then I verify if the charge code input field is providing the "No matches found." message
Then I enter the invalid value of "123" in the expense section Unit Type text box
Then I verify if the unit type field is providing the "No matches found." message
Then I enter a invalid value of the currency "123" in the expense section currency text box
Then I verify if the currency input field is providing the "No matches found." message 
Then I click Action Button on the latest added T code for this test case scenario
When I click on Remove Party option on the Expense Actions menu button 
Then I click on YES button on the Delete party Modal

#  03/03
# TEST CASE 814850 : EXPENSE : Disable Users from Invoicing and Vouchering Charge Codes That Have Been Configured to Charge Net : passed 
# @sample
Scenario: Verify entering charge Netting charge codes is disabled for invoicing 
Given I am on the shipment Financial editor page for ocean shipment
Then I Verify the Title of the landing page as "Shipment Financial Summary"
Then I click on the hamburger menu on the landing page
Then I verify the branch for Charge code entry exits or not 
Then If Charge code entry exists ignore else add new branch financials for the shipment
Then I land on the Charge code entry UI
Then Verify if the expense party "T3472027 - C. H. Robinson Company Inc" already exists
# if false
Then I click on the Add Expense party button on Charge code entry UI page
Then I verify if the Expense party input field with a arrow dropdown is displayed to the user
Then I enter "T3472027" and selecting the Expense party from the dropdown
Then I click on the arrow to expand the dropdown
Then I click on Expense section Charge Code text box and input a charge code value "BLF - Blueberry Fee"
Then I click on the dropdown value in Expense section charge code text box "BLF - Blueberry Fee"
Then I verify the toast message is displayed to the user "Netting charges are not supported. Please use a Customs Fin Only. " for expense charge
Then I click on the x on the toast for expense charge netting
Then I verify the expense charge code input box is empty 
Then I verify the toast message is not displayed to the user in expense section
Then I click Action Button on the latest added T code for this test case scenario
When I click on Remove Party option on the Expense Actions menu button 
Then I click on YES button on the Delete party Modal













