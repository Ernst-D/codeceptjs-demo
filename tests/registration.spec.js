const RegistrationFixture = require("../fixtures/registration.fixture");

Feature('User registration');

Scenario('User creates account using test email', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new RegistrationFixture(browser);
    let { loginPage, tempEmail, dashboardPage } = await fixture.setup();

    await loginPage.EmailField.fill(tempEmail);
    await loginPage.PasswordField.fill("tempPass132");
    await loginPage._page.locator('[class="form-checkbox__el"]').check();
    await loginPage.SigninBtn.click();
    await dashboardPage.MainContainer.waitFor({ state:"visible" });
    
    await loginPage._page.pause();
  });
});