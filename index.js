$(document).ready(function () {
    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        loop: true,
        dots: true,
        items: 1,
    });

    // top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            100: {
                items: 5,
            },
        },
    });
});