$(function(){
    $('.oil__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2500,
      autoplay: true, 
      speed: 200,
      centerMode: true,
      centerPadding: "0",
      dots: true,
      responsive: [
        {
           breakpoint: 550,
           settings: {
              slidesToShow: 1,
              slidesToScroll: 1
        }
    },
]
    });
})


$(function(){
$('.market__slider').slick({
    dots: false,
    autoplay: false,
})
})