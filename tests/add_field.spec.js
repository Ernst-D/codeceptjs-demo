const assert = require("assert");
const AddFieldFixture = require("../fixtures/add_field.fixture");

Feature('Field selection');

Scenario('User adds field from map', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new AddFieldFixture(browser);
    let { dashboardPage, dashboardActions } = await fixture.setup();

    await dashboardPage._page.pause();

    await dashboardActions.addField({ crop:"barley" });
    let isFieldIsHighlightedOnMap = await dashboardActions.isFieldIsHighlightedOnMap();
    let isFieldAddedToDashboard =  await dashboardActions.isFieldAddedToDashboard();
    assert.equal(isFieldIsHighlightedOnMap, true);
    assert.equal(isFieldAddedToDashboard, true);

    await fixture.cleanup();
  
    await dashboardPage._page.pause();
  });
});