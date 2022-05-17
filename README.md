<h1> test-task-codecept </h1>

<h2> Table of Contents </h2>

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Solution explaination](#explain)

<h2 id="about"> About </h2>

**TLDR:** CodeceptJS has a limited capabilitites of setting up complex test automation project: starting from test run hooks (which very hard to configure from configs) and helpers setup (limited set of option for Playwright Library usage, for example) and finishing page object management (why I can't just use exports and modules from version of JS that I like) with absence of headless launch from CLI (seriously?). In the end - you end up with accessing "native" automation frameworks API. If you're a beginner - Codecept on of the best way to get familiar with JS test automation, if you're experienced - please, use something more specific instead.

<h2 id="getting_started"> Getting Started </h2>

Please, use current lts node (16.*). If you don't have it - install via nvm. If you don't have nvm - install nvm.

1. `npm i appium-doctor -g`. Then run `appium-doctor` in shell - it will give some info and tips on how to setup dev environment properly for mobile tests.
2. `npm i`


<h2 id="usage"> Usage </h2>

1. Run web tests in headed mode: `npm run codeceptjs:web`. It also will run[ Playwright Inspector](https://playwright.dev/docs/inspector) so you will be able to keep an eye on test execution through it.
    
    2.1. Run web tests in headless mode: set env variable HEADLESS="true" or $env:HEADLESS=1 (depending upon what OS you use). Don't forget to close terminal / open new one if you wish to run tests in headed more once more.

2. Run mobile tests: 

    2.1. Run `npm run appium` first. Then open emulator by running `npm run android:emu`. If any of this is not working correctly: reinstall appium-server globally, run it from gui and run `appium-doctor` once more

3. Run reports: `npm run report:open`. I decided to use something light (Allure requires Java and additional setup). Plus, we have Playwright which can open static html from CLI, so everything came together in this case. 

    3.1 P.S. We weren't able to use [Playwright Traces](https://playwright.dev/docs/trace-viewer) as "reports" (we can artifact them from CI, for example, and then open in https://trace.playwright.dev/), unfortunatley, because we're using PW API directly from Codecept and, appears, there is an issue in integration.

<h2 id="explain"> Solution explaination </h2>

- What is "fixtures"? Fixtures - is a set of reusable preconditions, data and actions for every test spec. This is the kind of mix of before and after hooks, but more flexible and composable. I've made it because I want my tests to have only its test logic and no other automation stuff. Inspired by [fixtures from Playwright Test](https://playwright.dev/docs/test-fixtures). None of JS test automation frameworks has such feature.
- Why are you calling "native" test automation frameworks API, when Codecept provides wrappers around them and we can access with unified API to different frameworks? Because I don't want to be binded to the way how we must express our test logic in code and I want to use full power of every framework. I can create my own wrappers. **Framework defines shape and gives instruments, engineer creates implementation with this instruments.** Codecept trying to achieve both and deprive us of usage full spectre of test frameworks features that WebdriverIO (huge amount of test hooks and plugins, for example) and Playwright (Playwright Test, no comments) has.