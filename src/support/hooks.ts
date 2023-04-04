const {BeforeAll, Before, After, AfterAll, Status} = require ('@cucumber/cucumber');
import { PageHelper } from "../pages/pageHelper";
import { searchPage } from "../pages/searchPage";
// import { landingPage } from "../pages/landingPage";
import {ShipmentFinEditorLandingPage} from "../pages/ShipmentFinancialEditorLandingPage";
import { shipmentNumbers } from "../data/data";
import { scrollPageToBottom } from "puppeteer-autoscroll-down";
import { setDefaultTimeout } from "cucumber";
const moment = require('moment');

const page: PageHelper = new PageHelper();

Before({timeout: 100 * 1000}, async () => {

    setDefaultTimeout(60*1000);
    await page.init();
    await page.open(ShipmentFinEditorLandingPage.url + shipmentNumbers["Shipment_number_Air_SFO"] +
    "/financialsummary/branchdetails");
}) ;


After(async function(scenario) {
    console.log("scenario result is ... " + scenario.result);
    console.log("scenario result for cap is ... " + scenario.result);
        

    if (scenario.result.status === Status.FAILED) {

        let name = scenario.pickle.name.replace(/ /g,'_');
        let result = scenario.result .status
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
    

export {page};
