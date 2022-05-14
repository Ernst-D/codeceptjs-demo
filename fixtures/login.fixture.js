const DashboardPage = require("../pages/dashboard.page");
const LoginPage = require("../pages/login.page");
const TestFixture = require("./base.fixture");

const _loginContextOptions = {
    permissions: [ 'geolocation' ]
};

class LoginFixture extends TestFixture {
    constructor(browser){
        super(browser);
        this.contextOptions = _loginContextOptions;
    }
    
    async setup(){
        let _context = await this.setupContext(
            this.contextOptions
        );
        this._page = await _context.newPage();
    
        let loginPage = new LoginPage(this._page);
        let dashboardPage = new DashboardPage(this._page);

        return {
            _context,
            loginPage, dashboardPage
        };
    }
}
module.exports = LoginFixture;