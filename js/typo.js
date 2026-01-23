$(function () {

    /* 타이핑효과 */

    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $("#main_text>ul>li").length;

    var typingTxt = $("#main_text>ul>li").eq(liIndex).text();

    typingTxt = typingTxt.split("");

    if (typingBool == false) {
        typingBool = true;
        var tyInt = setInterval(typing, 150);
    }

    function typing() {

        $("#typing ul li").removeClass("on");
        $("#typing ul li").eq(liIndex).addClass("on");

        if (typingIdx < typingTxt.length) {
            $("#typing ul li").eq(liIndex).append(typingTxt[typingIdx]);

            typingIdx++;

        } else {
            if (liIndex < liLength - 1) {
                liIndex++;
                typingIdx = 0;
                typingBool = false;
                typingTxt = $("#main_text>ul>li").eq(liIndex).text();


                clearInterval(tyInt);


                setTimeout(function () {
                    tyInt = setInterval(typing, 150);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                clearInterval(tyInt);


                setTimeout(function () {
                    typingBool = false;
                    liIndex = 0;
                    typingIdx = -0;

                    typingTxt = $("#main_text>ul>li").eq(liIndex).text();
                    $("#typing ul li").html("")

                    tyInt = setInterval(typing, 150);
                }, 3000);


            }
        }
    };

    /* 마우스 */
    $('.dd1').DB_springMove({
        dir:'y',
        mirror:1,
        radius:10,
        motionSpeed:0.1

    });




});