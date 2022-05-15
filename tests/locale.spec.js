const RegistrationFixture = require("../fixtures/registration.fixture");

Feature('Localization');

Scenario('User switches between different locales', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new RegistrationFixture(browser);
    let { loginPage } = await fixture.setup();

    let locales = [ "tr", "fr", "ru" ];
    for (let index = 0; index < locales.length; index++) {
        await loginPage._page.evaluate(([ key, value ]) => {
            window.localStorage.setItem(key, value);
        }, [ 'OneSoilLocale', locales[index] ]);
        await Promise.all([
            loginPage._page.reload(),
            loginPage._page.waitForResponse(res => res.url().includes(`/${locales[index]}/v1/common/translations/lokalise`))
        ]);   
    }
    await loginPage._page.pause();
  });
});