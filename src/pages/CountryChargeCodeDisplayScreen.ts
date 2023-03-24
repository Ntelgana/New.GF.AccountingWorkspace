interface CountryChargeCodedisplayScreen{

    CountryCCDisplayScreenTitle: string;
    CountryPageAddIconCss: string;
    CountryFilterIconCss: string;
    CountryPageOverrideIconCss: string;
    CountryPageIconsToolTipText: string;
    CountryCCountryAccordionView: string;

    // card
    CountryCCDisplayScreenFirstAccordion: string;
    CountryCCChargeCodeCardBody: string;
    CountryCCChargeCodeFirstCardText: string;

    // cc add screen
    CountryAddCountryCCaPageTitle: string;
    CountryAddCountryCCCategoryDropDown: string;
    CountryAddCountryCCCategorydropdownButton: string;
    CountryAddCountryChargeCodeNametextbox: string;
    CountryAddCountryChargeCodeCountryPlaceholder: string;
    CountryAddCountryChargeCodeCountryInputChina: string;
    CountryAddCountryChargeCodeCountryDynamicInput: string;
    CountryAddCountryChargeCodeDescriptiontextbox : string;
    CountryAddCountryChargeCodeDefaultUnitAmounttextbox : string;

    CountryAddCountryChargeCodeTestCodeCard: string;
    CountryAddCountryChargeCodeAccordionDynamic: string;
    CountryAddCountryChargeCodeAccordionForChina: string;

    CountryAddCountryChargeCodeLastCardEditIcon: string;
    CountryCCCardClickModalHeader : string;
    CountryAddCountryChargeCodeDefaultUnitTypeDropdown: string;
    CountryAddCountryChargeCodeDefaultUnitTypeDropdownValue: string;
    CountryAddCountryChargeCodeDefaultUnitTypeOnModal: string;
    CountryAddCountryChargeCodeDefaultUnitTypeOnModalCSS: string;
    CountryAddCountryChargeCodeEditSCreenTitle: string;
    CountryCCEditScreenCancelButton: string;

    // FILTER bar
    CountryCCFilterIconCSS: string;
    CountryCCFilterlabelCSS : string;

    // override screen
    CountryCCOverrideScreenTitle: string;
    CountryCCOverrideScreenLastGlobalCCDropdownitem: string;
    CountryCCOverrideScreengGlobalCCdropdownButton: string;
    CountryCCOverrideScreenCountryinputplaceholder: string;
    CountryCCOverrideScreenCountryinputvalueChina: string;
    CountryCCOverrideScreenChargeCodenameTextBox:string;

    // OveriddenPopUpCountryInfo
    CountryCCOverrideLastCardModalCountryinfo: string;
    CountryCCOverrideLastCardModalDefaultUnitAmountCSS: string;
    CountryCCOverrideLastCardModalDefaultUnitTypeCSS: string;


    CountryCCOverrideTaxToggle: string;
    CountryCCOverridePassthroughToggle: string;
    CountryCCOverrideDutyNettingToggle: string;
    CountryCCOverrideProformaToggle: string;

    //transaction filter type toggles in country override scenario
    CountryCCAddTransactionFilterTransactionTypeAccordion: string;
    CountryCCAirshipmentToggle: string;
    CountryCCOceanshipmentToggle: string;
    CountryCCServiceFinOnlyshipmentToggle: string;
    CountryCCCustomFinOnlyshipmentToggle:string;

    // revenue expense transaction filter type toggles in country override scenario
    CountryCCAddTransactionFilterRevenueExpenseAccordion: string;
    CountryCCRevenueMandatoryFilterToggle: string;
    CountryCCExpenseMandatoryToggle: string;

    // Import country transaction filter type toggles in country override scenario
    CountryCCAddTransactionFilterImportCountryAccordion: string;
    CountryCCImportCountryChinaToggle: string;
    CountryCCImportCountryIndiaToggle: string;

     // export country transaction filter type toggles in country override scenario
    GlobalCCAddTransactionFilterExportCountryAccordion: string;
    CountryCCExportCountryUnitedStatesToggle: string;


    // Country code  Edit 
    CountryCCEditscreenTitle: string;
    CountryCCEditiconLastChargeCode: string;
    CountryCCEditScreenArchiveButton : string;
    ConutryCCArchivePOPuPText:string;
    CountryCCArchiveAlertOKButton:string;
    CountryCCArchiveCCSuccessMessage: string;
    CountryChargeCodeModalEditButtonXpath: string;




}
const countryChargeCodedisplayScreen: CountryChargeCodedisplayScreen = {

    CountryCCDisplayScreenTitle: "//div[@class='screen-title-header']",
    CountryPageAddIconCss:   ".bi-plus-lg", 
    CountryFilterIconCss: ".bi.bi-funnel",
    CountryPageOverrideIconCss: ".bi.bi-back-lg",
    CountryPageIconsToolTipText: "//div[@role='tooltip']/div[@class='tooltip-inner']",
    CountryCCountryAccordionView: ".accordion-title",


    // tc053: accordion and card
    CountryCCDisplayScreenFirstAccordion: "(//div[@class='accordion-title'])[1]",
    CountryCCChargeCodeCardBody: ".card-body",
    CountryCCChargeCodeFirstCardText: "//div[@class='card-body']/span",
    CountryCCCardClickModalHeader : "//h4[contains(@class,'modal-title')]",

    // tc054
    CountryAddCountryCCaPageTitle: "//div[@class='charge-code-title']",
    CountryAddCountryCCCategoryDropDown: "select.form-control",
    CountryAddCountryCCCategorydropdownButton: "select[data-testid='category-select']",
    CountryAddCountryChargeCodeNametextbox: "[data-testid='charge-code-code']",
    CountryAddCountryChargeCodeCountryPlaceholder: "//input[@placeholder='Select a country']",
    CountryAddCountryChargeCodeCountryInputChina : "//a[text()='China']",
    CountryAddCountryChargeCodeCountryDynamicInput: "//a[text()='{0}']",

    CountryAddCountryChargeCodeDescriptiontextbox: "[data-testid='charge-code-description']",
    CountryAddCountryChargeCodeDefaultUnitAmounttextbox : "[data-testid='charge-code-default-unit-amount']",
    CountryAddCountryChargeCodeTestCodeCard: "(//div[@class='card-body'])[last()]/span",
    CountryAddCountryChargeCodeAccordionForChina: "//div[@class='accordion-title' and contains(text(),'China')]",
    CountryAddCountryChargeCodeAccordionDynamic: "//div[@class='accordion-title' and contains(text(),'{0}')]",
    CountryAddCountryChargeCodeDefaultUnitTypeDropdown: "select[data-testid='defaultUnitType-select']",
    CountryAddCountryChargeCodeDefaultUnitTypeDropdownValue: "//option[text()='{0}']",
    CountryAddCountryChargeCodeDefaultUnitTypeOnModal: "//label[text()='Default Unit Type']/following-sibling::input",
    CountryAddCountryChargeCodeDefaultUnitTypeOnModalCSS: 'div:nth-of-type(1) > .form-group > .form-control',

    // last card
    CountryAddCountryChargeCodeLastCardEditIcon: "(//div[@class='card-body-container']//span[@class='card-header-edit-archive'])[last()]",


    // EditSCreen 
    CountryAddCountryChargeCodeEditSCreenTitle: "//div[@class='charge-code-title']",
    CountryCCEditScreenCancelButton: "//button[text()='Cancel']",

    // Filter screen
    CountryCCFilterIconCSS: ".bi.bi-funnel",
    CountryCCFilterlabelCSS : ".filterBar-wrapper input",


    // override charege code screen 
    CountryCCOverrideScreenTitle:  "//div[@class='charge-code-title']",
    CountryCCOverrideScreenLastGlobalCCDropdownitem: ".form-control option:last-child",
    CountryCCOverrideScreengGlobalCCdropdownButton: "select[data-testid='global-select']",
    CountryCCOverrideScreenCountryinputplaceholder: "//input[@placeholder='Select a country']",
    CountryCCOverrideScreenCountryinputvalueChina: "//a[text()='China']",
    CountryCCOverrideScreenChargeCodenameTextBox: "//label[text()='Charge Code']/following-sibling::input",

    CountryCCOverrideLastCardModalCountryinfo: "//span[text()='Country']/following-sibling::span" ,
    CountryCCOverrideLastCardModalDefaultUnitAmountCSS: "div:nth-of-type(2) > .form-group > .form-control",
    CountryCCOverrideLastCardModalDefaultUnitTypeCSS : "div:nth-of-type(1) > .form-group > .form-control",

    CountryCCOverrideTaxToggle: "//label[text()='Tax']/following-sibling::div//input[@type='checkbox']",
    CountryCCOverridePassthroughToggle: "//label[text()='Passthrough']/following-sibling::div//input[@type='checkbox']",
    CountryCCOverrideDutyNettingToggle: "//label[text()='Duty Netting']/following-sibling::div//input[@type='checkbox']",
    CountryCCOverrideProformaToggle: "//label[text()='Proforma']/following-sibling::div//input[@type='checkbox']",


    CountryCCAddTransactionFilterTransactionTypeAccordion: "//div[@class='accordion-title' and text()='Transaction Type']",
    CountryCCAddTransactionFilterRevenueExpenseAccordion:"//div[@class='accordion-title' and text()='Revenue/Expense']",
    CountryCCAddTransactionFilterImportCountryAccordion:"//div[@class='accordion-title' and text()='Import Country']",
    GlobalCCAddTransactionFilterExportCountryAccordion: "//div[@class='accordion-title' and text()='Export Country']",

    CountryCCAirshipmentToggle: "//div[text()='Air Shipment']/div/input[@type='checkbox']",
    CountryCCOceanshipmentToggle: "//div[text()='Ocean Shipment']/div/input[@type='checkbox']",
    CountryCCServiceFinOnlyshipmentToggle: "//div[text()='Service Fin Only']/div/input[@type='checkbox']",
    CountryCCCustomFinOnlyshipmentToggle: "//div[text()='Customs Fin Only']/div/input[@type='checkbox']",


    CountryCCRevenueMandatoryFilterToggle: "//div[text()='Revenue Mandatory']/div/input[@type='checkbox']",
    CountryCCExpenseMandatoryToggle: "//div[text()='Expense Mandatory']/div/input[@type='checkbox']",


    CountryCCImportCountryChinaToggle:  "//div[text()='China']/div/input[@type='checkbox']",
    CountryCCImportCountryIndiaToggle: "//div[text()='India']/div/input[@type='checkbox']",

    CountryCCExportCountryUnitedStatesToggle: "//div[text()='United States']/div/input[@type='checkbox']",

    // editscreen
    CountryCCEditscreenTitle: "//div[@class='charge-code-title']",
    CountryCCEditiconLastChargeCode: "(//span[@class='card-header-edit-archive'])[last()]",
    CountryCCEditScreenArchiveButton: "//button[text()='Archive']",
    ConutryCCArchivePOPuPText: "//div[@class='confirmation-modal-message']",
    CountryCCArchiveAlertOKButton:"//button[text()='OK']" ,
    CountryCCArchiveCCSuccessMessage: "//div[@class='Toastify__toast-body']//div[text()='Success']/following-sibling::div",
    CountryChargeCodeModalEditButtonXpath:  "//button[text()='Edit']"




    
}

export {countryChargeCodedisplayScreen};