var input = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

//show the validation box
input.onfocus = function () {
  document.getElementById("validation").style.display = "block";
};
//hide the validation box
input.onblur = function () {
  document.getElementById("validation").style.display = "none";
};

//user click on input and type something then the validation box display
input.onkeyup = function () {
  
  //Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (input.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //validate uppercase letters
  var upperCaseLetters = /[A-Z]/g;
  if (input.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //validate numbers
  var numbers = /[0-9]/g;
  if (input.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //validate length
  if (input.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
