"use strict";

$(function() {

  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $(".to-top").fadeIn();
    } else {
      $(".to-top").fadeOut();
    }
  });

  $(".to-top").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);

    return false;
  });

});
