Feature('Mobile');

Scenario('Mobile test', ({ I }) => {
    I.seeAppIsInstalled("io.onesoil.scouting.staging");
    I.useWebDriverTo('open multiple windows', async ({ browser }) => {
        // create new window
        console.log(await browser.getContexts());
     });
});