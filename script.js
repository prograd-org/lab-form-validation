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

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false


let username = document.getElementById('submit')
username.addEventListener('click', () => {

    let name = document.getElementById('usertext').value;
    let nameRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,14}$/g;
    nameRegex.test(name) ? name : document.getElementById('name_error').innerHTML = "Enter a valid username";

    let email = document.getElementById('emailtext').value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailRegex.test(email) ? email : document.getElementById('email_error').innerHTML = "Enter a valid Email id";

    let p = document.getElementById('passwordtext').value;
    errors = [];
    if (p.length < 8 || p.length > 16) {
        errors.push("Your password must be within 8 and 16 character length."); 
    }
    if (p.search(/[!@#$%^&*()_]/) < 0) {
        errors.push("Your password must contain one special character."); 
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one Capital letter.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one number."); 
    }
    if (errors.length > 0) {
        document.getElementById('password_error').innerHTML = errors.join("<br>");
        return false;
    }
    return true;

});