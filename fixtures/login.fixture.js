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
            _loginContextOptions
        );
        let _page = await _context.newPage();
    
        let loginPage = new LoginPage(_page);
        let dashboardPage = new DashboardPage(_page);

        return {
            loginPage, dashboardPage
        };
    }
}
module.exports = LoginFixture;