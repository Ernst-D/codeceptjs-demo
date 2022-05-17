const BaseScreen = require("./base.screen");

class LoginScreen extends BaseScreen {
    constructor(driver){
        super(driver);
    }

    get EmailInput(){
        return this._driver.$$('android.widget.EditText')[0];
    }

    get PasswordInput(){
        return this._driver.$$('android.widget.EditText')[1];
    }

}
module.exports = LoginScreen;