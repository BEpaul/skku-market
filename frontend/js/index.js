const checkLogin = () =>{
    const user_id = sessionStorage.getItem("user_id");
    if(user_id){
        $("#headerBtn-login").css("display", "none");
        $("#headerBtn-logout").css("display", "flex");
        $("#userInfoText").html(sessionStorage.getItem("nickname"));

    }
    else{
        $("#headerBtn-login").css("display", "flex");
        $("#headerBtn-logout").css("display", "none");
    }
}

const logout = () =>{
    sessionStorage.removeItem("user_id")
    sessionStorage.removeItem("nickname")
    location.href = "." 
}

const onNewPost =()=>{
    const curr_user_id = sessionStorage.getItem("user_id");
    if(curr_user_id){
        location.href = "./frontend/html/newProduct.html";
    }else{
        location.href = "./frontend/html/login.html";
    }
}

const loadProductList = async () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/posts/",
    //data: "hellow",
    dataType: "json",
    success: (response) => {
      //console.log(response);
      if(response.length>0){
        const productList_div = document.querySelector(".productList");
        productList_div.innerHTML = "";
      }
      
      //console.log("product list : " + response);
      response.forEach((post) => {
        console.log("post each : " + post.title);
        $.ajax({
          type: "GET",
          url: `http://localhost:3000/comments?post_id=${post.post_id}`,
          //data: "hellow",
          dataType: "json",
          success: (response) => {
            //console.log(response);
            renderProductCard(post, response);
          },
          error: (err) => {
            console.log("Get comment list failed! " + err);
            alert("Get comment list failed!");
          },
        });
      });
    },
    error: () => {
      console.log("Get product list failed!");
      alert("Get product list failed!");
    },
  });
};


const renderProductCard = (post, comments) => {
    //console.log(post.image)
    const buf = post.image;
    //console.log(JSON.stringify(b64))
    
  //https://stackoverflow.com/questions/4478863/show-image-from-blob-in-javascript
  const productList_div = document.querySelector(".productList");
  productList_div.innerHTML += `
    <div class="productCard" id="${post.post_id}" onclick='location.href="./frontend/html/detail.html?post_id=${post.post_id}"'>
        <img class="productImgBox" src="${post.image}" alt="product image">
        <div class="cardTitle">${post.title}</div>
        <div class="price">${post.price}원</div>
        <div class="commentCount">댓글 수 : ${comments.length}</div>
    </div>
    `;
    
  return;
};

$(document).ready(function () {
    checkLogin();
    loadProductList();
});
