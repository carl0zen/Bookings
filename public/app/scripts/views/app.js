/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'templates',
    'views/artists'
], function ($, _, Backbone, Router, JST, ArtistsView) {
    'use strict';

    var AppView = Backbone.View.extend({
        template: JST['app/scripts/templates/app.ejs'],
        initialize: function(){
        	App.Vent.bind('LoadIndex', this.loadIndex);
        	App.Vent.bind('RenderArtist', this.renderArtist);
        	App.Vent.bind('RenderArtists', this.renderArtists);
        	App.Vent.bind('CreateArtist', this.CreateArtist);
        },
        loadIndex: function() {

        	$('body').css('background','black');
        },
        renderArtist: function(id) {
        	console.log('Rendering single artist...' + id);
        	//fetch the correct model
        },
        renderArtists: function() {
        	console.log('app view calling render artists');
        	//Creating Artists View

            var artistsView = new ArtistsView();
            //artistsView.render();
            
        },
        loadComponents: function() {

        	


        	//Create search engine view
        	 window.searchEngine = new SearchEngine({collection:artistsCollection});

        
        },
        createModels: function  () {
        	// Create 
        },
    });

    return AppView;
});
