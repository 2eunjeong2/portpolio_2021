$(function () {
    //슬라이드 이미지
    var visual = $('.slide_pc_main > div'); 
    var button = $('.slide_num>ul>li');
    var current=0; 
    var setIntervalId;

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},500);
    }

    function timer(){ //일정시간 호출하기위해 타이머를 만듬.
        setIntervalId = setInterval(function(){ //반복실행
            var prev = visual.eq(current);
            var pn = button.eq(current);
            move(prev,0,'-100%');

            pn.removeClass('on');
            current++;

            if(current==visual.size()){current=0;}

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next,'100%',0);
            pnn.addClass('on');
        },10000);
    }

    timer(); //함수 밖에서 호출해야 실행됨.

    $('.sd_stop').click(function(){ //stop버튼을 클릭했을 때
        clearInterval(setIntervalId); //반복취소
        $('.sd_stop').hide(); //stop버튼 감추기
        $('.sd_start').show();//start버튼 보이기
    });


    $('.sd_start').click(function(){ //start버튼을 클릭했을 때
        timer();
        $('.sd_stop').show(); //stop버튼 보이기
        $('.sd_start').hide();//start버튼 감추기
    });

    button.click(function(){ //동그란버튼 클릭 했을 때
        var tg = $(this);
        var i = tg.index();
        button.removeClass('on');
        tg.addClass('on');
        movel(i); //현재 화면에서 재생

    });

    function movel(i){
        if(current==i){return}
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        currentEl.css({left:0}).stop().animate({left:'-100%'},500);
        nextEl.css({left:'100%'}).stop().animate({left:0},500);
        current = i;
    }





});