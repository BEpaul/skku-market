const Post = require("../models/posts.model");
const UserPost = require("../models/userPosts.model");

// 새 객체 생성
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const post = new Post({
        title: req.body.title,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
    });

    const posting_user_id = req.body.user_id;
    //user existence test////////////////////////////////////////////////////
    ///////////////////////////////////////

    // 데이터베이스에 저장
    Post.create(post, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating th Customer."
            });
        }
        else{
            const created_post = data;
            

            //userPost update
            const userPost = new UserPost({
              user_id: posting_user_id,
              post_id: created_post.id
            })
            UserPost.create(userPost, (err, data) =>{
              if(err){
                  res.status(500).send({
                      message:
                      err.message || "Some error occured while creating the userPost."
                  });
              }
              else{
                  res.status(201).send({message: "post created, userPost created", ...created_post});
              }
            })
        }
    })

    

};

// 전체 조회 
exports.findAll = (req,res)=>{
    Post.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving posts."
          });
        else res.send(data);
      });
};

// id로 조회
exports.findOne = (req,res)=>{
    Post.findByID(req.params.postId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found post with id ${req.params.postId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving post with id " + req.params.postId
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

  Post.updateById(
    req.params.postId,
    new Post(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found post with id ${req.params.postId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating post with id " + req.params.postId
          });
        }
      } else res.send(data);
    }
  );
};

// id로 삭제
exports.delete = (req,res)=>{
    Post.remove(req.params.postId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found post with id ${req.params.postId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete post with id " + req.params.postId
            });
          }
        } else res.send({ message: `post was deleted successfully!` });
      });
};

// 전체 삭제
exports.deleteAll = (req,res)=>{
    Post.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all post."
          });
        else res.send({ message: `All post were deleted successfully!` });
      });
};
 

 

