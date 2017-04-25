<?php
/**
 * Page Builder
 * - Register Page Template
 * - Add Page Builder Control
 * - Save Page Builder Data
 * - Admin Scripts
 * 
 * @since 1.0.0
 * @author David Chandra Purnama <david@genbumedia.com>
 * @copyright Copyright (c) 2016, Genbu Media
**/

/* === REGISTER PAGE TEMPLATE === */

/* Add page templates */
add_filter( 'theme_page_templates', 'fepb_register_page_template' );

/**
 * Register Page Template: Page Builder
 * @since 1.0.0
 */
function fepb_register_page_template( $templates ){
	$templates['templates/fe-page-builder.php'] = 'FE Page Builder';
	return $templates;
}


/* === ADD PAGE BUILDER CONTROL === */

/* Add page builder form after editor */
add_action( 'edit_form_after_editor', 'fepb_editor_callback', 10, 2 );

/**
 * Page Builder Control
 * Added after Content Editor in Page Edit Screen.
 * @since 1.0.0
 */
function fepb_editor_callback( $post ){
	if( 'page' !== $post->post_type ){
		return;
	}
?>

	<?php
	$widgets = array_keys( $GLOBALS['wp_widget_factory']->widgets );
	print '<pre>$widgets = ' . esc_html( var_export( $widgets, TRUE ) ) . '</pre>';
	?>
	<div id="fe-page-builder">

		<?php add_thickbox(); ?>
		<div class="angular-app">
			<my-app>FE Page Builder loading...</my-app>
			<script>
				System.import('<?php echo FE_PB_URI; ?>//assets/angular/src/main.js').catch(function(err){ console.error(err); });
			</script>
		</div>

		<?php
		$content = '<h1>Heading 1</h1>\n<p>paragraph</p>';
		$editor_id = 'text';
//		wp_editor( $content, $editor_id );
		?>

		<script>
			tinymce.execCommand( 'mceAddEditor', true, 'text' );
		</script>

		<textarea id="text"></textarea>

		<div class="fepb-rows">
			<?php fepb_render_rows( $post ); // display saved rows ?>
		</div><!-- .fepb-rows -->

		<div class="fepb-actions">
			<a href="#" class="fepb-add-row button-primary button-large" data-template="col-1">Add 1 Column</a>
			<a href="#" class="fepb-add-row button-primary button-large" data-template="col-2">Add 2 Columns</a>
		</div><!-- .fepb-actions -->

		<div class="fepb-templates" style="display:none;">

			<?php /* == This is the 1 column row template == */ ?>
			<div class="fepb-row fepb-col-1">

				<div class="fepb-row-title">
					<span class="fepb-handle dashicons dashicons-sort"></span>
					<span class="fepb-order">0</span>
					<span class="fepb-row-title-text">1 Column</span>
					<span class="fepb-remove dashicons dashicons-trash"></span>
				</div><!-- .fepb-row-title -->

				<div class="fepb-row-fields">
					<textarea class="fepb-row-input" name="" data-field="content" placeholder="Add HTML here..."></textarea>
					<input class="fepb-row-input" type="hidden" name="" data-field="type" value="col-1">
				</div><!-- .fepb-row-fields -->

			</div><!-- .fepb-row.fepb-col-1 -->

			<?php /* == This is the 2 columns row template == */ ?>
			<div class="fepb-row fepb-col-2">

				<div class="fepb-row-title">
					<span class="fepb-handle dashicons dashicons-sort"></span>
					<span class="fepb-order">0</span>
					<span class="fepb-row-title-text">2 Columns</span>
					<span class="fepb-remove dashicons dashicons-trash"></span>
				</div><!-- .fepb-row-title -->

				<div class="fepb-row-fields">
					<div class="fepb-col-2-left">
						<textarea class="fepb-row-input" name="" data-field="content-1" placeholder="1st column content here..."></textarea>
					</div><!-- .fepb-col-2-left -->
					<div class="fepb-col-2-right">
						<textarea class="fepb-row-input" name="" data-field="content-2" placeholder="2nd column content here..."></textarea>
					</div><!-- .fepb-col-2-right -->
					<input class="fepb-row-input" type="hidden" name="" data-field="type" value="col-2">
				</div><!-- .fepb-row-fields -->

			</div><!-- .fepb-row.fepb-col-2 -->

		</div><!-- .fepb-templates -->

		<?php wp_nonce_field( "fepb_nonce_action", "fepb_nonce" ) ?>

	</div><!-- .fe-page-builder -->
<?php
}


