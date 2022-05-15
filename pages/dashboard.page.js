const BasePage = require("./base.page");

const _capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

class DashboardPage extends BasePage {
    /**
     * 
     * @param {import("playwright").Page} page 
     */
     constructor(page){
        super(page);
    }
    
    get SaveBtn(){
        return this._page.locator('text=Save');
    }

    get MainContainer(){
        return this._page.locator('[class="main-container"]');
    }

    get SideNavigation(){
        return this._page.locator('[class="side-navigation"]');
    }

    get SideSelectOnMapBtn(){
        return this._page.locator('text=Select on map');
    }

    get SideSaveBtn(){
        return this._page.locator('text=Save');
    }

    get CropMenu(){
        return this._page.locator('[aria-label="open menu"]');
    }

    get CropMenuInput(){
        return this._page.locator('#downshift-1-input');
    }

    getSuggestedCrop(item){
        return this._page
        .locator(`div[role="listbox"] div:has-text("${_capitalizeString(item)}")`).first();
    }

    get MapHighlightedField(){
        return this._page.locator('[class="leaflet-interactive"][fill="transparent"]');
    }

    get MapAvailableFields(){
        return this._page.locator('[class="leaflet-interactive"]:not([d*="M0 0"])');
    }

    get SideSelectedFields(){
        return this._page.locator('[class="soil-fields-list__list-item"]');
    }

    get SideFieldActions(){
        return this._page.locator('[aria-label="grid"] [aria-label="open menu"]');
    }
    
    get SideDeleteFieldBtn(){
        return this._page.locator('div[role="listbox"] div:has-text("Delete")');
    }

    get NotificationBar(){
        return this._page.locator('[class="main-container-notification-actions"] ');
    }

}
module.exports = DashboardPage;