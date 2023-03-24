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
exports.PageHelper = void 0;
const puppeteer_1 = require("puppeteer");
const puppeteer_autoscroll_down_1 = require("puppeteer-autoscroll-down");
class PageHelper {
    constructor() {
        this.retryCount = 3;
        this.browser = null;
        this.page = null;
    }
    type(CCCodesRevenuepartyUnitsTextBox, text) {
        throw new Error("Method not implemented.");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.browser = yield puppeteer_1.launch({
                    headless: false,
                    args: ['no-sandbox', '-disable-setuid-sandbox', '-disable-notifications', '--start-maximized'],
                    ignoreHTTPSErrors: true,
                    defaultViewport: { width: 1920, height: 1080 },
                    dumpio: false,
                });
                this.page = yield this.browser.newPage();
                this.page.waitFor(3000);
                //await Promise.all({
                // this.page.coverage.startCSSCoverage(),
                //this.page.coverage.startCSSCoverage(),
                //)};
            }
            catch (Exception) {
                throw new Error(Exception.toString());
            }
        });
    }
    open(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    return yield this.page.goto(url);
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount)
                        throw new Error(Exception.toString());
                }
            }
        });
    }
    waitForFewSeconds(timeinms) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Time in ms" + timeinms);
            yield this.page.waitFor(timeinms);
        });
    }
    getAllTextContent(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            var linkTexts = yield this.page.$$eval(webElement, element => element.map(item => item.textContent));
            //prints array of text 
            yield console.log("The values are " + linkTexts);
            return linkTexts;
        });
    }
    getAllTextAttributes(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            var linkTexts = yield this.page.$$eval(webElement, element => element.map(item => item.getAttribute('class')));
            //prints array of text 
            yield console.log("The values are " + linkTexts);
            return linkTexts;
        });
    }
    getAllTextAttributesValue(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            var linkTexts = yield this.page.$$eval(webElement, element => element.map(item => item.getAttribute('value')));
            //prints array of text 
            yield console.log("The values are " + linkTexts);
            return linkTexts;
        });
    }
    //  public async getAllTextContentFromXpath(webElement: string): Promise<void> {
    // await this.page.$x(webElement).then(values => console.log("randomestring" + typeof(values))).catch(err => console.log(console.log(err)));
    // //     let allvalues = [];
    // //     for (const elem in value){
    // //         const getMsg = await this.page.evaluate(name => name.innerText, elem);
    // //         allvalues.push(getMsg);
    // //     }
    // //     //prints array of text 
    // //      await console.log("The values are " + allvalues);
    // //     return allvalues;
    //  }
    hitTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.waitFor(2);
            yield this.page.keyboard.press("Tab");
        });
    }
    getAllText(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield this.page.$$(webElement);
            yield text[0];
            console.log("The first accordion is " + text[0]);
        });
    }
    pageRefresh() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.reload();
        });
    }
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    yield this.page.waitFor(10);
                    return yield this.page.title();
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    clickElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    yield this.page.waitForSelector(element);
                    yield this.page.waitFor(10);
                    return yield this.page.click(element);
                }
                catch (Exception) {
                    try {
                        i++;
                        console.log("Trail 1 ");
                        yield this.page.waitForSelector(element);
                        yield this.page.waitFor(10);
                        yield this.page.evaluate('arguments[0].click()', element);
                        continue;
                    }
                    catch (Exception) {
                        i++;
                        console.log("Trail 2 ");
                        if (i === this.retryCount) {
                            throw new Error(Exception.toString());
                        }
                    }
                }
            }
        });
    }
    clickElementUsingXpath(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    const b = (yield this.page.$x(element))[0];
                    yield this.page.waitFor(10);
                    yield b.click();
                    return Promise.resolve();
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    waitUntilPageLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    yield this.page.waitForNavigation({ waitUntil: 'networkidle0' });
                    console.log("page loaded");
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    clickElementUsingXpathNew(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    console.log("The x path is clicked");
                    const b = yield this.page.waitForXPath(element);
                    yield this.page.waitFor(10);
                    yield b.click();
                    return Promise.resolve();
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    hoverElementUsingXpath(webelement) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    yield this.page.waitFor(10);
                    (yield this.page.$x(webelement))[0].hover();
                    // await this.page.hover(webelement);
                    return Promise.resolve();
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    sendElementText(element, text) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    return yield this.page.type(element, text);
                }
                catch (Exception) {
                    try {
                        i++;
                        yield this.page.waitForSelector(element);
                        yield this.page.evaluate('arguments[0].click()', element);
                        continue;
                    }
                    catch (Exception) {
                        i++;
                        if (i === this.retryCount) {
                            throw new Error(Exception.toString());
                        }
                    }
                }
            }
        });
    }
    selectValueFromDropDown(element, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForFewSeconds(3);
            yield this.page.select(element, text);
        });
    }
    checkBoxCheckedorNot(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const CheckboxElement = yield this.page.waitForXPath(element);
            const isCheckBoxChecked = yield (yield CheckboxElement.getProperty("checked")).jsonValue();
            console.log("The check box is " + isCheckBoxChecked);
            return isCheckBoxChecked;
        });
    }
    ElementDisabledorNot(element) {
        return __awaiter(this, void 0, void 0, function* () {
            const TextboxElement = yield this.page.waitForXPath(element);
            const isElementDisabled = yield (yield TextboxElement.getProperty("disabled")).jsonValue();
            console.log("The Text box element is " + isElementDisabled);
            return isElementDisabled;
        });
    }
    sendElementTextUsingXpath(webelement, text) {
        return __awaiter(this, void 0, void 0, function* () {
            // this.page.setDefaultTimeout(5000);
            let i = 0;
            while (i < this.retryCount) {
                try {
                    //  const keysText =  await this.page.$x(webelement)[0];
                    const keysText = yield this.page.waitForXPath(webelement);
                    yield this.page.waitFor(1000);
                    console.log("the text is " + text);
                    // keysText.type(text);
                    keysText.type(text);
                    //await this.page.evaluate('arguments[0].click()', webelement);
                    yield this.page.waitFor(1000);
                    Promise.resolve();
                    break;
                    // return await this.page.type(webelement, text);
                }
                catch (Exception) {
                    // try {
                    //     i++;
                    //    const keysText =  await this.page.waitForXPath(webelement);
                    //    keysText.type(text)
                    //     //await this.page.evaluate('arguments[0].click()', webelement);
                    //     Promise.resolve();
                    // } catch (Exception) {
                    //     i++;
                    //     if (i === this.retryCount) {
                    //         throw new Error(Exception.toString());
                    //     }
                    // }
                }
                i++;
            }
        });
    }
    clearElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    const elementHandle = yield this.page.$(element);
                    yield elementHandle.click({ clickCount: 3 });
                    return yield elementHandle.press('Backspace');
                }
                catch (Exception) {
                    try {
                        i++;
                        yield this.page.waitForSelector(element);
                        yield this.page.evaluate('arguments[0].click()', element);
                        continue;
                    }
                    catch (Exception) {
                        i++;
                        if (i === this.retryCount) {
                            throw new Error(Exception.toString());
                        }
                    }
                }
            }
        });
    }
    clearElementUsingXpath(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    const elementHandle = yield this.page.waitForXPath(element);
                    yield elementHandle.click({ clickCount: 3 });
                    return yield elementHandle.press('Backspace');
                }
                catch (Exception) {
                    try {
                        i++;
                        yield this.page.waitForXPath(element);
                        yield this.page.evaluate('arguments[0].click()', element);
                        continue;
                    }
                    catch (Exception) {
                        i++;
                        if (i === this.retryCount) {
                            throw new Error(Exception.toString());
                        }
                    }
                }
            }
        });
    }
    enterKeys(keys) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            while (i < this.retryCount) {
                try {
                    yield this.page.waitFor(10);
                    return yield this.page.keyboard.press(keys);
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    screenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.page.screenshot();
            }
            catch (Exception) {
                throw new Error(Exception.toString());
            }
        });
    }
    isElementVisible(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            let isElementVisible;
            while (i < this.retryCount) {
                try {
                    isElementVisible = yield this.page.waitForSelector(element, {
                        visible: true
                    });
                    return isElementVisible;
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    isElementVisibleByXpath(webelement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.waitFor(2000);
            return yield this.page.waitForXPath(webelement, { visible: true, timeout: 2000 }).then((value) => {
                return true;
            }).catch((Err) => { return false; });
            // let i: number = 0;
            // let isElementVisible;
            // while (i < this.retryCount) {
            // try {
            //  isElementVisible = await this.page.waitForXPath(webelement, {visible: true})
            //     Promise.resolve(true);
            // }
            // catch (Exception) {
            // //i++;
            // if (i === this.retryCount) {
            // Promise.resolve(false);
            //throw new Error(Exception.toString());
            // }
            //     }
            // }
        });
    }
    getText(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            let text;
            while (i < this.retryCount) {
                try {
                    yield this.page.waitFor(10);
                    text = yield this.page.$eval(webElement, element => element.textContent);
                    return text;
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    getTextFromXpath(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            let i = 0;
            let text;
            while (i < this.retryCount) {
                try {
                    yield this.page.waitFor(10);
                    const getXpath = yield this.page.waitForXPath(webElement);
                    const getMsg = yield this.page.evaluate(name => name.textContent, getXpath);
                    return getMsg;
                }
                catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        });
    }
    hoverElement(webElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.page.waitFor(10);
                yield this.page.waitForSelector(webElement);
                yield this.page.hover(webElement);
            }
            catch (Exception) {
                throw new Error(Exception.toString());
            }
        });
    }
    selectFromDropDownValue(webElement, valuetoselect) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForFewSeconds(1000);
            yield this.page.select(webElement, valuetoselect);
        });
    }
    getAttributeValue(webElement, attributeName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForFewSeconds(1000);
            var dropdownvalue = yield (yield this.page.$(webElement)).getProperty(attributeName);
            console.log("The drop down value " + dropdownvalue);
            console.log("The type of the drop down is " + typeof (dropdownvalue));
            const text = yield dropdownvalue.jsonValue();
            console.log("The drop down value " + text);
            console.log("The type of the drop down is " + typeof (text));
            return text;
            // /return dropdownvalue;
        });
    }
    scrollToBottom() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.page.waitFor(10);
                const lastPosition = yield puppeteer_autoscroll_down_1.scrollPageToBottom(this.page, { size: 500, delay: 250 });
            }
            catch (Exception) {
                throw new Error(Exception.toString());
            }
        });
    }
    // public async scrollToBottom(): Promise<void> {
    //         try {
    //                await this.page.waitFor(10);
    //               const lastPosition = await scrollPageToBottom(this.page,{size:500, delay:250});
    //            }
    //            catch (Exception) {
    //                throw new Error(Exception.toString());
    //            }
    //    }
    takeScreenshot(name) {
        return __awaiter(this, void 0, void 0, function* () {
            var screenshotPath = './output/screenshots/' + name + '.png';
            const screenshot = yield this.page.screenshot({ path: screenshotPath });
        });
    }
    //     public async visibilityOfElement(webElement: string): Promise<void> {
    //         try {
    //             await this.page.waitFor(10);
    //             await this.page.waitForXPath(webElement);
    //               //await this.page.waitForFunction(
    //                // 'document.querySelector('body').innerText.includes(text)',{});
    //            }
    //            catch (Exception) {
    //                throw new Error(Exception.toString());
    //            }
    //    }
    getAlertText() {
        return __awaiter(this, void 0, void 0, function* () {
            let alertMessage;
            try {
                yield this.page.waitFor(10);
                yield this.page.on('dialog', (dialog) => __awaiter(this, void 0, void 0, function* () {
                    console.log(dialog.defaultValue);
                    //console.log(dialog.message()); 
                    alertMessage = dialog.message();
                }));
                return alertMessage;
            }
            catch (Exception) {
                throw new Error(Exception.toString());
            }
            return alertMessage;
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //const pti = require('puppeteer-to-instanbul');
                yield this.page.waitFor(10);
                return yield this.browser.close();
            }
            catch (Exception) {
                throw new Error(Exception.toString());
            }
        });
    }
}
exports.PageHelper = PageHelper;
