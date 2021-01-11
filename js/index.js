$('.burger-meny-icon').click(function (event) {
    $('.burger-meny').toggleClass('active');
    if ($('.burger-meny').hasClass('active')) {
        $('body').css({
            'overflow': 'hidden'
        })
    } else {
        $('body').css({
            'overflow': 'visible'
        })
    }
})



$('.decoration').mouseover(function (ev) {
    if ($(window).width() >= 990) {
        $('.decoration p').css({
            'opacity': '1'
        })
    }
})

$('.decoration').mouseout(function (ev) {
    if ($(window).width() >= 990) {
        $('.decoration p').css({
            'opacity': '0'
        })
    }
})

$('.floral-design').mouseover(function (ev) {
    if ($(window).width() >= 990) {
        $('.floral-design p').css({
            'opacity': '1'
        })
    }
})

$('.floral-design').mouseout(function (ev) {
    if ($(window).width() >= 990) {
        $('.floral-design p').css({
            'opacity': '0'
        })
    }
})

$('.events').mouseover(function (ev) {
    if ($(window).width() >= 990) {
        $('.events p').css({
            'opacity': '1'
        })
    }
})

$('.events').mouseout(function (ev) {
    if ($(window).width() >= 990) {
        $('.events p').css({
            'opacity': '0'
        })
    }
})


$('.our-portfolio-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.our-portfolio-carousel-nav'
});
$('.our-portfolio-carousel-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.our-portfolio-carousel',
    dots: true,
    centerMode: false,
    focusOnSelect: true
});

