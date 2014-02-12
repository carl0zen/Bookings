
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/artist',
    'collections/artists'
], function ($, _,Backbone,JST,Artist,Artists){
    //'use strict';
    console.log('about to create Artists View');

    var ArtistsView = Backbone.View.extend({
        //template: JST['app/scripts/templates/artists.ejs'],
        initialize: {
            //console.log('awesome');
            //console.log('initializing ArtistsView');
        }
    });

    /**
    var ArtistsView = Backbone.View.extend({
        
        template: JST['app/scripts/templates/artists.ejs'],
        initialize:{
            console.log('AppView');
        },
       
        render: function  () {
        	this.$el.html(this.template(this.model.toJSON()));
        	return this;
        }
    }); **/

    return ArtistsView;
});
