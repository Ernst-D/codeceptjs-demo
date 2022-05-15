const DeleteFieldFixture = require("../fixtures/delete_field.fixture");
const assert = require("assert");

Feature('Field removal');

Scenario('User delete exisiting field', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new DeleteFieldFixture(browser);
    let { dashboardPage, dashboardActions } = await fixture.setup();

    await dashboardPage._page.pause();

    await dashboardActions.deleteField();
    await dashboardActions.checkNotificationBarDisplayed();
    let selectedFields = await dashboardPage.SideSelectedFields.count();
    assert.equal(selectedFields, 0);

    await dashboardPage._page.pause();
  });
});