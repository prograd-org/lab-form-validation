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

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', checkUserName);
submitButton.addEventListener('click', checkEmail);
submitButton.addEventListener('click', checkPassword);
var isAlpha = function(ch) {
    return typeof ch === "string" && ch.length === 1 &&
        (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
}


function checkUserName(username) {
    let username = document.getElementById('usertext').value;
    let flag = true;

    if (username.length() == 0 || username.length < 8 || username.length > 15 || " " in username) {
        flag = false;
    }
    for (let i = 0; i < username.length; i++) {
        if (!isAlpha(username[i])) {
            flag = false;
        }
    }
    return flag;
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail(email) {
    let useremail = (document.getElementById('emailtext').value).split('@');
    let flag = false;
    for (let i = 0; i < email.length; i++) {
        if (typeof(email[i]) == 'number' || isAlpha(email[i] || email[i] === '@' || email[i] === '.' || email[i] === '_')) {
            if (username.length === 2) {
                flag = true;
            }
        }
    }
    return flag;
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    let password = document.getElementById('passwordtext').value;
    let chars = ["!", '@', '#', '$', '%', '^', '&', '*', '(', ')', '_']
    let flag = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] in chars || typeof(password[i]) == 'number' || password[i] === password[i].toUpperCase()) {
            flag = true;
        }
    }
    return flag;
}