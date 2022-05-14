const AddFieldFixture = require("../fixtures/add_field.fixture");

Feature('Field selection');

Scenario('User adds field from map', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new AddFieldFixture(browser);
    let { loginPage, dashboardPage } = await fixture.setup();
   
    await dashboardPage._page.pause();
  });
});