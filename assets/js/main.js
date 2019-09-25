$(document).ready(function(){
	$(".scrollpage").click(function(e){
		e.preventDefault();
		var element = $(this).attr('href');
		var element2 = $(element);
		$('html').animate({
			scrollTop : element2.offset().top
		}, 1000, 'swing');
	});

	$(window).scroll(function(){
		var wscroll = $(this).scrollTop();
		$(".banner img").css({
			'transform' : 'translate(0px, '+ wscroll/4 +'%)'
		})

		$(".banner h1").css({
			'transform' : 'translate(0px, '+ wscroll/1 +'%)'
		})

		$(".banner p").css({
			'transform' : 'translate(0px, '+ wscroll/1 +'%)'
		})
	})

	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('#tombolScrollTop').fadeIn();
		} else {
			$('#tombolScrollTop').fadeOut();
		}
	});
});