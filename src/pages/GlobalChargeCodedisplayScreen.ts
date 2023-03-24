interface GlobalChargeCodedisplayScreen{
GlobalCCDisplayScreenTitle: string;
GlobalFilterIcon: string;
GlobalPageAddIcon: string;
GlobalCategoriesAccordionList: string;
GlobalPageAddIconToolTipText: string;
GlobalPageFilterIconToolTipText: string;
GlobalCategoriesAccordionView: string;
GlobalCategoryScreenFirstAccordion: string;
GlobalCategoryChargeCodeCardBody: string;
GlobalAddGlobalCCaPageTitle:string;
GlobalAddGlobalCCCategoryDropDown: string;
GlobalAddGlobalCCCategorydropdownButton: string;
globalAddCCForE2ETestCategoryAccordion: string;


GlobalAddaGlobalCCScreenLastCategoryDropdownitem:string;
GlobalAddGlobalCCScreenLastCategoryDropdownValue: string;
GlobalAddGlobalCChargeCodeNametextbox: string;
GlobalAddGlobalCChargeCodeDescriptiontextbox: string;
GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox: string;
GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdowndefault: string;
GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdownFRateValue: string;

GlobalAddGlobalCCSaveIconButton: string;
GlobalAddCCDropDownvalue: string;
GlobalAddCCTestChargeCodeCategory: string;
GlobalAddGlobalCCTestChargeCodeCard: string;
GlobalAddGlobalCCNameEmptyErrormsg1: string;
GlobalAddGlobalCCNameEmptyErrormsg2: string;
GlobalAddGlobalCCDescriptionErrormsg:string;
GlobalAddGlobalCCDefaultNetAmountErrormsg1: string;
GlobalAddGlobalCCDefaultNetAmountErrormsg2: string;
GlobalAddGlobalCCCancelButton: string;

GlobalAddGlobalCCLastCardEditIcon: string;
GlobalAddGlobalCCTaxRadiobutton: string;
GlobalAddGlobalCCPassthroughRadiobutton: string; 
GlobalAddGlobalCCDutyNettingRadiobutton: string;
GlobalAddGlobalCCProformaRadiobutton: string;
GlobalAddGlobalCCLastGlobalChargeCard: string;
GlobalAddCCGlobalTestAutomationCategoryAccordion: string;
GlobalCCCardClickModalDutyNettingCheckbox : string;
GlobalCCCardClickModalPassthroughCheckbox : string;
GlobalCCCardClickProformaCheckbox : string;
GlobalCCCardClickModalTaxCheckbox: string;

GlobalCCCardClickModalHeader: string;
GlobalCCCardClickModalCloseButton: string;

GlobalCCCardClickModalEditButton: string;
GlobalCCEditChargeCodeScreenTitleText: string;
GlobalCCEditScreenCancelButton: string;

GlobalCCChargeCodeArchiveButtonIcon: string;
GlobalCCArchiveModalText: string;
GlobalCCArchiveModalOKButton: string;
GlobalCCArchiveModalCancelButton: string;

GlobalCCFirstCategoryAccordion:string;

GlobalCCArchiveE2ECategoryAccordion: string;
GlobalCCArchiveE2ECategoryCardEditButton : string;


// transactionfilterTrnasactionType
GlobalCCAddTransactionFilterTransactionTypeAccordion : string;
GlobalCCTransactionFilterTransactionTypeAirShipmentCheckBox: string;
GlobalCCTransactionFilterTransactionTypeOceanShipmentCheckBox: string;
GlobalCCTransactionFilterTransactionTypeServiceFinOnlyCheckBox: string;
GlobalCCTransactionFilterTransactionTypeCustomsFinOnlyCheckBox: string;
GlobalCCTransactionTypeFilterselectedValuesCSS: string;
GlobalCCRevenueExpenseFilterselectedValuesCSS: string;
GlobalCCImportCountryFilterselectedValuesCSS: string;
GlobalCCExportCountryFilterselectedValuesCSS: string;


// Filter Functionality
GlobalCCFilterIcon: string;
GlobalCCFilterIconTooltipText: string;
GlobalCCFilterTextinputField: string;
GlobalCCFilteredFirstAccordionText: string;


// transactionfilterRevenueExpense
GlobalCCAddTransactionFilterRevenueExpenseAccordion: string;
GlobalCCAddTransactionFilterRevenueMandatoryCheckBox: string;
GlobalCCAddTransactionFilterExpenseMandatoryCheckBox: string;
GlobalCCRevenueExpenseRevenueMandatoryTextonModalXpath: string;
GlobalCCRevenueExpenseExpenseMandatoryTextonModalXpath: string;

// transaction filter Import country
GlobalCCAddTransactionFilterImportCountryAccordion: string;
 GlobalCCAddTransactionFilterImportCountryChina: string;
 GlobalCCAddTransactionFilterImportCountryIndia: string;

 GlobalCCFilterScreenImportCountryFilterCHINACheckBox: string;
 GlobalCCFilterScreenImportCountryFilterINDIACheckBox: string;
 GlobalCCImportCountryFilterCHINAOnCardModal: string;
GlobalCCImportCountryFilterINDIAOnCardModal:  string;

//  transaction filter Export country
GlobalCCAddTransactionFilterExportCountryAccordion: string;
GlobalCCAddTransactionFilterExportCountryUnitedStates: string;

GlobalCCFilterScreenExportCountryFilterUNITEDSTATESCheckBox: string;

 GlobalCCImportCountryFilterUnitedStatesOnCardModal: string;

// Filter area dropdown 
GlobalCCFilterTransactionConfigFilterDropdownButton: string;
GlobalCCFilterCategoryCodesFilterDropdownButton: string;
GlobalCCFilterTransactionTypeFilterDropdownButton: string;
GlobalCCFilterExpenseRevenueFilterDropdownButton: string;
GlobalCCFilterImportCountryFilterDropdownButton: string;
GlobalCCFilterExportCountryFilterDropdownButton: string;

GlobalCCFilterTransactionConfigTaxCheckBox: string;
GlobalCCFilterTransactionConfigPassthroughCheckBox: string;
GlobalCCFilterTransactionConfigDutynettingCheckBox: string;
GlobalCCFilterTransactionConfigProformaCheckBox: string;

GlobalCCFilterTransactionTypeAirShipmentCheckBox: string;
GlobalCCFilterTransactionTypeOceanShipmentCheckBox: string;
GlobalCCFilterTransactionTypeServiceFinOnlyCheckBox: string;
GlobalCCFilterTransactionTypeCustomFinOnlyCheckBox:string;


GlobalCCFilterTransactionTypeRevenueMandatoryCheckBox: string;
GlobalCCFilterTransactionTypeExpenseMandatoryCheckBox: string;
GlobalCCRevenueExpensesectionTextinModalXpath:string;







}

