import './scss/app.scss';
let year = new Date().getFullYear();

$(".burger-icon").on("click", function () {
    $(".header-nav").slideToggle();
    $(".burger-menu").toggleClass("burger-menu--opened")
});

$('.first-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});

$('.carousel-wrapper-second').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
});

$(".current-year").text(year);

// ajax call to Products

$(".Loadmore").on("click", function () {
    
    $.ajax({
        url: './data.json',
        dataType: 'json',
        crossDomain: true,
        method: 'GET',
        success: function(data) {
            
        }
    });

});