const User = require("../models/users.model");
const UserPost = require("../models/userPosts.model");

// create new user
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const newUser = new User({
    user_id: req.body.user_id,
    user_name: req.body.user_name,
    user_nickname: req.body.user_nickname,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
  });

  // save to db
  User.create(newUser, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the user data.",
      });
    } else {
      res.status(201).send({ message: "users created", ...data });
    }
  });
};

// get by id
exports.findOne = (req, res) => {
  User.findByID(parseInt(req.params.user_id), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with id ${req.params.user_id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with id " + req.params.user_id,
        });
      }
    } else res.send(data);
  });
};

// get by email + login process
exports.findEmail = (req, res) => {
  User.findByEmail(req.body.user_email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with email ${req.body.user_email}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with email " + req.body.user_email,
        });
      }
    } else {
      if (req.body.user_password === data.user_password) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Not found user with email ${req.body.user_email}.`,
        });
      }
    }
  });
};

// get by nickname
exports.findNickname = (req, res) => {
  User.findByNickname(req.params.user_nickname, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with nickname ${req.params.user_nickname}.`,
        });
      } else {
        res.status(500).send({
          message:
            "Error retrieving user with nickname " + req.params.user_nickname,
        });
      }
    } else res.send(data);
  });
};
