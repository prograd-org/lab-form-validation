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
let button = document.getElementById("submit");
button.addEventListener("click", checkUserName);
button.addEventListener("click", checkEmail);
button.addEventListener("click", checkPassword);


function checkUserName() {
    let username = document.getElementById('usertext').value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //special characters 
    if (format.test(username)) {
        alert("You have entered an invalid USERNAME!")
        return (false)
    } else if (username != "" && username.length > 7 && username.length < 15 && username.indexOf(' ') < 0) {
        {
            return (true)
        }

    } else {
        alert("You have entered an invalid USERNAME!")
        return (false)

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

function ValidatePswd(password) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passw))
        alert("Password is validated");
    else
        alert("password must contain atleast one Uppercase, one number and special characters like[!@#$%^&*()_]")
} 

