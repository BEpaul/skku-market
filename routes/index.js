"use strict";

const express = require("express");
const router = express.Router();

app.get("/", (req, res) => {
  console.log("req:", req);
  res.send("Hello, World!");
  //   res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.send("this is login~~");
});

module.exports = router;
