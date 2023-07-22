const express = require('express');
const UserController = require('../app/controllers/UserController');
const router = express.Router();

router.get('/edit', UserController.edit);
router.put('/edit', UserController.update);

module.exports = router