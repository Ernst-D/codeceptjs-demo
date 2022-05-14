class BasePage {
    /**
     * 
     * @param {import("playwright").Page} page 
     */
     constructor(page){
        this._page = page;
    }
}
module.exports = BasePage;