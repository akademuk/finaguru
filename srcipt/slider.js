$(document).ready(function(){
    $('.reviewsSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: $('.SliderPrev'),
        nextArrow: $('.SliderNext'),
        appendDots: $('.SliderDots'),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    infinite: false,
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
            {
              breakpoint: 992,
              settings: {
                  slidesToScroll: 1,
                  slidesToShow: 2,
              }
          },
          {
            breakpoint: 767,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                variableWidth: true,
                centerMode: true,
            }
        },
        ]
    });
});