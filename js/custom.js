$(document).ready(function () {

    stickyNav();


    $(window).resize(function () {
        stickyNav();
    });


    function stickyNav() {
        var navAffix = $('#navbar');
        navAffix.affix({
            offset: {
                top: navAffix.offset().top + 400
            }
        });
    }

    $("#navbar .nav a").click(function () {
        $("#navbar .nav").removeClass('open');
        $('.close-navbar').removeClass('block');
        $(".open-navbar").removeClass('none');
    });
    $('.open-navbar').click(function () {
        $("#navbar .nav").addClass('open');
        $(this).addClass('none');
        $('.close-navbar').addClass('block');
    });
    $('.close-navbar').click(function () {
        $("#navbar .nav").removeClass('open');
        $(".open-navbar").removeClass('none');
        $('.close-navbar').removeClass('block');
    });


    $('.feedback-customers').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoHeight:false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    //Section Animate Navigation
    var affixPoint = 0;
    $('.start-tour,#navbar > ul > li > a').on('click', (function (x) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            x.preventDefault();
            var target = $(this.hash);
            if (target.length && target.length > 0) {
                target = target.length ? target : $('[name=' + this.hash.attr(this, 'href') + ']');
                $('html,body').animate({
                    scrollTop: target.offset().top - affixPoint
                }, 1000, 'easeInOutExpo');
                setTimeout(function () {
                    window.location.hash = target.selector;
                }, 100);
            }
            return false
        }
    }));


});