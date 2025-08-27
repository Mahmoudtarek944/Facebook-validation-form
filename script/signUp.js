var firstUserName = document.getElementById("firstName");
var firstUserNameInput = document.getElementById("firstNameInput");

var lastUserName = document.getElementById("lastName");
var lastUserNameInput = document.getElementById("lastNameInput");

var emailUserName = document.getElementById("emailName");
var emailUserNameInput = document.getElementById("emailNameInput");

var phoneUserName = document.getElementById("phone");
var phoneUserNameInput = document.getElementById("phoneInput");

var validationEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var validationPhone = /^(010|011|012|015)[0-9]{8}$/;

var passwordUserName = document.getElementById("passwordName");
var passwordUserNameInput = document.getElementById("passwordNameInput");

var confirmPasswordUserName = document.getElementById("confirmPasswordName");
var confirmPasswordUserNameInput = document.getElementById(
  "confirmPasswordNameInput"
);

var genderUserName = document.getElementById("genderchose");

var dateUser = document.getElementById("data");
var dateUserInput = document.getElementById("dataInput");

function toValidateUpperCaseForFirstNameAndLastName(name) {
  // invalid system becuase if the user enter first name is (111) the first number is not uppcase or not lowercase to convert
  //   var firstCharForFirstNameInput = firstUserNameInput.value[0].toUpperCase();
  //   if (
  //     firstUserNameInput.value.length < 3 ||
  //     firstUserNameInput.value[0] !== firstCharForFirstNameInput
  //   ) {
  if (name.charCodeAt(0) >= 65 && name.charCodeAt(0) <= 90) {
    return true;
  } else {
    // name[0] = name[0].toUpperCase();
    // return name;
    return false;
  }
}

function checkFirstName() {
  if (
    firstUserNameInput.value.length >= 3 &&
    toValidateUpperCaseForFirstNameAndLastName(firstUserNameInput.value)
  ) {
    firstUserName.innerHTML = "First Name :";
    firstUserName.style.color = "rgb(39, 119, 242)";
    return true;
  } else {
    firstUserName.innerHTML = "Please Enter Valid User Name";
    firstUserName.style.color = "red";
    return false;
  }
}

function checkLastName() {
  if (
    firstUserNameInput.value.length >= 3 &&
    toValidateUpperCaseForFirstNameAndLastName(lastUserNameInput.value)
  ) {
    lastUserName.innerHTML = "Last Name :";
    lastUserName.style.color = "rgb(39, 119, 242)";
    return true;
  } else {
    lastUserName.innerHTML = "Please Enter Valid User Name";
    lastUserName.style.color = "red";
    return false;
  }
}

function checkEmail() {
  if (validationEmail.test(emailUserNameInput.value)) {
    emailUserName.innerHTML = "Email : ";
    emailUserName.style.color = "rgb(39, 119, 242)";
    return true;
  } else {
    emailUserName.innerHTML = "Please Enter Valid Email";
    emailUserName.style.color = "red";
    return false;
  }
}

function checkPhone() {
  if (validationPhone.test(phoneUserNameInput.value)) {
    phoneUserName.innerHTML = "Phone Number : ";
    phoneUserName.style.color = "rgb(39, 119, 242)";
    return true;
  } else {
    phoneUserName.innerHTML = "Please Enter Valid Phone Number";
    phoneUserName.style.color = "red";
    return false;
  }
}

function checkPassword() {
  if (
    passwordUserNameInput.value.length >= 8 &&
    (passwordUserNameInput.value.includes("*") ||
      passwordUserNameInput.value.includes("!") ||
      passwordUserNameInput.value.includes("#"))
  ) {
    passwordUserName.innerHTML = "Password : ";
    passwordUserName.style.color = "rgb(39, 119, 242)";
    return true;
  } else {
    passwordUserName.innerHTML = "Please Enter Valid Password";
    passwordUserName.style.color = "red";
    return false;
  }
}

function checkConfirmPassword() {
  if (confirmPasswordUserNameInput.value === passwordUserNameInput.value) {
    confirmPasswordUserName.innerHTML = "Confirm Password";
    confirmPasswordUserName.style.color = "rgb(39, 119, 242)";
    return true;
  } else {
    confirmPasswordUserName.innerHTML = "Password Not Match";
    confirmPasswordUserName.style.color = "red";
    return false;
  }
}

function checkGender() {
  var genderUserNameInput = document.getElementsByClassName("gender");
  for (var i = 0; i < genderUserNameInput.length; i++) {
    if (genderUserNameInput[i].checked) {
      genderUserName.innerHTML = "Gender: ";
      genderUserName.style.color = "rgb(39, 119, 242)";
      return true;
    }
  }
  //   If not selected any option
  genderUserName.innerHTML = "Gender Must Be Selected";
  genderUserName.style.color = "red";
  return false;
}

function checkDate() {
  if (dateUserInput.value) {
    dateUser.innerHTML = "Birthdate";
    dateUser.style.color = "rgb(39, 119, 242)";
    return true;
  } else {
    dateUser.innerHTML = "Birthdata Must Be Selected";
    dateUser.style.color = "red";
    return false;
  }
}

function checkValidationForm() {
  if (
    checkFirstName() &&
    checkLastName() &&
    checkEmail() &&
    checkPhone() &&
    checkPassword() &&
    checkConfirmPassword() &&
    checkGender() &&
    checkDate()
  ) {
    return true;
  } else {
    return false;
  }
}
