
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
    let username = document.getElementById('usertext').value;
    if (username && username.trim()) {
        if ((username.length >= 8) && (username.length <= 15)) {
            return false;
        }
        for (var i = 0; i < username; i++) {
            if ((username[i] == " ") || (username[i] == "@") || (username[i] == "$") || (username[i] == "&") || (username[i] == '!'))
                return false;
        }
        return true;
    }
    return false;
}

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise



function checkEmail() {
    let email = document.getElementsByClassName('emailtext').value;
    if(email){

    }
    return false;
}




// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    let password = document.getElementsByClassName('passwordtext').value;
    if (password) {
    }
    return false;
}


// =============================================

let usernameDiv = document.getElementById('usertext');
let emailDiv = document.getElementsByClassName('emailtext');
let passwordDiv = document.getElementsByClassName('passwordtext');


function handleFormSubmit() {
    let usernameDiv = document.getElementById('usertext');
    let emailDiv = document.getElementById('emailtext');
    let passwordDiv = document.getElementById('passwordtext');
   
    let errorArr = [];
    if (!checkEmail()) {
        usernameDiv.classList.add('redborder');
        console.log(usernameDiv.classList);
        errorArr.push('Provide valid email');

    }
    if (!checkUserName()) {
        emailDiv.classList.add('redborder');
        console.log(emailDiv.classList);
        errorArr.push('Provide valid Username');
    }
    if (!checkPassword()) {
        passwordDiv.classList.add('redborder');
        console.log(passwordDiv.classList);
        errorArr.push('Provide valid password');
    }

    alert(errorArr);
}

function handleTypeForm(e){
    console.log(e.target.value);
    let someDiv = document.getElementById(e.target.id);
    someDiv.classList.remove('redborder');

}