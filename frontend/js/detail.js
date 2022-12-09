// load
$(function () {
  $.ajax({
    type: "GET",
    url: "/",
    data: "",
    dataType: "dataType",
    success: (response) => {
      console.log(response);
    },
    error: () => {},
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
    success: function (response) {},
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
