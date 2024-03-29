
$(document).ready(function () {
  $("#myModal").modal('show');
});

$(document).ready(function () {

  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

  

  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    nav: true,
    margin: 10,
    responsiveClass: true,

    responsive: {
      0: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: false,
      }
    },
  });

});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});