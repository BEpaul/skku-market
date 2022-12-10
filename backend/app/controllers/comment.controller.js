const Comment = require("../models/comments.model");
const User = require("../models/users.model");

// 새 객체 생성
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const newComment = new Comment({
    post_id: req.body.post_id,
    user_id_from: req.body.user_id_from,
    user_id_to: req.body.user_id_to,
    comment: req.body.comment,
  });
  //user existence test
  //const from_user = User.findByID()
  //const to_user = User.findByID()

  // 데이터베이스에 저장
  Comment.create(newComment, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the comment.",
      });
    } else {
      res.status(201).send({ message: "comment created", ...data });
    }
  });
};

// 전체 조회
exports.findComments = (req, res) => {
  const user_id = req.query.user_id;
  const post_id = req.query.post_id;

  if (user_id) {
    Comment.findByUserId(user_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(200).send({
            message: `Not found comment with id ${user_id}}.`,
            result: []
          });
        } else {
          res.status(500).send({
            message: "Error updating post with id " + req.params.commentId,
          });;
        }
      }
      else {
        const comments_user_id = data;

        console.log(comments_user_id)
        if (comments_user_id.length < 1) {
          console.log("sending undefined res...")
          res.send({result:[]});
        }
        else {
          console.log("sending not empty res...")
          res.send({result: comments_user_id});
        }
      }
    });

  }
  else if (post_id) {
    //console.log("POST POST POST!")
    // const comments_post_id = this.getByPostId(post_id);
    Comment.findByPostId(post_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(200).send({
            message: `Not found comment with id ${post_id}}.`,
            result: []
          });
        } else {
          res.status(500).send({
            message: "Error updating post with id " + req.params.commentId,
          });;
        }
      }
      else {
        const comments_post_id = data;

        console.log(comments_post_id)
        if (comments_post_id.length < 1) {
          console.log("sending undefined res...")
          res.send({result:[]});
        }
        else {
          console.log("sending not empty res...")
          res.send({result:comments_post_id});
        }
      }
    });

  } else {
    Comment.getAll((err, data) => {
      if (err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving comments.",
        });
      }
      else res.send({result: data});
    });
  }
};




// id로 조회
exports.findOne = (req, res) => {
  Comment.findByID(req.params.commentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found comment with id ${req.params.commentId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving comment with id " + req.params.commentId,
        });
      }
    } else res.send(data);
  });
};


// id로 갱신
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Comment.updateById(req.params.commentId, new Post(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.commentId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating post with id " + req.params.commentId,
        });
      }
    } else res.send(data);
  });
};

// id로 삭제
exports.delete = (req, res) => {
  Comment.remove(req.params.commentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found post with id ${req.params.commentId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete post with id " + req.params.commentId,
        });
      }
    } else res.send({ message: `the comment was deleted successfully!` });
  });
};

// 전체 삭제
exports.deleteAll = (req, res) => {
  Comment.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all comments.",
      });
    else res.send({ message: `All comments were deleted successfully!` });
  });
};
