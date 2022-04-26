<?php

/**
 * Plugin Name: Reproduction Giorgi
 * Description : A fun plugin to reproduce a bug
 * Version: 1.0.0
 */

if( !defined( 'ABSPATH' ) ) exit();

// Enqueue
function enqueue_assets() {
    wp_enqueue_script(
        'gutenberg-sidebar',
        plugins_url( 'build/index.js', __FILE__ ),
        [ 'wp-plugins', 'wp-edit-post', 'wp-element', 'wp-components', 'wp-data']
    );
}

add_action( 'enqueue_block_editor_assets', 'enqueue_assets' );