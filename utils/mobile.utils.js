const textViewSelector = (matchedText) => `android=new UiSelector().text("${matchedText}").className("android.widget.TextView")`;
const editTextSelector = (matchedText) => `android=new UiSelector().text("${matchedText}").className("android.widget.EditText")`;

/**
 * @param {WebdriverIO.Element | Promise<WebdriverIO.Element>} elem 
 */
const _waitForDisplayed = async (elem) => await (await elem).waitForDisplayed({ timeout:60000 });

module.exports = { textViewSelector, editTextSelector, _waitForDisplayed };