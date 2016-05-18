$(document).ready(function(){
	$(".flex-item").hover(function(){
		$(this).find(".about").fadeIn("fast")
	},
	function(){
			$(this).find(".about").fadeOut("fast");
	})
});
