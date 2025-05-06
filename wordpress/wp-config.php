<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_engleski' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'u;b.uPffC)G;.OJ)pqsNM(OoBxi`&A<F#6OqqCjJ=``F:nH>$R8A`bDn)G:t{)*7' );
define( 'SECURE_AUTH_KEY',  'y5$7_3ETRr9}dl&!+B&c_;Ve}f#N~5lEC$MZ;p%6wgGnWg9~.FR4Y.x lU)?LdT5' );
define( 'LOGGED_IN_KEY',    'k,tMz|z,EyCND~I[reo[&Oil@YGA_oMsX::m5>tZ&HJKM<8D{Uq@%R/m@8TrDg5{' );
define( 'NONCE_KEY',        'm!,?tbiq86wHU,DF_[Gvz:.@@ubnlYWV WTqo>T*j)G`Sn9[oI+U{z-c.,[Pb8:Z' );
define( 'AUTH_SALT',        'bz(Wl0d4w^NwJ|Z{ |WtBjSsZ?-S/`GwL>Q4:_!2~N~u0X(yc8L:gp{N%IGI#d>L' );
define( 'SECURE_AUTH_SALT', '$/$gpi-&Gcb({,61#Najz2j5-R.3MV7-gx+R$(+qDvP 15wVU*>!^WN(IZa*f!.}' );
define( 'LOGGED_IN_SALT',   '$F}$oob1B&e#g4{zk<-95uM^z:E3!^|7}6F.fgR3zNzW}]?_[w`O?HMp<yEO?(LM' );
define( 'NONCE_SALT',       '|I^aeDoc~*(uYB1GNN(`#VXGw37w!RS$Ej[Nb;Z61#Z.;-AyF,vsj{,p_Aw=tQKR' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'SURECART_ENCRYPTION_KEY', 'k,tMz|z,EyCND~I[reo[&Oil@YGA_oMsX::m5>tZ&HJKM<8D{Uq@%R/m@8TrDg5{' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
