$(function () {
  console.log("hello");

  $("#login_button").click(() => {
    console.log("clicked!");
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/",
      data: "hellow",
      dataType: "text",
      success: (response) => {
        console.log(response);
      },
      error: () => {
        console.log("failed!");
      },
    });

    // location.href = "./list.html";
  });

  $("#signup_btn").click(() => {
    console.log("signUp");
    //   $.ajax({
    //     type: "GET",
    //     url: "http://localhost:3000/login",
    //     data: "asd",
    //     dataType: "text",
    //     success: (response) => {
    //       console.log(response);
    //     },
    //     error: () => {
    //       console.log("failed...");
    //     },
    //   });
    location.href = "signup.html";
  });
});
