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
const checkUserName = (username) => {
    let length = username.length
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (length == 0 || (length <= 7 || length > 15)) {
        return false
    }
    else if (format.test(username)) return false;
    else {

        for (let i of username) {
            if (i == ' ') return false
        }
    }
    return true
}


// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
const checkEmail = (mail) => {
    let format = /[!#$%^&*()+\-=\[\]{};':"\\|,<>\/?]+/;
    if (format.test(mail)) return false
    else {
        for (let i of mail) {
            if (i == '@' || i == '.' || i == '_') {
                return true
            }
        }
    }
    return false
}
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
const checkPassword = (password) => {
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    if (passwordPattern.test(password)) return true
    else return false

}