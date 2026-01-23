$(function () {

    //탭메뉴
    $('#tepMenu').each(function(){
        var topDiv = $(this);
        var anchors = topDiv.find('ul#tabs a');
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

                            
});

