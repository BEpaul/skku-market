// ref: https://youngjinmo.github.io/2021/08/express-crud-rest-api/

const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  res.json();
});

module.exports = router;
