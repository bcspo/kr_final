$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        effect: 'fade',
        speed: 1000,
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    $('.main_visual_slide .arrows .arrows-prev').on('click', function () {
        mainVisualSlide.slidePrev()
    })
    $('.main_visual_slide .arrows .arrows-next').on('click', function () {
        mainVisualSlide.slideNext()
    });
    var swiper = new Swiper(".news", {
        loop: true,
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('#header .main_menu>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('#header .gnb>ul>li ul').removeAttr('style')
    });
})