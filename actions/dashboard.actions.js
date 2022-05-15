const DashboardPage = require("../pages/dashboard.page");

class DashboardActions{
    /**
     * 
     * @param {DashboardPage} dashboardPage 
     */
    constructor(dashboardPage){
        this._pageObj = dashboardPage;
    }

    async addField(fieldParams){
        /**
         * fieldParams.crop = "barley"
         */

        let { _page } = this._pageObj;
        await _page.locator('text=Select on map').click();
        await _page.pause();
        let availableFields = _page.locator('[class="leaflet-interactive"]:not([d*="M0 0"])');

        await availableFields.nth(
            Math.floor(Math.random() * await availableFields.count()))
        .click({ force:true });

        await _page.locator('[aria-label="open menu"]').click();
        await _page.locator('#downshift-1-input').fill(fieldParams.crop);
        await _page.locator('div[role="listbox"] div:has-text("Barley, spring")').click();
        await _page.locator('text=Save').click();
        await _page.pause();
        await _page.locator('[class="soil-fields-list__list-item"]').first().waitFor({ state:"visible" });

        await _page.locator('[class="leaflet-interactive"][fill="transparent"]')
        .waitFor({ state:"visible", timeout:60000 });
        await _page.locator('[aria-label="grid"] [aria-label="open menu"]').hover({ force:true });
        await _page.locator('[aria-label="grid"] [aria-label="open menu"]').click();
        await _page.locator('div[role="listbox"] div:has-text("Delete")').click();
    }

}
module.exports = DashboardActions;