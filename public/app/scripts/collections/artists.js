/*global define*/

define([
    'underscore',
    'backbone',
    'models/artist',
    'crossdomain'
], function (_, Backbone, ArtistModel) {
    'use strict';

    var ArtistsCollection = Backbone.Collection.extend({
        url: 'http://localhost:2404/artists',
        model: ArtistModel
    });

    return ArtistsCollection;
});
