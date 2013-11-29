var App = App || {};
App.Router = Backbone.Router.extend({
	routes: {
	    '': 'index',
	    'show': 'show'
	},
	index: function(){
	    $(document.body).append("Index route has been called..");
	},
	show: function(){
	    $(document.body).append("Show route has been called..");
	},
});