/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra Addon
 * @since  1.0.0
 */

( function( $ ) {

	wp.customize( 'astra-settings[site-layout-box-width]', function( value ) {
		value.bind( function( width ) {
			/**
			 * Has sticky header?
			 */
			if ( jQuery( '*[data-stick-maxwidth]' ).length ) {
				jQuery( '*[data-stick-maxwidth]' ).find( '.ast-sticky-active, .ast-header-sticky-active, .ast-custom-footer' ).css( { 'max-width': width + 'px', 'transition': 'none' } );
				jQuery( '*[data-stick-maxwidth]' ).attr( 'data-stick-maxwidth', width );
			}
		} );
	} );

	wp.customize( 'astra-settings[site-layout-box-tb-margin]', function( value ) {
		value.bind( function( margin ) {

			header_top 			= (typeof ( wp.customize._value['astra-settings[above-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[above-header-layout]']._value: '';
			header_below		= (typeof ( wp.customize._value['astra-settings[below-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-layout]']._value: '';
			header_above_stick 	= (typeof ( wp.customize._value['astra-settings[header-above-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-above-stick]']._value: '';
			header_below_stick 	= (typeof ( wp.customize._value['astra-settings[header-below-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-below-stick]']._value: '';
			header_main_stick 	= (typeof ( wp.customize._value['astra-settings[header-main-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-main-stick]']._value: '';

			if( header_main_stick || ( header_top != 'disabled' && header_above_stick ) || ( header_below != 'disabled' && header_below_stick ) ) {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

	wp.customize( 'astra-settings[site-layout-padded-pad]', function( value ) {
		value.bind( function( padding ) {

			header_top 			= (typeof ( wp.customize._value['astra-settings[above-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[above-header-layout]']._value : '';
			header_below 		= (typeof ( wp.customize._value['astra-settings[below-header-layout]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[below-header-layout]']._value : '';
			header_above_stick 	= (typeof ( wp.customize._value['astra-settings[header-above-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-above-stick]']._value : '';
			header_below_stick 	= (typeof ( wp.customize._value['astra-settings[header-below-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-below-stick]']._value : '';
			header_main_stick 	= (typeof ( wp.customize._value['astra-settings[header-main-stick]'] ) != 'undefined' ) ? wp.customize._value['astra-settings[header-main-stick]']._value : '';

			if( header_main_stick || ( header_top != 'disabled' && header_above_stick ) || ( header_below != 'disabled' && header_below_stick ) ) {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );

var stickyHeaderStyle = astSticky.stickyHeaderStyle || '';
var stickyHideOnScroll = astSticky.stickyHideOnScroll || '';

		if ( 'none' === stickyHeaderStyle &&  '1' != stickyHideOnScroll ) {

			/**
			 * Sticky Primary Header
			 */
			// Sticky -- Primary Header.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-title-responsive]','color', '.ast-primary-sticky-header-active .site-title a, .ast-primary-sticky-header-active .site-title a:focus, .ast-primary-sticky-header-active .site-title a:hover, .ast-primary-sticky-header-active .site-title a:visited' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-h-site-title-responsive]','color', '.ast-primary-sticky-header-active .site-header .site-title a:hover' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-tagline-responsive]','color', '.ast-primary-sticky-header-active .site-header .site-description' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-bg-color-responsive]','background-color', '.ast-transparent-header.ast-primary-sticky-header-active .main-header-bar, .ast-primary-sticky-header-active .main-header-bar' );

			// Sticky -- Primary Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-header-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-menu, .ast-primary-sticky-header-active .main-header-menu a, .ast-primary-sticky-header-active .ast-header-custom-item, .ast-header-custom-item a, .ast-primary-sticky-header-active li.ast-masthead-custom-menu-items, .ast-primary-sticky-header-active li.ast-masthead-custom-menu-items a, .ast-primary-sticky-header-active .ast-masthead-custom-menu-items .ast-inline-search form' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-menu li.current-menu-item > a, .ast-primary-sticky-header-active .main-header-menu li.current-menu-ancestor > a, .ast-primary-sticky-header-active .main-header-menu li.current_page_item > a, .ast-primary-sticky-header-active .main-header-menu a:hover, .ast-header-custom-item a:hover, .ast-primary-sticky-header-active .main-header-menu li:hover > a, .ast-primary-sticky-header-active .main-header-menu li.focus > a, .ast-primary-sticky-header-active .main-header-menu .ast-masthead-custom-menu-items a:hover, .ast-primary-sticky-header-active .main-header-menu li:hover > .ast-menu-toggle, .ast-primary-sticky-header-active .main-header-menu li.focus > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-a-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-header-menu li.current-menu-item > a, .ast-primary-sticky-header-active .main-header-menu li.current-menu-ancestor > a, .ast-primary-sticky-header-active .main-header-menu li.current_page_item > a,.ast-primary-sticky-header-active .main-header-menu a:hover, .ast-header-custom-item a:hover, .ast-primary-sticky-header-active .main-header-menu li:hover > a, .ast-primary-sticky-header-active .main-header-menu li.focus > a' );

			// Sticky -- Primary Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-navigation ul ul, .ast-header-break-point.ast-primary-sticky-header-active .main-header-menu ul' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-menu .sub-menu, .ast-primary-sticky-header-active .main-header-menu .sub-menu a, .ast-primary-sticky-header-active .main-header-menu .children a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-color-responsive]','color', '.ast-primary-sticky-header-active .main-header-menu .sub-menu a:hover, .ast-primary-sticky-header-active .main-header-menu .children a:hover, .ast-primary-sticky-header-active .main-header-menu .sub-menu li:hover > a, .ast-primary-sticky-header-active .main-header-menu .children li:hover > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.focus > a, .ast-primary-sticky-header-active .main-header-menu .children li.focus > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li:hover > .ast-menu-toggle, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.focus > .ast-menu-toggle, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.current-menu-item > a, .ast-primary-sticky-header-active .main-header-menu .children li.current_page_item > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.current-menu-ancestor > a, .ast-primary-sticky-header-active .main-header-menu .children li.current_page_ancestor > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.current_page_item > a, .ast-primary-sticky-header-active .main-header-menu .children li.current_page_item > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-a-bg-color-responsive]','background-color', '.ast-primary-sticky-header-active .main-header-menu .sub-menu a:hover, .ast-primary-sticky-header-active .main-header-menu .children a:hover, .ast-primary-sticky-header-active .main-header-menu .sub-menu li:hover > a, .ast-primary-sticky-header-active .main-header-menu .children li:hover > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.focus > a, .ast-primary-sticky-header-active .main-header-menu .children li.focus > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.current-menu-item > a, .ast-primary-sticky-header-active .main-header-menu .children li.current_page_item > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.current-menu-ancestor > a, .ast-primary-sticky-header-active .main-header-menu .children li.current_page_ancestor > a, .ast-primary-sticky-header-active .main-header-menu .sub-menu li.current_page_item > a, .ast-primary-sticky-header-active .main-header-menu .children li.current_page_item > a' );

			// Sticky -- Custom Menu item outside
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-text-color-responsive]','color', '.ast-primary-sticky-header-active div.ast-masthead-custom-menu-items, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-color-responsive]','color', '.ast-primary-sticky-header-active div.ast-masthead-custom-menu-items a, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-h-color-responsive]','color', '.ast-primary-sticky-header-active div.ast-masthead-custom-menu-items a:hover, .ast-primary-sticky-header-active div.ast-masthead-custom-menu-items .widget a:hover' );

			/**
			 * Sticky Above Header
			 */
			// Sticky -- Above Header.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-bg-color-responsive]','background-color', '.ast-above-sticky-header-active .ast-above-header' );

			// Sticky -- Above Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-bg-color-responsive]','background-color', '.ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation, .ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation ul, .ast-above-sticky-header-active .ast-above-header .ast-search-menu-icon .search-field, .ast-above-sticky-header-active .ast-above-header .ast-search-menu-icon .search-field:focus, .ast-above-sticky-header-active .ast-above-header-menu,.ast-header-break-point.ast-above-sticky-header-active .ast-above-header-section-separated .ast-above-header-navigation ul.ast-above-header-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-navigation a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-navigation li:hover > a, .ast-above-sticky-header-active .ast-above-header-navigation li.current-menu-item > a, .ast-above-sticky-header-active .ast-above-header-navigation li.current-menu-ancestor > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-a-bg-color-responsive]','background-color', '.ast-above-sticky-header-active .ast-above-header-navigation li:hover, .ast-above-sticky-header-active .ast-above-header-navigation li.current-menu-item' );

			// Sticky -- Above Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-bg-color-responsive]','background-color', '.ast-above-sticky-header-active .ast-above-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-navigation .sub-menu a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:hover > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.focus > a,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.focus > .ast-menu-toggle,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor.focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item.focus > .ast-menu-toggle,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor:hover > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor:focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor.focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item:hover > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item:focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item.focus > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-a-bg-color-responsive]','background-color', '.ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:hover > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.focus > a,.ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:hover > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li:focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.focus > .ast-menu-toggle, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor:hover > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor:focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-ancestor.focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item:hover > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item:focus > a, .ast-above-sticky-header-active .ast-above-header-menu .sub-menu li.current-menu-item.focus > a' );

			// Sticky -- Above Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-text-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-section .user-select, .ast-above-sticky-header-active .ast-above-header-section .widget, .ast-above-sticky-header-active .ast-above-header-section .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-section .user-select a, .ast-above-sticky-header-active .ast-above-header-section .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-h-color-responsive]','color', '.ast-above-sticky-header-active .ast-above-header-section .user-select a:hover, .ast-above-sticky-header-active .ast-above-header-section .widget a:hover' );

			/**
			 * Sticky Below Header
			 */
			// Sticky -- below Header.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header' );

			// Sticky -- below Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-actual-nav' );
			astra_color_responsive_css('sticky-header-menu-link', 'astra-settings[sticky-below-header-menu-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu, .ast-below-sticky-header-active .ast-below-header-menu a,.ast-below-sticky-header-active .below-header-user-select .widget,.ast-below-sticky-header-active .below-header-user-select .widget-title,.ast-below-sticky-header-active .below-header-user-select, .ast-below-sticky-header-active .below-header-user-select a, .ast-below-sticky-header-active .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header-search-border', 'astra-settings[sticky-below-header-menu-color-responsive]','border-color', '.ast-below-sticky-header-active .below-header-user-select input.search-field:focus, .ast-below-sticky-header-active .below-header-user-select input.search-field.focus' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu li:hover > a, .ast-below-sticky-header-active .ast-below-header-menu li:focus > a, .ast-below-sticky-header-active .ast-below-header-menu li.focus > a,.ast-below-sticky-header-active .ast-below-header-menu li.current-menu-ancestor > a, .ast-below-sticky-header-active .ast-below-header-menu li.current-menu-item > a, .ast-below-sticky-header-active .ast-below-header-menu li.current-menu-ancestor > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu li.current-menu-item > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item.focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:hover > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:focus > .ast-menu-toggle, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item.focus > .ast-menu-toggle,.ast-below-sticky-header-active .below-header-user-select a:hover, .ast-below-sticky-header-active .below-header-user-select .widget a:hover' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-a-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-menu li:hover > a, .ast-below-header-menu li:focus > a, .ast-below-sticky-header-active .ast-below-header-menu li.focus > a, .ast-below-sticky-header-active .ast-below-header-menu li.current-menu-ancestor > a, .ast-below-sticky-header-active .ast-below-header-menu li.current-menu-item > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item.focus > a' );

			// Sticky -- below Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-color-responsive]','color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu li:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item.focus > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-a-bg-color-responsive]','background-color', '.ast-below-sticky-header-active .ast-below-header-menu .sub-menu li:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, .ast-below-sticky-header-active .ast-below-header-menu .sub-menu li.current-menu-item.focus > a' );

			// Sticky -- Below Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-text-color-responsive]','color', '.ast-below-sticky-header-active .below-header-user-select, .ast-below-sticky-header-active .below-header-user-select .widget,.ast-below-sticky-header-active .below-header-user-select .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-color-responsive]','color', '.ast-below-sticky-header-active .below-header-user-select a, .ast-below-sticky-header-active .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-h-color-responsive]','color', '.ast-below-sticky-header-active .below-header-user-select a:hover, .ast-below-sticky-header-active .below-header-user-select .widget a:hover' );
		} else{

			/**
			 * Sticky Primary Header
			 */
			// Sticky -- Primary Header.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-title-responsive]','color', '#ast-fixed-header .site-title a, #ast-fixed-header .site-title a:focus, #ast-fixed-header .site-title a:hover, #ast-fixed-header .site-title a:visited' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-h-site-title-responsive]','color', '#ast-fixed-header .site-header .site-title a:hover' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-color-site-tagline-responsive]','color', '#ast-fixed-header .site-header .site-description' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-bg-color-responsive]','background-color', '.ast-transparent-header #ast-fixed-header .main-header-bar, #ast-fixed-header .main-header-bar, #ast-fixed-header .ast-masthead-custom-menu-items .ast-inline-search .search-field, #ast-fixed-header .ast-masthead-custom-menu-items .ast-inline-search .search-field:focus' );

			// Sticky -- Primary Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-bg-color-responsive]','background-color', '#ast-fixed-header .main-header-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-color-responsive]','color', '#ast-fixed-header .main-header-menu, #ast-fixed-header .main-header-menu a, #ast-fixed-header .ast-header-custom-item, .ast-header-custom-item a, #ast-fixed-header li.ast-masthead-custom-menu-items, #ast-fixed-header li.ast-masthead-custom-menu-items a, #ast-fixed-header .ast-masthead-custom-menu-items .ast-inline-search form' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-color-responsive]','color', '#ast-fixed-header .main-header-menu li.current-menu-item > a, #ast-fixed-header .main-header-menu li.current-menu-ancestor > a, #ast-fixed-header .main-header-menu li.current_page_item > a, #ast-fixed-header .main-header-menu a:hover, .ast-header-custom-item a:hover, #ast-fixed-header .main-header-menu li:hover > a, #ast-fixed-header .main-header-menu li.focus > a, #ast-fixed-header .main-header-menu .ast-masthead-custom-menu-items a:hover, #ast-fixed-header .main-header-menu li:hover > .ast-menu-toggle, #ast-fixed-header .main-header-menu li.focus > .ast-menu-toggle' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-menu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .main-header-menu li.current-menu-item > a, #ast-fixed-header .main-header-menu li.current-menu-ancestor > a, #ast-fixed-header .main-header-menu li.current_page_item > a,#ast-fixed-header .main-header-menu a:hover, .ast-header-custom-item a:hover, #ast-fixed-header .main-header-menu li:hover > a, #ast-fixed-header .main-header-menu li.focus > a' );

			// Sticky -- Primary Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-bg-color-responsive]','background-color', '#ast-fixed-header .main-navigation ul ul, .ast-header-break-point #ast-fixed-header .main-header-menu ul' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-color-responsive]','color', '#ast-fixed-header .main-header-menu .sub-menu, #ast-fixed-header .main-header-menu .sub-menu a, #ast-fixed-header .main-header-menu .children a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-color-responsive]','color', '#ast-fixed-header .main-header-menu .sub-menu a:hover, #ast-fixed-header .main-header-menu .children a:hover, #ast-fixed-header .main-header-menu .sub-menu li:hover > a, #ast-fixed-header .main-header-menu .children li:hover > a, #ast-fixed-header .main-header-menu .sub-menu li.focus > a, #ast-fixed-header .main-header-menu .children li.focus > a, #ast-fixed-header .main-header-menu .sub-menu li:hover > .ast-menu-toggle, #ast-fixed-header .main-header-menu .sub-menu li.focus > .ast-menu-toggle, #ast-fixed-header .main-header-menu .sub-menu li.current-menu-item > a, #ast-fixed-header .main-header-menu .children li.current_page_item > a, #ast-fixed-header .main-header-menu .sub-menu li.current-menu-ancestor > a, #ast-fixed-header .main-header-menu .children li.current_page_ancestor > a, #ast-fixed-header .main-header-menu .sub-menu li.current_page_item > a, #ast-fixed-header .main-header-menu .children li.current_page_item > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-submenu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .main-header-menu .sub-menu a:hover, #ast-fixed-header .main-header-menu .children a:hover, #ast-fixed-header .main-header-menu .sub-menu li:hover > a, #ast-fixed-header .main-header-menu .children li:hover > a, #ast-fixed-header .main-header-menu .sub-menu li.focus > a, #ast-fixed-header .main-header-menu .children li.focus > a, #ast-fixed-header .main-header-menu .sub-menu li.current-menu-item > a, #ast-fixed-header .main-header-menu .children li.current_page_item > a, #ast-fixed-header .main-header-menu .sub-menu li.current-menu-ancestor > a, #ast-fixed-header .main-header-menu .children li.current_page_ancestor > a, #ast-fixed-header .main-header-menu .sub-menu li.current_page_item > a, #ast-fixed-header .main-header-menu .children li.current_page_item > a' );

			// Sticky -- Custom Menu item outside
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-text-color-responsive]','color', '#ast-fixed-header div.ast-masthead-custom-menu-items, #ast-fixed-header div.ast-masthead-custom-menu-items .widget, #ast-fixed-header div.ast-masthead-custom-menu-items .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-color-responsive]','color', '#ast-fixed-header div.ast-masthead-custom-menu-items a, #ast-fixed-header div.ast-masthead-custom-menu-items .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-header-content-section-link-h-color-responsive]','color', '#ast-fixed-header div.ast-masthead-custom-menu-items a:hover, #ast-fixed-header div.ast-masthead-custom-menu-items .widget a:hover' );

			/**
			 * Sticky Above Header
			 */
			// Sticky -- Above Header.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-bg-color-responsive]','background-color', '#ast-fixed-header .ast-above-header' );

			// Sticky -- Above Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-bg-color-responsive]','background-color', '.ast-header-break-point #ast-fixed-header .ast-above-header-section-separated .ast-above-header-navigation, .ast-header-break-point #ast-fixed-header .ast-above-header-section-separated .ast-above-header-navigation ul, #ast-fixed-header .ast-above-header .ast-search-menu-icon .search-field, #ast-fixed-header .ast-above-header .ast-search-menu-icon .search-field:focus, #ast-fixed-header .ast-above-header-menu,.ast-header-break-point #ast-fixed-header .ast-above-header-section-separated .ast-above-header-navigation ul.ast-above-header-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-color-responsive]','color', '#ast-fixed-header .ast-above-header-navigation a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-color-responsive]','color', '#ast-fixed-header .ast-above-header-navigation li:hover > a, #ast-fixed-header .ast-above-header-navigation li.current-menu-item > a, #ast-fixed-header .ast-above-header-navigation li.current-menu-ancestor > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-menu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-above-header-navigation li:hover, #ast-fixed-header .ast-above-header-navigation li.current-menu-item' );

			// Sticky -- Above Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-bg-color-responsive]','background-color', '#ast-fixed-header .ast-above-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-color-responsive]','color', '#ast-fixed-header .ast-above-header-navigation .sub-menu a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-color-responsive]','color', '#ast-fixed-header .ast-above-header-menu .sub-menu li:hover > a, #ast-fixed-header .ast-above-header-menu .sub-menu li:focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.focus > a,#ast-fixed-header .ast-above-header-menu .sub-menu li:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.focus > .ast-menu-toggle,#ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor.focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item.focus > .ast-menu-toggle,#ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor:hover > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor:focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor.focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item:hover > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item:focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item.focus > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-submenu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-above-header-menu .sub-menu li:hover > a, #ast-fixed-header .ast-above-header-menu .sub-menu li:focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.focus > a,#ast-fixed-header .ast-above-header-menu .sub-menu li:hover > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li:focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.focus > .ast-menu-toggle, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor:hover > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor:focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-ancestor.focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item:hover > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item:focus > a, #ast-fixed-header .ast-above-header-menu .sub-menu li.current-menu-item.focus > a' );

			// Sticky -- Above Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-text-color-responsive]','color', '#ast-fixed-header .ast-above-header-section .user-select, #ast-fixed-header .ast-above-header-section .widget, #ast-fixed-header .ast-above-header-section .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-color-responsive]','color', '#ast-fixed-header .ast-above-header-section .user-select a, #ast-fixed-header .ast-above-header-section .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-above-header-content-section-link-h-color-responsive]','color', '#ast-fixed-header .ast-above-header-section .user-select a:hover, #ast-fixed-header .ast-above-header-section .widget a:hover' );


			/**
			 * Sticky Below Header
			 */
			// Sticky -- below Header.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header' );

			// Sticky -- below Header Menu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-actual-nav' );
			astra_color_responsive_css('sticky-header-menu-link', 'astra-settings[sticky-below-header-menu-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu, #ast-fixed-header .ast-below-header-menu a,#ast-fixed-header .below-header-user-select .widget,#ast-fixed-header .below-header-user-select .widget-title,#ast-fixed-header .below-header-user-select, #ast-fixed-header .below-header-user-select a, #ast-fixed-header .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header-search-border', 'astra-settings[sticky-below-header-menu-color-responsive]','border-color', '#ast-fixed-header .below-header-user-select input.search-field:focus, #ast-fixed-header .below-header-user-select input.search-field.focus' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu li:hover > a, #ast-fixed-header .ast-below-header-menu li:focus > a, #ast-fixed-header .ast-below-header-menu li.focus > a,#ast-fixed-header .ast-below-header-menu li.current-menu-ancestor > a, #ast-fixed-header .ast-below-header-menu li.current-menu-item > a, #ast-fixed-header .ast-below-header-menu li.current-menu-ancestor > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu li.current-menu-item > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item.focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:hover > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:focus > .ast-menu-toggle, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item.focus > .ast-menu-toggle,#ast-fixed-header .below-header-user-select a:hover, #ast-fixed-header .below-header-user-select .widget a:hover' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-menu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-menu li:hover > a, .ast-below-header-menu li:focus > a, #ast-fixed-header .ast-below-header-menu li.focus > a, #ast-fixed-header .ast-below-header-menu li.current-menu-ancestor > a, #ast-fixed-header .ast-below-header-menu li.current-menu-item > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item.focus > a' );

			// Sticky -- below Header Submenu.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-menu .sub-menu' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu .sub-menu, #ast-fixed-header .ast-below-header-menu .sub-menu a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-color-responsive]','color', '#ast-fixed-header .ast-below-header-menu .sub-menu li:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item.focus > a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-submenu-h-a-bg-color-responsive]','background-color', '#ast-fixed-header .ast-below-header-menu .sub-menu li:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-ancestor.focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:hover > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item:focus > a, #ast-fixed-header .ast-below-header-menu .sub-menu li.current-menu-item.focus > a' );


			// Sticky -- Below Header Content Section.
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-text-color-responsive]','color', '#ast-fixed-header .below-header-user-select, #ast-fixed-header .below-header-user-select .widget,#ast-fixed-header .below-header-user-select .widget-title' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-color-responsive]','color', '#ast-fixed-header .below-header-user-select a, #ast-fixed-header .below-header-user-select .widget a' );
			astra_color_responsive_css('sticky-header', 'astra-settings[sticky-below-header-content-section-link-h-color-responsive]','color', '#ast-fixed-header .below-header-user-select a:hover, #ast-fixed-header .below-header-user-select .widget a:hover' );
		}


	/**
	 * Sticky Above Header background color opacity
	 */
	wp.customize( 'astra-settings[sticky-header-logo-width]', function( setting ) {
		setting.bind( function( logo_width ) {
			if ( logo_width['desktop'] != '' || logo_width['tablet'] != '' || logo_width['mobile'] != '' ) {
				var dynamicStyle = '.site-logo-img .sticky-custom-logo img {max-width: ' + logo_width['desktop'] + 'px;} #masthead .site-logo-img .sticky-custom-logo .astra-logo-svg, .site-logo-img .sticky-custom-logo .astra-logo-svg, .ast-sticky-main-shrink .ast-sticky-shrunk .site-logo-img .astra-logo-svg { width: ' + logo_width['desktop'] + 'px;} @media( max-width: 768px ) { .site-logo-img .sticky-custom-logo img {max-width: ' + logo_width['tablet'] + 'px;} #masthead .site-logo-img .sticky-custom-logo .astra-logo-svg, .site-logo-img .sticky-custom-logo .astra-logo-svg, .ast-sticky-main-shrink .ast-sticky-shrunk .site-logo-img .astra-logo-svg { width: ' + logo_width['tablet'] + 'px;} } @media( max-width: 544px ) { .site-logo-img .sticky-custom-logo img {max-width: ' + logo_width['mobile'] + 'px;} #masthead .site-logo-img .sticky-custom-logo .astra-logo-svg, .site-logo-img .sticky-custom-logo .astra-logo-svg, .ast-sticky-main-shrink .ast-sticky-shrunk .site-logo-img .astra-logo-svg { width: ' + logo_width['mobile'] + 'px;} }'
				astra_add_dynamic_css( 'sticky-header-logo-width', dynamicStyle );
			}
			else{
				wp.customize.preview.send( 'refresh' );
			}
		});
	});

	astra_css( 'astra-settings[header-main-rt-sticky-section-button-text-color]', 'color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button' );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-back-color]', 'background-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button' );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-text-h-color]', 'color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button:hover' );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-back-h-color]', 'background-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button:hover' );
	astra_responsive_spacing( 'astra-settings[header-main-rt-sticky-section-button-padding]','.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button', 'padding', ['top', 'right', 'bottom', 'left' ] );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-border-radius]', 'border-radius', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button', 'px' );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-border-color]', 'border-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button' );
	astra_css( 'astra-settings[header-main-rt-sticky-section-button-border-h-color]', 'border-color', '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button:hover' );

	/**
	 * Button border
	 */
	wp.customize( 'astra-settings[header-main-rt-sticky-section-button-border-size]', function( value ) {
		value.bind( function( border ) {
			if( '' != border.top || '' != border.right || '' != border.bottom || '' != border.left ) {
				var dynamicStyle = '.ast-primary-sticky-header-active .main-header-bar .button-custom-menu-item .ast-custom-button-link .ast-custom-button';
					dynamicStyle += '{';
					dynamicStyle += 'border-top-width:'  + border.top + 'px;';
					dynamicStyle += 'border-right-width:'  + border.right + 'px;';
					dynamicStyle += 'border-left-width:'   + border.left + 'px;';
					dynamicStyle += 'border-bottom-width:'   + border.bottom + 'px;';
					dynamicStyle += 'border-style: solid;';
					dynamicStyle += '}';

				astra_add_dynamic_css( 'header-custom-button-border', dynamicStyle );
			} else {
				wp.customize.preview.send( 'refresh' );
			}
		} );
	} );
} )( jQuery );
