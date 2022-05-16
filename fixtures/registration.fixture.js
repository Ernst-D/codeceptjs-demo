const assert = require("assert");
const dayjs = require("dayjs");
const LoginFixture = require("./login.fixture");

/**
 * NOTE: the point of testing registration with welcome email verification
 * is that we either use mail server (a bit complex solution)
 * or creating the testing Gmail inbox, because gmail has a small hack. 
 * To avoid "This email is already registered" error - we can append a small text to gmail name (name+some_text@gmail.com)
 * and therefore we can be sure that we won't get the error, but the message will be send at the same inbox.
 * For example, we can add unix timestamp and it also will tell us exactly what message and when it was send.
 * I used gmail tester for such purposes. The only "complex" thing - is to get token from Google API (it's a bit untrivial)
 * @see https://www.npmjs.com/package/gmail-tester
 */

/**
 * @returns {string} test gmail inbox with appended timestamp
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