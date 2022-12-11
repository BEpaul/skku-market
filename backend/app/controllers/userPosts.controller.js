const Post = require("../models/posts.model");
const UserPost = require("../models/userPosts.model");

// create new userpost
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const userPost = new UserPost({
    user_id: req.body.user_id,
    post_id: req.body.post_id,
  });

  // save to db
  UserPost.create(userPost, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the userPost.",
      });
    } else {
      res.status(201).send({ message: "userPost created", ...data });
      post = data;
    }
  });
};

// get all
exports.findAll = (req, res) => {
  UserPost.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving UserPost.",
      });
    else res.send(data);
  });
};

// get by post_id
exports.getPostLists = (req, res) => {
  UserPost.findByPostId(parseInt(req.params.post_id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.post_id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving post with id " + req.params.post_id,
        });
      }
    } else res.send(data);
  });
};

// get by user_id
exports.getUserLists = (req, res) => {
  UserPost.findByUserId(parseInt(req.params.user_id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.user_id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving post with id " + req.params.user_id,
        });
      }
    } else res.send(data);
  });
};
