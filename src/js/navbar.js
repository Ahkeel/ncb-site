$(document).ready(function() {
	$(".navbar-toggler").click(function() {
		$("#navbar-nav-responsive").addClass("active");
	});

	$(".navbar-nav-close").click(function() {
		$("#navbar-nav-responsive").removeClass("active");
	});

	function cloneNavbar() {
		var navbar = $(".navbar-nav");
		var action_content = $(".navbar-action-content");
		navbar.clone().appendTo("#navbar-nav-responsive");

		$("#navbar-nav-responsive .navbar-nav").removeClass("navbar-nav").addClass("nav");

		action_content.clone().appendTo("#navbar-nav-responsive");

		$("#navbar-nav-responsive .navbar-action-content").removeClass("row").addClass("my-2");

		$("#navbar-nav-responsive .navbar-action-content").children().each(function() {
			$(this).removeClass("col col-6").addClass("p-2");
		});
	}

	cloneNavbar();
});