const BasePage = require("./base.page");

class DashboardPage extends BasePage {
    /**
     * 
     * @param {import("playwright").Page} page 
     */
     constructor(page){
        super(page);
    }
    
    get MainContainer(){
        return this._page.locator('[class="main-container"]');
    }

    get SideNavigation(){
        return this._page.locator('[class="side-navigation"]');
    }


}
module.exports = DashboardPage;