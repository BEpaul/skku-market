const sql = require("./db.js");

// 생성자 
const Comment = function(Comment){
    this.post_id = Comment.post_id;
    this.user_id_from = Comment.user_id_from;
    this.user_id_to = Comment.user_id_to;
    this.comment = Comment.comment;
    this.added = new Date();
    this.last_modified = new Date();
};

// customer 튜플 추가 
Comment.create = (newComment, result)=>{
    sql.query("INSERT INTO Comments SET ?", newComment, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created comment: ",{id:res.insertId, ...newComment });
        result(null, {id: res.insertId, ...newComment});
    });
};

// customer id로 조회
Comment.findByID = (commentId, result)=>{
    sql.query('SELECT * FROM Comments WHERE comment_id = ?',commentId, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found comment: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// Posts 전체 조회
Comment.getAll = result =>{
    sql.query('SELECT * FROM Comments', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("comment: ", res);
        result(null, res);
    });
};

// Posts id로 수정
Comment.updateByID = (commentId, Comment, result)=>{
    sql.query('UPDATE Comments SET comment = ? WHERE comment_id = ?', 
    Comment.comment, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log("update comment: ", {commentId:commentId, ... Comment});
        result(null, {commentId:commentId, ...Comment});
    });
};

// post id로 삭제
Comment.remove = (id, result)=>{
    sql.query('DELETE FROM Comments WHERE comment_id = ?',id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log("deleted comment with id: ", id);
        result(null, res);
    });
};

// posts 전체 삭제
Comment.removeAll = result =>{
    sql.query('DELETE FROM Comments',(err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({kind: "not_found"}, null);
            return;
        }

        console.log('deleted ${res.affectedRows} comments');
        result(null, res);
    });
};

module.exports = Comment;
 

