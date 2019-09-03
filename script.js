$(function(){
　$('h6').addClass('showUp');
});

$(function(){
$('img').css("opacity","0");
$(window).scroll(function (){
  $('img').each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 200){
      $(this).animate({
        "opacity": "1"
      }, 1000);
    }
  });
});

});

$(function(){
$('.text-box').css("opacity","0");
$(window).scroll(function (){
  $('.text-box').each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 200){
      $(this).animate({
        "margin-right":"0",
        "opacity": "1"
      }, 1000);
    }
  });
});

});

$(function(){
$('h1,h3').css("opacity","0");
$(window).scroll(function (){
  $('h1,h3').each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 200){
      $(this).animate({
        "opacity": "1"
      }, 1000);
    }
  });
});

});

$(function(){
$('p').css("opacity","0");
$(window).scroll(function (){
  $('p').each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 200){
      $(this).animate({
        "opacity": "1"
      }, 3000);
    }
  });
});

});
