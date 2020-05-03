/* 
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
var name_error = email_error = password_error = true;

function checkUserName()
{
    var username = document.myform.username.value;

    if(username == null || username == "") {
        printError("name_error", "Please enter your name");
    } else {
        var regex = /^[0-9a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("name_error", "Please enter a valid name");
        } else {
            printError("name_error", "");
            name_error = false;
        }
    }
    return true;
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail()
{
    var email=document.myform.email.value; 
    if(email == "") {
        printError("email_error", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("email_error", "Please enter a valid email address ");
        } else{
            printError("email_error", "");
            email_error = false;
        }
    }
    return true;
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword()
{
    var password=document.myform.password.value; 
    if(password.length<6){
        printError("Password must be at least 6 characters long."); 
    }
    else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(regex.test(password) === false) {
            printError("password_error", "Please enter a valid name");
        } else {
            printError("password_error", "");
            password_error = false;
        }
    }
    return true; 
}

*/

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
var button = document.getElementById('submit');  //when user clicks submit
button.addEventListener("click", checkUserName);  //get username
function checkUserName() {
​
    var text1 = document.getElementById('usertext').value;
    if (text1 == "" || text1.length > 15 || text1.length < 8 || /^[a-zA-ZO-9]*$/.test(text1)) {  //testforallconditions
        document.getElementById("name_error").innerHTML += "<p>Wrong username</p>";
        return false;
    }
    for (let i = 0; i < text1.length; i++) {                                  //testforspaces
        if (String.indexOf[i] !== -1) {
            document.getElementById("name_error").innerHTML += "<p>Wrong username</p>";
            return false;
        }
    }
}
​
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
button.addEventListener("click", checkEmail)
function checkEmail() {
    var text2 = document.getElementById('emailtext').value;
    // console.log(text2);//
    if (!text2.includes('@', 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(text2)) //email id must have @, if not present wrong email , also checking for special char.
        document.getElementById("email_error").innerHTML += "<p>Wrong email id</p>";
​
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
button.addEventListener("click", checkPassword)
​
function checkPassword() {
    var text3 = document.getElementById('passwordtext').value;
    if ((/^[0-9a-zA-Z]+$/.test(text3)))      //cheking for alphanumeric condition
        document.getElementById("password_error").innerHTML += "<p>Wrong password</p>";
}