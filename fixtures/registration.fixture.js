const assert = require("assert");
const dayjs = require("dayjs");
const LoginFixture = require("./login.fixture");
/**
 * TODO: add description of registration + email check flow (use pre-created gmail and add unix timestamp)
 * @returns 
 */
const _testEmailInbox = () => `ourtestgmailinbox+${dayjs(new Date).unix()}@gmail.com`;

class RegistrationFixture extends LoginFixture {
    constructor(browser){
        super(browser);
    }

    async setup(){
        let result = await super.setup();
        let { loginPage } = result;
        let tempEmail = _testEmailInbox();

        loginPage._page.on("request", (req) => {
            if(req.url().endsWith("/auth/login")){
              assert.equal(req.postDataJSON().login, tempEmail);
            }
        });
        await loginPage._page.goto('https://app.onesoil.ai');
        await loginPage.SignUpToogle.click();

        return {
            ...result, tempEmail
        };
    }
}
module.exports = RegistrationFixture;