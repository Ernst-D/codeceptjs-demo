const WelcomeScreen = require("../pages/mobile/welcome.screen");

class MobileFixture{
    constructor(driver){
        /**
         * @type {WebdriverIO.Browser}
         */
        this._driver = driver;
    }
    
    setup(){

        let welcomeScreen = new WelcomeScreen(this._driver);

        return {
            welcomeScreen
        };
    }
}
module.exports = MobileFixture;