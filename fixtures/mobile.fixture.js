const LoginScreen = require("../pages/mobile/login.screen");
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
        let loginScreen = new LoginScreen(this._driver);

        return {
            welcomeScreen, loginScreen
        };
    }
}
module.exports = MobileFixture;