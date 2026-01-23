$(function () {
    console.clear();

    // 기존 버튼형 슬라이더
    $('.slider-1 > .page-btns > div').click(function () {
        var $this = $(this);
        var index = $this.index();

        $this.addClass('active');
        $this.siblings('.active').removeClass('active');

        var $slider = $this.parent().parent();

        var $current = $slider.find(' > .slides > div.active');

        var $post = $slider.find(' > .slides > div').eq(index);

        $current.removeClass('active');
        $post.addClass('active');
    });

    // 좌/우 버튼 추가 슬라이더
    $('.slider-1 > .side-btns > div').click(function () {
        var $this = $(this);
        var $slider = $this.closest('.slider-1');

        var index = $this.index();
        var isLeft = index == 0;

        var $current = $slider.find(' > .page-btns > div.active');
        var $post;

        if (isLeft) {
            $post = $current.prev();
        } else {
            $post = $current.next();
        };

        if ($post.length == 0) {
            if (isLeft) {
                $post = $slider.find(' > .page-btns > div:last-child');
            } else {
                $post = $slider.find(' > .page-btns > div:first-child');
            }
        };

        $post.click();
    });

    /* setInterval(function () {
        $('.slider-1 > .side-btns > div').eq(1).click();
    }, 9000); */



    
    

    /* 햄버거버튼 색 변경 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#menu_open div').css({
                background: '#555555'
            }, 3000);

        } else {
            $('#menu_open div').css({
                background: '#ffffff'
            }, 3000);

        }
    });

    //메뉴 클릭 시 페이지 이동

    var contents = $('#contents>div');
    var btn = $('#floatdiv ul li');


    btn.click(function (event) {
        event.preventDefault(); //링크 속성 없앰. 
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i); //i순번에 해당 컨텐츠를 section에 담아
        var tt = section.offset().top; // section을 top으로 이동한 값

        $('html, body').stop().animate({
            scrollTop: tt
        }); //화면이 시작되면 원하는 위치 tt로 스크롤 이동

    });

    //스크롤이동시 메뉴와 버튼활성화
    
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        contents.each(function () {
            var tg = $(this);
            var i = tg.index();
            if (tg.offset().top <= sct) {
                btn.removeClass('active');
                btn.eq(i).addClass('active');

            }
        })
    });

    $('#floatdiv ul li').hover(
        $(this).removeClass('.active')
    );
        
    
    /* 플로터 fadeIn */
    $('#floatdiv').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#floatdiv').fadeIn(200);

        } else {
            $('#floatdiv').hide();

        }
    });




    /* 모니터 hover scroll */
    $('.css_img .main_page').hover(function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 4000);



    }, function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: 0
        }, 4000);

    });
    
    /* 핸드폰 */
    $('.css_img .main_page2').hover(function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 3000);



    }, function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: 0
        }, 3000);

    });

    $('.css_img4 .main_page').hover(function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 1200);



    }, function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: 0
        }, 1200);

    });
    
    /* 태블릿 */
    $('.css_img .main_page3').hover(function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: ah - imgh
        }, 2500);



    }, function () {
        var ah = $(this).find('a').innerHeight();
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({
            top: 0
        }, 2500);

    });





    /* 섹션 */
    $("div.mn").each(function () { //개별적으로 마우스 휠 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {


            e.preventDefault();
            var delta = 0;

            if (!event) event = window.event;
            //DOM이벤트 핸들러가 호출되는 동안에 사용할 수 있는 익스플로러의 속성. 
            //function(e)의 구문에서 익스의 경우 e가 존재하지 않기 때문에 대신에 window.event를 적용.

            if (event.wheelDelta) {
                /* +-120 pc 노트북은 +-150 */
                delta = event.wheelDelta / 120; //익스, 크롬, 오페라에 맞춤



            } else if (event.detail) delta = -event.detail / 3; //파이어폭스 나누기 3

            var moveTop = null; //객체가 없음

            //마우스 휠을 위에서 아래로 적용하기 위해서

            if (delta < 0) {

                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
                //마우스 휠을 아래에서 위로




            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }

            $("html, body").stop().animate({
                scrollTop: moveTop + 'px'

            }, {
                duration: 700
            });

        });

    });







});