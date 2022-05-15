const AddFieldFixture = require("./add_field.fixture");

class DeleteFieldFixture extends AddFieldFixture {
    constructor(browser){
        super(browser);
    }

    async setup(){
        let res = await super.setup();
        await res.dashboardActions.addField({ crop:"barley" });
        return res;
    }
}
module.exports = DeleteFieldFixture;