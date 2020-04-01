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
function checkUserName(){
    var username = document.getElementById('usertext').value;
    var regex = /^[A-Za-z0-9 ]+$/ ;
    var isValid = regex.test(username);
    
    if(username == ""){
        alert("UserName is Empty");
        return false;
    }
        else if (username.length < 8) {
            alert("UserName is less than 8 character");
            return false;
        }
        else if (username.length > 15) {
            alert("UserName is more than 15 character");
            return false;
        }
        else if (username.split(' ').length > 1) {
            alert("userName should not contain spaces");
            return false;
        }
        else if (!isValid) {
            alert("Contains Special Characters.");
            return false;
        }
    else{
        alert(" username Accepted");
        return true;
    }

}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(){
    var email = document.getElementById('emailtext').value;
    var expr = /^[a-zA-Z0-9.@_]*$/;
    if (!expr.test(email)) {
        alert("not valid email");
        return false;
    }
    else if(email == ""){
        alert("email is Empty");
        return false;
    }
    else{
        alert("email accepted");
        return true;
    }
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword(){
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var spec_char = /[!@#$%^&*()_]/g;
    var pass = document.getElementById('passwordtext').value;
    if (!upperCaseLetters.test(pass) ) {
        alert("should contain upprecase");
        return false;
    } 
    else if (!lowerCaseLetters.test(pass) ) {
        alert("should contain lowrcase");
        return false;
    }
    else if (!numbers.test(pass) ) {
        alert("should contain lowercase");
        return false;
    }
    else if (!spec_char.test(pass) ) {
        alert("should contain special character");
        return false;
    }
    else {
        alert("pass accepted");
        return true;
    }
}
function check(){
    checkUserName();
    checkEmail();
    checkPassword();    
}
