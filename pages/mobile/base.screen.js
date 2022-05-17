class BaseScreen{
    constructor(driver){
        /**
         * @type {WebdriverIO.Browser}
         */
        this._driver = driver;
    }

    /**
     * 
     * @param {import("webdriverio").Selector} selector 
     */
    async elem(selector){
        return await this._driver.$(selector);
    }
}
module.exports = BaseScreen;