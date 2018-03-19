"use strict";

$(function() {

  var mapHeight = $(".section-contacts__map");

  $(".map-leave__item_top").click(function(){
    $("html, body").animate({
      scrollTop: mapHeight.offset().top - document.documentElement.clientHeight
    }, "slow");
  });

  $(".map-leave__item_bottom").click(function(){
    $("html, body").animate({
      scrollTop: mapHeight.outerHeight() + mapHeight.offset().top
    }, "slow");
  });

});
