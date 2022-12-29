$(document).ready(function(){
    $('.articleSlider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        variableWidth: true,
        prevArrow: $('.articleSliderPrev'),
        nextArrow: $('.articleSliderNext'),
    });
});