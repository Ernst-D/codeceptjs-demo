class LoginPage {
    /**
     * 
     * @param {import("playwright").Page} page 
     */
    constructor(page){
        this._page = page;
    }

    get signinBtn(){
        return this._page.locator('[type="submit"]');
    }

    get emailField(){
        return this._page.locator('[name="forms.login.login"]');
    }

    get passwordField(){
        return this._page.locator('[name="forms.login.password"]');
    }
}
module.exports = LoginPage;