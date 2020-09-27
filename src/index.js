import './scss/app.scss';

$(".burger-icon").on("click", function () {
    $(".header-nav").slideToggle();
    $(".burger-menu").toggleClass("burger-menu--opened")
});

$('.carousel-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});