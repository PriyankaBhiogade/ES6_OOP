const model = require('../app/models/userModel');

class Service {
    constructor() { }
    async registerServices(req) {

        let stored = await model.registerModel(req)
        return stored;
    }
}
module.exports = new Service();