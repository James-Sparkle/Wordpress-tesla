<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @since      1.0.0
 *
 * @package    Tesla_Design
 * @subpackage Tesla_Design/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Tesla_Design
 * @subpackage Tesla_Design/admin
 * @author     James Sparkle <james7sparkle@gmail.com>
 */
class Tesla_Design_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $tesla_design    The ID of this plugin.
	 */
	private $tesla_design;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $tesla_design       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $tesla_design, $version ) {

		$this->tesla_design = $tesla_design;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tesla_Design_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tesla_Design_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->tesla_design, plugin_dir_url( __FILE__ ) . 'css/tesla-design-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Tesla_Design_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Tesla_Design_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->tesla_design, plugin_dir_url( __FILE__ ) . 'js/tesla-design-admin.js', array( 'jquery' ), $this->version, false );

	}

}
