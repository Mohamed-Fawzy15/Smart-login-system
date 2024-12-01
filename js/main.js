var users = [];

// the key for localstorage

KEY = "users";

// variable that catch the input
// signUp
var signUpNameInput = document.querySelector("#signupName");
var signUpEmailInput = document.querySelector("#signupEmail");
var signUpPassInput = document.querySelector("#signupPass");
var signUpSubmitBtn = document.querySelector("#signupSubmit");

// LogIn
var loginSubmitBtn = document.querySelector("#loginSubmit");
var loginEmailInput = document.querySelector("#loginEmail");
var loginPasswordInput = document.querySelector("#loginPass");

if (localStorage.getItem(KEY) != null) {
  users = JSON.parse(localStorage.getItem(KEY));
} else {
  users = [];
}

function pushData() {
  var userData = {
    name: signUpNameInput.value,
    email: signUpEmailInput.value,
    password: signUpPassInput,
  };

  users.push(userData);
  localStorage.setItem(KEY, JSON.stringify(users));
  clearInputs();
}

function clearInputs() {
  signUpNameInput.value = "";
  signUpEmailInput.value = "";
  signUpPassInput.value = "";
}

// signUpSubmitBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   pushData();
// });

function loginForm() {
  for (var i = 0; i < users.length; i++) {
    if (
      loginEmailInput.value === users[i].email &&
      loginPasswordInput - value === users[i].password
    ) {
      console.log("hi");
    }
  }
}
