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

const checkUserName = () => {
  const username = document.querySelector("#usertext").value;
  if (
    username.length < 8 ||
    username.length > 15 ||
    username.search(/[^a-zA-Z0-9]/g || /\s/g) != -1
  ) {
    return false;
  }
  return true;
};

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
const checkEmail = () => {
  const email = document.querySelector("#emailtext").value;

  if (/@/g.test(email) && /[a-zA-Z0-9_.]/g.test(email)) {
    return true;
  }
  return false;
};
console.log(checkEmail());
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

const checkPassword = () => {
  const password = document.querySelector("#passwordtext").value;
  if (
    /[a-z]/g.test(password) &&
    /[A-Z]/g.test(password) &&
    /[0-9]/g.test(password) &&
    /[!@#$%^&*()_]/g.test(password) &&
    /[^a-zA-Z0-9!@#$%^&*()_]/g.test(password)
  ) {
    return true;
  }
  return false;
};
