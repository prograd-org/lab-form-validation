var username;
var email;
var password;
function check(){
    let submit = document.getElementById("submit");
    submit.addEventListener("click", function(){
        username = document.getElementById("usertext").value;
        email = document.getElementById("emailtext").value;
        password = document.getElementById("passwordtext").value;
        console.log(checkUserName(username));
        console.log(checkEmail(email));
        console.log(checkPassword(password));    
    })
}

// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

 function checkUserName(username){
     if(username==""){
        document.getElementById("name_error").innerHTML = "<p>*username is empty</p>"
     setTimeout(() => {
        document.getElementById("name_error").innerHTML = ""
     }, 2000);
     return false;
     }
     if(username.length>15){
        document.getElementById("name_error").innerHTML = "<p>*username is too long</p>"
        setTimeout(() => {
           document.getElementById("name_error").innerHTML = ""
        }, 2000);
        return false;
     }
     if(username.includes(" ")){
      document.getElementById("name_error").innerHTML = "<p>*username should not contain spaces</p>"
      setTimeout(() => {
         document.getElementById("name_error").innerHTML = ""
      }, 2000)
      return false;
     }
     if(username.length<8){
        document.getElementById("name_error").innerHTML = "<p>*username is too short</p>"
        setTimeout(() => {
           document.getElementById("name_error").innerHTML = ""
        }, 2000)
        return false;
     }
     var format = /[`!@#$%^&*()_+\-=\[\]?{};':'\\|,.<>\/?~]/;
     if(format.test(username)){
        document.getElementById("name_error").innerHTML = "<p>*should not contain special characters</p>"
        setTimeout(() => {
           document.getElementById("name_error").innerHTML = ""
        }, 2000)
        return false;
     }
     return true;
  
 }       
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail(email){
   if(email==""){
      document.getElementById("email_error").innerHTML = "<p>*email is empty</p>"
   setTimeout(() => {
      document.getElementById("email_error").innerHTML = ""
   }, 2000);
   return false;
   }
   var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!format.test(email)){
      document.getElementById("email_error").innerHTML = "<p>*wrong email format</p>"
   setTimeout(() => {
      document.getElementById("email_error").innerHTML = ""
   }, 2000);
   return false;
   }
   return true;
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword(password){
   if(password==""){
      document.getElementById("password_error").innerHTML = "<p>*password is empty</p>"
      setTimeout(() => {
         document.getElementById("password_error").innerHTML = ""
      }, 2000);
      return false;
   }
   var format = /[0-9a-zA-Z]+/;
   if(!format.test(password)){
      document.getElementById("password_error").innerHTML = "<p>*password should contain atleast one Uppercase, one number and special characters</p>"
      setTimeout(() => {
         document.getElementById("password_error").innerHTML = ""
      }, 2000);
      return false;
   }
   return true;
}