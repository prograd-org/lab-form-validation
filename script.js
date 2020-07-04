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
​
function checkUserName(username){
    function check_spaces(username){
        for(var i=0;i<username.length;i++){
            if (username[i]==" "){
                return false
            }
        }
        return true
    }
    function special_characters(username){
        for(var c=0;c<username.length;c++){
            if ((username[c]<='Z' && username[c]>='A') || (username[c]<'z' && usernmae[c]>='a')){
                continue;  
            }
            return false
        }
        return true
​
    }
    result1=check_spaces(username)
    result2=special_characters(username)
    
    if (username.length>=8 && username.length<=15 && result1 && result2){
        return true
    }
    else{
        return false
    }
}

​
// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
​
function checkEmail(mail_id){
    for(var i=0;i<mail_id.length;i++){
        if ((mail_id[i]<='Z' && mail_id[i]>='A') || (mail_id[i]>='a' && mail_id[i]<='z') || (mail_id[i]=='@' ||  mail_id[i]=='.' ||  mail_id[i]=='_') ){
            continue
        }
        return false
    }
    return true
}
​
// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
​
function checkPassword(password){
    for( let i=0;i<password.length;i++){
        if ((password[i]<='Z' && password[i]>='A') || (password[i]>='a' && password[i]<='z') || (password[i]<=9 && password[i]>=0)){
            continue
        }
        else{
            return false
    }
    return true
    }
}
