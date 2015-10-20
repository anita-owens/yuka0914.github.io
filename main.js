$(document).ready(function(){
	console.log("hello world");

	$(".factButton").click(function() {
		console.log("fact button clicked");
		$(this).parents(".home").find(".introduction").toggleClass("hidden");
		$(this).parents(".home").find(".secondLayer").toggleClass("hidden");
	});

	$(".button").click(function() {

		// JS isn't good at vw so lets get the full width (100vw) in another way :)
		fullWidth = $(window).width();

		// check how many .home children exists to know maximum negative value of margin-left
		maxScroll = ($(".home").length - 1) * -fullWidth;

		// How much scrolled is container now? we need to know so we can hide the buttons
		currentScroll = $(".container").css("margin-left");

		// pareFloat turns currentscroll from 0px to just 0, it removes the px that we get in the variable
		currentScroll = parseFloat(currentScroll);

		// when this ( .button ) is clicked we check if it next or back
		if ( $( this ).hasClass( "next" ) ) {
			// write it out se we see it in console
			console.log("next");
			// subtract from currentscroll
			currentScroll = currentScroll - fullWidth;
			// Set the margin on container
			$(".container").css("margin-left", currentScroll);
			// unhide the back button
			$(".button.back").removeClass("hidden");
		// if it isnt the next button its the back button so we do the opposite
		} else {
			console.log("back");
			currentScroll = currentScroll + fullWidth;
			$(".container").css("margin-left", currentScroll);
			$(".button.next").removeClass("hidden");
		}

		// this checks the currentscroll and hides next or back button
		if(currentScroll == 0) {
			console.log("bigger than 0, therefore at start");
			$(".button.back").addClass("hidden");
		}
		else if(currentScroll == maxScroll) {
			console.log("at max");
			$(".button.next").addClass("hidden");
		}

	});

	function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 12
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Här är du!');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}


});
