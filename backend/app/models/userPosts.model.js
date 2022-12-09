const sql = require("./db.js");

// 생성자
const UserPost = function (userPost) {
  this.user_id = userPost.user_id;
  this.post_id = userPost.post_id;
};

// UserPost 튜플 추가 
UserPost.create = (userPost, result)=>{
    sql.query("INSERT INTO UserPosts SET ?", userPost, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created UserPosts: ",{id:res.insertId, ...userPost });
        result(null, {id: res.insertId, ...userPost});
    });
};

// User id로 조회
UserPost.findByUserId = (User_id, result)=>{
    sql.query('SELECT * FROM UserPosts WHERE user_id = ?',User_id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found UserPosts: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// Post id로 조회
UserPost.findByPostId = (post_id, result)=>{
    sql.query('SELECT * FROM UserPosts WHERE post_id = ?',post_id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found UserPosts: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// Post id로 조회 & User id로 조회
UserPost.findByIds = (post_id, user_id, result)=>{
    sql.query('SELECT * FROM UserPosts WHERE post_id = ? AND user_id = ?',post_id, user_id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found UserPosts: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// UserPost 전체 조회
UserPost.getAll = result =>{
    sql.query('SELECT * FROM UserPosts', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("UserPosts: ", res);
        result(null, res);
    });
};


// UserPost id로 삭제
UserPost.remove = (id, result)=>{
    sql.query('DELETE FROM UserPosts WHERE UserPosts_id = ?',id, (err, res)=>{
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

        console.log("deleted UserPosts with id: ", id);
        result(null, res);
    });
};


module.exports = UserPost;
 

