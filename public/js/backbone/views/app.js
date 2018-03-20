Puls3.Views.App = Backbone.View.extend({
	events :{
		"click .publicar" : "showForm",
		"submit form" : "createArticle"
	},
	initialize : function($el){
		this.$el = $el;

	},
	showForm:function(){
		this.$el.find('form').show();
	},
	createArticle : function(evento){
		evento.preventDefault();

		var titulo = $('input[name=titulo]').val();
		var autor = $('input[name=autor]').val();
		var tag = $('input[name=tag]').val();

		window.collections.articles.add({"title": titulo});

	}

});