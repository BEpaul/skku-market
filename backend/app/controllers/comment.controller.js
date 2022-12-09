const Comment = require("../models/comments.model");

// 새 객체 생성
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const newComment = new Comment({
        post_id: req.body.post_id,
        user_id_from: req.body.user_id_from,
        user_id_to: req.body.user_id_to,
        comment: req.body.comment,
        
    });
    //user existence test/////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

    // 데이터베이스에 저장
    Comment.create(newComment, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the comment."
            });
        }
        else{
            res.status(201).send({message: "comment created", ...data})
        }
    })
};

// 전체 조회 
exports.findAll = (req,res)=>{
    Comment.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving comments."
          });
        else res.send(data);
      });
};

// id로 조회
exports.findOne = (req,res)=>{
    Comment.findByID(req.params.commentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found comment with id ${req.params.commentId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving comment with id " + req.params.commentId
            });
          }
        } else res.send(data);
      });
};

// id로 갱신
exports.update = (req,res)=>{
    // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Comment.updateById(
    req.params.commentId,
    new Post(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found post with id ${req.params.commentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating post with id " + req.params.commentId
          });
        }
      } else res.send(data);
    }
  );
};

// id로 삭제
exports.delete = (req,res)=>{
    Comment.remove(req.params.commentId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found post with id ${req.params.commentId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete post with id " + req.params.commentId
            });
          }
        } else res.send({ message: `the comment was deleted successfully!` });
      });
};

// 전체 삭제
exports.deleteAll = (req,res)=>{
    Comment.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all comments."
          });
        else res.send({ message: `All comments were deleted successfully!` });
      });
};
 

 

