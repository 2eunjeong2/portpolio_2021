$(function () {
    
    //숨김메뉴
    $('#nav_wrap').hide();
    $('#nav_open').click(function () {
        $('#nav_wrap').css('display', 'block');
        
    });

    $('#nav_close').click(function () {
        $('#nav_wrap').css('display', 'none');
    });


    /* 서브메뉴 */
    $("ul.depth1 > li").focusin(function(){ 
        $(this).children(".depth2").stop().slideDown();
        $(this).addClass('on')
    }); 
    $("ul.depth1 > li").focusout(function(){ 
        $(this).children(".depth2").stop().slideUp(); 
        $(this).removeClass('on')
    });

    /* 탑버튼 */
    $('#top_btn>a').hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>500){ //스크롤의 위치가 500보다 크다면
            $('#top_btn>a').fadeIn();
    
        }else{
            $('#top_btn>a').fadeOut();
    
        }
    });
    $('#top_btn>a').click(function(){
        $('html,body').animate({scrollTop:0},400);
        return false; //원래의 기본속성 무시
    });


    /* 메인 슬라이드 이미지 */
    



    /* cont1 번호 슬라이드 */

    var banner1_1 = $('.cont1_slide1 > div');
    var button1_1 = $('.arrow1_1_center>p.next');
    var button1_2 = $('.arrow1_1_center>p.prev');
    var current1_1 = 0;
    var p1_1 = $('.section_number1>p');

    var banner2_1 = $('.cont2_slide1 > div');
    var button2_1 = $('.arrow2_1_center>p.next');
    var button2_2 = $('.arrow2_1_center>p.prev');
    var current2_1 = 0;
    var p2_1 = $('.section_number2>p');


    button1_1.click(function(){
        var prev1_1 = banner1_1.eq(current1_1);
        var pn1_1 = p1_1.eq(current1_1);

        prev1_1.removeClass('active');
        pn1_1.removeClass('bl');

        current1_1++;

        if(current1_1==banner1_1.size()){current1_1=0;}
        var next1_1= banner1_1.eq(current1_1);
        var pnn1_1 = p1_1.eq(current1_1);
        next1_1.addClass('active');
        pnn1_1.addClass('bl');

        return false;

    });




    button1_2.click(function(){
        var prev1_1 = banner1_1.eq(current1_1);
        var pn1_1 = p1_1.eq(current1_1);

        prev1_1.removeClass('active');
        pn1_1.removeClass('bl');

        current1_1--;

        if(current1_1 == -banner1_1.size()){current1_1=0;}
        var next1_1= banner1_1.eq(current1_1);
        var pnn1_1 = p1_1.eq(current1_1);
        next1_1.addClass('active');
        pnn1_1.addClass('bl');

        return false;

    });


    button2_1.click(function(){
        var prev2_1 = banner2_1.eq(current2_1);
        var pn2_1 = p2_1.eq(current2_1);

        prev2_1.removeClass('active');
        pn2_1.removeClass('bl');

        current2_1++;

        if(current2_1==banner2_1.size()){current2_1=0;}
        var next2_1= banner2_1.eq(current2_1);
        var pnn2_1 = p2_1.eq(current2_1);
        next2_1.addClass('active');
        pnn2_1.addClass('bl');

        return false;

    });




    button2_2.click(function(){
        var prev2_1 = banner2_1.eq(current2_1);
        var pn2_1 = p2_1.eq(current2_1);

        prev2_1.removeClass('active');
        pn2_1.removeClass('bl');

        current2_1--;

        if(current2_1 == -banner2_1.size()){current2_1=0;}
        var next2_1= banner2_1.eq(current2_1);
        var pnn2_1 = p2_1.eq(current2_1);
        next2_1.addClass('active');
        pnn2_1.addClass('bl');

        return false;

    });


    
    /* cont2 슬라이드 */
    var slide2_1 = $('.cont_slide');
    var slideListWidth2_1 = $('.cont_slide>li').width();
    var current2_1 = 0;
    var setInterval2_1;


    Slide2_1();

    function Slide2_1() {
        setInterval2_1 = setInterval(function () {
            slide1.stop().animate({
                left: -slideListWidth2_1
            }, 500, function () {
                $('.cont_slide>li:first').insertAfter('.cont_slide>li>li:last');
                slide2_1.css('left', 0);
            });
        }, 2000);
    }

    $('.cont_slide, .prev22_1, .next22_2').hover(function () {
        clearInterval(setInterval2_1);
    }, function () {
        Slide2_1();
    });

    function next22_1() {
        slide2_1.stop().animate({
            left: -slideListWidth2_1
        }, 500, function () {

            $('.cont_slide>li:first').insertAfter('.cont_slide>li:last');
            slide2_1.css('left', 0);
        });

    }

    function prev22_1() {
        $('.cont_slide>li:last').insertBefore('.cont_slide>li:first');
        slide2_1.css('left', -slideListWidth2_1);
        slide2_1.animate({
            left: 0
        }, 500);

    }


});