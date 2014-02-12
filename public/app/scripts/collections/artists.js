/*global define*/

define([
    'underscore',
    'backbone',
    'models/artist',
    'config'
], function (_, Backbone, ArtistModel, Config) {
    'use strict';
    
    var ArtistsCollection = Backbone.Collection.extend({
        url: Config.serverUrl + '/artists',
        model: ArtistModel
    });

    return ArtistsCollection;
});
