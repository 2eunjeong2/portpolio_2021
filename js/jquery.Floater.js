/**
*  Jquery floater ���̾ �׻� ȭ�鿡 ���ְų� ���� �ٴϵ��� ó��
*
* options
*
*  allwaysTop : true ,  �׻� �� false ����ٴϵ���
*  speed  : 1000  ����ٴϴ� �ӵ�
*  bottom : false �׻� �ϴܿ�
*  default_x : �߾������϶� ������Ʈ ���� ���޴� ������
* 
* @since 2009-10-30
* @author jsyang <yakuyaku@gmail.com>
* @version 1
*
*/
(function($) {

	$.extend($.fn, { //�ټ��� ��ü�� �ϳ��� ��ġ�� merge���.
		Floater : function(setting)
		{
			var options = $.extend($.fn.Floater.defaults, setting);
			//���ְų� ����ٴϴ� �⺻��, ���ð�.
			var box   = this;
			var initTop = options.initTop; //�Ǹ޴� ��ġ 250
			
			if(options.bottom) { //���� �ϴܿ� �ִٸ�
				bottom_pos = $(window).height() - $(box).height() - initTop;
				$(box).css('top' , bottom_pos);
				initTop = bottom_pos; //�ʱⰪ���� �̵�...
			}

			if(options.default_x) { //�߾������϶� ������Ʈ ���� ���޴� ���̱�.
				box.css('left' , getX($(options.default_x)) );
				if(box.css('display')=='none') box.css('display','block');
				//�ڽ� ���̰� ��...
				$(window).bind('resize', function() {//ũ�⿡ �°� ����
					box.css('left' , getX($(options.default_x)));
					//�ڽ��� ���������Ͽ� ���޴� ���̱�
				});

			}

			var prevTop = initTop; //���޴��� ��ġ�� ����ž�� ��ġ�� ���.

			$(window).bind('scroll', function(e){adjustTop();});
				//���� ������Ʈ�� ���� ����Ǹ� ȣ��
			function getX(el)
			{
				return el.get(0).offsetLeft + el.width();
				//�θ��Ҹ� �������� ������ġ(�ȼ�����)�� ��ȯ +���ΰ�.
			};

			function adjustTop() //���� ������Ʈ�� ���� ����Ǹ� ȣ��...
			{
				var newTop = computeTop();
				if (newTop <= initTop) newTop = initTop;
				if (prevTop != newTop) {//���ο� ž�� ��ġ�� ����ž�� ��ġ�� �ٸ��ٸ�..
					layerMove(newTop); //���ο� ž�� ���̾� �̵�.
					prevTop = newTop; //���ο� ž�� ��ġ�� ����ž�� ��ġ��
				}
			};

			function layerMove(dest) //�������� ���̾� �̵�
			{
				if(options.alwaysTop) { //true, �׻� ���� ��ġ�Ѵٸ�
					//var posx=$(window).scrollLeft() + $(window).width() - $(box).width();
					$(box).css({'top': dest}); //top���� �̵�
				}else{ //�׷��� �ʴٸ�
					$(box).stop(); //����ٰ�
					$(box).animate({'top': dest},{'duration':options.speed});
					 //ž���� �̵�
				}
			};

			function computeTop() //top�� ��ġ�� ���
			{
				return $(window).scrollTop() + initTop;//��ܿ��� �Ǹ޴� ��ġ�� ��ȯ
			};
		}

	});

	$.fn.Floater.defaults = {
		'alwaysTop' : false , //true�̸� ����
		'bottom'    : false ,
		'default_x' : false ,
		'initTop'   : 50 , //��ũ���� ��ġ
		'speed' : 30 //�ӵ�
	};

})(jQuery);