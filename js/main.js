$(document).ready(function() {


    if (window.location.hash) {
        var offset = -120;
        $('html, body').animate({
            scrollTop: ($(window.location.hash).offset().top + offset) + 'px'
        }, 1000, 'swing');
    }


    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    AOS.init({
        easing: 'ease',
        startEvent: 'DOMContentLoaded',
        disable: function() {
            var maxWidth = 500;
            return window.innerWidth < maxWidth;
        }
    });


    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800, 'easeInOutExpo');
        return false;
    });


    // Header scroll class
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $("#header").css({ "position": "fixed" });
            // $("#header .btn-download-app").css({ "position": "fixed", "top": "16px", "right": "72px" });
            $("#header .ion-android-menu").css({ "position": "fixed", "top": "inherit", "right": "16px" });
        } else {
            $('#header').removeClass('header-scrolled');
            $("#header").css({ "position": "inherit" });
            // $("#header .btn-download-app").css({ "position": "inherit" });
            $("#header .ion-android-menu").css({ "position": "inherit", "top": "48px", "right": "inherit" });
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }


    var showChar = 80;
    var ellipsestext = "...";
    $('.more-80').each(function() {
        var content = $(this).html();
        if (content.length > showChar) {
            var c = content.substr(0, showChar);
            var html = c + ellipsestext;
            $(this).html(html);
        }
    });


    $('.owl-carousel_liquidity').owlCarousel({
        loop: true,
        margin: 110,
        stagePadding: 100,
        nav: true,
        navText: ["<img src='./imgs/icon-prev.png'>","<img src='./imgs/icon-prev.png'>"],
        dots: false,
        // autoplay:true,
        // autoplayTimeout:3000,
        // autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2,
                margin: 10,
                stagePadding: 10,
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    $("#profile-down").on("click", function() {
        $(".caret-down").slideToggle();
    })
    $(".language span").on("click", function() {
        $(".language-list").slideToggle();
    })
});

//refresh animations
$(window).on('load', function() {
    AOS.refresh();
});

$(".support__box-li").click(function()  {
    $(".support__box-li").removeClass("active");
    $(this).addClass("active");
    $(".support__box-content>div").removeClass("active");
    $($(this).data("ref")).addClass("active");
});

$(".question__item").on("click", function() {
    $(this).find("i").toggleClass("ion-plus-round");
    $(this).find("i").toggleClass("ion-minus-round");
    
    $(this).find(".question__item-content").slideToggle();
    // console.log($(this));
})