$(document).ready(function(){
	$('.nav-sm').click(function(event) {
		event.preventDefault();
		$('.dropdown').slideToggle('active');
	});

	var count = 0;
	$('.add-cart').click(function(event){
		event.preventDefault();
		count = count + 1;
		if(count > 10){
			$('.count').html('10+')
		}
		else{
			$('.count').html(count)
		}
	});

	$('.like').click(function(event) {
		event.preventDefault();
		$(this).find('.fa-heart').toggleClass('hide');
	});
});

//滾動顯示隱藏MENU
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop && st > 400){
   		//下滾動顯示
       	$('.menu').fadeOut(800);
   } else {
   		//上滾動隱藏
      	$('.menu').fadeIn(800);
   }
   lastScrollTop = st;
});


