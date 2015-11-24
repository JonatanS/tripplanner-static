
function applyjQuery() {
	var menuShown = true;

	$( "#showMenu" ).click(function() {
		if(menuShown) {
			$( "#menuPanel" ).hide( "slow", function() {
	    	// Animation complete.
		console.log("hiding");
	    		menuShown = false;
	    		//replace icon
	  		});
		} else{
			$( "#menuPanel" ).show( "slow", function() {
	    	// Animation complete.
		console.log("showing");
	    		menuShown = true;
	    		//replace icon
	  		});	
		}
	});

       
    // JQUERY Smooth Scrolling:
    // http://codeplanet.io/how-to-make-a-single-page-website/
    console.log('page loaded');
    $('.smooth').on('click', function() {
        console.dir(this);
        $.smoothScroll({
            //scrollElement: $('body'),
            scrollElement: null,
            scrollTarget: '#' + this.id
        });
        // $.smoothScroll({
        //     scrollElement: null,
        //     scrollTarget: this
        // });
        return false;
    });
}



$(document).ready(function() {
    applyjQuery();
});