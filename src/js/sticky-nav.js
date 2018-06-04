$(document).ready(function() {
	var position = 0;
	var stickyNav = $('.sticky-nav');
	var wrapper = $('.sticky-nav-wrapper');

	function getScroll() {
		position = wrapper.offset().top - $(window).scrollTop();
		console.log(position);
		if (position <= 0) {
			stickyNav.addClass("sticky-nav-fixed");
		} else {
			stickyNav.removeClass("sticky-nav-fixed");
		}
	}

	getScroll();
	$(window).scroll(getScroll);
});