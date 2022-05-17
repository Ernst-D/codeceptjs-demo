const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'tests/*.spec.js',
  output: 'artifacts',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      /**
       * @see https://playwright.dev/docs/api/class-browsertype#browser-type-launch 
       * basically, when you use browserType as a key here - values will be options for this method
       */
      // chromium:{
      //   channel:"msedge"
      // },
      // webkit:{
      //   slowMo:3000
      // }
    },
    Appium: {
      app: "./utils/dev-app.apk",
      platform: "Android",
      host:"localhost",
      port:4723,
      desiredCapabilities: {
          "platformName": "Android",
          "deviceName": "Pixel_4a",
          "platformVersion": "11.0",
          "automationName": "UiAutomator2",
          // "appium:app": "C:\\Users\\ernst\\dev-app.apk",
          "autoGrantPermissions": true
      }
    }
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: "./artifacts/mochaReport"
    }
  },
  name: 'test-task-codecept'
};