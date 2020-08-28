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

let submit = document.getElementById('submit')
submit.addEventListener('click',checkUserName);
submit.addEventListener('click', checkEmail);
submit.addEventListener('click',checkPassword);


function checkUserName()
{
    var special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let username = document.getElementById('usertext').value;
    if (username.length == 0 || username.length < 8 || username.length > 16 || username.indexOf(' ') !== -1 || special.test(username))
    {
        alert("Invalid username")
        return false
        
    }
    else
    {
        return true
    }
}


// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise


function checkEmail()
{
  var checkemail = document.getElementById("emailtext").value
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(checkemail) == false) 
  {
    alert('Invalid Email Address');
    return false;
  }

  return true;
}



// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword()
{
  var check_Password=document.getElementById("passwordtext").value

  if (check_Password.match(/[a-z]/g) && check_Password.match(/[A-Z]/g) && check_Password.match(/[0-9]/g) && check_Password.match(/[^a-zA-Z\d]/g) && check_Password.length >= 8)
    return true
  else
    alert("Invalid Password")
    return false
}