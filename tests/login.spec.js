// TODO: add linter !!!
const LoginPage = require("../pages/login.page");

Feature('User authentication');

Scenario('User logs in with existing creds', ({ I }) => {
    let loginPage;
  I.usePlaywrightTo('emulate offline mode', async ({ browser, browserContext, page }) => {
    // use browser, page, context objects inside this function
    /**
     * @type {import("playwright").Browser}
     */
    let _browser = browser;

    /**
     * @type {import("playwright-core").BrowserContext}
     */
    let _context = await _browser.newContext(
        {
            permissions: ['geolocation'],
        }
    );

    loginPage = new LoginPage(await _context.newPage());
    let { _page } = loginPage;

    await loginPage._page.goto('https://app.onesoil.ai');

    await loginPage.emailField.click();

    await loginPage.emailField.fill('ananas_parker@hotmail.com');

    await loginPage.passwordField.click();

    await loginPage.passwordField.fill('testTask132');
    await loginPage.signinBtn.click();

    await _page.locator('[class="main-container"]')
    .waitFor({state:"visible"});
    
    await _page.pause();

    await _context.close();
    await _browser.close();
  });
});