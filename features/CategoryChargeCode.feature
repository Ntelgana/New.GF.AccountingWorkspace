   # Feature: Verify the Category charge code display screen



# TC-04:done
#  Scenario: View the Add and Filter Category icons and text on Category display screen
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should see the add and filter icons
#  When I hover the mouse on add icon 
#  Then I should see the text "Add New Category"
#  When I hover the mouse on the filter icon
#  Then  I should see the text on filter icon "Filter Categories"
#  Then I close the browser 


#TC-05:done

# Scenario: View the category code display screen
#  Given I am on Home page of charge codes
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should see the Category display screen
# Then I close the browser 


# TC-06:done

#  Scenario: I am able to add a new category, enter values and save the Category charge code
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description and purpose in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I verify the new category code created
#  Then I close the browser 

# #  TC-07:smoke:done
#  Scenario: I am able to cancel the addition of New category by clicking on cancel button
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I click on Cancel button 
# Then I should see the Category display screen
# Then I close the browser

# # #  TC-unknown:smoke:done
#  Scenario: I am able to cancel the addition of New category by clicking on cancel button
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description and purpose in the respective text boxes
#  Then I click on Cancel button 
#  Then I click on OK button on the pop up modal
# Then I should see the Category display screen
# Then I close the browser


# #  TC-08:done
#  Scenario: I am able to get error message on the empty description text boxe 
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
# Then I should enter the text in purpose text box and leave Description text box empty
#  Then I should click on Save Button 
#  Then I should get error message on description text box "Description must not be empty" and "Description must be unique"
#  Then I close the browser

# # #TC-09 : Empty fields,  save and cancel: completed
# Scenario: I am able to get error message on the empty description text boxe 
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should click on Save Button 
#  Then I should get error message on description text box "Description must not be empty" and "Description must be unique"
# Then I should get error message on purpose text box "Purpose must not be empty"
# Then I click on Cancel button
# Then I should see the Category display screen
#  Then I close the browser
 

#  #  TC-10:done
#  Scenario: I am able to get error message when purpose text box is left empty while adding a charge code
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should enter the text in description text box and leave purpose text box empty
#  Then I should click on Save Button 
#  Then I should get error message on purpose text box "Purpose must not be empty"
# Then I close the browser



#  #TC-11- cancel button(done)
#  Scenario: I am  able to cancel the category charge code after entering the description and purpose fields
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description and purpose in the respective text boxes
#  Then I click on Cancel button
#  Then I should get confirmation message as a modal with the text "The pending changes on charge codes will be discarded on click of OK." with option OK and cancel buttons
#  Then I click on Cancel on Modal 
#  Then I should see Add New Category screen
#   Then I close the browser

# # TC-012- Charge code card tooltip validation:done  
# Scenario: I am able to View the Purpose of the charge code category by hovering on the tool tip of the card
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should see the Category display screen
#  When I hover the cursor on the tool tip of any Category charge code card
# Then I should see the purpose of the card in the modal 
# Then I close the browser 

# #TC013 -  done
#  Scenario: View the category charge code description , purpose and information of linked charge codes
#  Given I am on Home page of charge codes
#   When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link  
#  Then I should see the Category display screen
#  When I click on any category charge code card to get a Pop up modal with Description as Title
#  Then I should see edit and close icon buttons at the bottom right corner of the pop up modal 
#  When I click on Close icon button on the pop up modal
#  Then I should see the Category display screen
#  Then I close the browser 


# #  #TC-14 :  FILTER ICON BUTTON click and reclick 
# Scenario: I am able to click the filter icon on category display screen  
# Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
# When I click on the Charge code button on Home page
# When I click on the Category link 
# Then I should see the Category display screen
# When I click on the Filter button icon on the category charge code display screen
# Then I should see a text box filter with the text " Filter by category"
# #pending
# When I click on the Filter button icon on the category charge code display screen
# Then I should not see the Filter bar 
# Then I should see the Category display screen
# Then I close the browser 


