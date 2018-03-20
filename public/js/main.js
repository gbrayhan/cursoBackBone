$(document).ready(function(){
	console.log('main.js loaded');

	window.views.app = new Puls3.Views.App($('body'));


	window.collections.articles = new Puls3.Collections.Articles();
	
	window.collections.articles.on('add',function(miModelo){
		//console.log('se ha agregado ',miModelo.toJSON());
		//agregamos las vistas
		var view = new Puls3.Views.Article({model:miModelo});

		view.render();
		view.$el.appendTo('.posts');

	
	});
	
	
	window.collections.articles.fetch();
});
