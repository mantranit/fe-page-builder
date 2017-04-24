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

	/* Toggle On Page Load */
	fePb_Editor_Toggle();

	/* If user change page template drop down */
	$( "#page_template" ).change( function(e) {
		fePb_Editor_Toggle();
	});

});