const textViewSelector = (matchedText) => `android=new UiSelector().text("${matchedText}").className("android.widget.TextView")`;
const editTextSelector = (matchedText) => `android=new UiSelector().text("${matchedText}").className("android.widget.EditText")`;
module.exports = { textViewSelector, editTextSelector };