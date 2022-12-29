$(document).ready(function(){
    $('.partnersSlider').slick({
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // dots: false,
        // arrows: false,
        // prevArrow: $('.partnersSliderPrev'),
        // nextArrow: $('.partnersSliderNext'),
        // appendDots: $('.partnersSliderDots'),
        settings: "unslick",
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                 settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
            }
        ]
    });
});