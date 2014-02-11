/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ArtistModel = Backbone.Model.extend({
    	
        defaults: {
        	name: 'Artist Name',
        	description: 'Description',
        	twitter: '',
        	facebook: '',
        	soundcloud: '',
        	lastfm: '',
        	presskitUrl: '',
        	email: '',
        	telephone: ''
        }
    });

    return ArtistModel;
});
