// Assignment code here
var charset = "abcdefghijklmnopqrstuvwxyz";
var charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charset3 = "0123456789";
var charset4 = "!#$%&'()*+,-./:;<=>?@][\^_`{|}~";
var p_length = 0;
var list = "";
var valid = false;

function generatePassword(){

var choice = window.prompt("What is the length of the password? (Min:8, Max:128)");
  x = +choice;
  p_length = x;

var choice = window.prompt("Lowercase letters? (Y/N)");
choice = choice.toUpperCase();
if (choice === "Y"){
  list = list + charset;
} else {}
var choice = window.prompt("Uppercase letters? (Y/N)");
choice = choice.toUpperCase();
if (choice === "Y"){
  list = list + charset2;
} else {}
var choice = window.prompt("Numbers? (Y/N)");
choice = choice.toUpperCase();
if (choice === "Y"){
  list = list + charset3;
} else {}
var choice = window.prompt("Special characters? (Y/N)");
choice = choice.toUpperCase();
if (choice === "Y"){
  list = list + charset4;
} else {}

if (isNaN(x)){
  alert("Invalid length");
  return "Could not generate";
} else if (list == ""){
  alert("No characters")
  return "Could not generate";
} else {
var n = list.length;
var p = "";
for (var i = 0;i < p_length; i++){
  p = p + list.charAt(Math.floor(Math.random() * n));
}
return p;
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
