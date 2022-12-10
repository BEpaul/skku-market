const User = require("../models/users.model");
const UserPost = require("../models/userPosts.model");

// 새 객체 생성
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

  // 데이터베이스에 저장
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

// id로 조회
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

// email로 조회
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

// nickname으로 조회
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

// exports.findNickname = (req, res) => {
//   console.log(req);
//   User.findByNickname(req.body.user_nickname, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found user with email ${req.body.user_nickname}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving user with email " + req.body.user_nickname,
//         });
//       }
//     } else {
//       res.send(data);
//     }
//   });
// };

// id로 갱신
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//   }

//   Comment.updateById(req.params.commentId, new Post(req.body), (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found post with id ${req.params.commentId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error updating post with id " + req.params.commentId,
//         });
//       }
//     } else res.send(data);
//   });
// };

// // id로 삭제
// exports.delete = (req, res) => {
//   Comment.remove(req.params.commentId, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found post with id ${req.params.commentId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete post with id " + req.params.commentId,
//         });
//       }
//     } else res.send({ message: `the comment was deleted successfully!` });
//   });
// };

// // 전체 삭제
// exports.deleteAll = (req, res) => {
//   Comment.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all comments.",
//       });
//     else res.send({ message: `All comments were deleted successfully!` });
//   });
// };
