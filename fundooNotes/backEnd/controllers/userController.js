const service = require('../service/userService');

class Controller {
    constructor() { }
    async registerContoller(req, res) {
        console.log("request back",req.body);
        let result = await service.registerServices(req.body);
        res.send(result);
    }
}
module.exports = new Controller();