$("#signup_btn").click(() => {
  let email = $("#floatingInput").val();
  let name = $("#nameInput").val();
  let nickName = $("#NicknameInput").val();
  let password = $("#floatingPassword").val();
  let confirmPassword = $("#confirmPassword").val();

  // Set validation for a sign up
  if (password != confirmPassword) {
    alert("Password is not matching");
  } else if (email === "") {
    alert("Please input email!");
  } else if (name === "") {
    alert("Please input name!");
  } else if (nickName === "") {
    alert("Please input nickname!");
  } else if (password == "") {
    alert("Please input password!");
  } else {
    alert("ok!");
  }

  $.ajax({
    type: "post",
    url: "",
    data: "data",
    dataType: "dataType",
    success: function (response) {},
  });
});
