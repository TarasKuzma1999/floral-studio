$('.burger-meny-icon').click(function (event) {
    $('.burger-meny').toggleClass('active');
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

