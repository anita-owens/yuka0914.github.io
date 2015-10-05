$(document).ready(function(){
	console.log("hello world");

	$(".button").click(function() {
		maxScroll = $(".page").length;
		console.log maxScroll;

		// check how many .page children exists to know maximum negative value of margin-left
		// if we have 4 .page the maximum should be -400vw so do something like
		// var maxScroll = number of .page*-100 and set that as a variable

		// ALTERNATIVE
		// Hide the button left if we are at the leftmost .page
		// Hide the button right if we are at the rightmost .page
		// when button left or right is clicked check if currentMargin is 0 or maxMargin (-400) if so hide left or right button


  		$(".container").css("margin-left", "-100vw");
	});

});
