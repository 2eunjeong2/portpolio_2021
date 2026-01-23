$(function () {
	//메뉴 버튼



	$("#menu_open").click(function () {
		$("#nav").fadeIn(300);
		$("#menu_close").fadeIn('fast');
		$("#menu_open").fadeOut('fast');
		$('#contents').css('display', 'none');
		$('footer').css('display', 'none');
	});

	$("#menu_close").click(function () {
		$("#nav").fadeOut(0);
		$("#menu_close").fadeOut('fast');
		$("#menu_open").fadeIn('fast');
		$('#contents').css('display', 'block');
		$('footer').css('display', 'block');
	});

	//top버튼
	$('#top_btn>a').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('#top_btn>a').show();
		} else {
			$('#top_btn>a').hide();
		}
	});


	$('#top_btn>a').click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
		return false; //원래의 기본속성 무시
	});

	/* 모달팝업 */
	$('.trigger').on('click', function () {
		$('.modal-wrapper').toggleClass('open');
		$('.page-wrapper').toggleClass('blur-it');
		$("#menu_close").hide();

		return false;

	});
	$('.btn-close').on('click', function () {
		$("#menu_close").show();

		return false;

	});


});