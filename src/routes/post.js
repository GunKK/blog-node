const express = require('express');
const PostController = require('../app/controllers/PostController');
const router = express.Router();

router.get('/create', PostController.create);
router.post('/store', PostController.store);
router.get('/:id', PostController.show);
router.get('/:id/edit', PostController.edit);
router.put('/:id', PostController.update)
router.delete('/:id', PostController.destroy)

module.exports = router;
