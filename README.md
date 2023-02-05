# skku-market

## Introduction
Buy and sell used goods! You can post items you want to sell or express your interest in items you want to buy.

<br>

## How to run
1. download source files, 
NEED db.config.js !! check …/wpl-final/backend/app/config/db.config.js is exist
2. go to ‘backend’ directory npm install
3. At ‘backend’ directory and start backend server with ‘node app.js’
4. open ‘index.html’ (with live server extension recommended)

<br>

## Used tech
### Front-end
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"> <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/JQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"><br>

### Back-end
<img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white">

### Database
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/rds-527FFF?style=for-the-badge&logo=Amazon RDS&logoColor=white">

<br>

## Implement
### 1. Index page (index.html)
#### [Logout status]
<img width="468" alt="image" src="https://user-images.githubusercontent.com/104749551/216829681-abdf90e1-dc98-4e7f-9036-60eb29c645ba.png">

-	You can check the list of second-handed items that have been uploaded
-	You can login/register via the buttons on the top right
-	If ‘Add new post’ is pressed, you can go to the new post page and upload new post. But you have to login first.
-	You can check the title, price, and a number of comments for each post

#### [Login status]
<img width="468" alt="image" src="https://user-images.githubusercontent.com/104749551/216829720-947bae8d-5ed7-4bfa-91c7-3339fdbc87af.png">

-	After you login-ed, the buttons on the top right are changed respectively ‘nickname ‘and ‘logout’. ‘nickname’ button is same with common ‘my page’ button
-	You can go add new post page directly because you are logging in.

<br>

### 2. Login page (login.html)
<img width="468" alt="image" src="https://user-images.githubusercontent.com/104749551/216829750-12a5aacc-f59a-4ff2-aef8-ea474f195542.png">

-	You can login through two information ‘email’, ‘password’
-	If the member information does not match, then error message is popped up via alert
-	The moment you press the login button and successfully working, look up information from database through HTTP methods

<br>

### 3. Sign up page (signup.html)
<img width="468" alt="image" src="https://user-images.githubusercontent.com/104749551/216829786-5a9244f4-6db3-47de-b6fa-4af183fe666b.png">

-	You can register user through the registration process above
-	Each input boxes have rules, you may pay attention to the input values
-	The moment you press the Sign Up button and successfully working, then create user information in database through HTTP methods

<br>

### 4. Detail page (detail.html)
<img width="468" alt="image" src="https://user-images.githubusercontent.com/104749551/216829850-2e03d093-b7f8-465f-ae9b-a241dfabcad7.png">

-	Get Image, author, title, price, comment, … from backend server, display data to the user
-	When you are not a member(non-login) if you press ‘reply’ button, you will fail to write a comment
-	When you are a member(login) if you input text in comment box and press ‘reply’ button, you can write comment.
-	Comments written are cumulatively stored in database from HTTP methods
-	Comments written by anyone have user nickname and content

<br>

### 5. Add post page (newProduct.html)
<img width="468" alt="image" src="https://user-images.githubusercontent.com/104749551/216829881-87db0a42-6b24-4d55-bfe6-976b39e89290.png">

-	In Add new product page, you can upload post you want to buy
-	You can upload images from local files and input post title, price, content
-	If you press the button after writing a post, you can see that the post is uploaded successfully

<br>

### 6. My page (myPage.html)
<img width="468" alt="image" src="https://user-images.githubusercontent.com/104749551/216829900-0b4b8397-e52d-461d-a499-19b5ba4d45fd.png">

-	In my page, you can check your personal information
-	If you press the ‘User Posts’ list, you can go post detail page you clicked

<br>

## Database with MySQL
 ![image](https://user-images.githubusercontent.com/104749551/216829945-51a1d5e4-3ce3-4410-b89f-be61dcde974b.png)

<br>






