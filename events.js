$(document).ready(function(){

  $('#contact').click(function(event) {
    $('body, html').animate({
      scrollTop: $("#emailform").offset().top
    }, 600);

  });
}); 
