const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("req:", req);
  res.json({ message: "Hello World!" });
});

router.get("/login", (req, res) => {
  res.send("this is login~~");
});

module.exports = router;
