<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'pagebuilder');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Rj}ob|uj?p_U>-e)1Cwp&4yK*s<+Sl?SN;][FUjz[F6s6ErX!d,4z*QO76S[IZ,^');
define('SECURE_AUTH_KEY',  'L,1_m6OHZ*{wor29+.N!Vl:<A}(kPXnlx~b;.1hz8iMU0VvjXct|]:2/cxQ_cO6k');
define('LOGGED_IN_KEY',    'vP#H7x.SFQK195w#bk/Ubjlt1@FJw$Ey7MrWDnh]ycU$X~C!HYd4?}XJLys_4bm/');
define('NONCE_KEY',        '2K[~sLm3wf1RYX@p),zhYj{N<1{RAM5p)<D*Q:d+dq]-;O2@GY/,IkA@gC9Zl61X');
define('AUTH_SALT',        'V/d-nv@gaK~&2=Cc,RC]zMWUfn*vnHd/|C9RF:RtzkUQ/Lb?)T7yQ<(Q>O[7h2th');
define('SECURE_AUTH_SALT', 'naNAY(3F``E<E8+%GCyAz7x&4]LFZm=j1*c$yZ,cYvvD^M3SWJw]]8}W(OoV!31H');
define('LOGGED_IN_SALT',   '7zipNxuFO;5BbOHJ^oi5mh1Y=jK4z(DowwIk|g4%rhZn4TuoX-7E8m_Svi#V|Ai9');
define('NONCE_SALT',       '7mFV|t}.}?RuR46`0TN{jP8rH0;5iN6LPlAxf)S0#.i<#ya_;gUxyS]%Ga{E vI&');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
