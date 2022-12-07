const express = require('express');
const posts = require("../app/controllers/post.controller");
 
const router = express.Router();
 
router.get('/', posts.findAll);

router.get('/:postId', posts.findOne);

router.post('/', posts.create);

router.patch('/:postId', posts.update);

router.delete('/:postId', posts.delete);

router.delete('/', posts.deleteAll);
 
module.exports = router;