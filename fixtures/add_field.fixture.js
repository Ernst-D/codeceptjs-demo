const LoginActions = require("../actions/login.actions");
const LoginFixture = require("./login.fixture");

class AddFieldFixture extends LoginFixture {
    constructor(browser){
        super(browser);
    }

    async setup(){
        let result = await super.setup();
        let { loginPage, dashboardPage } = result;
        let loginActions = new LoginActions(loginPage);

        await loginActions.navigate();
        await loginActions.login();
        await dashboardPage._page.goto("https://app.onesoil.ai/@49.2302,17.6492,16z/fields");
        await dashboardPage.MainContainer.waitFor({ state:"visible" });

        return {
            ...result
        };
    }
}
module.exports = AddFieldFixture;