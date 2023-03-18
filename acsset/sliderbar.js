$(document).ready(function() {
  $(".image-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'>
    <i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'>
    <i class="fa-solid fa-arrow-right"></i></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
  });
});
// product item////////////////////////
$(document).ready(function(){
  $('.main-product-wrap').slick({
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    arrows:true,
    prevArrow: `<button type='button' class='btn-prev btn-arrow'>
    <i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow: `<button type='button' class='btn-next btn-arrow'>
    <i class="fa-solid fa-arrow-right"></i></button>`,
    autoplaySpeed: 2000
  });
});

