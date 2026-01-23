$(function(){
    
    var slide1 = $('.cont_slide');
    var slideList1 = $('.cont_slide>li');
    var slideListWidth1 = $('.cont_slide>li').width();

    var current = 0;

    var setInterval01;

    mainSlide1();

    function mainSlide1() {
        setInterval01 = setInterval(function () {
            slide1.stop().animate({
                left: -slideListWidth1
            }, 500, function () {
                $('.cont_slide>li:first').insertAfter('.cont_slide>li:last');
                slide1.css('left', '60px');
            });
        }, 2000);
    }

    $('.cont_slide, .prev22_1, .next22_2').hover(function () {
        clearInterval(setInterval01);
    }, function () {
        mainSlide1();
    });

    function next1_1() {
        slide1.stop().animate({
            left: -slideListWidth1
        }, 500, function () {

            $('.cont_slide>li:first').insertAfter('.cont_slide>li:last');
            slide1.css('left', '60px');
        });

    }

    function prev1_1() {
        $('.cont_slide>li:last').insertBefore('.cont_slide>li:first');
        slide1.css('left', -slideListWidth1);
        slide1.animate({
            left: '60px'
        }, 500);

    }






    $('.next1_1').click(function () {
        next1_1();
    });

    $('.prev1_1').click(function () {
        prev1_1();
    });

    
});