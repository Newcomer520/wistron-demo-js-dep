var angular = require('angular');
var styles = require('./sass/main.scss');
var app = require('./namespace').app;
var $ = require('jquery');
require('./controllers/main-controller.js');

$(document).ready(function() {
	console.log('hello angular');
	angular.bootstrap(document.body, [app.name]);
});