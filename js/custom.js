$(function(){
	var hf = function(){
		var h_header = $('header').height();
		var h_footer = $('footer').height();
		$('.content').css({
			'paddingTop': h_header,
			'paddingBottom': h_footer
		});
	}
//----------------------------------------------------------
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
//----------------------------------------------------------
	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(400)
	})
//----------------------------------------------------------
	$(window).bind('load resize', hf);
//----------------------------------------------------------
	$('.banner-slider').slick({
		dots: true,
		/*appendArrows: '.banner-slider__buttons',*/
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	      	arrows: false,
	      }
	    }
	      
	  ] 		
	});
//----------------------------------------------------------	
	$('.features_slider_top, .servises_left_slider').slick({
		arrows: false,
		dots: true,
	});
//----------------------------------------------------------
	$('.parteners_slider').slick({
		dots: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
  		infinite: true,
  		slidesToShow: 5,
  		slidesToScroll: 5,
  		responsive: [
                {
                    breakpoint: 991,
                    settings: {
                    	autoplay: true,
 						autoplaySpeed: 2000,
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 579,
                    settings: {
                    	autoplay: true,
 						autoplaySpeed: 2000,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
});
//--------------------------------------------------
//Галиререя изображенния
const init = {
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1
};

$(() => {
  const win = $(window);
  const slider = $(".mg-slider");

  win.on("load resize", () => {
    if (win.width() < 767) {
      slider.not(".slick-initialized").slick(init);
    } else if (slider.hasClass("slick-initialized")) {
      slider.slick("unslick");
    }
  });
});
//--------------------------------------------------
     	$('.pricing-slider-item').slick({
		dots: false,
		arrows: false,
  		infinite: true,

  		slidesToShow: 3,
  		slidesToScroll: 3,
  		responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
});
//-------------------------------------------------
/*<!-- /SLIDER -->*/
	$('.pricing-slider, .pricing-slider-bottome').slick({
		arrows: false,
		dots: true,	
});
//--------------------------------------------------
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
//--------------------------------------------------

//--------------------------------------------------
//Animete in price list
    $(document).ready(function() {
        $('input.animated').hover(
        function() {
        $(this).addClass('pulse'); // Добавляем класс pulse
        },
        function() {
        $(this).removeClass('pulse'); // Убираем класс
        }
    )});
//--------------------------------------------------
//Плавный скрол
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
        });
    });
//--------------------------------------------------
//button top 
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
            } else {
    $('#toTop').fadeOut();
    }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
//--------------------------------------------------
//Счетчик чисел
$(document).ready(function () {

    var show = true;
    var countbox = ".facts_flex";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.count').css('opacity', '1');
            $('.count').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });
});
//--------------------------------------------------
});