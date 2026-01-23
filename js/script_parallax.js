$(function(){
	
	//페이지위치
	$('.btn1').click(function(){
		$('html,body').animate({scrollTop:$('.section1').offset().top},800);
	});
	$('.btn2').click(function(){
		$('html,body').animate({scrollTop:$('.section2').offset().top},800);
	});	
	$('.btn3').click(function(){
		$('html,body').animate({scrollTop:$('.section3').offset().top},800);
	});		
	$('.btn4').click(function(){
		$('html,body').animate({scrollTop:$('.section4').offset().top},800);
	});
	$('.btn5').click(function(){
		$('html,body').animate({scrollTop:$('.section5').offset().top},800);
	});
	

	var contents=$('.item-wrap>section');
	var btn=$('.nav__wrapper .nav li');
	
	//스크롤 이동시 메뉴와 버튼 활성화
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		//페이지 시작시 윈도우창에 스크롤 위치를 sct로...
		
		contents.each(function(){ //반복문
			var tg=$(this); //현재 해당 요소를 tg로
			var i=tg.index();//일치하는 요소를 i...
			if(tg.offset().top<sct){ //스크롤탑의 위치가 top보다 크거나 같다면 tg를 특정 좌표로 이동
			
				btn.removeClass('active')//버튼활성화 취소
				btn.eq(i).addClass('active')//버튼활성화
				
				
			}
		});
	});
	

	
	
});


































