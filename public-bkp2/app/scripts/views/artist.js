define(['backbone'], function(Backbone){
	var ArtistView = Backbone.View.extend({
		defaults:{
			name: 'Artist Name',
			twitter: ''
		},
		render: function(e){
			return this;
		}
	});
});