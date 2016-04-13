
// Site js object
var Site;

(function ($) {
  'use strict'; 
  
  Site = {
	/**
	 * Lab page
	 *
	 */
	init: function (elt) {
        this.nav();
		this.toggleCSS();
	},
    nav: function(){
        $('nav ul').bind('mouseenter', function(){
            $('nav').addClass('is-open');
        }).bind('mouseleave', function(){
            $('nav').removeClass('is-open');
        });
    },
	toggleCSS: function(){
        var $css = $('link[rel*=stylesheet]');
        var csssheet = $css.attr('href');
        $css.data('href', csssheet);

        $('.no-style').bind('click', function(){
            if(!$css.hasClass('is-off'))
            {
                // turn off
                $('link[rel*=stylesheet]').attr('href', '').addClass('is-off');
                $(this).html('Turn CSS on');
            }
            else {
                // turn back on
                $('link[rel*=stylesheet]').attr('href', $css.data('href')) .removeClass('is-off');
                $(this).html('Turn CSS off');
            }
        });
	}
  };

  // call init function
  window.onload = function(){ Site.init(); }

})(jQuery);

