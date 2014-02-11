/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var SearchengineModel = Backbone.Model.extend({
        defaults: {
        	genre: 'All',
        	artistName: ''
        }
    });

    return SearchengineModel;
});
