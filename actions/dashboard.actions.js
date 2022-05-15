const DashboardPage = require("../pages/dashboard.page");

class DashboardActions{
    /**
     * 
     * @param {DashboardPage} dashboardPage 
     */
    constructor(dashboardPage){
        this._pageObject = dashboardPage;
        this._page = dashboardPage._page;
    }

    /**
     * 
     * @param {number} isRandom 
     */
    async selectFieldFromMap(random = null){
        let availableFields = this._pageObject.MapAvailableFields;
        let randomField = Math.floor(Math.random() * await availableFields.count());
        
        random == null 
        ? await availableFields.nth(randomField).click({ force:true })
        : await availableFields.nth(random).click({ force:true });
    }

    async addField(fieldParams){
        /**
         * fieldParams.crop = "barley"
         */

        await this._pageObject.SideSelectOnMapBtn.click();
        await this.selectFieldFromMap();

        await this._pageObject.CropMenu.click();
        await this._pageObject.CropMenuInput.fill(fieldParams.crop);
        await this._pageObject.getSuggestedCrop(fieldParams.crop).click();
        await this._pageObject.SaveBtn.click();
        await this._pageObject.MapHighlightedField.waitFor({ state:"visible", timeout:60000 });                
    }

    async deleteField(){
        await this._pageObject.SideSelectedFields.nth(0).waitFor({ state:"visible" });
        await this._pageObject.SideFieldActions.nth(0).hover({ force:true });
        await this._pageObject.SideFieldActions.nth(0).click();
        await this._pageObject.SideDeleteFieldBtn.nth(0).click();
    }

}
module.exports = DashboardActions;