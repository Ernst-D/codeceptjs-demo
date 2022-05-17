const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: 'tests/mobile/*.spec.js',
  output: 'artifacts',
  timeout:process.env._DEBUG == "1" ? 6000 : 600,
  helpers: {
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