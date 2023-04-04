import { type } from 'os';
import { Browser, ElementHandle, launch, Page, Response } from 'puppeteer';
import { scrollPageToBottom } from 'puppeteer-autoscroll-down';





class PageHelper {
  type(CCCodesRevenuepartyUnitsTextBox: string, text: string) {
    throw new Error("Method not implemented.");
  }
    private browser: Browser;
    private page: Page;
    private readonly retryCount: number = 3;

    constructor() {
        this.browser = null;
        this.page = null;
    }
    public async init() {
        try {
            this.browser = await launch({
                headless: false,
                args: ['no-sandbox', '-disable-setuid-sandbox', '-disable-notifications', '--start-maximized'],
                ignoreHTTPSErrors: true,
                 defaultViewport: {width:1920, height: 1080},
                dumpio: false,
            });
            this.page = await this.browser.newPage();
            this.page.waitFor(3000);
            //await Promise.all({
            // this.page.coverage.startCSSCoverage(),
            //this.page.coverage.startCSSCoverage(),
            //)};

        }
        catch (Exception) {
            throw new Error(Exception.toString());
        }
    }

    public async open(url: string): Promise<Response> {
        let i: number = 0;
        while (i < this.retryCount) {
            try {
                return await this.page.goto(url);
            }
            catch (Exception) {
                i++;
                if (i === this.retryCount)
                    throw new Error(Exception.toString());
            }
        }
    }

    public async waitForFewSeconds(timeinms: number): Promise<void> {
       console.log("Time in ms" + timeinms);
    await this.page.waitFor(timeinms);

    }

    
    
    public async getAllTextContent(webElement: string): Promise<string[]> {
        var linkTexts = await this.page.$$eval(webElement, element=>element.map(item=>item.textContent));
        //prints array of text 
         await console.log("The values are " + linkTexts);
        return linkTexts;
     }


     public async getAllTextAttributes(webElement: string): Promise<string[]> {
        var linkTexts = await this.page.$$eval(webElement, element=>element.map(item=>item.getAttribute('class')));
        //prints array of text 
         await console.log("The values are " + linkTexts);
        return linkTexts;
     }


