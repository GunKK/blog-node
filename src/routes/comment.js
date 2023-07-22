const express = require('express');
const CommentController = require('../app/controllers/CommentController');
const router = express.Router();

router.post('/store', CommentController.store)
router.put('/:id', CommentController.update)
router.delete('/:id', CommentController.destroy)

module.exports = router;