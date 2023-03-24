interface LandingPage {
    url: string;
    usernameTextBox: string;
    passwordTextBox: string;
    signinButton: string;
 
}

const landingPage: LandingPage = {
    url: 'https://dev-inavisphere.chrobinson.com/GlobalForwarding/Admin/v1/#/',
    usernameTextBox: 'input#okta-signin-username',
    passwordTextBox: 'input#okta-signin-password',
    signinButton: 'input#okta-signin-submit'

};

export {landingPage};