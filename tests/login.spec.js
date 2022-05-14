const LoginFixture = require("../fixtures/login.fixture");

Feature('User authentication');

Scenario('User logs in with existing creds', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new LoginFixture(browser);
    let { loginPage, dashboardPage } = await fixture.setup();

    await loginPage._page.goto('https://app.onesoil.ai');
    await loginPage.EmailField.click();
    await loginPage.EmailField.fill('ananas_parker@hotmail.com');
    await loginPage.PasswordField.click();
    await loginPage.PasswordField.fill('testTask132');
    await loginPage.SigninBtn.click();
    await dashboardPage.MainContainer.waitFor({ state:"visible" });
    
    await dashboardPage._page.pause();
  });
});