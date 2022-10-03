// Assignment code here

//fuction declaration

//how many characters
//special characters
//numeric characters
//uppercase
//lowercase
// var tagName = prompt ("please enter tag", "enter tag");
//var tagName = prompt("How many characters would you like your password to contain?");


function generatePassword() {

    var {length, lowers, uppers, numbers, specials} = gatherInput ();
    console.log(`
    Length: ${length}
    Lowers: ${lowers}
    Uppers: ${uppers}
    Numbers: ${numbers}
    Specials: ${specials}
    `)
  // var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  // var x = 8;
  // var userInput = window.prompt("Choose the number of characters would you like your password to contain?");
  //     console.log(userInput);
  // //ok, now I need to get the number from userInput and have it generate random letters, numbers, etc..    
  // if (userInput <= 7 || userInput >= 126) {
  //     window.alert("you must construct additional pylons!");
  // } else { 
  //   var userConfirm1 = confirm("Would you like to use special characters? If yes, click OK. If no, click Cancel.");
  //   confirm("would you like to add numeric characters?");
  //   confirm("would you like to add uppercase letters?");
  //   confirm("would you like to add lowercase letters?");
  // }

}

function gatherInput() {}

// function generateString(length) {
//   let result = ' ';
//   const charactersLength = characters.length;
//   for ( let i = 0; i < length; i++ ) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
// }

// console.log(generateString(5));


//ok now I need to find a way to store var sch if yes or no. 
  // if (sch == false) {
  //   confirm("numeric characters?");
  // } else {
  //   if (confirm("Would you like to use special characters? If yes, click OK. If no, click Cancel." == false)) {
  //     confirm("why are you lame?"); }





//need to figure out concat for: return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
  
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


