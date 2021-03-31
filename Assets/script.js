// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passAttributes = {
    characters: "",
    passLength: 0,
  };

  uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  numericChars = "0123456789";
  specialChars = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // Prompt to start the password generator //
  alert("Start the password generator now?");

  // Prompt to specify character length //
  passAttributes.passLength = prompt(
    "Please specify how many characters you want in your password, between 8-128 characters"
  );
  if (passAttributes.passLength < 8) {
    alert(
      [passAttributes.passLength] +
        " is less than 8 characters, length is set to minimum of 8 characters"
    );
    return;
  }
  if (passAttributes.passLength > 128) {
    alert(
      [passAttributes.passLength] +
        " is more than 128 characters, length is set to a maximum of 128 characters"
    );
    return;
  }

  // prompt to confirm password character types wanted in the password criteria
  var lowercaseChoice = confirm(
    "Do you want lowercase characters in your password?"
  );
  if (lowercaseChoice) {
    passAttributes.characters += lowercaseChars;
  }
  console.log(lowercaseChars);

  var uppercaseChoice = confirm(
    "Do you want upperCase characters in your password?"
  );
  if (uppercaseChoice) {
    passAttributes.characters += uppercaseChars;
  }
  console.log(uppercaseChars);

  var numericChoice = confirm(
    "Do you want numeric characters in your password?"
  );
  if (numericChoice) {
    passAttributes.characters += numericChars;
  }
  console.log(numericChars);

  var specialChoice = confirm(
    "Do you want Special characters in your password?"
  );
  if (specialChoice) {
    passAttributes.characters += specialChars;
  }
  console.log(specialChars);

  // if no criteria was selected, then user will end the prompt //
  if (
    !lowercaseChoice &&
    !uppercaseChoice &&
    !numericChoice &&
    !specialChoice
  ) {
    alert(
      "You did not select any password attributes, please start over again!"
    );
    return;
  }
  // Generate password function is ran with the passAttributes parameter included
  console.log(passAttributes);
  var password = generatePassword(passAttributes);
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

// our function to run that will generate our random password using our characters and length requirement //
function generatePassword(passAttributes) {
  var password = "";
  for (var i = 0; i < passAttributes.passLength; i++) {
    password +=
      passAttributes.characters[
        Math.floor(Math.random() * passAttributes.characters.length)
      ];
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);
//start

// 1. User clicks the generate button..
// 2. Prompt comes up to start the password generator //
// 2a. user clicks ok//
// 3. THEN Prompt to specify character length of the password //
// 3a. user will input a number ranging from 8-128 and click ok//
// 3b. if character length requirement was not met properly, user will be alerted that they did not meet the requirement and the prompt will restart //
// 4. THEN  a prompt to confirm password character types wanted in the password criteria, we will have four prompts in total //
// 4a. user will click "ok" or "cancel" for each of the 4 types-lc/up/num/spec //
// 5. if no criteria was selected, then user will be alerted that they must select criteria and the prompt will restart //

//our generatePassword function will run, taking our characters variable and passLength variable and put it into a for-loop to randomize the password.

// 6. after criteria is selected, a random password is generated and displayed in the box above the "generate" button //

// end
