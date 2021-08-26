//ANCHOR slide
$(document).ready(function () {
	$('a[href^="#"]').bind("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 100);
		e.preventDefault();
	});
	return false;
});

//Header BURGER
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
})

//Acordeon
$(".question__title").on("click", function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this)
			.siblings(".question__content")
			.slideUp(200);
		$(this).find(".question__icon")
			.removeClass("clicked")
	} else {
		$(this).find(".question__icon")
			.removeClass("clicked")
		$(this)
			.find(".question__icon")
			.addClass("clicked");
		// $(".set > a").removeClass("active");
		$(this).addClass("active");
		$(".content").slideUp(200);
		$(this)
			.siblings(".question__content")
			.slideDown(200);
	}
});

//SLIDER review
$('.review__slider').slick({
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	adaptiveHeight: true,
	speed: 1000,
	responsive: [
		{
			breakpoint: 775,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,
			}
		},
	],
});

$('.services__contain').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	mobileFirst: true,
	dots: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 767,
			settings: "unslick",
			adaptiveHeight: true,

		}
	]
});

$('.team__wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	mobileFirst: true,
	dots: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 767,
			settings: "unslick",
			adaptiveHeight: true,

		}
	]
});




