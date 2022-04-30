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
  var username = document.getElementById("usertext").value;
  if (username.length === 0) {
    alert("username should not be empty");
    return false;
  }
  if (username.length < 8) {
    alert("username should not be less than 8 charecters");
    return false;
  }
  if (username.length > 15) {
    alert("username should  be less than 15 charecters");
    return false;
  }
  if (/\s/.test(username)) {
    alert("username should  not contain whitespace");
    return false;
  }
  if (/\W/.test(username)) {
    alert("username should not contain special characters");
    return false;
  }
  return true;
}

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkEmail() {
  var email = document.getElementById("emailtext").value;
  var re = /\S+@\S+\.\S+/;
  if (!re.test(email)) {
    alert("enter a valid email");
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
  var pattern = /[a-z][A-z][0-9]/g;
  var pat2 = /[!@#$%^&*()_]/;
  if (!pattern.test(password)) {
    alert(
      "password must contain atleast one Uppercase, one number and special characters "
    );
  } else if (!pat2.test(password)) {
    alert(
      "password must contain atleast one Uppercase, one number and special characters "
    );
  }
}
