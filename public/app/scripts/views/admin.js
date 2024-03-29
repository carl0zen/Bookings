/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AdminView = Backbone.View.extend({
        template: JST['app/scripts/templates/admin.ejs']
    });

    return AdminView;
});
