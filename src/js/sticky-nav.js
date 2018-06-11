(function($){
    $.fn.onDelayed = function(eventName,delayInMs,callback){
        var _timeout;
        this.on(eventName,function(e){
          if(!!_timeout){ 
              clearTimeout(_timeout);
          }
          _timeout = setTimeout(function(){
              callback(e);
          },delayInMs);
        });
    };
})(jQuery);

$(document).ready(function() {

	var height = $(".sticky-nav").parent().height();
	
	function resizeStickyNav() {
		var width = $(".sticky-nav").parent().width();
		if ($(".sticky-nav-fixed").length) {
        	$(".sticky-nav").parent().css( "min-height", height + "px" );
        	$( ".sticky-nav-fixed" ).css( "width", width + "px" );
		} else {
			$( ".sticky-nav" ).css( "width", "100%" );
        	$(".sticky-nav").parent().css( "height", "auto" );
		}
	}

    $(window).onDelayed('resize',100,function() {
		height = $(".sticky-nav").parent().height();
        resizeStickyNav();
    });

	var position = 0;
	var stickyNav = $('.sticky-nav');
	var wrapper = $('.sticky-nav-wrapper');

	function getScroll() {
		position = wrapper.offset().top - $(window).scrollTop();
		if (position <= 0) {
			stickyNav.addClass("sticky-nav-fixed");
		} else {
			stickyNav.removeClass("sticky-nav-fixed");
		}
		resizeStickyNav();
	}

	getScroll();
	$(window).scroll(getScroll);
});