/*global define*/

define([
    'underscore',
    'backbone',
    'models/artists'
], function (_, Backbone, ArtistsModel) {
    'use strict';

    var ArtistsCollection = Backbone.Collection.extend({
        model: ArtistsModel
    });

    return ArtistsCollection;
});
