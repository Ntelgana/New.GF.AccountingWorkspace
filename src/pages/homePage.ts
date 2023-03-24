interface HomePage {
    hamburgerMenuButton: string;
    homeButton: string;
    chargeCodeButton: string;
    globalHomeButton: string;
    categoryHomeButton: string;
    countryHomeButton: string;
    customerHomeButton: string;
    hometext: string;

 
}

const homePage: HomePage = {
    hamburgerMenuButton: 'div.menu-hamburger-btn',
    homeButton: '.main-item-container.main-item',
    chargeCodeButton: "[data-testid='main-menu-item-with-sub-items'] .main-item",
    categoryHomeButton: "[href='\#\/ChargeCode\/Category']",
    globalHomeButton: "[href='\#\/ChargeCode\/Global']", 
    countryHomeButton: "[href='\#\/ChargeCode\/Country']",
    customerHomeButton: "[href='\#\/ChargeCode\/Customer']",
    hometext: ".home"

};

export {homePage};