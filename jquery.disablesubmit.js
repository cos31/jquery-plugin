/*
 * jQuery Disable On Submit Plugin
 *
 * Copyright (c) 2012 cos31
 * Dual licensed under the MIT and GPL licenses
 *
 * <code>
 * $(function(){ $.disableSubmit(); });
 * </code>
 */
(function($) { // hide the namespace
	$.fn.disableSubmit = function(settings) {
		this._defaultSettings = {
			afterAnable: true, // restore disable:false
			timeout: 1500,     // 1.5sec if afterAnable:true
			disableList: ':submit, :button, :image, :reset', // jQuery Selecotr String <http://docs.jquery.com/Selectors>
		}
		settings = $.extend(this._defaultSettings, settings);
		$(this).bind("submit",function() {
			var target = $(this).find(settings.disableList).attr('disabled', true);
			if (settings.afterAnable) {
				settimeout(function(){
					target.attr('disbled', true);
				}, settings.timeout);
			}
		});
		return this;
	}
})(jQuery);