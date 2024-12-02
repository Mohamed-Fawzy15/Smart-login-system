var users = [];

// LogIn
var loginForm = document.querySelector("#loginForm");
var loginSubmitBtn = document.querySelector("#loginSubmit");
var loginEmailInput = document.querySelector("#loginEmail");
var loginPasswordInput = document.querySelector("#loginPass");

if (localStorage.getItem("users") === null) {
  users = [];
} else {
  users = JSON.parse(localStorage.getItem("users"));
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

function validateInput() {
  if (
    loginEmailInput.value.trim() !== "" &&
    loginPasswordInput.value.trim() !== ""
  ) {
    loginSubmitBtn.disabled = false;
  } else {
    loginSubmitBtn.disabled = true;
  }
}

loginEmailInput.addEventListener("input", validateInput);
loginPasswordInput.addEventListener("input", validateInput);

loginSubmitBtn.addEventListener("click", function () {
  for (var i = 0; i < users.length; i++) {
    if (
      loginEmailInput.value === users[i].email &&
      loginPasswordInput.value === users[i].password
    ) {
      localStorage.setItem("currentUser", users[i].name);
      window.location.href = "http://127.0.0.1:5500/pages/home.html";
    }
  }
});
