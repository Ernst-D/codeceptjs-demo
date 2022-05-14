const BasePage = require("./base.page");

class LoginPage extends BasePage {
    /**
     * 
     * @param {import("playwright").Page} page 
     */
    constructor(page){
        super(page);
    }

    get SigninBtn(){
        return this._page.locator('[type="submit"]');
    }

    get EmailField(){
        return this._page.locator('[name="forms.login.login"]');
    }

    get PasswordField(){
        return this._page.locator('[name="forms.login.password"]');
    }
}
module.exports = LoginPage;