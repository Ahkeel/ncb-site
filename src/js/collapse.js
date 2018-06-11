$(document).ready(function() {
	$('.collapse').on('show.bs.collapse', function () {
		var id = $(this).attr("id");

		$('[href="#' + id + '"] .card-header').removeClass('card-header-inverse');
	});

	$('#accordion .card-header').click(function (e) {
		$("#accordion .card-header").each(function() {
			$(this).addClass("card-header-inverse");
		});
	});
});