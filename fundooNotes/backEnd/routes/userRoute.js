
const contoller = require('../controllers/userController');

const express = require('express');
const router = express.Router();

router.post('/register', contoller.registerContoller);
module.exports = router;








