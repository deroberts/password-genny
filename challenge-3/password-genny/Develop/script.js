// Assignment code here

//fuction declaration

//how many characters
//special characters
//numeric characters
//uppercase
//lowercase
// var tagName = prompt ("please enter tag", "enter tag");
//var tagName = prompt("How many characters would you like your password to contain?");
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's' ,'t', 'u', 'v', 'w', 'x', 'y', 'z'];
var numb = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];
var passArray = [ ];
//had to create global variables. I think sometimes it uses more upper and lowercase because they are more frequent. Not sure how to fix that, unless by removing characters.

function generatePassword() {
  
  var {length, lowers, uppers, numbers, specials} = getInput ();
    console.log(`
    Length: ${length}
    Lowers: ${lowers}
    Uppers: ${uppers}
    Numbers: ${numbers}
    Specials: ${specials}
    `)
    //learned that I can use the object keys as variable names without 
    //got the true statments working. Needed to get false ones to work as well.
    //able to create else statements
    if (lowers === true) {
      var array1 = passArray.concat(lowerChar);
    }
    else var array1 = passArray;

    if (uppers === true) {
      var array2 = array1.concat(upperChar);
    }
    else var array2 = array1;

    if (numbers === true) {
      var array3 = array2.concat(numb);
    } 
    else var array3 = array2;

    if (specials === true) {
      var array4 = array3.concat(specialChar);
    } 
  
    
  function getMultipleRandom( arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  var ultimatePassword = (getMultipleRandom (array4, length));
  //finally got it, but now there are commas between each character.
  var commaPassword = (ultimatePassword.join(""));
  return commaPassword;
  }
    


console.log(generatePassword)
function getInput() {

  var chosenLength = parseInt(window.prompt("How many characters should your password include?"));
  console.log(typeof chosenLength)
  if (chosenLength < 8 || chosenLength > 128) {
    window.alert("Password must be greater than 8 characters and no more than 128 characters long.");
    getInput()
  }

  var hasLowers = window.confirm("Include lower-case characters?");
  var hasUppers = window.confirm("Include upper-case characters?");
  var hasNumbers = window.confirm ("Include numbers?");
  var hasSpecials = window.confirm ("Include special characters?");

  return {
    length: chosenLength,
    lowers: hasLowers,
    uppers: hasUppers,
    numbers: hasNumbers,
    specials: hasSpecials
  }
}







//need to figure out concat for arrays.
  
  //1 function undefined

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //"()"calling or invoking a function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// console.log(generateBtn);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


