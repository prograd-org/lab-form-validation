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
    let username = document.getElementById("usertext");
    if (username.value.trim() == "") {
      alert("username should not be empty");
      return false;
    } else if (username.value.trim().length < 8) {
      alert("username should be a minimum of 8 characters and above");
      return false;
    } else if (username.value.trim().length > 8) {
      alert("username should be less than 15 characters");
      return false;
    }
    let username = document.getElementById("usertext").value;
  
    if (/[^a-zA-Z0-9]/.test(username)) {
      alert('username should not contain special characters');
      return false;
    } else if (/["/^\s+$/"]/.test(username)) {
      alert("No space is allowed in username");
      return false;
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
    var email = document.getElementById("emailtext").value;
    if (/[\w+@.]/.test(email)) {
      alert('username should not contain special characters other than @,.,_');
      return false;
    } else {
      return true;
    }
  }
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    var password = document.getElementById("passwordtext").value;
    if (/[^a-zA-Z0-9]/.test(password)) {
      alert('password should be alphanumeric in nature');
      return false;
    } else if (/[!@#$%^&*()_]/.test(password)) {
      alert(" password must contain atleast one Uppercase, one number and special characters");
      return false;
    } else {
      return true;
    }
  }