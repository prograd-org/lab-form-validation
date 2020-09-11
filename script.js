let submit = document.getElementById("submit");
submit.addEventListener('click', checkUserName);
submit.addEventListener('click', checkEmail);
submit.addEventListener('click', checkPassword);
submit.addEventListener('click', allfields);

function allfields() {
    // console.log(checkPassword());
    if (checkEmail() && checkEmail() && checkPassword()) {
        alert("All fields are correct..!")
    }
}
// // Progression 1 
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
    let username = document.getElementById("usertext").value;
    //regular expression
    let splchar = /[!@#$%^&*(())_+=-`;'}{.,><?/"|}]+/;
    let alpha = /^[a-zA-Z0-9]/;
    if (splchar.test(username) && !alpha.test(username)) {
        alert("Please remove special character")
        return (false);
    } else if (username.length == 0) {
        alert("Enter a username")
        return (false);

    } else if (username.length < 9) {
        alert("Entered username is less than 8 letters")
        return (false);
    } else if (username.length > 15) {
        alert("Entered  username is greter than 15 letters")
        return (false);
    } else if (username.includes(" ") != 0) {
        alert("Entered username contains space")
        return (false);
    } else {
        return true;
    }
}
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
    let email = document.getElementById("emailtext").value;

    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return (true)
    }

    alert("You have entered an invalid email address!")
    return (false)
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    let pass = document.getElementById("passwordtext").value;
    // let caps = /^[A-Z]/;

    // let nums = /^[0-9]/;
    // let splchar = /[!@#$%^&*(())_+=-`;'}{.,><?/"|}]+/;
    // let count = 0;
    // console.log(caps.test(pass))
    // console.log(nums.test(pass))
    // console.log(splchar.test(pass))
    // if (caps.test(pass)) {
    //     count++;

    // }
    // if (nums.test(pass)) {

    //     count++;
    // }
    // if (splchar.test(pass)) {
    //     count++;
    // }
    // if (count == 3) {
    //     return true;
    // } else {
    //     alert("password is not strong");
    //     return (false);
    // }
    // (?=.*[0-9]) - Assert a string has at least one number;
    // (?=.*[!@#$%^&*]) - Assert a string has at least one special character.
    var decimal = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (pass.match(decimal)) {

        return true;
    } else {
        alert('Password is not strong yar..!')
        return false;
    }

}