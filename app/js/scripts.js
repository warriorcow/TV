// Успешная отправка формы
function thxCallback() {
	$('.second-screen').children(".row").hide(300);
	$('.second-screen').children(".thx-message").css({
		'transform' : 'translate(-50%,-50%)'
	});
};


// Слайдер отзывов
$('.review-slider').slick({
	slidesToShow: 2,
  	slidesToScroll: 1,
  	responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1
      }
    }]
})


// Гармошка
$('.faq-item-title').click(function() {
	$(this).toggleClass('open').next().slideToggle(300);
	$('.faq-item-title').not(this).removeClass('open').next().slideUp();
});


// Попап
function followPopup() {
	$('.hidden').show(500);
	$('body').css('overflow','hidden');
}


// Вывод попапа
$('.show-follow-popup').click(function() {
	followPopup();
});


// Закрытие попапа
var pressEsc = $(document).bind('keydown', function(e) { 
				    if (e.which == 27) {
				        $('.hidden').hide(500);
						$('body').css('overflow','visible');
				    }
				});

$('.overlay, .close-btn').click(function() {
	pressEsc
	$('.hidden').hide(500);
	$('body').css('overflow','visible');
});

 
