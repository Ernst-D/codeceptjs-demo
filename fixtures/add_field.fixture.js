const DashboardActions = require("../actions/dashboard.actions");
const DashboardPage = require("../pages/dashboard.page");
const TestFixture = require("./base.fixture");

class AddFieldFixture extends TestFixture {
    constructor(browser){
        super(browser);
    }

    async setup(){
        let _context = await super.setupContext({ storageState:"./state.json", permissions:[ "geolocation" ] });
        this._page = await _context.newPage();
        let dashboardPage = new DashboardPage(this._page);

        await dashboardPage._page.goto("https://app.onesoil.ai/@49.2302,17.6492,16z/fields");
        await dashboardPage.MainContainer.waitFor({ state:"visible" });
        let dashboardActions = new DashboardActions(dashboardPage);
        
        return {
            dashboardPage, dashboardActions
        };
    }

    async cleanup(){

    }
}
module.exports = AddFieldFixture;