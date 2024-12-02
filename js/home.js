var users = localStorage.getItem("currentUser");
// console.log(users);

var userName = document.querySelector("#userName");
var homeForm = document.querySelector("#homeForm");
var homeBtn = document.querySelector("#homeBtn");

homeForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

homeBtn.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "http://127.0.0.1:5500/index.html";
});

userName.textContent = `Welcome ${users}`;
