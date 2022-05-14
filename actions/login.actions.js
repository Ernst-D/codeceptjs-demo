const LoginPage = require("../pages/login.page");

class LoginActions{
    /**
     * 
     * @param {LoginPage} loginPage 
     */
    constructor(loginPage){
        this._loginPage = loginPage;
    }

    async navigate(){
        await this._loginPage._page.goto("https://app.onesoil.ai");
    }

    async login(){
        await this._loginPage.EmailField.click();
        await this._loginPage.EmailField.fill('ananas_parker@hotmail.com');
        await this._loginPage.PasswordField.click();
        await this._loginPage.PasswordField.fill('testTask132');
        await Promise.all([
            this._loginPage.SigninBtn.click(),
            this._loginPage._page
            .waitForResponse(response => response.url().endsWith("/auth/login") && response.status() === 200)
        ]);
    }
}
module.exports = LoginActions;