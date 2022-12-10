//file to Base64 ref
// https://stackoverflow.com/questions/17710147/image-convert-to-base64


const onAddPost = async () =>{
    const curr_user_id = sessionStorage.getItem("user_id");
    if(!curr_user_id) {
        location.href='../html/login.html';
        return;
    }
    const img = document.getElementById("imageFileInput").files[0];
    const title = document.getElementById("postTitleInput").value;
    const price = document.getElementById("priceBoxInput").value;
    const description = document.getElementById("floatingTextarea").value;
    

    const base64 = convertBase64(img)
        .then(base64=>{
            console.log("img = "+base64)
            console.log("title = "+title)
            console.log("price = "+price)
            console.log("contents = "+description)
            fetch("http://localhost:3000/posts/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: curr_user_id,
                    title: title,
                    image: img,
                    price: price,
                    description: description,
                }),
            }).then((response) => {
                if(response.status === 201){
                    console.log("201" + response);
                    alert("successfully added!!")
                    location.href='../html/detail.html/'+response.post_id;
                }
                else{
                    console.log("bad: " + response);
                    alert("Post new post failed");
                }
            });

        });
    
}

const convertBase64 = (file) =>{
    return new Promise((resolve, reject)=> {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) =>{
            reject(error);
        }   
    })
    
}