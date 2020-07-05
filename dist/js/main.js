$(function(){

	/*FORM*/
	$(document).ready(function() {

		//E-mail Ajax Send
		$("form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function() {
				$('.modal').css('display', 'none');
				$('.thanks').css('display', 'block');
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});

	});

	/*PHONE MASK*/
	$(".ph").mask("+8 (999) 999-9999");

	/*SLIDER*/
	
	$('.sert').slick({
	  dots: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1025,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

  /*MODAL*/

  $('.order').click(function(e){
  	e.preventDefault();
  	$('.overflow').fadeIn();
  });

  $('.close').click(function(){
  	$('.overflow').fadeOut();
  	$('.thanks').fadeOut();
  	$('.modal').css('display', 'block');
  });


});


$(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

/*TABS*/

$(".tabs-nav a").click(function(e){
	e.preventDefault();
	var tHref = $(this).attr('href');

	$('.tabs-nav a').removeClass('active');
	$(this).addClass('active');

	$('.tabs-content').removeClass('active');
	$(tHref).addClass('active');
});


/*MENU*/

$('.m-menu').click(function(){
	$('.nav').fadeIn();
});

$('.m-close').click(function(){
	$('.nav').fadeOut();
});


$(window).on('load resize', function(e){
    if(window.innerWidth < 480) {
        if(!$('.projects-wrap').hasClass('slick-initialized')){

            $('.projects-wrap').slick({
			  dots: false,
			  slidesToShow: 1,
			  slidesToScroll: 1
			});
        }

    }else{
        if($('.projects-wrap').hasClass('slick-initialized')){
            $('.projects-wrap').slick('unslick');
        }
    }
});

$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    $('.up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$(document).ready(function () {
	$('.ph').focus( function() {
		$('.btn-block2 > button > span').html('Отправить');
	});
});