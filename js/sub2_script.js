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

      }, 3000);
    }
  }


  /* 탭메뉴 */
  $('.tab-controls a').on('click', function (e) {
    e.preventDefault();

    $('.tab-controls a').removeClass('active');

    $(this).addClass('active');

    $('[class^=tab-item]').hide();

    var num = $(this).data('tab-item');
    $('.tab-item-' + num).fadeIn();
  });




  /* 모니터 스크롤 */
  $('.css_img .main_page').hover(function () {
    var ah = $(this).find('a').innerHeight();
    var img = $(this).find('img');
    var imgh = $(this).find('img').innerHeight();

    img.stop().animate({
      top: ah - imgh
    }, 5000);



  }, function () {
    var ah = $(this).find('a').innerHeight();
    var img = $(this).find('img');
    var imgh = $(this).find('img').innerHeight();

    img.stop().animate({
      top: 0
    }, 5000);

  });

  /* 핸드폰 스크롤 */

  $('.css_img4 .main_page').hover(function () {
    var ah = $(this).find('a').innerHeight();
    var img = $(this).find('img');
    var imgh = $(this).find('img').innerHeight();

    img.stop().animate({
      top: ah - imgh
    }, 1500);



  }, function () {
    var ah = $(this).find('a').innerHeight();
    var img = $(this).find('img');
    var imgh = $(this).find('img').innerHeight();

    img.stop().animate({
      top: 0
    }, 1500);

  });


  // 좌/우 버튼 추가 슬라이더
  $('.side-btns > div').click(function () {
    var $this = $(this);
    var $slider = $this.closest('#portfolio_list');

    var index = $this.index();
    var isLeft = index == 0;

    var $current = $slider.find(' > .tab-controls a.active');
    var $post;

    if (isLeft) {
      $post = $current.prev();
    } else {
      $post = $current.next();
    };

    if ($post.length == 0) {
      if (isLeft) {
        $post = $slider.find(' > .tab-controls a:last-child');
      } else {
        $post = $slider.find(' > .tab-controls a:first-child');
      }
    };

    $post.click();
  });


});