/* === SAVE PAGE BUILDER DATA === */

/* Save post meta on the 'save_post' hook. */
add_action( 'save_post', 'fepb_save_post', 10, 2 );

/**
 * Save Page Builder Data When Saving Page
 * @since 1.0.0
 */
function fepb_save_post( $post_id, $post ){

	/* Stripslashes Submitted Data */
	$request = stripslashes_deep( $_POST );

	/* Verify/validate */
	if ( ! isset( $request['fepb_nonce'] ) || ! wp_verify_nonce( $request['fepb_nonce'], 'fepb_nonce_action' ) ){
		return $post_id;
	}
	/* Do not save on autosave */
	if ( defined('DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return $post_id;
	}
	/* Check post type and user caps. */
	$post_type = get_post_type_object( $post->post_type );
	if ( 'page' != $post->post_type || !current_user_can( $post_type->cap->edit_post, $post_id ) ){
		return $post_id;
	}

	/* == Save, Delete, or Update Page Builder Data == */

	/* Get (old) saved page builder data */
	$saved_data = get_post_meta( $post_id, 'fepb', true );

	/* Get new submitted data and sanitize it. */
	$submitted_data = isset( $request['fepb'] ) ? fepb_sanitize( $request['fepb'] ) : null;

	/* New data submitted, No previous data, create it  */
	if ( $submitted_data && '' == $saved_data ){
		add_post_meta( $post_id, 'fepb', $submitted_data, true );
	}
	/* New data submitted, but it's different data than previously stored data, update it */
	elseif( $submitted_data && ( $submitted_data != $saved_data ) ){
		update_post_meta( $post_id, 'fepb', $submitted_data );
	}
	/* New data submitted is empty, but there's old data available, delete it. */
	elseif ( empty( $submitted_data ) && $saved_data ){
		delete_post_meta( $post_id, 'fepb' );
	}

	/* == Get Selected Page Template == */
	$page_template = isset( $request['page_template'] ) ? esc_attr( $request['page_template'] ) : null;

	/* == Page Builder Template Selected, Save to Post Content == */
	if( 'templates/fe-page-builder.php' == $page_template ){

		/* Page builder content without row/column wrapper */
		$pb_content = fepb_format_post_content_data( $submitted_data );

		/* Post Data To Save */
		$this_post = array(
			'ID'           => $post_id,
			'post_content' => sanitize_post_field( 'post_content', $pb_content, $post_id, 'db' ),
		);

		/**
		 * Prevent infinite loop.
		 * @link https://developer.wordpress.org/reference/functions/wp_update_post/
		 */
		remove_action( 'save_post', 'fepb_save_post' );
		wp_update_post( $this_post );
		add_action( 'save_post', 'fepb_save_post' );
	}

	/* == Always delete page builder data if page template not selected == */
	else{
		delete_post_meta( $post_id, 'fepb' );
	}
}


/**
 * Format Page Builder Content Without Wrapper Div.
 * This is added to post content.
 * @since 1.0.0
**/
function fepb_format_post_content_data( $row_datas ){

	/* return if no rows data */
	if( !$row_datas ){
		return '';
	}

	/* Output */
	$content = '';

	/* Loop for each rows */
	foreach( $row_datas as $order => $row_data ){
		$order = intval( $order );

		/* === Row with 1 column === */
		if( 'col-1' == $row_data['type'] ){
			$content .= $row_data['content'] . "\r\n\r\n";
		}
		/* === Row with 2 columns === */
		elseif( 'col-2' == $row_data['type'] ){
			$content .= $row_data['content-1'] . "\r\n\r\n";
			$content .= $row_data['content-2'] . "\r\n\r\n";
		}
	}
	return $content;
}


/**
 * Render Saved Rows
 * @since 1.0.0
 */
function fepb_render_rows( $post ){

	/* Get saved rows data and sanitize it */
	$row_datas = fepb_sanitize( get_post_meta( $post->ID, 'fepb', true ) );

	/* Default Message */
	$default_message = 'Please add row to start!';

	/* return if no rows data */
	if( !$row_datas ){
		echo '<p class="fepb-rows-message">' . $default_message . '</p>';
		return;
	}
	/* Data available, hide default notice */
	else{
		echo '<p class="fepb-rows-message" style="display:none;">' . $default_message . '</p>';
	}

	?>

	<?php add_thickbox(); ?>
	<div id="my-content-id" style="display:none;">
		<p>
			This is my hidden content! It will appear in ThickBox when the link is clicked.
		</p>
	</div>

	<a href="#TB_inline?width=600&height=550&inlineId=my-content-id" class="thickbox">View my inline content!</a>

	<?php
	/* Loop for each rows */
	foreach( $row_datas as $order => $row_data ){
		$order = intval( $order );

		/* === Row with 1 column === */
		if( 'col-1' == $row_data['type'] ){
			?>
			<div class="fepb-row fepb-col-1">

				<div class="fepb-row-title">
					<span class="fepb-handle dashicons dashicons-sort"></span>
					<span class="fepb-order"><?php echo $order; ?></span>
					<span class="fepb-row-title-text">1 Column</span>
					<span class="fepb-remove dashicons dashicons-trash"></span>
				</div><!-- .fepb-row-title -->

				<div class="fepb-row-fields">
					<textarea class="fepb-row-input" name="fepb[<?php echo $order; ?>][content]" data-field="content" placeholder="Add HTML here..."><?php echo esc_textarea( $row_data['content'] ); ?></textarea>
					<input class="fepb-row-input" type="hidden" name="fepb[<?php echo $order; ?>][type]" data-field="type" value="col-1">
				</div><!-- .fepb-row-fields -->

			</div><!-- .fepb-row.fepb-col-1 -->
			<?php
		}
		/* === Row with 2 columns === */
		elseif( 'col-2' == $row_data['type'] ){
			?>
			<div class="fepb-row fepb-col-2">

				<div class="fepb-row-title">
					<span class="fepb-handle dashicons dashicons-sort"></span>
					<span class="fepb-order"><?php echo $order; ?></span>
					<span class="fepb-row-title-text">2 Columns</span>
					<span class="fepb-remove dashicons dashicons-trash"></span>
				</div><!-- .fepb-row-title -->

				<div class="fepb-row-fields">
					<div class="fepb-col-2-left">
						<textarea class="fepb-row-input" name="fepb[<?php echo $order; ?>][content-1]" data-field="content-1" placeholder="1st column content here..."><?php echo esc_textarea( $row_data['content-1'] ); ?></textarea>
					</div><!-- .fepb-col-2-left -->
					<div class="fepb-col-2-right">
						<textarea class="fepb-row-input" name="fepb[<?php echo $order; ?>][content-2]" data-field="content-2" placeholder="2nd column content here..."><?php echo esc_textarea( $row_data['content-2'] ); ?></textarea>
					</div><!-- .fepb-col-2-right -->
					<input class="fepb-row-input" type="hidden" name="fepb[<?php echo $order; ?>][type]" data-field="type" value="col-2">
				</div><!-- .fepb-row-fields -->

			</div><!-- .fepb-row.fepb-col-2 -->
			<?php
		}
	}
}


/* === ADMIN SCRIPTS === */

/* Admin Script */
add_action( 'admin_enqueue_scripts', 'fepb_admin_scripts' );

/**
 * Admin Scripts
 * @since 1.0.0
 */
function fepb_admin_scripts( $hook_suffix ){
	global $post_type;

	/* In Page Edit Screen */
	if( 'page' == $post_type && in_array( $hook_suffix, array( 'post.php', 'post-new.php' ) ) ){

		/* Load Editor/Page Builder Toggle Script */
		wp_enqueue_script( 'fepb-admin-editor-toggle', FE_PB_URI . 'assets/admin-editor-toggle.js', array( 'jquery' ), FE_PB_VERSION );

		/* Enqueue CSS & JS For Page Builder */
		wp_enqueue_style( 'fepb-admin', FE_PB_URI. 'assets/admin-page-builder.css', array(), FE_PB_VERSION );
		wp_enqueue_script( 'fepb-admin', FE_PB_URI. 'assets/admin-page-builder.js', array( 'jquery', 'jquery-ui-sortable' ), FE_PB_VERSION, true );

		wp_enqueue_script( 'fepb-admin-shim', FE_PB_URI. 'assets/angular/node_modules/core-js/client/shim.min.js', array(  ), FE_PB_VERSION, false );
		wp_enqueue_script( 'fepb-admin-zone', FE_PB_URI. 'assets/angular/node_modules/zone.js/dist/zone.js', array(  ), FE_PB_VERSION, false );
		wp_enqueue_script( 'fepb-admin-system', FE_PB_URI. 'assets/angular/node_modules/systemjs/dist/system.src.js', array(  ), FE_PB_VERSION, false );
		wp_enqueue_script( 'fepb-admin-config', FE_PB_URI. 'assets/angular/src/systemjs.config.js', array(  ), FE_PB_VERSION, false );
	}
}


