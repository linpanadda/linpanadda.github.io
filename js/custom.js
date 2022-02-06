// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg.jpeg", 
	 		 "images/bg2.jpeg",
			 "images/bg3.jpeg"
	 			], 	{duration: 3200, fade: 1300});
		});
})