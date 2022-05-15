const AddFieldFixture = require("../fixtures/add_field.fixture");

Feature('Field selection');

Scenario('User adds field from map', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new AddFieldFixture(browser);
    let { dashboardPage, dashboardActions } = await fixture.setup();

    await dashboardActions.addField({ crop:"barley" });
    // todo below
    // await dashboardActions.checkFieldAddedToDashboard();
    // await dashboardActions.checkFieldIsHighlightedOnMap();
  
  await dashboardPage._page.pause();
  });
});