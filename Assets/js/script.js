//the targeted variable 
var generateBtn = document.querySelector("#generate");
//types of characters
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var specialCharacters = ("!@#$%^&*()<>_");
var numbers = ("123456789");

function generatePassword() {
  console.log('PasswordBox');


// Key variables and prompt
var lengthOfPass = prompt("How many digets?");
var numberOfCharacters = [];
var characters = [];
//This limits the minimum and maximum amount of characters for the password
if(lengthOfPass < 8 || lengthOfPass > 128 || isNaN(lengthOfPass)) {
  alert('password must be a number between 8 to 128.');
  generatePassword();
}

//logger!
console.log(lengthOfPass);

//Prompt selectors
var hasLowerCase = confirm("Would you like lower case letters?");
var hasUpperCase = confirm("would you like upper case letters?");
var hasSpecialCharacters = confirm("Would you like synbols?");
var hasNumbers = confirm("Would you like numbers?");
//logger!
console.log(hasLowerCase, hasUpperCase, hasSpecialCharacters, hasNumbers, characters);
//----If statments----//
// goes through all the options
//lowercasearray
var passwordLowerArr = lowerCase.split("");
if(hasLowerCase) {
  numberOfCharacters = numberOfCharacters.concat(passwordLowerArr)
}
//uppercasearray
var passwordUpperArr = upperCase.split("");
if(hasUpperCase) {
  numberOfCharacters = numberOfCharacters.concat(passwordUpperArr)
}
//specialcharacterarray
var passwordSpecialArr = specialCharacters.split("");
if(hasSpecialCharacters) {
  numberOfCharacters = numberOfCharacters.concat(passwordSpecialArr)
}
//numberarray
var passwordNumbersArr = numbers.split("");
if(hasNumbers) {
  numberOfCharacters = numberOfCharacters.concat(passwordNumbersArr)
}

//----Statments----//
//logger!
console.log(numberOfCharacters);
//Loop
 for(var i = 0; i < lengthOfPass; i++) {
  var randomvalue = getrandomElement(numberOfCharacters);
  characters.push(randomvalue);
 }
return characters.join("");
}
//Randomizes Characters
function getrandomElement(array) {
  var randomindex = Math.floor(Math.random() * array.length);
  var randomelement = array[randomindex];
  return randomelement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

//Calls the password generator fuction, and starts the randomization options!
generateBtn.addEventListener("click", writePassword);
