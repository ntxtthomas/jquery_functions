$(document).ready(function(){

	var modFun = $("#jQueryFun").clone();// block not doing what I want it to do
	$("#reset").click(function(){
		$("#jQueryFun").replaceWith("modFun");

	})
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
		$(".up").slideUp("slow");
		$(".down").slideUp("slow");
	})
	$("#down").click(function(){
		$(".up").slideDown("slow"); 
		$(".down").slideDown("slow");
	})
	$("#addClass").click(function(){
		$(".bacon").addClass("pig");
	})
	$("#removeClass").click(function(){
		$(".ham").removeClass();
	})
	$("#change").click(function(){
		var round = $(".round").css("background-color", "red");
		round.hide().show()
		round.queue(function(){
			round.css("background-color", "green")
		})
	})
	$("#after").click(function(){
		$(".question").after("<p class='answer'>Because most don't C#</p>").animate({
		    width: [ "toggle", "swing" ],
		    height: [ "toggle", "swing" ],
		    opacity: "toggle"
		  }, 5000, "linear", function() {
		    $( this ).after( "<div>Because most don't C#!!</div>" );
	
		  });
	})
	$("#append").click(function(){
		$(".magic").append(" BLUE").css("color", "blue");
	})
});
