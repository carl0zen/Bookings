/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AdminloginView = Backbone.View.extend({
        template: JST['app/scripts/templates/adminLogin.ejs']
    });

    return AdminloginView;
});
