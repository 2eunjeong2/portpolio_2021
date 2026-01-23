$(function () {


    var banner1 = $('.event_banner li');
    var current1 = 0;

    setInterval(function () {
        var prev1 = banner1.eq(current1);
        move(prev1, 0, '-100%');

        current1++;

        if (current1 == banner1.size()) {
            current1 = 0;
        }

        var next1 = banner1.eq(current1);
        move(next1, '100%', 0);
    }, 4000);

    function move(tg1, start1, end1) {
        tg1.css('left', start1).stop().animate({
            left: end1
        });
    };


    //슬라이드 이미지
    var visual = $('.slide_wrap > div');
    var button = $('.slide_num > ul > li');
    var current = 0;
    var setIntervalId;

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        });
    }

    function timer() { //일정시간 호출하기위해 타이머를 만듬.
        setIntervalId = setInterval(function () { //반복실행
            var prev = visual.eq(current);
            var pn = button.eq(current);
            move(prev, 0, '-100%');

            pn.removeClass('on');
            current++;

            if (current == visual.size()) {
                current = 0;
            }

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('on');
        }, 5000);
    }

    timer(); //함수 밖에서 호출해야 실행됨.


    button.click(function () { //동그란버튼 클릭 했을 때
        var tg = $(this);
        var i = tg.index();
        button.removeClass('on');
        tg.addClass('on');
        movel(i); //현재 화면에서 재생

    });

    function movel(i) {
        if (current == i) {
            return
        }
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        currentEl.css({
            left: 0
        }).stop().animate({
            left: '-100%'
        }, 500);
        nextEl.css({
            left: '100%'
        }).stop().animate({
            left: 0
        }, 500);
        current = i;
    }




    $('.bookmark a').click(function () {
        if ($(this).hasClass('on')) {
            $('.bookmark a').removeClass('on');

        } else {
            $('.bookmark a').removeClass('on');

            $(this).addClass('on');

        }

    });

    $('.heart a').click(function () {
        if ($(this).hasClass('on')) {
            $('.heart a').removeClass('on');

        } else {
            $('.heart a').removeClass('on');

            $(this).addClass('on');

        }

    });


    /* 함께해요 슬라이드 */
    
    var current3 = 0;
    var subtext = $('.sub_text li');
    var tim;

    subtext.eq(0).css({top:0})
    function set() {
        tim = setInterval(function () {
            var prev3 = subtext.eq(current3);
            move1(prev3, 0, '-100%');
            current3++;

            if (current3 == subtext.size()) {
                current3 = 0;
            }

            var next3 = subtext.eq(current3);
            move1(next3, '100%', 0);
        }, 3500);
    }

    set();

    function move1(tgg3, start3, end3) {
        tgg3.css('top', start3).stop().animate({
            top: end3
        }, 800);

    }



    /* page2 */
    $('.area > li').hover(function(){
        $('.area > li ul').show();
    },function(){
        $('.area > li ul').hide();
    });


    $('.user_list ul li').find('p.follow').click(function () {
        $(this).hide();
        $(this).next('.follow_cancel').show();
    });
    $('.user_list ul li').find('p.follow_cancel').click(function () {
        $(this).hide();
        $(this).prev('.follow').show();
    });

    /* page3 */
    $('.page3_top ul > li').hover(function(){
        $('.page3_top ul > li ul').show();
    },function(){
        $('.page3_top ul > li ul').hide();
    });

    
    /* page4 */
    var slide1 = $('.page4_top ul');
    var slideListWidth1 = $('.page4_top ul >li').width();

    function next1_1() {
        slide1.stop().animate({
            left: -slideListWidth1
        }, function () {

            $('.page4_top ul>li:first').insertAfter('.page4_top ul>li:last');
            slide1.css('left', '100px');
        });

    }

    function prev1_1() {
        $('.page4_top ul>li:last').insertBefore('.page4_top ul>li:first');
        slide1.css('left', -slideListWidth1);
        slide1.animate({
            left: '100px'
        });

    }


    $('.next1_1').click(function () {
        next1_1();
    });

    $('.prev1_1').click(function () {
        prev1_1();
    });

    
});