# #  #TC-015 : functionality of filter icon button : done
# Scenario: I am able to click the filter icon on category display screen  
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should see the Category display screen
#   Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description and purpose in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I verify the new category code created
#  Then I should see the Category display screen
#  Then I should refresh the page
# When I click on the Filter button icon on the category charge code display screen
# Then I should see a text box filter with the text " Filter by category"
# When I enter "hitest" in the filter text box
#  Then I should filter and display only the matching category charge codes to the text "hitest"
#  When I delete the text in the filter text box 
#  Then I should see the Category display screen
#  Then I close the browser 

# # #TC-016: Filter button text no matches: done 
# Scenario: I am able to click the filter icon on category display screen  
#  Given I am on Home page of charge codes
# When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should see the Category display screen
# When I click on the Filter button icon on the category charge code display screen
# Then I should see a text box filter with the text "Filter by category"
# When I enter "invalidtext" in the filter text box
# Then I should get error message "No charge codes match your search criteria"
# When I delete the text in the filter text box 
# Then I should see the Category display screen
# Then I close the browser 


# #TC-17: Text overflow ellipsis validation : Pending 
# Scenario: I should get Charge code category card view truncated with ellipsis upon text overflow of 33 characters   
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I should see the Category display screen
# Then I click on the add category icon
#  Then I should see Add New Category screen
# # # pending
# # adding 33 characters
# Then I should enter the category description as "123456789012345678901234567890123" and purpose as "Test ellipses" in the respective text boxes
# Then I should click on Save Button
# Then I verify the new category code created 
#  Then I should see the Category display screen
#  Then I should refresh the page
# Then I click on the add category icon
# Then I should see Add New Category screen
# # ading 34 characters
# Then I should enter the category description as "12345678901234567890123456789012343" and purpose as "Test ellipses" in the respective text boxes
# Then I should click on Save Button
# Then I should get the new charge code card view title truncated with ellipsis
# Then I verify the new category code created 
#  Then I close the browser 


# # TC-18: Duplicate Description for charge code  error validation: DONE  
#  Scenario: I am able to get an error upon creating a charge code with matching description 
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  When I enter a duplicate category description and purpose in the respective text boxes
# Then I should click on Save Button
# Then I should get error message on description text box "Description must not be empty" and "Description must be unique" 
#  Then I close the browser 

# # TC-19:E2E:Adding a  new charge code category and verifying the card is available on the category display screen : done
#  Scenario: I am able to add a new category charge code, save and verify the new charge code Category card on category display screen
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description and purpose in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I verify the new category code created
#  Then I close the browser 



# # TC-020_E2E_Add a new Category:adding a new charge code Category and verifying its info via the card: pending
#  Scenario: I am able to add a new charge code category, save the Category and verify the new charge code card info
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link 
#  Then I click on the add category icon
#  Then I should see Add New Category screen
#  Then I should see description and purpose text boxes
#  Then I should enter the category description and purpose in the respective text boxes
# Then I should click on Save Button
# Then I verify success message
# Then I verify the new category code created
# When I click on the new charge code category card
# Then I should see the description and purpose of the New Category on a pop up modal
# Then I should click on the Close button on the pop up modal
# Then I should see the Category display screen
#  Then I close the browser 


# # TC-21_E2E: Archive button E2E for charge code category via Card edit button : Done 
#  Scenario: I am able to click the Archive button icon on charge code edit screen  ]
#   Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#   When I click on the Charge code button on Home page
#   When I click on the Category link 
#   Then I should see the Category display screen
#  Then I click on the add category icon
#   Then I should see Add New Category screen
#   Then I should enter the category description as "Test Archive" and purpose as "Test Archive" in the respective text boxes
#  Then I should click on Save Button
#  Then I verify success message
#  Then I verify the new category code created for Archive functionality
#  Then I should see the Category display screen
#   Then I should refresh the page
#  When I click on the Filter button icon on the category charge code display screen
#  Then I should see a text box filter with the text " Filter by category"
# When I enter "Test Archive" in the filter text box
# Then I should filter and display only the matching category charge codes to the text "Test Archive"
#  When I click on the Edit icon button of a Charge code Card
#  Then I should be on Edit Category screen
#  When I click on Archive icon button 
#  Then I should get a alert pop up with  body "Click Ok to proceed with archiving this Category?"
#  Then I should click on OK button on alert
#  Then I should click on the Save button of Edit Category Page
#  Then I should see the Category display screen
#  Then I should not see the archived charge code card in the Category Charge code display screen
# Then I close the Browser



