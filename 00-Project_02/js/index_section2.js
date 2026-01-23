$(function(){

    //tabSlide

    var slide = $('.s-thumbs>ul'); //슬라이드 이미지1

    var slideListWidth = $('.s-thumbs>ul>li').width();

    var setInterval01;

    mainSlide();

    function mainSlide() {
        setInterval01 = setInterval(function () {
            slide.stop().animate({left: -slideListWidth}, 800, function () {
                $('.s-thumbs>ul>li:first').insertAfter('.s-thumbs>ul>li:last');
                slide.css('left', 0);
            });
        }, 2000);
    }

    $('.s-thumbs ul, .prev1_2, .next1_2').hover(function () {
        clearInterval(setInterval01);
    }, function () {
        mainSlide();
    });


    function next1_1() {
        slide.stop().animate({
            left: -slideListWidth
        }, 500, function () {

            $('.s-thumbs>ul>li:first').insertAfter('.s-thumbs>ul>li:last');
            slide.css('left', 0);
        });

    }

    function prev1_1() {
        $('.s-thumbs>ul>li:last').insertBefore('.s-thumbs>ul>li:first');
        slide.css('left', -slideListWidth);
        slide.animate({
            left: 0
        }, 500);

    }


    $('.next1_2').click(function () {
        next1_1();
    });

    $('.prev1_2').click(function () {
        prev1_1();
    });
    

});