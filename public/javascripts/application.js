
$().ready(function(){
  $(".rounded_bottom").each(function  () {
    $(this).corners("bottom");
  });
  $(".rounded_top").each(function  () {
    $(this).corners("top");
  });
  $(".rounded").each(function  () {
    $(this).corners();
  });
  $('.app_list li:not(.title)').hover(function  () {
    $(this).css({"background-color": "#FEFEFE"});
  },  function  () {
    $(this).css({"background-color": "#F7F7F7"});
  });
  $('a[rel*=facebox]').facebox();
  
  $('div.flash').click(function  () {
    $(this).fadeOut();
  });
});