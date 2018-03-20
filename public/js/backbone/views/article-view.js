
Puls3.Views.Article = Backbone.View.extend({
	tagName: 'article',
	className: 'post', // si no estan seria un simple div
	initialize: function(){
		//debugger;
		this.template = _.template($('#article-template').html());

	},
	render : function(){

		var data = this.model.toJSON();
		//Junto Data con template
		var html = this.template(data);

		this.$el.html(html);
	}

});
