const express = require("express");
const users = require("../app/controllers/user.controller");

const router = express.Router();

router.get("/:user_id", users.findOne);

router.post("/", users.create);

module.exports = router;
