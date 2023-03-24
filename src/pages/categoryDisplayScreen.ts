interface CategoryDisplayScreen {
    addCategoryicon: string;
    categoryFiltericon: string;
    addCategoryScreenTitle: string;
    categoryDescriptionlabel: string;
    categoryPurposelabel: string;
    categoryDescriptionTextBox: string; 
    categoryPurposeTextBox: string;
    categoryMostRecentCategoryCardText: string;
    categoryFirstCategoryCardText: string;
    categoryCardClickPopUpModal: string;
    categoryFilterButtonIcon: string;
    categoryFilterbar: string;
    categoryCardModalTitle: string;
    categoryCardModalEditButton: string;
    categoryCardModalCloseButton: string;
    categoryCardPurposeToolTipPopUp: string;
    categoryCardToolTipCardOne: string;
    categoryCardTooltipWithCSSCardOne: string;
    categoryFilterbarCSS: string;
    categoryChargeCodeCardsAllCategoryNames: string;
    categoryNoFilterMatchedErrorText: string;
    categoryCardEditButtonLastCard: string;
    categoryEditCategoryPageTitle: string;
    categoryEditCategoryPageArchiveButton: string;
    categoryEditConfirmationModalBodyCSS: string;
    categoryEditConfirmationModalOKButton: string;
    categoryEditConfirmationModalCancelButton: string;
    categoryEditCategoryScreenSaveButton: string;
    categoriesPageAddIconToolTipText: string;
    categoriesPageFilterIconToolTipText: string;
    categoriesPageE2ETestingCategorycardEditButton: string;
    GlobalCCArchiveE2ECategoryCardEditButton:string;



    
}
 
const categoryDisplayScreen: CategoryDisplayScreen = {
    addCategoryicon: ".bi-plus-lg",
    categoryFiltericon: ".bi-funnel",
    addCategoryScreenTitle: ".charge-code-title",
    categoryDescriptionTextBox: "input.form-control",
    categoryPurposelabel: "div:nth-of-type(2) > label",
    categoryDescriptionlabel: "div:nth-of-type(1) > label",
    categoryPurposeTextBox: ".form-control.long-description",
    categoryMostRecentCategoryCardText: "(//div[@class='card-body'])[last()]/span",
    categoryFirstCategoryCardText: "(//div[@class='card-body'])[1]/span",
    categoryCardClickPopUpModal: "",
    categoryFilterButtonIcon:"//div[contains(@class,'filter-btn')]/div",
    categoryFilterbar: "//div[@class='filterBar-wrapper']",
    categoryCardModalTitle: "//h4[contains(@class,'modal-title')]",
    categoryCardModalEditButton: "//button[text()='Edit']",
    categoryCardModalCloseButton: "//button[text()='Close']",
    categoryCardPurposeToolTipPopUp: "//div[@id='popover-trigger-hover-focus']//h3",
    categoryCardToolTipCardOne: "(//div[@class='card-header']/span/div)[1]",
    categoryCardTooltipWithCSSCardOne: "div:nth-of-type(1) > .card .bi.bi-info-circle",
    categoryFilterbarCSS: ".form-control",
    categoryChargeCodeCardsAllCategoryNames: "div> .card  .card-body > span",
    categoryNoFilterMatchedErrorText: ".//*[contains(text(),'No charge codes match your search criteria')]",
    categoryCardEditButtonLastCard: "(//span[@class='card-header-edit-archive'])[last()]",
    categoryEditCategoryPageTitle: "//div[text()='Edit Category']",
    categoryEditCategoryPageArchiveButton: "//button[text()='Archive']",
    categoryEditConfirmationModalBodyCSS: ".archive-charge-codes-message",
    categoryEditConfirmationModalOKButton: "//button[text()='OK']",
    categoryEditConfirmationModalCancelButton: "//div[@class='modal-footer']//button[text()='Cancel']",
    categoryEditCategoryScreenSaveButton: "//button[text()='Save']",
    categoriesPageAddIconToolTipText: "//div[@role='tooltip']/div[@class='tooltip-inner']",
    categoriesPageFilterIconToolTipText: "//div[@role='tooltip']/div[@class='tooltip-inner']",
    categoriesPageE2ETestingCategorycardEditButton: "//span[text()='E2E TEST Category']/ancestor::div[@class='card']//span[@class='card-header-edit-archive']",

    GlobalCCArchiveE2ECategoryCardEditButton: "//span[text()='E2E Archive test Category']/ancestor::div[@class='card']//span[@class='card-header-edit-archive']"
};

export {categoryDisplayScreen};