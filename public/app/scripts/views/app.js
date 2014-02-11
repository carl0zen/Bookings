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
        	App.Vent.on('RenderArtists', this.renderArtists, this);

        	this.loadComponents();
        },
        renderArtists: function  () {
        	alert('ar');
        	console.log('app view calling render artists');
        },
        loadComponents: function  () {

        	//Creating Artist Model
        	window.artist = new Artist();
        	//Create Artist Collection

        	window.artistsCollection = new ArtistsCollection();
        	
        	artistsCollection.fetch({
        		success: function  (obj) {
					//console.log(obj.toJSON());
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
