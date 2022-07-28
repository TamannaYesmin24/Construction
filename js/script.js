// counter part start
$('.counter').counterUp({
    delay: 30,
    time: 2000
})
  // counter part end


  // $('.sponsorship-wrapper').slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: false,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   initialSlide: 2,
  // })

  $('.team-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 1,
    prevArrow: '.left',
    nextArrow: '.right',
    responsive: [
      // xtra small start
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      // xtra small end
      // small start
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      // small end
      // medium start
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      // medium end
    ]
  })

// sticky menu start
$(function(){
  // $(window). scroll(function(){
  //   var fixed = $(this).scrollTop()
  //   if (fixed>200) {
  //     $(".menu").addClass("sticky-menu")
  //   }
  //   else{
  //     $(".menu").removeClass("sticky-menu")
  //   }
  //   this is for sticky menu padding
  //   if (fixed > 200) {
  //     $(".navbar-brand").addClass("scroll-logo")
  //   }
  //   else {
  //     $(".navbar-brand").removeClass("scroll-logo")
  //   }
  // })

  // sticky menu start
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    //this is for sticky menu
    if (sticky > 50) {
      $(".menu").addClass("sticky-menu")
    } else {
      $(".menu").removeClass("sticky-menu")
    }
    //this is for sticky menu padding
    if (sticky > 50) {
      $(".navbar-brand").addClass("scroll-logo")
    } else {
      $(".navbar-brand").removeClass("scroll-logo")
    }
  });
  // sticky menu end
});
// sticky menu end