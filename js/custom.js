$(function(){

  // for preload
  $(".preload").delay(2000).fadeOut();

  // for color change
  // $(".default").click(function(){
  //   $("body").removeClass("carrot midnightblue alizarin sunflower greensea");
  // });
  // even binding style
  $(".default").on('click', function(){
    $("body").removeClass("carrot midnightblue alizarin sunflower greensea");
  });
  
  $(".greensea").click(function(){
    $("body").addClass("greensea").removeClass("carrot midnightblue alizarin sunflower");
  });

  $(".carrot").click(function(){
    $("body").addClass("carrot").removeClass("greensea midnightblue alizarin sunflower");
  });

  $(".midnightblue").click(function(){
    $("body").addClass("midnightblue").removeClass("carrot greensea alizarin sunflower");
  });

  $(".alizarin").click(function(){
    $("body").addClass("alizarin").removeClass("carrot midnightblue greensea sunflower");
  });

  $(".sunflower").click(function(){
    $("body").addClass("sunflower").removeClass("carrot midnightblue alizarin greensea");
  });

  //for slider
  $('.banner-slider').slick({
    arrows:false, //arrow remove korar jonno
    dots:true,
    autoplay: false,
    fade: true,
    autoplaySpeed: 3000,
  });

  // about popup video
    $('.venobox').venobox();

  // team slider
  $('.team-slider').slick({
    arrows: false,
    slidesToShow: 4,
  });

  // testimonial-slider
  $('.testimonial-slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    autoplay:true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplay: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true

        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // counter up
  $('.counter').counterUp({
    delay:10,
    time:1000
  });

  //brand-slider
  $('.brand-slider').slick({
    slidesToShow: 5,
    prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          autoplay: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          arrows: true,
          autoplay: true

        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});