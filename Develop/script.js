// Assignment Code
var generateBtn = document.querySelector("#getForm");

// easier way to populate the dropdown
$(function(){
    let $select = $("#charCount");
    for (i=8;i<=128;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  const selector = document.getElementById('charCount');
  const charCount = selector.options[selector.selectedIndex].value;

  let charPool = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numbers = '0123456789'.split('');
  const special = "<>?/,.!@`#$%^&*()[]\\`".split('');

  // booleans for later check
  let hasUpper = false;
  let hasNum = false;
  let hasSpecial = false;

  if($("#upper").is(':checked')) {
          charPool = charPool.concat(uppers);
          hasUpper = true;
  }

  if($("#number").is(':checked')) {
          charPool = charPool.concat(numbers);
          hasNum = true;
  }

  if($("#special").is(':checked')) {
            charPool = charPool.concat(special);
            hasSpecial = true;
  }

  let result = '';

  // populate the result variable, run until each type of Character
  // is selected
  for(let i = 0; i < charCount; i++) {
    // generate random number between 0 and length of charPool
    let rand = Math.floor((Math.random() * charPool.length - 1));
    console.log(rand);
    // get the character at the index of rand
    result = result.concat(charPool[rand]);
  }

  if(hasUpper && /[0-9]+/.test(result) == false)
    generatePassword();

  // regex to check if there is a number in the result string
  // if not, generate again
  if(hasNum && /\d+/.test(result) == false)
    // if no matches, call function again)
    generatePassword();

  // use regex to see if there is a special character in the result string
  if(hasSpecial && /[<>\?/,\.!@`#\$%\^&\*()[]/.test(result) == false)
      generatePassword();

  // final check to be sure it's the right length
  if(result.length < charCount)
      generatePassword();

  console.log('Result length: ' + result.length);

  $("#password").html(result);

}

// display the form when the Begin button is pressed
function getForm() {
  $('#daForm').css('display', 'block');
}

// Add event listener to generate button
generateBtn.addEventListener("click", showForm);
