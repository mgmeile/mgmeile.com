/**
 * @package 	WordPress
 * @subpackage 	Printpress
 * @version		1.0.0
 * 
 * Theme Content Composer Schortcodes Extend
 * Created by CMSMasters
 * 
 */



/**
 * Blog Extend
 */

var cmsmasters_blog_new_fields = {};


for (var id in cmsmastersShortcodes.cmsmasters_blog.fields) {
	if (id === 'layout') {
		delete cmsmastersShortcodes.cmsmasters_blog.fields[id]['choises']['timeline'];
		
		
		cmsmasters_blog_new_fields[id] = cmsmastersShortcodes.cmsmasters_blog.fields[id];
	} else if (id === 'layout_mode') {
		cmsmastersShortcodes.cmsmasters_blog.fields[id]['choises']['puzzle'] = cmsmasters_theme_shortcodes.blog_field_layout_mode_puzzle;
		
		
		cmsmasters_blog_new_fields[id] = cmsmastersShortcodes.cmsmasters_blog.fields[id];
	} else {
		cmsmasters_blog_new_fields[id] = cmsmastersShortcodes.cmsmasters_blog.fields[id];
	}
}


cmsmastersShortcodes.cmsmasters_blog.fields = cmsmasters_blog_new_fields;


/**
 * Counters Extend
 */

var cmsmasters_counters_new_fields = {};


for (var id in cmsmastersShortcodes.cmsmasters_counters.fields) {

	if (id === 'icon_size') {
		cmsmastersShortcodes.cmsmasters_counters.fields[id]['def'] = '50';
		
		
		cmsmasters_counters_new_fields[id] = cmsmastersShortcodes.cmsmasters_counters.fields[id];
	} else {
		cmsmasters_counters_new_fields[id] = cmsmastersShortcodes.cmsmasters_counters.fields[id];
	}
}


cmsmastersShortcodes.cmsmasters_counters.fields = cmsmasters_counters_new_fields;


var cmsmasters_icon_list_items_new_fields = {};


for (var id in cmsmastersShortcodes.cmsmasters_icon_list_items.fields) {

		if(id == "border_width") {
		cmsmastersShortcodes.cmsmasters_icon_list_items.fields[id]['def'] = '3';
		
			cmsmasters_icon_list_items_new_fields[id] = cmsmastersShortcodes.cmsmasters_icon_list_items.fields[id];
		} else {
			cmsmasters_icon_list_items_new_fields[id] = cmsmastersShortcodes.cmsmasters_icon_list_items.fields[id];
		}
}


cmsmastersShortcodes.cmsmasters_icon_list_items.fields = cmsmasters_icon_list_items_new_fields;


/**
 * Image Extend
 */

var cmsmasters_image_new_fields = {};


for (var id in cmsmastersShortcodes.cmsmasters_image.fields) {
	if (id === 'animation') {
		cmsmasters_image_new_fields['box_shadow'] = { 
			type : 		'input', 
			title : 	cmsmasters_shortcodes.column_field_box_shadow_title, 
			descr : 	cmsmasters_shortcodes.column_field_box_shadow_descr + ' ' + cmsmasters_shortcodes.value_zero + ". <br /><span>" + cmsmasters_shortcodes.note + ' ' + cmsmasters_shortcodes.box_shadow_descr_note_1 + " <br />" + cmsmasters_shortcodes.box_shadow_descr_note_2 + " <a href=\"https://www.w3schools.com/cssref/css3_pr_box-shadow.asp\" target=\"_blank\">" + cmsmasters_shortcodes.box_shadow_descr_note_3 + "</a>. <br />" + cmsmasters_shortcodes.box_shadow_descr_note_4, 
			def : 		'', 
			required : 	false, 
			width : 	'half' 
		};
		
		
		cmsmasters_image_new_fields[id] = cmsmastersShortcodes.cmsmasters_image.fields[id];
	} else {
		cmsmasters_image_new_fields[id] = cmsmastersShortcodes.cmsmasters_image.fields[id];
	}
}


cmsmastersShortcodes.cmsmasters_image.fields = cmsmasters_image_new_fields;


/**
 * Posts Slider Extend
 */

var cmsmasters_posts_slider_new_fields = {};


for (var id in cmsmastersShortcodes.cmsmasters_posts_slider.fields) {
	if (id === 'columns') { 
		cmsmastersShortcodes.cmsmasters_posts_slider.fields[id]['choises'] = {
			'1' : 	'1', 
			'2' : 	'2', 
			'3' : 	'3', 
			'4' : 	'4',
			'5' : 	'5' 
		};
		
		
		cmsmasters_posts_slider_new_fields[id] = cmsmastersShortcodes.cmsmasters_posts_slider.fields[id];
	} else {
		cmsmasters_posts_slider_new_fields[id] = cmsmastersShortcodes.cmsmasters_posts_slider.fields[id];
	}
}


cmsmastersShortcodes.cmsmasters_posts_slider.fields = cmsmasters_posts_slider_new_fields;



/**
 * Profiles Extend
 */

var cmsmasters_profiles_new_fields = {};


for (var id in cmsmastersShortcodes.cmsmasters_profiles.fields) {
	if (id === 'layout') { 
		cmsmasters_profiles_new_fields['metadata_grid'] = { 
			type : 		'checkbox', 
			title : 	cmsmasters_shortcodes.metadata, 
			descr : 	cmsmasters_theme_shortcodes.profile_field_metadata_descr, 
			def : 		'position,excerpt,soc_ico', 
			required : 	true, 
			width : 	'half', 
			choises : { 
						'position' : 	cmsmasters_theme_shortcodes.choice_position, 
						'excerpt' : 	cmsmasters_shortcodes.choice_excerpt, 
						'soc_ico' : 	cmsmasters_theme_shortcodes.choice_soc_ico
			}, 
		};
		
		
		cmsmasters_profiles_new_fields[id] = cmsmastersShortcodes.cmsmasters_profiles.fields[id];
	} else {
		cmsmasters_profiles_new_fields[id] = cmsmastersShortcodes.cmsmasters_profiles.fields[id];
	}
}


cmsmastersShortcodes.cmsmasters_profiles.fields = cmsmasters_profiles_new_fields;