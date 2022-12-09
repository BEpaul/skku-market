const sql = require("./db.js");

// 생성자 
const Post = function(post){
    this.title = post.title;
    this.image = post.image;
    this.price = post.price;
    this.description = post.description;
    this.added = new Date();
    this.last_modified = new Date();
};

// Post 튜플 추가 
Post.create = (newPost, result)=>{
    sql.query("INSERT INTO Posts SET ?", newPost, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created Post: ",{id:res.insertId, ...newPost });
        result(null, {id: res.insertId, ...newPost});
    });
};

// Post id로 조회
Post.findByID = (postId, result)=>{
    sql.query('SELECT * FROM Posts WHERE post_id = ?',postId, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found post: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({kind: "not_found"}, null);
    });
};

// Posts 전체 조회
Post.getAll = result =>{
    sql.query('SELECT * FROM Posts', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("post: ", res);
        result(null, res);
    });
};

// Posts id로 수정
Post.updateByID = (postId, post, result)=>{
    sql.query('UPDATE Posts SET title = ?, price = ?, description = ? WHERE post_id = ?', 
    [post.title, post.price, post.description, postId], (err, res)=>{
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

        console.log("update post: ", {postId:postId, ... customer});
        result(null, {postId:postId, ...customer});
    });
};

// post id로 삭제
Post.remove = (id, result)=>{
    sql.query('DELETE FROM Posts WHERE post_id = ?',id, (err, res)=>{
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

        console.log("deleted post with id: ", id);
        result(null, res);
    });
};

// posts 전체 삭제
Post.removeAll = result =>{
    sql.query('DELETE FROM Posts',(err, res)=>{
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

        console.log('deleted ${res.affectedRows} posts');
        result(null, res);
    });
};

module.exports = Post;
 

