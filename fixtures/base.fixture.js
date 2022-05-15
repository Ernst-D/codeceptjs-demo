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
      let _context = await this._browser.newContext(options);
      _context.setDefaultNavigationTimeout(60000);
      return _context;
    }
}
module.exports = TestFixture;