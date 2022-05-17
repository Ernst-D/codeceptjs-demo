const { textViewSelector } = require("../../utils/mobile.utils");
const BaseScreen = require("./base.screen");

class WelcomeScreen extends BaseScreen{
    constructor(driver){
        super(driver);
    }

    get SignInTextView(){
        return this.elem(textViewSelector("I've already signed up. Sign in."));
    }
}
module.exports = WelcomeScreen;