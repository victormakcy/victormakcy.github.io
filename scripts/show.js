$(document).ready(function(){
  $("#name").hide(0).delay(400).fadeIn(1000);
  $("#message").hide(0).delay(900).fadeIn(1000);
  $("#selection-projects").click(function() {
  	$("#projects").hide(0).delay(200).fadeIn(1000);
  });
});