     public async getAllTextAttributesValue(webElement: string): Promise<string[]> {
        var linkTexts = await this.page.$$eval(webElement, element=>element.map(item=>item.getAttribute('value')));
        //prints array of text 
         await console.log("The values are " + linkTexts);
        return linkTexts;
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

     public async hitTab() {
await this.page.waitFor(2);
        await this.page.keyboard.press("Tab");
    


     }




     public async getAllText(webElement: string) {
       const text = await this.page.$$(webElement);
       await text[0];
       console.log ("The first accordion is " + text[0]);
      
    
    }


    public async pageRefresh(): Promise<void> {
        
     await this.page.reload();
 
     }



    public async getTitle(): Promise<string> {
        let i: number = 0;
        while (i < this.retryCount) {
            try {
                await this.page.waitFor(10);
                return await this.page.title();
            }
            catch (Exception) {
                i++;

                if (i === this.retryCount) {
                    throw new Error(Exception.toString());

                }
            }
        }
    }

    public async clickElement(element: string): Promise<void> {
        let i: number = 0;
        while (i < this.retryCount) {
            try {
                await this.page.waitForSelector(element);
                await this.page.waitFor(10);
                return await this.page.click(element);
            }
            catch (Exception) {
                try {
                    i++;
                    console.log("Trail 1 ");
                    await this.page.waitForSelector(element);
                    await this.page.waitFor(10);
                    await this.page.evaluate('arguments[0].click()', element);
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
    }





    public async clickElementUsingXpath(element: string): Promise<void> {
        let i: number = 0;
        while (i < this.retryCount) {
            try {
               const b = (await this.page.$x(element))[0];
               await this.page.waitFor(10);             
            await b.click();
            return Promise.resolve();
              
            }
                 catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }

        }
    
        public async waitUntilPageLoad(): Promise<void> {
            let i: number = 0;
        while (i < this.retryCount) {
            try {
                await this.page.waitForNavigation({waitUntil: 'networkidle0'});
            console.log("page loaded");
            }
            catch (Exception) {
                i++;
                if (i === this.retryCount) {
                    throw new Error(Exception.toString());
                }
            }
        }

        }




        public async clickElementUsingXpathNew(element: string): Promise<void> {
            let i: number = 0;
            while (i < this.retryCount) {
                try {
                console.log("The x path is clicked");

                   const b = await this.page.waitForXPath(element);
                   await this.page.waitFor(10);             
                await b.click();
                return Promise.resolve();
                  
                }
                     catch (Exception) {
                        i++;
                        if (i === this.retryCount) {
                            throw new Error(Exception.toString());
                        }
                    }
                }
    
            }


          
    









        public async hoverElementUsingXpath(webelement: string): Promise<void> {
            let i: number = 0;
            while (i < this.retryCount) {
                try {
                
                   await this.page.waitFor(10);  
                   (await this.page.$x(webelement))[0].hover();           
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
    
            }
        







    public async sendElementText(element: string, text: string): Promise<void> {
        let i: number = 0;
        while (i < this.retryCount) {
            try {
                return await this.page.type(element, text);
            }
            catch (Exception) {
                try {
                    i++;
                    await this.page.waitForSelector(element);
                    await this.page.evaluate('arguments[0].click()', element);
                    continue;

                } catch (Exception) {
                    i++;
                    if (i === this.retryCount) {
                        throw new Error(Exception.toString());
                    }
                }
            }
        }
    }



    public async selectValueFromDropDown(element: string, text: string): Promise<void> {
        await this.waitForFewSeconds(3);
        await this.page.select(element,text);
    }
    


    public async checkBoxCheckedorNot(element: string): Promise<boolean> {
        const CheckboxElement = await this.page.waitForXPath(element);
        const isCheckBoxChecked = await (await CheckboxElement.getProperty("checked")).jsonValue();
        console.log("The check box is " + isCheckBoxChecked);
        return isCheckBoxChecked;
        
        }

        public async ElementDisabledorNot(element: string): Promise<boolean> {
            const TextboxElement = await this.page.waitForXPath(element);
            const isElementDisabled = await (await TextboxElement.getProperty("disabled")).jsonValue();
            console.log("The Text box element is " + isElementDisabled);
            return isElementDisabled;
            
            }







    public async sendElementTextUsingXpath(webelement: string, text: string): Promise<void> {
        // this.page.setDefaultTimeout(5000);
        let i: number = 0;
        while (i < this.retryCount) {
            try {
                
                //  const keysText =  await this.page.$x(webelement)[0];
                const keysText =  await this.page.waitForXPath(webelement);
                await this.page.waitFor(1000);
                console.log("the text is " + text);

                // keysText.type(text);
                keysText.type(text);
                 //await this.page.evaluate('arguments[0].click()', webelement);
                 await this.page.waitFor(1000);
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
    }






    public async clearElement(element: string): Promise<void> {
        let i: number = 0;
        while (i < this.retryCount) {
            try {
                const elementHandle = await this.page.$(element);
                await elementHandle.click({ clickCount: 3 });
                return await elementHandle.press('Backspace');
            }
            catch (Exception) {
                try {
                    i++;
                    await this.page.waitForSelector(element);
                    await this.page.evaluate('arguments[0].click()', element);
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
    }


    public async clearElementUsingXpath(element: string): Promise<void> {
        let i: number = 0;
        while (i < this.retryCount) {
            try {
                const elementHandle = await this.page.waitForXPath(element);
                await elementHandle.click({ clickCount: 3 });
                return await elementHandle.press('Backspace');
            }
            catch (Exception) {
                try {
                    i++;
                    await this.page.waitForXPath(element);
                    await this.page.evaluate('arguments[0].click()', element);
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
    }









    public async enterKeys(keys: string): Promise<void> {
        let i: number = 0;
        while (i < this.retryCount) {

            try {
                await this.page.waitFor(10);
                return await this.page.keyboard.press(keys);
            }
            catch (Exception) {
                i++;
                if (i === this.retryCount) {
                    throw new Error(Exception.toString());
                }
            }
        }

    }

    public async screenshot(): Promise<any> {
        try {
            return await this.page.screenshot();
        }
        catch (Exception) {
            throw new Error(Exception.toString());
        }
    }


    public async isElementVisible(element: string): Promise<boolean> {
        let i: number = 0;
        let isElementVisible;
        while (i < this.retryCount) {
            try {

                isElementVisible = await this.page.waitForSelector(element, {
                    visible: true
                })
                return isElementVisible;

            }
            catch (Exception) {


                i++;
                if (i === this.retryCount) {
                    throw new Error(Exception.toString());
                }
            }
        }
    }

    public async isElementVisibleByXpath(webelement: string): Promise<boolean> {
        await this.page.waitFor(2000);
        return await this.page.waitForXPath(webelement, {visible: true,timeout:2000}).then((value)=>{
    return true}).catch((Err)=>{return false});
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
    }


    public async getText(webElement: string): Promise<string> {
        let i: number = 0;
        let text;
        while (i < this.retryCount) {
            try {
                await this.page.waitFor(10);
                text = await this.page.$eval(webElement, element => element.textContent)
                return text;

            }
            catch (Exception) {


                i++;
                if (i === this.retryCount) {
                    throw new Error(Exception.toString());
                }
            }
        }
    }


    public async getTextFromXpath(webElement: string): Promise<string> {
        let i: number = 0;
        let text;
        while (i < this.retryCount) {
            try {
                await this.page.waitFor(10);
                const getXpath = await this.page.waitForXPath(webElement);
                const getMsg = await this.page.evaluate(name => name.textContent, getXpath);
                return getMsg;
            }
            catch (Exception) {


                i++;
                if (i === this.retryCount) {
                    throw new Error(Exception.toString());
                }
            }
        }
    }
    public async hoverElement(webElement: string): Promise<void> {
         try {
                await this.page.waitFor(10);
               await this.page.waitForSelector(webElement);
                await this.page.hover(webElement)

            }
            catch (Exception) {
                throw new Error(Exception.toString());
            }
        
    }


    public async selectFromDropDownValue(webElement:string, valuetoselect: string): Promise<void> {
        await this.waitForFewSeconds(1000);
       
       await this.page.select(webElement,valuetoselect);
       
   }




   
   public async getAttributeValue(webElement:string, attributeName: string): Promise<string> {
    await this.waitForFewSeconds(1000);
   
 var dropdownvalue = await (await this.page.$(webElement)).getProperty(attributeName);
console.log("The drop down value " + dropdownvalue);
console.log("The type of the drop down is " + typeof(dropdownvalue));

const text = await dropdownvalue.jsonValue();
console.log("The drop down value " + text);
console.log("The type of the drop down is " + typeof(text));

return text;
// /return dropdownvalue;

   
}










    public async scrollToBottom(): Promise<void> {
        try {
               await this.page.waitFor(10);
              const lastPosition = await scrollPageToBottom(this.page,{size:500, delay:250});

           }
           catch (Exception) {
               throw new Error(Exception.toString());
           }
       
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



    public async takeScreenshot(name : string): Promise<void> {

        var screenshotPath =  './output/screenshots/'+name+'.png';
        const screenshot = await this.page.screenshot({path: screenshotPath});
    
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

    public async getAlertText(): Promise<string> {
       let alertMessage;
       
        try {

               await this.page.waitFor(10);
               
               await this.page.on('dialog', async dialog => {
                console.log(dialog.defaultValue);   
                //console.log(dialog.message()); 
                alertMessage = dialog.message();
                

               }
              )
              return alertMessage;
              

           }
           catch (Exception) {
               throw new Error(Exception.toString());
           }
       return alertMessage;
   }








    public async close():Promise<void> {
        try {
            //const pti = require('puppeteer-to-instanbul');
            await this.page.waitFor(10);
            return await this.browser.close();
        }
        catch (Exception) {
            throw new Error(Exception.toString());
        }
    }
}

export { PageHelper };
