const express = require('express');
const comments = require("../app/controllers/comment.controller");
 
const router = express.Router();
 
router.get('/', comments.findAll);

router.get('/:commentId', comments.findOne);

router.post('/', comments.create);

router.patch('/:commentId', comments.update);

router.delete('/:commentId', comments.delete);

router.delete('/', comments.deleteAll);
 
module.exports = router;