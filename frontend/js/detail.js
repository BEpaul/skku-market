// load
$(function () {
  // get path parameter
  const urlStr = window.location.href;
  const url = new URL(urlStr);
  const urlParams = url.searchParams;

  const qsPostId = urlParams.get("post_id");
  console.log(qsPostId);
  console.log(typeof qsPostId);

  // get user_id from post_id
  $.ajax({
    type: "GET",
    url: `http://localhost:3000/userposts/post/${qsPostId}`,
    data: "",
    dataType: "json",
    success: (response) => {
      console.log(response);
    },
    error: (err) => {
      console.log(err);
    },
  });

  // get post information from post_id
  $.ajax({
    type: "GET",
    url: `http://localhost:3000/posts/${qsPostId}`,
    data: "",
    dataType: "json",
    success: (response) => {
      console.log(response);
    },
    error: (err) => {
      console.log(err);
    },
  });
});

// button event
$("#reply_btn").click((e) => {
  e.preventDefault();

  let commentValue = $(".form-control").val();

  console.log(commentValue);
  $(".form-control").val("");

  commentData = {};
  $.ajax({
    type: "GET",
    url: "/",
    data: "data",
    dataType: "dataType",
    success: (response) => {},
    error: (err) => {},
  });

  $(".comment_list").append(
    `<li>
        <div class='card my-4'>
            <h5 class='card-header'>
                <div class='com_userInfo'><i class='bi bi-person-circle' id='user_profile'></i>
                    junehyon</div>
            </h5>
            <div class='card-body'>
                <form name='comment-form' autocomplete='off'>
                    <div class='form-group'>
                        <div class='commentList_content'>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Nisi obcaecati, vitae omnis, molestiae praesentium
                            reiciendis dicta facere animi nesciunt vero, ex ad beatae neque eligendi
                            doloremque quos aspernatur sint saepe?</div>
                    </div>
                </form>
            </div>
        </div>
    </li>`
  );
});
