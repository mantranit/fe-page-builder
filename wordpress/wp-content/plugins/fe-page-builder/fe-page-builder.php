<?php
/**
 * Plugin Name: FE Page Builder
 * Description: Page Builder Plugin for Front-end Developer.
 * Version: 1.0.0
 * Author: Man Tran
 * Author URI: http://www.mantran.net/
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @author Man Tran <tranduyminhman@gmail.com>
 * @copyright Copyright (c) 2017, Man Tran
**/

/* Do not access this file directly */
if ( ! defined( 'WPINC' ) ) { die; }

/* Constants
------------------------------------------ */

/* Set plugin version constant. */
define( 'FE_PB_VERSION', '1.0.0' );

/* Set constant path to the plugin directory. */
define( 'FE_PB_PATH', trailingslashit( plugin_dir_path(__FILE__) ) );

/* Set the constant path to the plugin directory URI. */
define( 'FE_PB_URI', trailingslashit( plugin_dir_url( __FILE__ ) ) );


/* Includes
------------------------------------------ */

/* Functions */
require_once( FE_PB_PATH . 'includes/functions.php' );

/* Page Builder */
if( is_admin() ){
	require_once( FE_PB_PATH . 'includes/page-builder.php' );
}

/* Functions */
require_once( FE_PB_PATH . 'includes/front-end.php' );

