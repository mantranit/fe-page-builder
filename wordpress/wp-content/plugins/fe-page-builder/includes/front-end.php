<?php
/**
 * Front End Output
 * @since 1.0.0
**/

/* Filter Content as early as possible, but after all WP code filter runs. */
add_filter( 'the_content', 'fepb_filter_content', 10.5 );

/**
 * Filter Content
 * @since 1.0.0
**/
function fepb_filter_content( $content ){

	/* In single page when page builder template selected. */
	if( !is_admin() && is_page() && 'templates/fe-page-builder.php' == get_page_template_slug( get_the_ID() ) ){

		/* Add content with shortcode, autoembed, responsive image, etc. */
		$content = fepb_default_content_filter( fepb_get_content() );
	}

	/* Return content */
	return $content;
}

/**
 * Page Builder Content Output
 * This need to be use in the loop.
 * @since 1.0.0
**/
function fepb_get_content(){

	/* Get saved rows data and sanitize it */
	$row_datas = fepb_sanitize( get_post_meta( get_the_ID(), 'fepb', true ) );

	/* return if no rows data */
	if( !$row_datas ){
		return '';
	}

	/* Content */
	$content = '';

	/* Loop for each rows */
	foreach( $row_datas as $order => $row_data ){
		$order = intval( $order );

		/* === Row with 1 column === */
		if( 'col-1' == $row_data['type'] ){
			$content .= '<div class="fepb-row fepb-row-' . $order . ' fepb-col-1">' . "\r\n";
			$content .= '<div class="row-content">' . "\r\n\r\n";
			$content .= $row_data['content'] . "\r\n\r\n";
			$content .= '</div>' . "\r\n";
			$content .= '</div>' . "\r\n\r\n";
		}
		/* === Row with 2 columns === */
		elseif( 'col-2' == $row_data['type'] ){
			$content .= '<div class="fepb-row fepb-row-' . $order . ' fepb-col-2">' . "\r\n";
			$content .= '<div class="row-content-1">' . "\r\n\r\n";
			$content .= $row_data['content-1'] . "\r\n\r\n";
			$content .= '</div>' . "\r\n";
			$content .= '<div class="row-content-2">' . "\r\n\r\n";
			$content .= $row_data['content-2'] . "\r\n\r\n";
			$content .= '</div>' . "\r\n";
			$content .= '</div>' . "\r\n\r\n";
		}
	}
	return $content;
}


/* === FRONT-END SCRIPTS === */

/* Enqueue Script */
add_action( 'wp_enqueue_scripts', 'fepb_front_end_scripts' );

/**
 * Admin Scripts
 * @since 1.0.0
 */
function fepb_front_end_scripts(){

	/* In a page using page builder */
	if( is_page() && ( 'templates/fe-page-builder.php' == get_page_template_slug( get_queried_object_id() ) ) ){

		/* Enqueue CSS & JS For Page Builder */
		wp_enqueue_style( 'fx-page-builder', FE_PB_URI. 'assets/page-builder.css', array(), FE_PB_VERSION );
	}
}
