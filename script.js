const checkUserName = () => {
  const username = document.getElementById("usertext").value
  if (username === "" || username.length > 15 || username.length < 8) {
    document.getElementById("name_error").innerHTML += "<p>Wrong username</p>"
    setTimeout(() => {
      document.getElementById("name_error").innerHTML = ""
    }, 2000)
    return false
  }
  return true
}

// Progression 2

const checkEmail = () => {
  const email = document.getElementById("emailtext").value
  if (!email.includes("@", 1) || /^[\!#$%&*_+|/>,<;{}[]()]*$/.test(email)) {
    document.getElementById("email_error").innerHTML += "<p>Wrong email id</p>"
    setTimeout(() => {
      document.getElementById("email_error").innerHTML = ""
    }, 2000)
    return false
  }
  return true
}

// Progression 3

const checkPassword = () => {
  const password = document.getElementById("passwordtext").value
  if (!/[0-9a-zA-Z]+/.test(password)) {
    document.getElementById("password_error").innerHTML +=
      "<p>Wrong password</p>"
    setTimeout(() => {
      document.getElementById("password_error").innerHTML = ""
    }, 2000)
    return false
  }
  return true
}

document.querySelector(".submit").addEventListener("click", (e) => {
  e.preventDefault()
  const validUserName = checkUserName()
  const validEmail = checkEmail()
  const validPassword = checkPassword()
  if (validUserName && validEmail && validPassword)
    console.log({
      userName: document.getElementById("usertext").value,
      email: document.getElementById("emailtext").value,
      password: document.getElementById("passwordtext").value,
    })
})
