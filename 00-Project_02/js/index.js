$(function(){

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

    var mainmenu = $('#nav>ul>li')
    var submenu = $('.sub')

    submenu.hover(function(){
        mainmenu.addclass('on')
    });
    
    
});