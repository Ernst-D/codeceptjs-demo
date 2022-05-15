const DashboardPage = require("../pages/dashboard.page");
const shared = require("../utils/shared");

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
        const [ response ] = await Promise.all([
            this._page.waitForResponse(response => response.url().endsWith("/fields") && response.status() == 200),
            this._pageObject.SaveBtn.click(),
        ]);
        let resBody = (await response.json()).data;
        shared.set("field_user_season_id", resBody.rows[0].field_user_season_id);
        shared.set("id", resBody.rows[0].id);
        await this._pageObject.MapHighlightedField.waitFor({ state:"visible", timeout:60000 });
    }

    async isFieldAddedToDashboard(){
        return await this._pageObject.SideSelectedFields.nth(0).isVisible();
    }

    async isFieldIsHighlightedOnMap(){
        await this._page.waitForLoadState("networkidle", { timeout:10000 });
        let isVisible = await this._pageObject.MapHighlightedField.isVisible();
        return isVisible;
    }

    async deleteField(){
        await this._pageObject.SideSelectedFields.nth(0).waitFor({ state:"visible" });
        await this._pageObject.SideFieldActions.nth(0).hover({ force:true });
        await this._pageObject.SideFieldActions.nth(0).click();
        await Promise.all([
            this._pageObject.SideDeleteFieldBtn.nth(0).click(),
            this._page.waitForResponse(response => response.url().endsWith(`/fields/${shared.get("id")}`))
        ]);
        await this._pageObject.NotificationBar.waitFor({ state:"detached" });
    }

}
module.exports = DashboardActions;