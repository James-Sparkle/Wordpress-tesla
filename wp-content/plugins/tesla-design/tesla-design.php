<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link
 * @since             1.0.0
 * @package           Tesla_Design
 *
 * @wordpress-plugin
 * Plugin Name:       Tesla Design
 * Plugin URI:
 * Description:       Редактор автомобилей
 * Version:           1.0.0
 * Author:            James Sparkle
 * Author URI:        https://vk.com/james_sparkle
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       tesla-design
 * Domain Path:       /languages
 */

// If this file is called directly, abort.

function add_style() {
  wp_enqueue_style( 'tesla_design_style', plugins_url( '/styles/style.css', __FILE__ ), false );
}

function add_script() {
  wp_enqueue_script('tesla_design_script', plugins_url('scripts/script.js', __FILE__), array('jquery') );
}

add_action( 'wp_enqueue_scripts', 'add_style' );
add_action( 'wp_enqueue_scripts', 'add_script' );

//$plugindir = '/wp-content/plugins/tesla-design/';

function tesla_design_shortcode($atts, $content=null, $code="") {
  $plugindir = '/wp-content/plugins/tesla-design/';
  ob_start();


  echo '<div class="tesla_design_image_dir" >';
  echo '<img class="tesla_design_image" id="t_d_1" src="'.$plugindir.'image/1/ms_mi01_stud_3qtr_bkba.jpg">'; //Основа
  echo '<img class="tesla_design_image" id="t_d_2" src="'.$plugindir.'image/1/body/ms_mi01_stud_3qtr_ppmr.png" >'; //Цвет
  echo '<img class="tesla_design_image" id="t_d_3" src="'.$plugindir.'image/1/lights/ms_mi01_stud_3qtr_fg02.png" >';//Противотуманки
  echo '<img class="tesla_design_image" id="t_d_4" src="'.$plugindir.'image/1/roof/ms_mi01_stud_3qtr_rffg.png" >';//Крыша
  echo '<img class="tesla_design_image" id="t_d_5" src="'.$plugindir.'image/1/discs/ms_mi01_stud_3qtr_wtas.png" >';//Диски
  echo '<img class="tesla_design_image" id="t_d_6" src="'.$plugindir.'image/1/brakes/ms_mi01_stud_3qtr_bc0r_wtds.png" >';//Суппорта
  echo'</div>';


   $output_string=ob_get_contents();
   ob_end_clean();
   return $output_string;
}

add_shortcode('tesla-design', 'tesla_design_shortcode');



function tesla_design_shortcode_btn_color($atts) {
  //$plugindir = '/wp-content/plugins/tesla-design/';
  extract(shortcode_atts(array(
    "color" => '1'
  ), $atts));
  $name = "Solid Black";
  switch ($color) {
    case 1:$name = "Solid Black";break;
    case 2:$name = "Midnight Silver Metallic";break;
    case 3:$name = "Deep Blue Metallic";break;
    case 4:$name = "Pearl While Multi-Coat";break;
    case 5:$name = "Red Multi-Coat";break;
  }
  return '<button class="tesla_design_btn t_d_color_'.$color.'" onclick="tesla_design_edit(null,'.$color.')">'.$name.'</button>';
}

add_shortcode('tesla-design_btn_color', 'tesla_design_shortcode_btn_color');

function tesla_design_shortcode_btn_wheels($atts) {
  //$plugindir = '/wp-content/plugins/tesla-design/';
  extract(shortcode_atts(array(
    "wheels" => '1'
  ), $atts));
  $name = '19" Silver Wheels';
  switch ($wheels) {
    case 1:$name = '19" Silver Wheels';break;
    case 2:$name = '29" Sonic Carbon Slipstream Wheels';break;
    case 3:$name = '21" Sonic Carbon Twin Turbine Wheels';break;
  }
  return '<button class="tesla_design_btn_wheels t_d_wheels_'.$wheels.'" onclick="tesla_design_edit(null,null,null,null,'.$wheels.')"><div class="t_d_text">'.$name.'</div></button>';
}

add_shortcode('tesla-design_btn_wheels', 'tesla_design_shortcode_btn_wheels');

function tesla_design_shortcode_btn_view($atts) {
  //$plugindir = '/wp-content/plugins/tesla-design/';
  extract(shortcode_atts(array(
    "view" => '1'
  ), $atts));
  return '<button class="tesla_design_btn_view t_d_view_'.$view.'" onclick="tesla_design_edit('.$view.')"></button>';
}

add_shortcode('tesla-design_btn_view', 'tesla_design_shortcode_btn_view');

function my_shortcode_function($atts) {
	extract(shortcode_atts(array(
	"num" => '999',
	"name" => 'User'
	), $atts));
	return '<a href="http://mainview.ru" title="Main View – блог о веб дизайне и веб разработке">
	Hello World #'.$num.' - name = '.$name.'</a>';
}
add_shortcode('myshortcode', 'my_shortcode_function');
//http://mainview.ru/wordpress/kak-sozdat-shortkody-dlya-wordpress
?>
