Feature('Mobile');

Scenario('Mobile test', ({ I }) => {
    I.seeAppIsInstalled("io.onesoil.scouting.staging");
    I.useWebDriverTo('To use WebdriverIO API', async ({ browser }) => {
        // create new window
        /**
         * @type {WebdriverIO.Browser}
         */
        let driver = browser;
        const elem = async (selector) => await driver.$(selector); 
        const textViewSelector = (matchedText) => `android=new UiSelector().text("${matchedText}").className("android.widget.TextView")`;
        const editTextSelector = (matchedText) => `android=new UiSelector().text("${matchedText}").className("android.widget.EditText")`;
        const waitForDisplayed = async (elem) => await (await elem).waitForDisplayed({ timeout:60000 });

        const button = await elem(textViewSelector("I've already signed up. Sign in."));
        await waitForDisplayed(button);
        await button.click();
        await waitForDisplayed(await elem(editTextSelector("Enter e-mail address")));
        await (await elem(editTextSelector("Enter e-mail address"))).setValue("ananas_parker@hotmail.com");
        await (await elem(editTextSelector("Enter password"))).setValue("testTask132");
        
        await (await driver.$$('android.widget.EditText')).pop().click();
        await (await driver.$$('android.widget.EditText')).pop().pressKeyCode(66);


        await driver.pause(1000);
     });
});