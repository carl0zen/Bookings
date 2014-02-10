/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AdminbookingformsView = Backbone.View.extend({
        template: JST['app/scripts/templates/adminBookingForms.ejs']
    });

    return AdminbookingformsView;
});
