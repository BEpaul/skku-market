const sql = require("./db.js");

// 생성자
const User = function (user) {
  this.user_id = user.user_id;
  this.user_name = user.user_name;
  this.user_nickname = user.user_nickname;
  this.user_email = user.user_email;
  this.user_password = user.user_password;
};

// customer 튜플 추가 (회원가입)
User.create = (newUser, result) => {
  sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Created user: ", { id: res.user_id, ...newUser });
    result(null, { id: res.user_id, ...newUser });
  });
};

// user id로 조회
User.findByID = (userID, result) => {
  sql.query("SELECT * FROM Users WHERE user_id = ?", userID, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // 결과가 없을 시
    result({ kind: "not_found" }, null);
  });
};

// user email로 조회 (로그인)
User.findByEmail = (userEmail, result) => {
  sql.query(
    "SELECT * FROM Users WHERE user_email = ?",
    userEmail,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
    }
  );
};

// user nickname으로 조회 (로그인)
User.findByNickname = (userNickname, result) => {
  sql.query(
    "SELECT * FROM Users WHERE user_nickname = ?",
    userNickname,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
    }
  );
};

// // user 전체 조회
// User.getAll = (result) => {
//   sql.query("SELECT * FROM users", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("user: ", res);
//     result(null, res);
//   });
// };

module.exports = User;
