/**
 * FE Page Builder Admin JS
**/
jQuery( document ).ready( function( $ ){

	/* Function: Update Order */
	function fePB_UpdateOrder(){

		/* In each of rows */
		$('.fepb-rows > .fepb-row').each( function(i){

			/* Increase num by 1 to avoid "0" as first index. */
			var num = i + 1;

			/* Update order number in row title */
			$( this ).find( '.fepb-order' ).text( num );

			/* In each input in the row */
			$( this ).find( '.fepb-row-input' ).each( function(i) {

				/* Get field id for this input */
				var field = $( this ).attr( 'data-field' );

				/* Update name attribute with order and field name.  */
				$( this ).attr( 'name', 'fepb[' + num + '][' + field + ']');
			});
		});
	}

	/* Update Order on Page load */
	fePB_UpdateOrder();

	/* Make Row Sortable */
	$( '.fepb-rows' ).sortable({
		handle: '.fepb-handle',
		cursor: 'grabbing',
		stop: function( e, ui ) {
			fePB_UpdateOrder();
		},
	});

	/* Add Row */
	$( 'body' ).on( 'click', '.fepb-add-row', function(e){
		e.preventDefault();
 
		 /* Target the template. */
		var template = '.fepb-templates > .fepb-' + $( this ).attr( 'data-template' );

		/* Clone the template and add it. */
		$( template ).clone().appendTo( '.fepb-rows' );

		/* Hide Empty Row Message */
		$( '.fepb-rows-message' ).hide();

		/* Update Order */
		fePB_UpdateOrder();
	});

	/* Hide/Show Empty Row Message On Page Load */
	if( $( '.fepb-rows > .fepb-row' ).length ){
		$( '.fepb-rows-message' ).hide();
	}
	else{
		$( '.fepb-rows-message' ).show();
	}

	/* Delete Row */
	$( 'body' ).on( 'click', '.fepb-remove', function(e){
		e.preventDefault();

		/* Delete Row */
		$( this ).parents( '.fepb-row' ).remove();
		
		/* Show Empty Message When Applicable. */
		if( ! $( '.fepb-rows > .fepb-row' ).length ){
			$( '.fepb-rows-message' ).show();
		}

		/* Update Order */
		fePB_UpdateOrder();
	});

});
