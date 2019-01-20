<?php
namespace ElementorPro\Modules\Tesla;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'design',
		//	'Testimonial_Carousel',
		//	'Reviews',
		];
	}

	public function get_name() {
		return 'tesla';
	}
}
