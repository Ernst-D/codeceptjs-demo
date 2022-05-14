const LoginActions = require("../actions/login.actions");
const LoginFixture = require("./login.fixture");

class AddFieldFixture extends LoginFixture {
    constructor(browser){
        super(browser);
    }

    async setup(){
        let result = await super.setup();
        let { loginPage } = result;
        let loginActions = new LoginActions(loginPage);
        
        await loginActions.navigate();
        await loginActions.login();

        return {
            ...result
        };
    }
}
module.exports = AddFieldFixture;