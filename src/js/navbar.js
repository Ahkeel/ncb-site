$(document).ready(function() {
	$(".navbar-toggler").click(function() {
		$(".navbar-nav-responsive").addClass("active");
	});

	$(".navbar-nav-close").click(function() {
		$(".navbar-nav-responsive").removeClass("active");
	});

	function cloneNavbar() {
		var profile = $(".navbar-profile");
		var navbar = $(".navbar-nav");
		var action_links = $(".navbar-action-links");

		profile.clone().appendTo(".navbar-nav-responsive");
		$(".navbar-nav-responsive .navbar-profile").removeClass("col-6").addClass("py-2");

		navbar.clone().appendTo(".navbar-nav-responsive");
		$(".navbar-nav-responsive .navbar-nav").removeClass("navbar-nav").addClass("nav");

		action_links.clone().appendTo(".navbar-nav-responsive");
		$(".navbar-nav-responsive .navbar-action-links").removeClass("col-6").addClass("py-4 px-3");
	}

	cloneNavbar();
});