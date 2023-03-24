"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addaCategoryChargeCodeScreen = void 0;
const addaCategoryChargeCodeScreen = {
    addNewCategoryCancelButton: "//button[text()='Cancel']",
    addNewCategorySaveButtonXpath: "//button[text()='Save']",
    addNewCategoryTitle: ".charge-code-title",
    addNewCategoryPurposeEmptyvalueError: "(//li[@class='invalid-feedback'])[last()]",
    addNewCategoryDescriptionEmptyvalueError: "(.//*[@class='invalid-feedback'])[1]",
    addNewCategoryDescriptionUniquevalueError: "(.//*[@class='invalid-feedback'])[2]",
    newChargeCodeCategorytext: "[data-testid='card-autotest2'] .card-body span",
    addNewCategoryCancelModalTitle: "#myModalTitle",
    addNewCategoryCancelModalCancelButton: "(.//button[text()='Cancel'])[2]",
    addNewCategoryCancelModalOKButton: "div[role='document'] .btn.btn-primary",
    addNewCategorySuccessMessage: "//div[@class='Toastify__toast-body']//div[text()='Success']/following-sibling::div",
    addNewCategoryCancelModalConfirmText: ".//div[@class='confirmation-modal-message']",
    addNwCategoryDescriptionTexBoxError1: "(//li[@class='invalid-feedback'])[1]",
    addNwCategoryDescriptionTexBoxError2: "(//li[@class='invalid-feedback'])[2]",
    addNewCategoryChargeCodeCardTooltip: "div:nth-of-type(2) > .card  .card-header > span:nth-of-type(1) > .visible-lg-inline-block.visible-md-inline-block.visible-sm-inline-block.visible-xl-inline-block.visible-xs-inline-block"
};
exports.addaCategoryChargeCodeScreen = addaCategoryChargeCodeScreen;
// [data-testid='card-'] span:nth-of-type(1) .visible-xl-inline-block
// div:nth-of-type(1) > .card  .card-header > span:nth-of-type(1) > .visible-lg-inline-block.visible-md-inline-block.visible-sm-inline-block.visible-xl-inline-block.visible-xs-inline-block
