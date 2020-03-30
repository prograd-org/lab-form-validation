// Progression 1

var button = document.getElementById("submit");
button.addEventListener("click", checkUserName);

function checkUserName() {
  var text1 = document.getElementById("usertext").value;
  if (
    text1 == "" ||
    text1.length > 15 ||
    text1.length < 8 ||
    /^[a-zA-ZO-9]*$/.test(text1)
  ) {
    document.getElementById("name_error").innerHTML += "<p>Wrong username</p>";
    return false;
  }
  for (let i = 0; i < text1.length; i++) {
    if (String.indexOf[i] !== -1) {
      document.getElementById("name_error").innerHTML +=
        "<p>Wrong username</p>";
      return false;
    }
  }
}

// Progression 2

button.addEventListener("click", checkEmail);

function checkEmail() {
  var text2 = document.getElementById("emailtext").value;
  if (!text2.includes("@", 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(text2))
    document.getElementById("email_error").innerHTML += "<p>Wrong email id</p>";
}

// Progression 3

button.addEventListener("click", checkPassword);

function checkPassword() {
  var text3 = document.getElementById("passwordtext").value;
  if (/^[0-9a-zA-Z]+$/.test(text3))
    document.getElementById("password_error").innerHTML +=
      "<p>Wrong password</p>";
}
