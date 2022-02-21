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
                items: 1,
                stagePadding: 20,
                margin: 20,
            },
            400: {
                items: 1,
                margin: 70,
                stagePadding: 70,
            },
            600: {
                items: 2,
                margin: 70,
                stagePadding: 70,
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

    var table = $('#example').DataTable();
    $('#search-inp').on('keyup',function(){
        table.search($(this).val()).draw() ;
    });

    
});