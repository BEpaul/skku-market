const express = require("express");
const userposts = require("../app/controllers/userPosts.controller");

const router = express.Router();

router.get("/post/:post_id", userposts.findOne);

module.exports = router;
