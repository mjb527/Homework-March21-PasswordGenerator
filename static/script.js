
$(function(){
    var $select = $("#charCount");
    for (i=8;i<=128;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});

function generatePassword() {
  const selector = document.getElementById('charCount');
  const charCount = selector.options[selector.selectedIndex].value;

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

  for(let i = 0; i < charCount; i++) {
    // generate random number between 0 and length of charPool
    let rand = Math.floor((Math.random() * charPool.length));
    // get the character at the index of rand
    result = result.concat(charPool[rand]);
  }

  $("#result").html(result);

}
