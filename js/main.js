var users = [];

// the key for localstorage
KEY = "users";

// variable that catch the input
var signupForm = document.querySelector("#signupForm");
var signUpNameInput = document.querySelector("#signupName");
var signUpEmailInput = document.querySelector("#signupEmail");
var signUpPassInput = document.querySelector("#signupPass");
var signUpSubmitBtn = document.querySelector("#signupSubmit");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

if (localStorage.getItem(KEY) != null) {
  users = JSON.parse(localStorage.getItem(KEY));
} else {
  users = [];
}

function validateInput() {
  if (
    signUpNameInput.value.trim() !== "" &&
    signUpEmailInput.value.trim() !== "" &&
    signUpPassInput.value.trim() !== ""
  ) {
    signUpSubmitBtn.disabled = false;
  } else {
    signUpSubmitBtn.disabled = true;
  }
}

signUpNameInput.addEventListener("input", validateInput);
signUpEmailInput.addEventListener("input", validateInput);
signUpPassInput.addEventListener("input", validateInput);

function pushData() {
  var userData = {
    name: signUpNameInput.value,
    email: signUpEmailInput.value,
    password: signUpPassInput.value,
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

signUpSubmitBtn.addEventListener("click", function (e) {
  pushData();
  window.location.href = "http://127.0.0.1:5500/index.html";
});
