$(document).ready(function(){
  $('.email-me').on('click',function(){
    $(this).html('<input type="text" value="patrick.n.moody@gmail.com">');
    $('.email-me input').select();
    $(this).unbind('click');
  });
});
