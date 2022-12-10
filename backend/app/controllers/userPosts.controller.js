const Post = require("../models/posts.model");
const UserPost = require("../models/userPosts.model");

// 새 객체 생성
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

  // 데이터베이스에 저장
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

// 전체 조회
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

// post_id 조회
exports.findOne = (req, res) => {
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

// // id로 갱신
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//   }

//   Post.updateById(req.params.postId, new Post(req.body), (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found post with id ${req.params.postId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Error updating post with id " + req.params.postId,
//         });
//       }
//     } else res.send(data);
//   });
// };

// // id로 삭제
// exports.delete = (req, res) => {
//   Post.remove(req.params.postId, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found post with id ${req.params.postId}.`,
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete post with id " + req.params.postId,
//         });
//       }
//     } else res.send({ message: `post was deleted successfully!` });
//   });
// };

// // 전체 삭제
// exports.deleteAll = (req, res) => {
//   Post.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message: err.message || "Some error occurred while removing all post.",
//       });
//     else res.send({ message: `All post were deleted successfully!` });
//   });
// };
