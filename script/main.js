
            $(document).ready(function () {
                $("#hide").click(function () {
                    $("#filter").hide();
                });
                $("#show").click(function () {
                    $("#filter").show();
                });
            });
            $(document).ready(function () {
                $("#show").click(function () {
                    $("#filter").addClass("animel-t-r");
                });
            });

            //-----Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 0,
	  max: 500,
	  values: [ 0, 250 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});
    