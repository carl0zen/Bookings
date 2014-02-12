/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'routes/app',
    'templates',
    'models/artist',
    'collections/artists',
    'views/searchEngine'
], function ($, _, Backbone, Router, JST, Artist, ArtistsCollection, SearchEngine) {
    'use strict';

    var AppView = Backbone.View.extend({
        template: JST['app/scripts/templates/app.ejs'],
        initialize: function(){
        	App.Vent.bind('LoadAppView', this.loadAppView);
        	App.Vent.bind('RenderArtist', this.renderArtist);
        	App.Vent.bind('RenderArtists', this.renderArtists);
        	App.Vent.bind('CreateArtist', this.CreateArtist);
        },
        loadAppView: function() {
        	$('body').css('background','black');
        },
        renderArtist: function(id) {
        	console.log('Rendering single artist...' + id);
        	//fetch the correct model
        },
        renderArtists: function() {
        	console.log('app view calling render artists');
        	// fetch all
        },
        loadComponents: function() {

        	//Creating Artist Model
        	window.artist = new Artist();
        	//Create Artist Collection

        	window.artistsCollection = new ArtistsCollection();
        	
        	artistsCollection.fetch({
        		success: function  (obj) {
					console.log(obj.toJSON());
        		}
        	});
        	//console.log(artistsCollection.toJSON());


        	//Create search engine view
        	 window.searchEngine = new SearchEngine({collection:artistsCollection});

        
        },
        createModels: function  () {
        	// Create 
        },
    });

    return AppView;
});
