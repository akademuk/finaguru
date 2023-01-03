$(document).ready(function () {
    if (window.matchMedia("(max-width: 576px)").matches) {
    $('.partnersSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    variableWidth: true,
    appendDots: $('.partnersSliderDots'),
    responsive: [
    {
        breakpoint: 576,
        settings: {
            slidesToScroll: 1,
            slidesToShow: 2,
            variableWidth: true,
            
        }
    },
    ]
}); 
} 
});

