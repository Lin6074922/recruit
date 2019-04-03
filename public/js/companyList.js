$(document).ready(function(){
	  var scrollHeight=$('.selected').offset().top;
	  console.log(scrollHeight);
	$(window).scroll(function() { 
	console.log($(window).scrollTop()); 
        if($(window).scrollTop()>scrollHeight){
        	$('.selected').addClass('selectedFixed');
        }else{
        	$('.selected').removeClass('selectedFixed');       	
        }
    })	
})