var userEmailOrPhone = document.getElementById("emailInput");
var userPassword = document.getElementById("passwordInput");

var lineInvalidEmailOrPassword = document.getElementById(
  "invalidEmailPassword"
);
var linerShowPassword = document.getElementById("lineShow");

var validationEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var validationPhone = /^(010|011|012|015)[0-9]{8}$/;

function checkValidation() {
  // We User OR Becuase The First Input is One of Them (Email Or Phone)
  if (
    (validationEmail.test(userEmailOrPhone.value) ||
      validationPhone.test(userEmailOrPhone.value)) &&
    userPassword.value.length >= 8
  ) {
    return true;
  } else {
    lineInvalidEmailOrPassword.style.display = "block";
    return false;
  }
}

function focusPassword() {
  linerShowPassword.style.display = "block";
}

function bluePassword() {
  linerShowPassword.style.display = "none";
}

function lengthPassword() {
  if (userPassword.value.length < 8) {
    linerShowPassword.style.display = "block";
  } else {
    linerShowPassword.innerHTML =
      '<i class="fa-solid fa-check"></i> Password Length Is Valid';
    linerShowPassword.style.display = "block";
    linerShowPassword.style.color = "green";
  }
}

var userShowPassword = document.getElementById("showPass");
function showUserPassword() {
  if (userShowPassword.checked) {
    userPassword.type = "text";
  } else {
    userPassword.type = "password";
  }
}
