$(document).ready(function(){
	//jQuery Llama Mouseover
	$(".flex-item").hover(function(){
		$(this).find(".about").fadeIn("fast")
	},
	function(){
			$(this).find(".about").fadeOut("fast");
	})

});

window.onload = function(){
	//Javascript Home Slider
	var slider = document.getElementById('home-slider');
	var images = slider.getElementsByTagName('img');
	var nextBtn = slider.getElementsByClassName('next')[0];
	var prevBtn = slider.getElementsByClassName('previous')[0];
	var counter = 0;


	function showImage(index){
		for (var i=0; i <images.length; i++){
			images[i].className = 'hide';
			images[index].className = 'active';
		}
	}

	function nextImage(){
		if (counter < images.length -1){
				counter +=1;
		} else {
			counter = 0;
		}
		console.log(counter);
		showImage(counter);
	}

	function prevImage(){
		if(counter > 0){
			counter -= 1;
		} else {
			counter = images.length -1;
		}
		console.log(counter);
		showImage(counter);
	}

	nextBtn.onclick = nextImage;
	prevBtn.onclick = prevImage;

	showImage(counter);
}