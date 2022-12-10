const express = require("express");
const userposts = require("../app/controllers/userPosts.controller");

const router = express.Router();

router.get("/post/:post_id", userposts.getPostLists);
router.get("/user/:user_id", userposts.getUserLists);

module.exports = router;
