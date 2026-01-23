$(function () {

    $('div#content1_list ul li a:first').width('730px');

    
    $('div#content1_list ul li a').focusin(function () {
        $(this).animate({width: "730px"}, {queue: false,duration: 450});
        $('div#content1_list ul li a:first').animate({width: "330px"}, {queue: false,duration: 450});
    });

    $('div#content1_list ul li a:first').focusin(function () {
        $('div#content1_list ul li a:first').animate({width: "730px"}, {queue: false,duration: 450});
    });
    
    $('div#content1_list ul li a').focusout(function (){
        $(this).animate({width: "330px"}, {queue: false,duration: 450});
    });
    

    /*슬라이드 배너*/
    var banner = $('#banner02 li');
    var current = 0 ;

    setInterval(function(){
        var prev = banner.eq(current);
        move(prev,0,'100%');

        current++;

        if(current==banner.size()){current=0;}

        var next = banner.eq(current);
        move(next,'-100%',0);
    },5000);

    function move(tg,start,end){ 
        tg.css('right',start).stop().animate({right:end},1300);
    };




    /* 상설전시 슬라이드 */

    //slide1
    var visual1 = $('#exhibi_1>ul>li');
    var current1 = 0;
    var p1 = $('.btn1>li');


    p1.on({click:function(){
        var tg1 = $(this);
        var i1 = tg1.index(); 

        p1.removeClass('on');
        tg1.addClass('on');

        move1(i1);
    }
    
    });

    function move1(i1){
        if(current1 == i1) return

        var currentEl1 = visual1.eq(current1);
        var nextEl1 = visual1.eq(i1)

        currentEl1.css({left:0}).stop().animate({left:'-100%'}, 500);
        nextEl1.css({left:'100%'}).stop().animate({left:0},500);

        current1 = i1
    }

    //slide2
    var visual2 = $('#exhibi_2>ul>li');
    var current2 = 0;
    var p2 = $('.btn2>li');


    p2.on({click:function(){
        var tg2 = $(this);
        var i2 = tg2.index(); 

        p2.removeClass('on');
        tg2.addClass('on');

        move2(i2);
    }
    
    });

    function move2(i2){
        if(current2 == i2) return

        var currentEl2 = visual2.eq(current2);
        var nextEl2 = visual2.eq(i2)

        currentEl2.css({left:0}).stop().animate({left:'-100%'}, 500);
        nextEl2.css({left:'100%'}).stop().animate({left:0},500);

        current2 = i2
    }


    //slide3
    var visual3 = $('#exhibi_3>ul>li');
    var current3 = 0;
    var p3 = $('.btn3>li');


    p3.on({click:function(){
        var tg3 = $(this);
        var i3 = tg3.index(); 

        p3.removeClass('on');
        tg3.addClass('on');

        move3(i3);
    }
    
    });

    function move3(i3){
        if(current3 == i3) return

        var currentEl3 = visual3.eq(current3);
        var nextEl3 = visual3.eq(i3)

        currentEl3.css({left:0}).stop().animate({left:'-100%'}, 500);
        nextEl3.css({left:'100%'}).stop().animate({left:0},500);

        current3 = i3
    }





    //탭메뉴
    $('#timeline').each(function(){
        var topDiv = $(this);
        var anchors = topDiv.find('ul#dates a');
        var eduDivs = topDiv.find('div.edu');
        var lastAnchor;
        var lastedu;

        anchors.show();

        lastAnchor = anchors.filter('.tabOn');
        lastedu = $(lastAnchor.attr('href'));

        eduDivs.hide();
        lastedu.show();

        anchors.click(function(event){ //앵커에 클릭시
            var currentAnchor = $(this);
            var currentPannel = $(currentAnchor.attr('href'));

            lastAnchor.removeClass('tabOn');
            currentAnchor.addClass('tabOn');

            lastedu.hide();
            currentPannel.show();

            lastAnchor = currentAnchor;
            lastedu = currentPannel;


            return false;
        });
    });



    //팝업
    var pop_banner = $('#popup>ul>li');
    var pop_button1 = $('.arrow1_1_center>img.next');
    var pop_button2 = $('.arrow1_1_center>img.prev');
    var popcurrent = 0;
    var pop_p = $('#popup_number>p')
    var pop_setIntervalId00;


    //슬라이드 작동
    pop_timer();//사용자 지정함수
    function pop_timer(){
        pop_setIntervalId00 = setInterval(function(){
            var pop_prev = pop_banner.eq(popcurrent);
            var pop_pn = pop_p.eq(popcurrent);

            pop_move(pop_prev,0,'-100%');
            pop_pn.removeClass('bl');

            popcurrent++;
            if(popcurrent == pop_banner.size()) {popcurrent=0};

            var pop_next = pop_banner.eq(popcurrent);
            var pop_pnn = pop_p.eq(popcurrent);

            pop_move(pop_next,'100%',0);
            pop_pnn.addClass('bl');

        },5000);
    }

    function pop_move(pop_tg, pop_start, pop_end){
        pop_tg.css('left', pop_start).stop().animate({left:pop_end}, {duration:500, ease:'easeOutCubic'})
    }

    //마우스 올렸을 때 슬라이드 멈춤
    $('.pop_1').on({mouseover:function(){
        clearInterval(pop_setIntervalId00);
    }, mouseout:function(){
        pop_timer();
    }
});

    //좌우 버튼 활성화

    //오른쪽 버튼
    pop_button1.click(function(){
        var pop_prev = pop_banner.eq(popcurrent);
        var pop_pn = pop_p.eq(popcurrent);

        pop_move(pop_prev,0,'-100%');
        pop_pn.removeClass('bl')
        
        popcurrent++;

        if(popcurrent == pop_banner.size()) {popcurrent=0};
        var pop_next = pop_banner.eq(popcurrent);
        var pop_pnn = pop_p.eq(popcurrent);

        pop_move(pop_next,'100%',0);
        pop_pnn.addClass('bl')

        return false;
    });

    //왼쪽 버튼
    pop_button2.click(function(){
        var pop_prev = pop_banner.eq(popcurrent);
        var pop_pn = pop_p.eq(popcurrent);

        pop_move(pop_prev,0,'100%');
        pop_pn.removeClass('bl')
        
        popcurrent--;

        if(popcurrent == -pop_banner.size()) {popcurrent=0};
        var pop_next = pop_banner.eq(popcurrent);
        var pop_pnn = pop_p.eq(popcurrent);

        pop_move(pop_next,'-100%',0);
        pop_pnn.addClass('bl')

        return false;
    });


});

