interface ShipmentFinEditorLandingPage {
    url: string;
    usernameTextBox: string;
    passwordTextBox: string;
    signinButton: string;
 
}

const ShipmentFinEditorLandingPage: ShipmentFinEditorLandingPage = {
    url: 'https://int-inavisphere.chrobinson.com/GlobalForwarding/FinancialEditor/v1/#/',
    usernameTextBox: 'input#okta-signin-username',
    passwordTextBox: 'input#okta-signin-password',
    signinButton: 'input#okta-signin-submit'
    
};

export {ShipmentFinEditorLandingPage};