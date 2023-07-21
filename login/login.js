




// let login = document.getElementById('login-form');
// let showPasswordCheckbox = document.getElementById('showPasswordCheckbox');
// let passwordField = document.getElementById('Password');

// showPasswordCheckbox.addEventListener('change', function(){
//     if(showPasswordCheckbox.checked){
//         passwordField.type = "text";
//     }else {
//         passwordField.type="password"
//     }
// });

//     document.getElementById(forgot-password).addEventListener('click', function(event){
//         event.preventDefault()
//         // prompt user for email-id
//         const email = prompt("Please enter valid Email Id:");
//         // email validation
//         const emailRegex = '/^\S+@\S+\.\S+$/';
//         if(!emailRegex.test(email)){
//             alert("Invalid Email Address, try again");
//             return;
//         }
//     })
// login.addEventListener('submit', function(event){
//     event.preventDefault()
// })

// let userNameOrEmail = document.getElementById('username').value;
// let password = document.getElementById('password').value;

// // local Storage
// let users = JSON.parse(localStorage.getItem('userDetails'));
//     // console.log(users);

// let details = users.find(function(savedDetails){
//     return(savedDetails.username === userNameOrEmail || savedDetails.email === emailOrUsername);
// })
//     // fnc for redirecting to the main site
// if (details && details.password === password){
//     window.location.href = "ecommerce.html";
// } else {
//     document.getElementById('error-message').innerHTML="Invalid Username Or Password!"
// }