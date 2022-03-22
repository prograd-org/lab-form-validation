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
var specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const checkUserName = () =>{
    var check = specialChars.test(username)
    if (username && username.length>=8 && username.length<=15 && check == false){
        console.log("username is correct");
        return true
    }
    else {
        console.log("please enter a valid username!!");
        return false
    }
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
const checkEmail=()=>{
    specialChars = /[`!#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/
    var check = specialChars.test(email)
    if (email && check == false){
        console.log("email is correct");
        return true
    }
    else {
        console.log("please enter a valid email!!");
        return false
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
const checkPassword = ()=>{
    specialChars = /[!@#$%^&*()_]/
    var check = specialChars.test(password)
    if (password && check == true){
        console.log("password is correct");
        return true
    }
    else {
        console.log("please enter a valid password!!");
        return false
    }
}

var  username
var email
var password
document.getElementById("submit").addEventListener("click", (e) =>{
    username = document.getElementById("usertext").value
    email = document.getElementById("emailtext").value
    password = document.getElementById("passwordtext").value
    checkUserName()
    checkEmail()
    checkPassword()
    console.log(username, email, password);
})