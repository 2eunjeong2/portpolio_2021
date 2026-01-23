$(function () {

  /* 타이핑효과 */

  var typingBool = false;
  var typingIdx = 0;
  var typingTxt = $("#sub_Top p").text(); // 타이핑될 텍스트를 가져온다 
  typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
  if (typingBool == false) { // 타이핑이 진행되지 않았다면 
    typingBool = true;

    var tyInt = setInterval(typing, 170); // 반복동작 
  }

  function typing() {
    if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
      $("#typing p").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
      typingIdx++;
    } else {
      clearInterval(tyInt); //끝나면 반복종료 
      setTimeout(function () {
        typingBool = false;
        liIndex = 0;
        typingIdx = -0;

        typingTxt = $("#sub_Top p").eq(liIndex).text();
        $("#typing p").html("")

        tyInt = setInterval(typing, 150);
      }, 3000);
    }
  }


  $(window).scroll(function(){
    if($(this).scrollTop()>=1000){
      $('.bar').stop(1000).animate({bottom:'0', opacity:'1'},1200,'swing');
    }
  });


  

});