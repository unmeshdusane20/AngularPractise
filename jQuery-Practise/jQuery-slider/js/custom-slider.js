/**
 * Custom Slide v1.0
 *  
**/  
$(document).ready(function(){
	var scroll = 0;
	var parentWrapWidth;
	var totSlide;	
	function initSlider(){
		scroll = 0;
		var parentWrap = $(".sliderWrapper");
		parentWrapWidth = $(".sliderWrapper").width();
		totSlide = $(".sliderWrapper ul li").length;
		$(".sliderWrapper ul").width(totSlide*parentWrapWidth);
	}
	function slideRight(){		
		scroll++;	
		if(scroll == totSlide) {
			scroll = 0;
		}
		var tot = -(parentWrapWidth*scroll);		
		$(".sliderWrapper ul").css('left',-(parentWrapWidth*scroll));
	}
	function slideLeft(){
		scroll--;
		if(scroll == -1){ scroll = totSlide-1; }
		$('.sliderWrapper ul').css('left', -(parentWrapWidth*scroll)); 		
	}	
	initSlider();	
	$("#next").on("click",function(e){			
			slideLeft();
	});
	$("#previous").on("click",function(e){
			slideRight();		
	});
	setInterval(slideRight,5000);	
});