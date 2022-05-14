const AddFieldFixture = require("../fixtures/add_field.fixture");

Feature('Field selection');

Scenario('User adds field from map', ({ I }) => {
  I.usePlaywrightTo('work with PW API', async ({ browser }) => {
    let fixture = new AddFieldFixture(browser);
    let { dashboardPage } = await fixture.setup();
    let { _page } = dashboardPage;
    
    await _page.locator('text=Select on map').click();
  // assert.equal(_page.url(), 'https://app.onesoil.ai/@49.2302,17.6492,16z/fields/add/select');

  // Click .leaflet-pane.leaflet-pane-4-pane .leaflet-zoom-animated g path:nth-child(12)
  await _page.locator('.leaflet-pane.leaflet-pane-4-pane .leaflet-zoom-animated g path:nth-child(12)').click();

  // Click [aria-label="open menu"]
  await _page.locator('[aria-label="open menu"]').click();

  // Fill #downshift-1-input
  await _page.locator('#downshift-1-input').fill('barley');

  // Click div[role="listbox"] div:has-text("Barley, spring")
  await _page.locator('div[role="listbox"] div:has-text("Barley, spring")').click();

  // Click text=Save
  await Promise.all([
    _page.waitForNavigation(/*{ url: 'https://app.onesoil.ai/@49.2298,17.6505,17z/fields/o5299678' }*/),
    _page.locator('text=Save').click()
  ]);

  // Click text=Field 1 2.4 ha
  await Promise.all([
    _page.waitForNavigation(/*{ url: 'https://app.onesoil.ai/@49.2298,17.6505,16z/fields' }*/),
    _page.locator('text=Field 1 2.4 ha').click()
  ]);

  // Click text=May 10Leaflet | Map data: Google, DigitalGlobe >> path >> nth=1
  await Promise.all([
    _page.waitForNavigation(/*{ url: 'https://app.onesoil.ai/@49.2311,17.6505,16z/fields/o5299678' }*/),
    _page.locator('text=May 10Leaflet | Map data: Google, DigitalGlobe >> path').nth(1).click()
  ]);

    await dashboardPage._page.pause();
  });
});