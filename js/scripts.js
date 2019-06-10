$("document").ready(function(){
  $('#1').click(function(){
    $("#p1").fadeToggle(1000);
    $("#img1").fadeToggle(1000);
  });
  $('#2').click(function(){
    $("#p2").fadeToggle(1000);
    $("#img2").fadeToggle(1000);
  });
  $('#3').click(function(){
    $("#p3").fadeToggle(1000);
    $("#img3").fadeToggle(1000);
  });
});
$("document").ready(function(){

$("#button").Click(function(){
  alert("Thank you for contacting us.");
});
$('.portfolio')(function(){
  $('.col-3','.img-fluid').hover();
  $('.col-3', '.img-fluid').toggle();
  $('.col-3 p').show();
});
});
