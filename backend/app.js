const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/user.routes");
const postsRouter = require("./routes/post.routes");
const commentsRouter = require("./routes/comment.routes");
const userPostsRouter = require("./routes/userpost.routes");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.use("/userposts", userPostsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
