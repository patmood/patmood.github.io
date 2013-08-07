$(document).ready(function(){

  $('.email-me').on('click',function(){
    $(this).html('<input type="text" value="patrick.n.moody@gmail.com">');
    $(this).unbind('click');
    window.prompt ("Copy to clipboard: Ctrl+C, Enter", "patrick.n.moody@gmail.com");
  });

});
