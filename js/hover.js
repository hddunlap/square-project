$(document).ready(function(){



	$('#block-1').mouseover(function(){
		$(this).children().attr('src', 'img/eye-1-open.jpg');	
	});	
	$('#block-1').mouseout(function(){
		$(this).children().attr('src', 'img/eye-1-closed.jpg');	
	});	

	$('#block-2').mouseover(function(){
		$(this).children().attr('src', 'img/hand-1-open.jpg');	
	});	
	$('#block-2').mouseout(function(){
		$(this).children().attr('src', 'img/hand-1-closed.jpg');	
	});

	$('#block-3').mouseover(function(){
		$(this).children().attr('src', 'img/mouth-1-open.jpg');	
	});	
	$('#block-3').mouseout(function(){
		$(this).children().attr('src', 'img/mouth-1-closed.jpg');	
	});

	$('#block-4').mouseover(function(){
		$(this).children().attr('src', 'img/butterfly-open.jpg');	
	});	
	$('#block-4').mouseout(function(){
		$(this).children().attr('src', 'img/butterfly-closed.jpg');	
	});	

	$('#block-5').mouseover(function(){
		$(this).children().attr('src', 'img/girl-1-open.jpg');	
	});	
	$('#block-5').mouseout(function(){
		$(this).children().attr('src', 'img/girl-1-closed.jpg');	
	});	
		
	$('#block-6').mouseover(function(){
		$(this).children().attr('src', 'img/eye-2-open.jpg');	
	});	
	$('#block-6').mouseout(function(){
		$(this).children().attr('src', 'img/eye-2-closed.jpg');	
	});	
});