# # TC-22_E2E: Update a newly created Charge code Category and verify if the category info has been updated : Done 
#  Scenario: I am able to update the info on the newly added charge code category 
#   Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#   When I click on the Charge code button on Home page
#   When I click on the Category link 
#   Then I should see the Category display screen
#  Then I click on the add category icon
#   Then I should see Add New Category screen
#   Then I should enter the category description as "Category update test" and purpose as "Category update test" in the respective text boxes
#  Then I should click on Save Button
#  Then I verify success message
#  Then I verify the new category code created
#  Then I should see the Category display screen
#   Then I should refresh the page
#  When I click on the Filter button icon on the category charge code display screen
#  Then I should see a text box filter with the text " Filter by category"
# When I enter "Category update test" in the filter text box
# Then I should filter and display only the matching category charge codes to the text "Category update test"
#  When I click on the Edit icon button of a Charge code Card
#  Then I should be on Edit Category screen
# Then I should enter the category description as "Category updated" and purpose as "Category updated" in the respective text boxes 
# Then I should click on the Save button of Edit Category Page
# Then I should verify the update success alert message
# Then I should see the Category display screen
# Then I should refresh the page
# Then I should verify the information on the updated charge code category
# Then I close the browser

# # TC-22_E2E: Update a newly created Charge code Category and verify if the category info has been updated : Done 
# Scenario: I am able to update a charge code category, save the Category and verify the updated charge code card info
#  Given I am on Home page of charge codes
#  When I click on the hamburger menu of Home page
#  When I click on the Charge code button on Home page
#  When I click on the Category link
# When I click on the Filter button icon on the category charge code display screen
# Then I should see a text box filter with the text " Filter by category"
#  When I enter "Charge code Category Update test" in the filter text box
#  Then I should filter and display only the matching category charge codes to the text "Charge code Category Update test"
# When I click on the Edit icon button of a Charge code Card
# Then I should be on Edit Category screen
# Then  I clear the Category description and purpose text boxes
# Then I should enter the category description as "Charge code Category test" and purpose as "Category test" in the respective text boxes
# Then I should click on the Save button of Edit Category Page
# Then I should verify the update success alert message
# Then I should refresh the page
# When I click on the Filter button icon on the category charge code display screen
# Then I should see a text box filter with the text " Filter by category"
# When I enter "Charge code Category test" in the filter text box
# Then I should filter and display only the matching category charge codes to the text "Charge code Category test"
#  When I click on the Edit icon button of a Charge code Card
# Then I should be on Edit Category screen
# Then I clear the Category description and purpose text boxes
# Then I should enter the category description as "Charge code Category test" and purpose as "Category test" in the respective text boxes
# Then I should click on the Save button of Edit Category Page
# Then I should verify the update success alert message
# Then I should refresh the page
# When I click on the Filter button icon on the category charge code display screen
# Then I should see a text box filter with the text " Filter by category"
# When I enter "Charge code Category test" in the filter text box
# Then I should filter and display only the matching category charge codes to the text "Charge code Category test"
# When I click on the Edit icon button of a Charge code Card
# Then I should be on Edit Category screen
# Then I clear the Category description and purpose text boxes
# Then I should enter the category description as "Charge code Category Update test" and purpose as "Category test" in the respective text boxes
# Then I should click on the Save button of Edit Category Page
# Then I should verify the update success alert message
#  Then I close the browser 