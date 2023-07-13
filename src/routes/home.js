const express = require('express');
const router = express.Router();

const HomeConTroller = require('../app/controllers/HomeController');
const RegisterController = require('../app/controllers/RegisterController');
const SessionController = require('../app/controllers/SessionController');

router.get('/', HomeConTroller.index);
router.get('/contact', HomeConTroller.contact);
router.get('/signup', RegisterController.create);
router.post('/signup', RegisterController.store);
router.get('/login', SessionController.create);
router.post('/login', SessionController.store);

module.exports = router;
