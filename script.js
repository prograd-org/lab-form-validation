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
function checkUserName() {
    let username = document.getElementsByClassName('username');
    if (username.length == 0)
        return false;
    if ((username.length >= 8) && (username.length < 15))
        return false;
    for (var i = 0; i < username.length; i++)
        if ((username[i] == " ") || (username[i] == "@") || (username[i] == "&") || (username[i] == "$") || (username[i] == "!"))
            return false;
    return true;
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
    var mail = document.getElementsByClassName('mail');
    if (mail == "" || mail == "null") {
        alert("please enter your email");
        document.registration.email.focus();
        return false;
    }
    var atpos = mail.indexOf("@");
    var dotpos = mail.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= mail.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    alert("Registration successfull");
    return true;
}


// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    let pass = document.getElementsByClassName('password');
    var checkSpecial = /[*@!#%&]+/.test(pass);
    var checkUpper = /[A-Z]+/.test(pass);
    var checkLower = /[a-z]+/.test(pass);
    if (pass == "" || pass == "null") {
        alert("please enter ur password");
        document.registration.pwd.focus();
        return false;
    }
    if (checkSpecial && checkLower && checkUpper) {
        flag = 1;
    }
    if (flag == 0) {
        alert("Password should be the combination of atleast one lowercase letter, uppercaseletter & special symbols like($, & , #)");
        document.registration.pwd.focus();
        return false;
    }
    alert("Registration successfull");
    return true;
}