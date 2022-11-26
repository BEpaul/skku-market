const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

// app.set("views", "./views");
// app.set("view engines", "ejs");

// app.use(express.static("views"));
// app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

app.get("/", (req, res) => {
  console.log("req:", req);
  res.send("Hello, World!");
  //   res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.send("this is login~~");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
