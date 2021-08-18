$(document).ready(function () {
    console.log("ready!");

    $(".house-4").click(function () {
        $('.rain, #cloud-sun').fadeIn('slow', function () {
            $(this).delay(2000).fadeOut('slow');
        });
    });

    $(".house-3-container").click(function () {
        $(".house-3-window-shades").slideToggle();
        $(".smoke").fadeToggle();
    });

    $(".house-2").click(function () {
        $(".bike-container").addClass('bike-animation');
        $(".bike-container").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (event) {
            $(".bike-container").removeClass('bike-animation')
        });
    });


    $(".house-1").click(function () {
        $(".mailtruck").addClass('mailtruck-animation');
        $(".mailtruck").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (event) {
            $(".mailtruck").removeClass('mailtruck-animation')
        });
    });


    $(".streetlamp").hover(function () {
        $(".scene").toggleClass("grayscale");
    });

    $(".house-5").click(function () {
        $(".scene").toggleClass("night");
        $(".window").toggleClass("window-night");
        $(".skyscrapers").toggleClass("skyscraper-night");
        $(".cloud").toggleClass("cloud-night");
        $(".moon").toggle();
    });

});