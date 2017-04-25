/**
 * Toggle Content Editor/Page Builder
 */
jQuery( document ).ready( function($) {

	/* Editor Toggle Function */
	function fePb_Editor_Toggle(){
		if( 'templates/fe-page-builder.php' == $( '#page_template' ).val() ){
			$( '#postdivrich' ).hide();
			$( '#fe-page-builder' ).show();
		}
		else{
			$( '#postdivrich' ).show();
			$( '#fe-page-builder' ).hide();

			$(window).trigger('scroll');
		}
	}

	( function( $ ) {
		var frame = wp.media({
			multiple: true
		});

		$(".media").on("click", function(e) {
			frame.open();

			e.preventDefault();
		});

		frame.on('open', function() {
			console.log("Open");
		});

		frame.on('close', function() {
			console.log("Close");
		});

		frame.on('select', function() {
			console.log("Select");

			var selection = frame.state().get('selection');

			selection.each(function(attachment) {
				console.log(attachment.id);
			});
		});
	} )( jQuery );

	/* Toggle On Page Load */
	fePb_Editor_Toggle();

	/* If user change page template drop down */
	$( "#page_template" ).change( function(e) {
		fePb_Editor_Toggle();
	});

});