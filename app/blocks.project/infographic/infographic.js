"use strict";

$(function() {

  let slickInfographic = $(".infographic__slider").slick({
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
    dots: true,
    customPaging : function(slider, i) {
      let thumb = $(slider.$slides[i]).data("thumb");
      let text = $(slider.$slides[i]).data("text");
      return '<div class="infographic__thumb-img-container"><span class="infographic__thumb-number">'+(i+1)+'</span><img src="'+thumb+'" class="infographic__thumb-img" alt=""></div><p class="infographic__thumb-text">'+text+'</p>';
    },
    adaptiveHeight: true,
    arrows: false,
    appendDots: $(".infographic__dots")
  });

  $(".infographic__next").click(function() {
    slickInfographic.slick('slickNext');
  });
  $(".infographic__prev").click(function() {
    slickInfographic.slick('slickPrev');
  });

});
