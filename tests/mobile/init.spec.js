const MobileFixture = require("../../fixtures/mobile.fixture");
const { _waitForDisplayed, textViewSelector } = require("../../utils/mobile.utils");

Feature('Mobile');

Scenario('Mobile test', ({ I }) => {
    I.seeAppIsInstalled("io.onesoil.scouting.staging");
    I.useWebDriverTo('To use WebdriverIO API', async ({ browser }) => {
        /**
         * @type {WebdriverIO.Browser}
         */
        let driver = browser;
        const elem = async (selector) => await driver.$(selector); 
        let { welcomeScreen, loginScreen } = new MobileFixture(driver).setup();

        const button = await welcomeScreen.SignInTextView;
        await _waitForDisplayed(button);
        await button.click();
        await _waitForDisplayed(loginScreen.EmailInput);
        await loginScreen.EmailInput.setValue("ananas_parker@hotmail.com");
        await loginScreen.PasswordInput.setValue("testTask132");
        
        await loginScreen.PasswordInput.click();
        await loginScreen.PasswordInput.pressKeyCode(66);
        _waitForDisplayed(await elem(textViewSelector("NEXT")));
        await (await elem(textViewSelector("NEXT"))).click();
     });
});