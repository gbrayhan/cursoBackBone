$(document).ready(function(){
	console.log('main.js loaded');

	window.collections.articles = new Puls3.Collections.Articles();
	
	window.collections.articles.on('add',function(miModelo){
		console.log('se ha agregado ',miModelo.toJSON());
	
	});
	
	
	
	window.collections.articles.fetch();
});
