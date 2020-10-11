$(document).ready(function(){
  // preloder
    $(window).on('load', function(){
      $('.preloader').delay(100).fadeOut(100);
  });
    // slick-slider-home
    $('.banner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows:true,
        autoplay:true,
        cssEase: 'linear',
        prevArrow:'<i class="fas fa-angle-left arrow-left"></i>',
        nextArrow:'<i class="fas fa-angle-right arrow-right"></i>',
      });
     
    // slick-slider-home
    // filter-product
    $("#filteriz").mixItUp();
    // filter-product-end
  // latest-product
// client-slider
$(".owl-carousel").owlCarousel({
  loop: true,
  dots: true,
  margin: 15,
  slidesToShow: 4,
  slidesToScroll: 4,
  slideSpeed: 1000,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  resonsiveClass: true,
  responsiveRefreshRate: true,
  responsive: {
      0 : {
          items: 1
      },
      768 : {
          items: 2
      },
      1000 : {
          items: 3
      },
      1200 : {
          items: 4
      },
      1920 : {
          items: 4
      }
  }
});  
  // latest-product-end
});
// coming-son
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock(){
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock,1000);
}

// LAUNCH DATE
// USE CHRISTMAS DAY so countdown is not a negative value for foreseeable future
var deadline = 'december 25 2020 00:00:00 UTC';
initializeClock('countdown', deadline);
// coming-son-end
  