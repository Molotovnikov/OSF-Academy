import './scss/app.scss';

$(".burger-icon").on("click", function () {
    $(".header-nav").slideToggle();
    $(".burger-menu").toggleClass("burger-menu--opened")
});
