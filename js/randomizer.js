$(document).ready(function(){
	
	var red = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);


	var color = 'rgb(' + red + ',' + blue + ',' + green + ')';

	$('.page').css('background-color', color);
});