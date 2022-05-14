class TestFixture {
    constructor(browser){
      /**
       * @type {import("playwright").Browser}
       */
      this._browser = browser; 
    }
  
    /**
     * 
     * @param {import("playwright").BrowserContextOptions} options 
     * @returns {Promise<import("playwright").BrowserContext>}
     */
    async setupContext(options){
      return await this._browser.newContext(options);
    }
}
module.exports = TestFixture;