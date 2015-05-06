$(document).ready(function(){
	var bxslider = $('.bxslider').bxSlider({
		mode: 'fade',
		adaptiveHeight: true,
		captions: true
	});

	$.ajax({
		url: 'http://seq-front-end-assessment.s3-website-us-west-2.amazonaws.com/catalog.json',
		type: 'GET',
		dataType: 'json',
		crossDomain: true 
	}).done(function(res){
		res.products.forEach(function(item){
			$('.bxslider').append('<a href="#'+item.id+'" class="open-popup-link"><li><img src="../images/mb_slideshow_'+item.id+'.png"/></li></a>');
			$('body').append('<div id="'+item.id+'" class="popup mfp-hide"><p>Name: '+item.name+'</p></br><p>Description: '+item.description+'</p></div>')
		})

		bxslider.reloadSlider();
		$('.open-popup-link').magnificPopup({
			type:'inline',
			midClick: true 
		});

	}).fail(function(res){
		alert("Something funky happened. Please visit later. Thanks for your patience");

	})







});