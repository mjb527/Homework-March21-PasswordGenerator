// Assignment Code
// var generateBtn = document.querySelector("#getForm");

// Add event listener to generate button
// generateBtn.addEventListener("click", showForm);

// easier way to populate the dropdown
$(function(){
  let $select = $("#charCount");
  for (i=8;i<=128;i++) {
      $select.append($('<option></option>').val(i).html(i))
  }
});

function getPassword() {

  let result = "";

  const selector = document.getElementById('charCount');
  const charCount = selector.options[selector.selectedIndex].value;

  // booleans for later check
  let hasUpper = false;
  let hasNum = false;
  let hasSpecial = false;

  // assign the proper values to booleans
  if($("#upper").is(':checked')) hasUpper = true;
  if($("#number").is(':checked')) hasNum = true;
  if($("#special").is(':checked')) hasSpecial = true

  // check to see that it meets all of the criteria, create new until it does
  while(hasUpper && /[A-Z]+/.test(result) == false ||
      hasNum && /\d+/.test(result) == false ||
      hasSpecial && /[<>\?/,\.!@`#\$%\^&\*()\[\]]+/.test(result) == false ||
      result.length != charCount)
        result = generatePassword(charCount);

  // once all the criteria are met, set the value of '#password'
  $("#password").html(result);

}

function generatePassword(charCount) {

  let charPool = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numbers = '0123456789'.split('');
  const special = "<>?/,.!@`#$%^&*()[]\\`".split('');

  if($("#upper").is(':checked'))
      charPool = charPool.concat(uppers);

  if($("#number").is(':checked'))
      charPool = charPool.concat(numbers);

  if($("#special").is(':checked'))
      charPool = charPool.concat(special);

  let result = '';

  // populate the result variable, run until each type of Character is selected
  for(let i = 0; i < charCount; i++) {
    // generate random number between 0 and length of charPool
    let rand = Math.floor((Math.random() * charPool.length));

    // get the character at the index of rand
    result = result.concat(charPool[rand]);
  }

  return result;

}

// display the form when the Begin button is pressed
function getForm() {
  $('#daForm').css('display', 'block');
  $('#footer').css('display', 'none');
}
