const DeleteFieldFixture = require("../fixtures/delete_field.fixture");

Feature('Field removal');

Scenario('User delete exisiting field', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new DeleteFieldFixture(browser);
    let { dashboardPage, dashboardActions } = await fixture.setup();

    await dashboardPage._page.pause();

    await dashboardActions.deleteField();
  
    await dashboardPage._page.pause();
  });
});