const globalChargeCodedisplayScreen: GlobalChargeCodedisplayScreen = {
      
    GlobalCCDisplayScreenTitle: ".screen-title-header",
    GlobalFilterIcon:".bi.bi-funnel",
    GlobalPageAddIcon: ".bi-plus-lg",
    GlobalPageAddIconToolTipText: "//div[@role='tooltip']/div[@class='tooltip-inner']",
    GlobalPageFilterIconToolTipText: "//div[@role='tooltip']/div[@class='tooltip-inner']",
    GlobalCategoriesAccordionList: ".//div[contains(@class,'accordion-title')]",
    GlobalCategoriesAccordionView: ".accordion-title",
    GlobalCategoryScreenFirstAccordion: "(//div[@class='accordion-title'])[1]",
    GlobalCategoryChargeCodeCardBody: ".card-body",
    GlobalAddGlobalCCaPageTitle: "//div[@class='charge-code-title']",
    GlobalAddGlobalCCCategoryDropDown: "select.form-control",
    GlobalAddGlobalCCCategorydropdownButton: "select[data-testid='category-select']",
    GlobalAddGlobalCChargeCodeNametextbox: "[data-testid='charge-code-code']",
    GlobalAddGlobalCChargeCodeDescriptiontextbox: "[data-testid='charge-code-description']",
    GlobalAddGlobalCChargeCodeDefaultUnitAmounttextbox : "[data-testid='charge-code-default-unit-amount']",

    GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdowndefault: "[data-testid='defaultUnitType-select']",
    GlobalAddGlobalCCChargeCodeDefaultUnitTypeDropdownFRateValue: "a22e3d9a-8430-49af-a364-9dc8c2650294",

    GlobalAddGlobalCCSaveIconButton: "//button[text()='Save']",
    GlobalAddCCTestChargeCodeCategory: "//div[@class='accordion-title' and contains(text(),'Global Charge code category for Automation')]",
    GlobalAddCCGlobalTestAutomationCategoryAccordion: "//div[contains(text(),'Global Charge code category for Automation')]",
    globalAddCCForE2ETestCategoryAccordion: "//div[@class='accordion-title' and contains(text(),'E2E TEST Category')]",
                        
    GlobalAddCCDropDownvalue : "e9881acc-8d4f-4b2f-94df-12887a02ca75",
    GlobalAddGlobalCCTestChargeCodeCard: "(//div[@class='card-body'])[last()]/span",
    GlobalAddGlobalCCNameEmptyErrormsg1: "//label[text()='Charge Code']/..//ul/li[1]",
    GlobalAddGlobalCCNameEmptyErrormsg2: "//label[text()='Charge Code']/..//ul/li[2]",
    GlobalAddGlobalCCDescriptionErrormsg: "//label[text()='Description']/..//ul/li",
    GlobalAddGlobalCCDefaultNetAmountErrormsg1: "//label[text()='Default Unit Amount']/..//ul/li[1]",
    GlobalAddGlobalCCDefaultNetAmountErrormsg2:  "//label[text()='Default Unit Amount']/..//ul/li[2]",
    GlobalAddaGlobalCCScreenLastCategoryDropdownitem: ".form-control option:last-child",
    GlobalAddGlobalCCScreenLastCategoryDropdownValue: "0ed62503-b329-4066-b2bc-84a10b5cca79",

    GlobalAddGlobalCCCancelButton: "//button[@class='btn btn-secondary']",
    GlobalAddGlobalCCLastCardEditIcon: "(//div[@class='card-body-container']//span[@class='card-header-edit-archive'])[last()]",
    GlobalAddGlobalCCTaxRadiobutton: "//label[text()='Tax']/..//div[@class='react-switch-bg']",
    GlobalAddGlobalCCPassthroughRadiobutton: "//label[text()='Passthrough']/..//div[@class='react-switch-bg']",
    GlobalAddGlobalCCDutyNettingRadiobutton: "//label[text()='Duty Netting']/..//div[@class='react-switch-bg']",
    GlobalAddGlobalCCProformaRadiobutton: "//label[text()='Proforma']/..//div[@class='react-switch-bg']",
    GlobalAddGlobalCCLastGlobalChargeCard: "(//div[@class='card-body'])[last()]/span",
    GlobalCCCardClickModalTaxCheckbox: "//label[text()='Tax']/following-sibling::input",
    GlobalCCCardClickModalDutyNettingCheckbox : "//label[text()='Duty Netting']/following-sibling::input",
    GlobalCCCardClickModalPassthroughCheckbox : "//label[text()='Passthrough']/following-sibling::input",
    GlobalCCCardClickProformaCheckbox : "//label[text()='Proforma']/following-sibling::input",
    GlobalCCCardClickModalHeader : "//h4[contains(@class,'modal-title')]",
    GlobalCCCardClickModalCloseButton: "//button[text()='Close']",
    GlobalCCFirstCategoryAccordion: "(//div[@class='accordion-title'])[1]",

    // Filter Feature
    GlobalCCFilterIcon: ".bi.bi-funnel",
    GlobalCCFilterIconTooltipText: "//div[@class='tooltip-inner']",


    // editscreen
    GlobalCCCardClickModalEditButton: "//button[text()='Edit']",
    GlobalCCEditChargeCodeScreenTitleText: "//div[@class='charge-code-title']",
    GlobalCCEditScreenCancelButton: "//button[text()='Cancel']",
    GlobalCCFilterTextinputField: ".form-control",
    GlobalCCFilteredFirstAccordionText: "(//div[@class='accordion-title'])[1]",


    // transactionfilters
    GlobalCCAddTransactionFilterTransactionTypeAccordion: "//div[@class='accordion-title' and text()='Transaction Type']",
    GlobalCCTransactionFilterTransactionTypeAirShipmentCheckBox: "//div[text()='Air Shipment']//div[@class='react-switch-bg']",
    GlobalCCTransactionFilterTransactionTypeOceanShipmentCheckBox: "//div[text()='Ocean Shipment']//div[@class='react-switch-bg']",
    GlobalCCTransactionFilterTransactionTypeServiceFinOnlyCheckBox: "//div[text()='Service Fin Only']//div[@class='react-switch-bg']",
    GlobalCCTransactionFilterTransactionTypeCustomsFinOnlyCheckBox: "//div[text()='Customs Fin Only']//div[@class='react-switch-bg']",
    GlobalCCTransactionTypeFilterselectedValuesCSS: ".global-detail-modal-transaction-filters > div:nth-of-type(1) > div",


    // Revenu/expenseTransactionfilter
    GlobalCCAddTransactionFilterRevenueExpenseAccordion: "//div[@class='accordion-title' and text()='Revenue/Expense']",
    GlobalCCAddTransactionFilterRevenueMandatoryCheckBox: "//div[text()='Revenue Mandatory']//div[@class='react-switch-bg']",
    GlobalCCAddTransactionFilterExpenseMandatoryCheckBox: "//div[text()='Expense Mandatory']//div[@class='react-switch-bg']",
    GlobalCCRevenueExpenseFilterselectedValuesCSS:  ".global-detail-modal-transaction-filters > div:nth-of-type(1) > div",
    GlobalCCRevenueExpensesectionTextinModalXpath: "//span[contains(text(),'Revenue/Expense')]/following-sibling::div",
    GlobalCCRevenueExpenseRevenueMandatoryTextonModalXpath: "//span[contains(text(),'Revenue/Expense')]/following-sibling::div[text()='Revenue Mandatory']",
    GlobalCCRevenueExpenseExpenseMandatoryTextonModalXpath: "//span[contains(text(),'Revenue/Expense')]/following-sibling::div[text()='Expense Mandatory']",




    // import country tranasaction filter 
    GlobalCCAddTransactionFilterImportCountryAccordion: "//div[@class='accordion-title' and text()='Import Country']",
    GlobalCCAddTransactionFilterImportCountryChina: "//div[text()='China']//div[@class='react-switch-bg']",
    GlobalCCAddTransactionFilterImportCountryIndia: "//div[text()='India']//div[@class='react-switch-bg']",
    GlobalCCImportCountryFilterselectedValuesCSS: ".global-detail-modal-transaction-filters > div:nth-of-type(1) > div",

    // Export country tranasaction filter 
    GlobalCCAddTransactionFilterExportCountryAccordion: "//div[@class='accordion-title' and text()='Export Country']",
    GlobalCCAddTransactionFilterExportCountryUnitedStates: "//div[text()='United States']//div[@class='react-switch-bg']",
    GlobalCCExportCountryFilterselectedValuesCSS: ".global-detail-modal-transaction-filters > div:nth-of-type(1) > div",

    // Flitering the categoryCodes/transaction config/transactionFilters
    GlobalCCFilterTransactionConfigFilterDropdownButton: "//div[@class='filter-button-title' and text()='Transaction Config']",
    GlobalCCFilterCategoryCodesFilterDropdownButton: "//div[@class='filter-button-title' and text()='Category Codes']",
GlobalCCFilterTransactionTypeFilterDropdownButton: "//div[@class='filter-button-title' and text()='Transaction Type']",
GlobalCCFilterExpenseRevenueFilterDropdownButton: "//div[@class='filter-button-title' and text()='Revenue/Expense']",
GlobalCCFilterImportCountryFilterDropdownButton: "//div[@class='filter-button-title' and text()='Import Country']",
GlobalCCFilterExportCountryFilterDropdownButton: "//div[@class='filter-button-title' and text()='Export Country']",
GlobalCCFilterTransactionConfigTaxCheckBox: "//label[text()='Tax']/input[@class='filter-item-input']",
GlobalCCFilterTransactionConfigPassthroughCheckBox: "//label[text()='Passthrough']/input[@class='filter-item-input']",
GlobalCCFilterTransactionConfigDutynettingCheckBox: "//label[text()='DutyNetting']/input[@class='filter-item-input']",
GlobalCCFilterTransactionConfigProformaCheckBox: "//label[text()='Proforma']/input[@class='filter-item-input']",
// transcationTypeFilterCheckboxes
GlobalCCFilterTransactionTypeAirShipmentCheckBox: "//label[text()='Air Shipment']/input[@class='filter-item-input']",
GlobalCCFilterTransactionTypeOceanShipmentCheckBox: "//label[text()='Ocean Shipment']/input[@class='filter-item-input']",
GlobalCCFilterTransactionTypeServiceFinOnlyCheckBox:  "//label[text()='Service Fin Only']/input[@class='filter-item-input']",
GlobalCCFilterTransactionTypeCustomFinOnlyCheckBox: "//label[text()='Customs Fin Only']/input[@class='filter-item-input']",
// trasactionExpenseRevenue Filter checkboxes
GlobalCCFilterTransactionTypeRevenueMandatoryCheckBox: "//label[text()='Revenue Mandatory']/input[@class='filter-item-input']",
GlobalCCFilterTransactionTypeExpenseMandatoryCheckBox: "//label[text()='Expense Mandatory']/input[@class='filter-item-input']",

// trasactionFilter ImportCountry China&India CheckBoxOn FilterInputScreen
GlobalCCFilterScreenImportCountryFilterCHINACheckBox : "//label[text()='China']/input[@type='checkbox']",
GlobalCCFilterScreenImportCountryFilterINDIACheckBox : "//label[text()='India']/input[@type='checkbox']",
GlobalCCImportCountryFilterCHINAOnCardModal: "//span[contains(text(),'Import Country')]/following-sibling::div[text()='China']",
GlobalCCImportCountryFilterINDIAOnCardModal:  "//span[contains(text(),'Import Country')]/following-sibling::div[text()='India']",


// trasactionFilter ExporCountry UnitedStates CheckBoxOn FilterInputScreen
GlobalCCFilterScreenExportCountryFilterUNITEDSTATESCheckBox:"//label[text()='United States']/input[@type='checkbox']",

 GlobalCCImportCountryFilterUnitedStatesOnCardModal: "//span[contains(text(),'Export Country')]/following-sibling::div[text()='United States']",



GlobalCCChargeCodeArchiveButtonIcon: "//button[text()='Archive']",
GlobalCCArchiveModalText: "//div[@class='archive-charge-codes-message']",
GlobalCCArchiveModalOKButton: "//div[@class='modal-footer']//button[text()='OK']",
GlobalCCArchiveModalCancelButton: "//div[@class='modal-footer']//button[text()='Cancel']",
GlobalCCArchiveE2ECategoryAccordion: "//div[@class='accordion-title' and contains(text(),'E2E Archive test Category')]",
GlobalCCArchiveE2ECategoryCardEditButton: "//span[text()='E2E Archive test Category']/ancestor::div[@class='card']//span[@class='card-header-edit-archive']"
    




};

export {globalChargeCodedisplayScreen};