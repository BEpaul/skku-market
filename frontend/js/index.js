const loadProductList =()=>{

    //get product list from DB
    const productList = getProductListFromDB();

    //render product on the page for each
    productList.forEach(element => {
        renderProductCard(element);
    });

}

const renderProductCard =()=>{
    //https://stackoverflow.com/questions/4478863/show-image-from-blob-in-javascript
    const productImg = TODO; 

    

    return `
    <div class="productCard">
        <img src="" alt="">
        <div class="cardTitle">card title</div>
        <div class="price">1000원</div>
        <div class="commentCount">댓글 수 : 0</div>
    </div>
    `;
}