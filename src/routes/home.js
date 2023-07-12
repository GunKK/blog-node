const express = require('express');
const router = express.Router();

const HomeConTroller = require('../app/controllers/HomeController');

router.get('/home', HomeConTroller.index);
router.get('/test', HomeConTroller.test);

module.exports = router;
