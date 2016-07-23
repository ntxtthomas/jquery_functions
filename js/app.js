$(document).ready(function(){

	$("#dancer").click(function(){
		$(".dance").slideToggle("slow");
	})
	$("#out").click(function(){
		$(".horse").fadeOut("slow");
	})
	$("#in").click(function(){
		$(".horse").fadeIn("slow");
	})
	$("#up").click(function(){
		$(".up").slideUp("fast");
		$(".down").slideUp("fast");
	})
	$("#down").click(function(){
		$(".down").slideDown("fast");
	})
	$("#reset").click(function(){
		$(".up").slideDown("fast");
		$(".down").slideDown("fast");
	})
	$("#ham").click(function(){
		$(".ham").removeClass();
	})
	$("#bacon").click(function(){
		$(".wacko span").addClass(".ham");
	})
	

});
