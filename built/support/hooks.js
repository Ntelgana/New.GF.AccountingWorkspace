"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = void 0;
const { BeforeAll, Before, After, AfterAll, Status } = require('@cucumber/cucumber');
const pageHelper_1 = require("../pages/pageHelper");
// import { landingPage } from "../pages/landingPage";
const ShipmentFinancialEditorLandingPage_1 = require("../pages/ShipmentFinancialEditorLandingPage");
const data_1 = require("../data/data");
const cucumber_1 = require("@cucumber/cucumber");
const moment = require('moment');
const page = new pageHelper_1.PageHelper();
exports.page = page;
Before({ timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    cucumber_1.setDefaultTimeout(60 * 1000);
    yield page.init();
    yield page.open(ShipmentFinancialEditorLandingPage_1.ShipmentFinEditorLandingPage.url + data_1.shipmentNumbers["Shipment_number_Air_SFO"] +
        "/financialsummary/branchdetails");
}));
After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("scenario result is ... " + scenario.result);
        console.log("scenario result for cap is ... " + scenario.result);
        if (scenario.result.status === Status.FAILED) {
            let name = scenario.pickle.name.replace(/ /g, '_');
            let result = scenario.result.status;
            let timeStamp = moment();
            // var currentTimeStamp= moment(timeStamp).format('L');
            // console.log("Timestamp is " + currentTimeStamp);
            // SCREENSHOT IS A BASE-64 ENCODED PNGY
            //     console.log("Scenario name is :" + name)
            //     let screenShot = await page.takeScreenshot(name);
            //    // this.attach(screenShot, 'image/png');
        }
        //  await page.close();
    });
});
