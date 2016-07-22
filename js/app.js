$(document).ready(function(){

	$("#dancer").click(function(){
		$(".dance").slideToggle("slow");
	});
	$("#out").click(function(){
		$(".horse").fadeOut("slow");
	})
	$("#in").click(function(){
		$(".horse").fadeIn("slow");
	})

});
